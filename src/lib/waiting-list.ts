import { supabase } from '@/integrations/supabase/client';

/**
 * Verifica si un email ya existe en la lista de espera
 */
export async function checkEmailExists(email: string): Promise<boolean> {
  try {
    const { data, error } = await supabase
      .from('waiting_list')
      .select('email')
      .eq('email', email.toLowerCase())
      .maybeSingle();

    if (error) {
      console.error('Error checking email:', error);
      return false;
    }

    return !!data;
  } catch (error) {
    console.error('Exception checking email:', error);
    return false;
  }
}

/**
 * Agrega un usuario a la lista de espera
 * No requiere autenticación, solo captura datos para la lista de espera
 */
export async function addToWaitingList(data: {
  email: string;
  firstName: string;
  lastName: string;
}) {
  try {
    // Primero verificar si el email ya existe
    const exists = await checkEmailExists(data.email);
    if (exists) {
      return { 
        success: true, 
        alreadyExists: true,
        message: 'Este email ya está registrado en nuestra lista de espera' 
      };
    }

    // Insertar nuevo registro
    const { data: result, error } = await supabase
      .from('waiting_list')
      .insert({
        email: data.email.toLowerCase(),
        first_name: data.firstName,
        last_name: data.lastName,
        auth_user_id: null, // No usamos auth real
      })
      .select()
      .single();

    if (error) {
      console.error('Error adding to waiting list:', error);
      return { success: false, error };
    }

    return { success: true, data: result, alreadyExists: false };
  } catch (error) {
    console.error('Exception adding to waiting list:', error);
    return { success: false, error };
  }
}
