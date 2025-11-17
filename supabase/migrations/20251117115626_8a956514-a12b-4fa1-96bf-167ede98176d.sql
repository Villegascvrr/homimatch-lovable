-- Remove foreign key constraint that prevents anonymous inserts to waiting_list
-- The constraint is blocking inserts because anon users can't reference auth.users

ALTER TABLE public.waiting_list 
DROP CONSTRAINT IF EXISTS waiting_list_auth_user_id_fkey;

-- Add a comment to document why there's no foreign key
COMMENT ON COLUMN public.waiting_list.auth_user_id IS 
'Optional reference to auth.users.id. No foreign key constraint to allow anonymous signups.';