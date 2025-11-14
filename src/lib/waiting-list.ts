import { supabase } from '@/integrations/supabase/client';

/**
 * Agrega un usuario a la lista de espera después del registro
 * NOTA: Requiere que la tabla waiting_list esté creada en Supabase
 */
export async function addToWaitingList(data: {
  authUserId: string;
  email: string;
  firstName?: string;
  lastName?: string;
  ciudad?: string;
  universidad?: string;
}) {
  try {
    // Por ahora solo logueamos - la tabla se creará manualmente en Supabase
    console.log('Usuario agregado a la waiting list:', {
      auth_user_id: data.authUserId,
      email: data.email,
      first_name: data.firstName,
      last_name: data.lastName,
    });

    // TODO: Descomentar cuando la tabla waiting_list esté creada
    // const { data: result, error } = await supabase
    //   .from('waiting_list')
    //   .insert({
    //     auth_user_id: data.authUserId,
    //     email: data.email,
    //     first_name: data.firstName,
    //     last_name: data.lastName,
    //     ciudad: data.ciudad,
    //     universidad: data.universidad,
    //   })
    //   .select()
    //   .single();

    // if (error) {
    //   console.error('Error adding to waiting list:', error);
    //   return { success: false, error };
    // }

    return { success: true, data: null };
  } catch (error) {
    console.error('Exception adding to waiting list:', error);
    return { success: false, error };
  }
}
