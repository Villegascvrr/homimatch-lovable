-- Create waiting_list table for capturing interested users during maintenance phase
CREATE TABLE IF NOT EXISTS public.waiting_list (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,
  ciudad TEXT,
  universidad TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(email)
);

-- Enable Row Level Security
ALTER TABLE public.waiting_list ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to insert their own data
CREATE POLICY "Users can insert their own data"
  ON public.waiting_list
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = auth_user_id);

-- Allow authenticated users to view their own data
CREATE POLICY "Users can view their own data"
  ON public.waiting_list
  FOR SELECT
  TO authenticated
  USING (auth.uid() = auth_user_id);

-- Create indexes for faster lookups
CREATE INDEX IF NOT EXISTS waiting_list_email_idx ON public.waiting_list(email);
CREATE INDEX IF NOT EXISTS waiting_list_auth_user_id_idx ON public.waiting_list(auth_user_id);