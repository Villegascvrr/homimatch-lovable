-- CRITICAL SECURITY FIXES

-- Fix 1: Add SET search_path to check_email_exists function to prevent privilege escalation
DROP FUNCTION IF EXISTS public.check_email_exists(text);

CREATE OR REPLACE FUNCTION public.check_email_exists(email_to_check text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  user_count int;
BEGIN
  -- Check if email exists in auth.users
  SELECT count(*) INTO user_count 
  FROM auth.users 
  WHERE email = email_to_check;
  RETURN user_count > 0;
END;
$$;

-- Fix 2: Create secure function to check waiting list emails without exposing data
CREATE OR REPLACE FUNCTION public.email_exists_in_waiting_list(email_to_check text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM waiting_list WHERE email = lower(email_to_check)
  );
END;
$$;

-- Fix 3: Remove public read access to waiting_list table (CRITICAL PII EXPOSURE)
DROP POLICY IF EXISTS "Anyone can read waiting list" ON public.waiting_list;

-- Only allow INSERT for signup (keep existing policy)
-- Service role (admins) can still read all via bypass RLS

-- Fix 4: Add rate limiting infrastructure
CREATE TABLE IF NOT EXISTS public.signup_rate_limit (
  ip_address text PRIMARY KEY,
  attempt_count integer DEFAULT 1,
  first_attempt_at timestamp with time zone DEFAULT now(),
  last_attempt_at timestamp with time zone DEFAULT now(),
  blocked_until timestamp with time zone
);

ALTER TABLE public.signup_rate_limit ENABLE ROW LEVEL SECURITY;

-- Create function to check and enforce rate limits
CREATE OR REPLACE FUNCTION public.check_signup_rate_limit(client_ip text)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  attempt_record record;
  max_attempts int := 10; -- 10 attempts per hour
  time_window interval := interval '1 hour';
  block_duration interval := interval '1 hour';
BEGIN
  -- Check if IP is currently blocked
  SELECT * INTO attempt_record
  FROM signup_rate_limit
  WHERE ip_address = client_ip
  AND blocked_until > now();
  
  IF FOUND THEN
    RETURN jsonb_build_object(
      'allowed', false,
      'reason', 'Too many attempts. Please try again later.',
      'blocked_until', attempt_record.blocked_until
    );
  END IF;
  
  -- Check recent attempts within time window
  SELECT * INTO attempt_record
  FROM signup_rate_limit
  WHERE ip_address = client_ip
  AND first_attempt_at > now() - time_window;
  
  IF FOUND THEN
    IF attempt_record.attempt_count >= max_attempts THEN
      -- Block the IP
      UPDATE signup_rate_limit
      SET blocked_until = now() + block_duration,
          last_attempt_at = now()
      WHERE ip_address = client_ip;
      
      RETURN jsonb_build_object(
        'allowed', false,
        'reason', 'Too many signup attempts. Please try again in 1 hour.',
        'blocked_until', now() + block_duration
      );
    ELSE
      -- Increment attempt count
      UPDATE signup_rate_limit
      SET attempt_count = attempt_count + 1,
          last_attempt_at = now()
      WHERE ip_address = client_ip;
      
      RETURN jsonb_build_object(
        'allowed', true,
        'attempts_remaining', max_attempts - attempt_record.attempt_count - 1
      );
    END IF;
  ELSE
    -- First attempt in the time window or expired window
    INSERT INTO signup_rate_limit (ip_address, attempt_count, first_attempt_at, last_attempt_at)
    VALUES (client_ip, 1, now(), now())
    ON CONFLICT (ip_address) DO UPDATE
    SET attempt_count = 1,
        first_attempt_at = now(),
        last_attempt_at = now(),
        blocked_until = null;
    
    RETURN jsonb_build_object(
      'allowed', true,
      'attempts_remaining', max_attempts - 1
    );
  END IF;
END;
$$;