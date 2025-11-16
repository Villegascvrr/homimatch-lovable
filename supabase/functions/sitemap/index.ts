import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Lista de ciudades - debe coincidir con src/data/seoCities.ts
const seoCities = [
  "madrid", "barcelona", "sevilla", "granada", "pamplona", "valencia", 
  "teruel", "albacete", "alicante", "almeria", "badajoz", "bilbao",
  "a-coruna", "burgos", "caceres", "cadiz", "castellon", "ciudad-real",
  "cordoba", "cuenca", "girona", "guadalajara", "huelva", "huesca",
  "jaen", "leon", "lleida", "logrono", "lugo", "malaga", "murcia",
  "ourense", "oviedo", "palencia", "las-palmas", "pontevedra",
  "salamanca", "san-sebastian", "santander", "segovia", "soria",
  "tarragona", "santa-cruz-de-tenerife", "toledo", "valladolid",
  "vitoria", "zamora", "zaragoza"
];

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const baseUrl = "https://homimatch.com";
    const currentDate = new Date().toISOString().split('T')[0];

    // Construir el XML del sitemap
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/register</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/signin</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/matching</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/companero-de-piso</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/privacy</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${baseUrl}/terms</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${baseUrl}/cookies</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>`;

    // Añadir todas las ciudades
    for (const citySlug of seoCities) {
      sitemap += `
  <url>
    <loc>${baseUrl}/companero-de-piso/${citySlug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    }

    sitemap += `
</urlset>`;

    return new Response(sitemap, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600', // Cache por 1 hora
      },
    });

  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new Response(JSON.stringify({ error: String(error) }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
