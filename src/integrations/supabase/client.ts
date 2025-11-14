
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';
import { SUPABASE_CONFIG } from '@/lib/supabase-config';

export const supabase = createClient<Database>(
  SUPABASE_CONFIG.url,
  SUPABASE_CONFIG.anonKey
);

export const signInWithGoogleOAuth = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/?loggedIn=true`
    }
  });

  if (error) {
    console.error('Error during Google OAuth:', error);
    throw error;
  }

  return data;
};

export const hasStoredSession = (): boolean => {
  try {
    const sessionStr = localStorage.getItem('homi-auth-session');
    if (!sessionStr) return false;
    
    const sessionData = JSON.parse(sessionStr);
    if (!sessionData.expires_at) return false;
    
    const isExpired = new Date(sessionData.expires_at * 1000) < new Date();
    return !isExpired;
  } catch (error) {
    console.error('Error checking stored session:', error);
    return false;
  }
};

export const checkEmailExists = async (email: string): Promise<boolean> => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('email')
      .eq('email', email)
      .maybeSingle();
    
    if (error) {
      console.error('Error checking email exists:', error);
      return false;
    }
    
    return data !== null;
  } catch (error) {
    console.error('Error in checkEmailExists:', error);
    return false;
  }
};
