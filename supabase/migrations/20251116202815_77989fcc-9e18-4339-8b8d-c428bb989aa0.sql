-- Fix RLS policies - ensure they are PERMISSIVE to actually grant access

-- === WAITING_LIST TABLE ===
-- Drop all existing policies
DROP POLICY IF EXISTS "Public can insert into waiting list" ON public.waiting_list;
DROP POLICY IF EXISTS "Deny public select on waiting list" ON public.waiting_list;
DROP POLICY IF EXISTS "Deny all updates on waiting list" ON public.waiting_list;
DROP POLICY IF EXISTS "Deny all deletes on waiting list" ON public.waiting_list;

-- Create PERMISSIVE policy to allow public inserts
CREATE POLICY "Public can insert into waiting list"
ON public.waiting_list
AS PERMISSIVE
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- No SELECT, UPDATE, or DELETE policies = default deny for those operations
-- Service role can still access via RLS bypass

-- === PROFILES TABLE ===
-- Drop existing policies and recreate as PERMISSIVE
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can delete own profile" ON public.profiles;

CREATE POLICY "Users can view own profile"
ON public.profiles
AS PERMISSIVE
FOR SELECT
TO authenticated
USING (auth.uid() = auth_user_id);

CREATE POLICY "Users can update own profile"
ON public.profiles
AS PERMISSIVE
FOR UPDATE
TO authenticated
USING (auth.uid() = auth_user_id)
WITH CHECK (auth.uid() = auth_user_id);

CREATE POLICY "Users can insert own profile"
ON public.profiles
AS PERMISSIVE
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = auth_user_id);

CREATE POLICY "Users can delete own profile"
ON public.profiles
AS PERMISSIVE
FOR DELETE
TO authenticated
USING (auth.uid() = auth_user_id);

-- === SIGNUP_RATE_LIMIT TABLE ===
-- This table should only be accessible via SECURITY DEFINER functions
-- Drop the restrictive policy and keep it fully locked (no policies = no access)
DROP POLICY IF EXISTS "No direct access to rate limit table" ON public.signup_rate_limit;