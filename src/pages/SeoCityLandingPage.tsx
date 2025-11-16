import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CityLandingTemplate } from "@/components/seo/CityLandingTemplate";
import { getCityBySlug } from "@/data/seoCities";

const SeoCityLandingPage = () => {
  const { city: citySlug } = useParams<{ city: string }>();
  
  const cityData = citySlug ? getCityBySlug(citySlug) : undefined;

  if (!cityData) {
    return <Navigate to="/companero-de-piso" replace />;
  }

  // JSON-LD para LocalBusiness (SEO Local)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `HomiMatch ${cityData.name}`,
    "alternateName": "Homi",
    "description": `Encuentra compañeros de piso en ${cityData.name}. Conecta con personas afines y comparte piso con total confianza.`,
    "url": `https://homimatch.com/companero-de-piso/${cityData.slug}`,
    "telephone": "+34-XXX-XXX-XXX",
    "email": "hi@homimatch.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityData.name,
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": cityData.name,
      "longitude": cityData.name
    },
    "areaServed": {
      "@type": "City",
      "name": cityData.name
    },
    "priceRange": "Gratis"
  };

  // JSON-LD para Organization (SEO)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HomiMatch",
    "alternateName": "Homi",
    "url": "https://homimatch.com",
    "logo": "https://homimatch.com/lovable-uploads/e5ed243f-ce37-4556-9a8d-2c8ca65a01a5.png",
    "sameAs": [
      "https://www.instagram.com/homimatch"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "hi@homimatch.com",
        "areaServed": "ES",
        "availableLanguage": "es"
      }
    ]
  };

  // JSON-LD para Breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://homimatch.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "España",
        "item": "https://homimatch.com/companero-de-piso"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": cityData.name,
        "item": `https://homimatch.com/companero-de-piso/${cityData.slug}`
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{cityData.metaTitle}</title>
        <meta name="description" content={cityData.metaDescription} />
        <meta name="keywords" content={`homi, homi app, homi compañeros de piso, homi alquiler, homi piso, compañero de piso ${cityData.name}, compartir piso ${cityData.name}`} />
        <link rel="canonical" href={`https://homimatch.com/companero-de-piso/${cityData.slug}`} />
        <link rel="alternate" hrefLang="es-es" href={`https://homimatch.com/companero-de-piso/${cityData.slug}`} />
        <link rel="alternate" hrefLang="es" href={`https://homimatch.com/companero-de-piso/${cityData.slug}`} />
        <link rel="alternate" hrefLang="x-default" href="https://homimatch.com" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={cityData.metaTitle} />
        <meta property="og:description" content={cityData.metaDescription} />
        <meta property="og:url" content={`https://homimatch.com/companero-de-piso/${cityData.slug}`} />
        <meta property="og:image" content="https://homimatch.com/lovable-uploads/e5ed243f-ce37-4556-9a8d-2c8ca65a01a5.png" />
        <meta property="og:image:alt" content={`Perfiles para compartir piso en ${cityData.name} con HomiMatch`} />
        <meta property="og:site_name" content="HomiMatch" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={cityData.metaTitle} />
        <meta name="twitter:description" content={cityData.metaDescription} />
        <meta name="twitter:image" content="https://homimatch.com/lovable-uploads/e5ed243f-ce37-4556-9a8d-2c8ca65a01a5.png" />
        <meta name="twitter:image:alt" content={`Perfiles para compartir piso en ${cityData.name} con HomiMatch`} />
        
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <CityLandingTemplate city={cityData} />
        <Footer cityName={cityData.name} />
      </div>
    </>
  );
};

export default SeoCityLandingPage;
