/**
 * Supabase Configuration
 * 
 * Este archivo centraliza la configuración de Supabase.
 * Las credenciales se obtienen de las variables de entorno.
 * 
 * Para configurar:
 * 1. Ve a tu proyecto de Supabase
 * 2. Copia la URL y la Anon Key
 * 3. Configúralas en Lovable Cloud -> Secrets:
 *    - NEXT_PUBLIC_SUPABASE_URL
 *    - NEXT_PUBLIC_SUPABASE_ANON_KEY
 */

export const SUPABASE_CONFIG = {
  url: import.meta.env.VITE_SUPABASE_URL || '',
  anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || '',
};

// Validar que las credenciales estén configuradas
if (!SUPABASE_CONFIG.url || !SUPABASE_CONFIG.anonKey) {
  console.warn(
    '⚠️ Las credenciales de Supabase no están configuradas. ' +
    'Por favor, configura VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en Lovable Cloud -> Secrets'
  );
}
