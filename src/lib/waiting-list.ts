import { supabase } from '@/integrations/supabase/client';

/**
 * Verifica si un email ya existe en la lista de espera
 * Usa una función segura de base de datos para prevenir exposición de datos
 */
export async function checkEmailExists(email: string): Promise<boolean> {
  try {
    const { data, error } = await supabase.rpc('email_exists_in_waiting_list', {
      email_to_check: email.toLowerCase()
    });

    if (error) {
      console.error('Error checking email:', error);
      return false;
    }

    return data === true;
  } catch (error) {
    console.error('Exception checking email:', error);
    return false;
  }
}

/**
 * Verifica el rate limiting antes de permitir registro
 * Retorna un objeto con información sobre si está permitido
 */
export async function checkRateLimit(): Promise<{
  allowed: boolean;
  reason?: string;
  attemptsRemaining?: number;
}> {
  try {
    // Obtener IP del cliente (en producción, esto debería venir del servidor)
    // Por ahora usamos un identificador de sesión del navegador
    let clientId = localStorage.getItem('signup_client_id');
    if (!clientId) {
      clientId = crypto.randomUUID();
      localStorage.setItem('signup_client_id', clientId);
    }

    const { data, error } = await supabase.rpc('check_signup_rate_limit', {
      client_ip: clientId
    });

    if (error) {
      console.error('Error checking rate limit:', error);
      return { allowed: true }; // En caso de error, permitir el registro
    }

    // Parsear la respuesta JSONB
    const result = data as { allowed: boolean; reason?: string; attempts_remaining?: number };

    return {
      allowed: result.allowed,
      reason: result.reason,
      attemptsRemaining: result.attempts_remaining
    };
  } catch (error) {
    console.error('Exception checking rate limit:', error);
    return { allowed: true }; // En caso de error, permitir el registro
  }
}

/**
 * Agrega un usuario a la lista de espera
 * No requiere autenticación, solo captura datos para la lista de espera
 * Incluye protección de rate limiting
 */
export async function addToWaitingList(data: {
  email: string;
  firstName: string;
  lastName: string;
}) {
  try {
    // Primero verificar rate limiting
    const rateLimitCheck = await checkRateLimit();
    if (!rateLimitCheck.allowed) {
      return {
        success: false,
        error: {
          message: rateLimitCheck.reason || 'Demasiados intentos. Por favor, intenta más tarde.'
        }
      };
    }

    // Verificar si el email ya existe
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
        auth_user_id: null,
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
