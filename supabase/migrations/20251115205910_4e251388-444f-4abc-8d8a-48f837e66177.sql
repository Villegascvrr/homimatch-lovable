-- Drop existing restrictive RLS policies on waiting_list
DROP POLICY IF EXISTS "Users can insert their own data" ON public.waiting_list;
DROP POLICY IF EXISTS "Users can view their own data" ON public.waiting_list;

-- Create new public policies for waiting list (no auth required)
-- Allow anyone to insert into waiting list (for registration without auth)
CREATE POLICY "Anyone can insert into waiting list"
  ON public.waiting_list
  FOR INSERT
  WITH CHECK (true);

-- Allow anyone to read waiting list (needed to check for duplicate emails)
CREATE POLICY "Anyone can read waiting list"
  ON public.waiting_list
  FOR SELECT
  USING (true);