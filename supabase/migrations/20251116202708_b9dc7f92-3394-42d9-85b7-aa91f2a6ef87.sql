-- Comprehensive security lockdown for waiting_list table

-- Drop any existing policies
DROP POLICY IF EXISTS "Anyone can insert into waiting list" ON public.waiting_list;
DROP POLICY IF EXISTS "Anyone can read waiting list" ON public.waiting_list;

-- Recreate INSERT policy (only operation allowed for public)
CREATE POLICY "Public can insert into waiting list"
ON public.waiting_list
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Explicitly DENY all SELECT operations to public
-- Only service role (admins) can read via RLS bypass
CREATE POLICY "Deny public select on waiting list"
ON public.waiting_list
FOR SELECT
TO anon, authenticated
USING (false);

-- Explicitly DENY all UPDATE operations
CREATE POLICY "Deny all updates on waiting list"
ON public.waiting_list
FOR UPDATE
TO anon, authenticated
USING (false)
WITH CHECK (false);

-- Explicitly DENY all DELETE operations
CREATE POLICY "Deny all deletes on waiting list"
ON public.waiting_list
FOR DELETE
TO anon, authenticated
USING (false);

-- Fix profiles table - add explicit DELETE policy
CREATE POLICY "Users can delete own profile"
ON public.profiles
FOR DELETE
TO authenticated
USING (auth.uid() = auth_user_id);