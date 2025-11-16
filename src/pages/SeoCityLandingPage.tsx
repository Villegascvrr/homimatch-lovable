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
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={cityData.metaTitle} />
        <meta property="og:description" content={cityData.metaDescription} />
        <meta property="og:url" content={`https://homimatch.com/companero-de-piso/${cityData.slug}`} />
        <meta property="og:image" content="https://homimatch.com/og-image.png" />
        <meta property="og:image:alt" content={`Perfiles para compartir piso en ${cityData.name} con HomiMatch`} />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={cityData.metaTitle} />
        <meta name="twitter:description" content={cityData.metaDescription} />
        <meta name="twitter:image" content="https://homimatch.com/og-image.png" />
        <meta name="twitter:url" content={`https://homimatch.com/companero-de-piso/${cityData.slug}`} />
        
        <link rel="canonical" href={`https://homimatch.com/companero-de-piso/${cityData.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <Navbar />
      <CityLandingTemplate city={cityData} />
      <Footer cityName={cityData.name} />
    </>
  );
};

export default SeoCityLandingPage;
