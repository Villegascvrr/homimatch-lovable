import { supabase } from '@/integrations/supabase/client';

/**
 * Helper para verificar si un email ya existe en la base de datos
 * Nota: En la versión simplificada, no hay tabla de profiles, 
 * así que verificamos directamente en auth.users
 */
export const checkEmailExists = async (email: string): Promise<boolean> => {
  try {
    // Intentar buscar en waiting_list primero
    const { data, error } = await supabase
      .from('waiting_list')
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

/**
 * Helper para autenticación con Google OAuth
 */
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
