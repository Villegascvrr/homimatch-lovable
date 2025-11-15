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

  return (
    <>
      <Helmet>
        <title>{cityData.metaTitle}</title>
        <meta name="description" content={cityData.metaDescription} />
        <meta property="og:title" content={cityData.metaTitle} />
        <meta property="og:description" content={cityData.metaDescription} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://homimatch.com/companero-de-piso/${cityData.slug}`} />
      </Helmet>
      
      <Navbar />
      <CityLandingTemplate city={cityData} />
      <Footer />
    </>
  );
};

export default SeoCityLandingPage;
