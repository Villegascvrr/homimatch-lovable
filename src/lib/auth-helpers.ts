import { supabase } from '@/integrations/supabase/client';

/**
 * Helper para verificar si un email ya existe en la base de datos
 * Usa función segura de base de datos para prevenir exposición de datos
 */
export const checkEmailExists = async (email: string): Promise<boolean> => {
  try {
    const { data, error } = await supabase.rpc('email_exists_in_waiting_list', {
      email_to_check: email.toLowerCase()
    });
    
    if (error) {
      console.error('Error checking email exists:', error);
      return false;
    }
    
    return data === true;
  } catch (error) {
    console.error('Error in checkEmailExists:', error);
    return false;
  }
};

/**
 * Helper para autenticación con Google OAuth
 */
export const signInWithGoogleOAuth = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/maintenance`
    }
  });

  if (error) {
    console.error('Error during Google OAuth:', error);
    throw error;
  }

  return data;
};

/**
 * Helper para verificar si hay una sesión guardada
 */
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
