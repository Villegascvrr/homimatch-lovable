/**
 * Supabase Configuration
 * 
 * Este archivo centraliza la configuración de Supabase.
 * 
 * IMPORTANTE: Para usar tu propio proyecto de Supabase:
 * 1. Ve a tu proyecto de Supabase
 * 2. Copia la URL y la Anon Key
 * 3. Configúralas en Lovable Cloud -> Secrets:
 *    - VITE_SUPABASE_URL
 *    - VITE_SUPABASE_ANON_KEY
 * 
 * Mientras tanto, usa las credenciales temporales como fallback
 */

// Credenciales temporales (reemplazar con las tuyas en Lovable Cloud -> Secrets)
const FALLBACK_URL = "https://salayaazmrghyqjddagm.supabase.co";
const FALLBACK_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhbGF5YWF6bXJnaHlxamRkYWdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3MTIwNTUsImV4cCI6MjA1OTI4ODA1NX0.9gj_r8FTvbq_DuE4Bw7O-gP2GV8dbemQeUwd4Mwh9to";

export const SUPABASE_CONFIG = {
  url: import.meta.env.VITE_SUPABASE_URL || FALLBACK_URL,
  anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || FALLBACK_ANON_KEY,
};

// Avisar si se están usando las credenciales de fallback
if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
  console.info(
    '📋 Usando credenciales temporales de Supabase. ' +
    'Para usar tu propio proyecto, configura VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en Lovable Cloud -> Secrets'
  );
}
