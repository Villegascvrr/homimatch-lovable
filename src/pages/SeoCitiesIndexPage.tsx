import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { seoCities } from "@/data/seoCities";
import { MapPin } from "lucide-react";

const SeoCitiesIndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Encontrar compañero de piso en España | HomiMatch</title>
        <meta 
          name="description" 
          content="Encuentra compañeros de piso en toda España. Conecta con personas afines en Madrid, Barcelona, Valencia y más de 30 ciudades españolas." 
        />
        <meta property="og:title" content="Encontrar compañero de piso en España | HomiMatch" />
        <meta property="og:description" content="Encuentra compañeros de piso en toda España. Conecta con personas afines en Madrid, Barcelona, Valencia y más de 30 ciudades españolas." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://homimatch.com/companero-de-piso" />
      </Helmet>
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full bg-homi-purple/10 text-homi-purple text-sm font-medium">
              🏙️ +35 ciudades disponibles
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 homi-gradient-text leading-tight">
            Encuentra compañeros de piso en toda España
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            HomiMatch te ayuda a conectar con personas afines para compartir piso en más de 35 ciudades españolas. Busca por tu ciudad y encuentra a tu compañero ideal.
          </p>
          <Link to="/register">
            <Button size="lg" className="rounded-full bg-gradient-to-r from-homi-purple to-homi-lightPurple hover:from-homi-lightPurple hover:to-homi-purple text-white font-bold shadow-lg shadow-purple-500/30 transform hover:scale-105 transition-all duration-300 px-8 py-6 text-lg">
              Unirme a HomiMatch
            </Button>
          </Link>
        </section>

        {/* Cities Grid */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full bg-homi-purple/10 text-homi-purple text-sm font-medium">
                📍 Elige tu ubicación
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 homi-gradient-text">
              Selecciona tu ciudad
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoCities.map((city) => (
              <Link key={city.slug} to={`/companero-de-piso/${city.slug}`}>
                <Card className="hover:shadow-2xl transition-all duration-300 cursor-pointer h-full border-0 bg-gradient-to-br from-background to-homi-ultraLightPurple/10 rounded-3xl transform hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-homi-purple to-homi-lightPurple flex items-center justify-center flex-shrink-0 shadow-lg">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {city.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Ver compañeros de piso →
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Info Section */}
        <section className="mb-20 relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-homi-purple/20 via-homi-lightPurple/10 to-homi-ultraLightPurple/20"></div>
          <div className="relative p-12 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 homi-gradient-text text-center">
              ¿Por qué usar HomiMatch?
            </h2>
            <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-homi-purple to-homi-lightPurple mb-6 shadow-xl">
                  <div className="text-3xl font-bold text-white">35+</div>
                </div>
                <p className="text-lg text-foreground font-semibold">Ciudades en España</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-homi-lightPurple to-homi-purple mb-6 shadow-xl">
                  <div className="text-3xl font-bold text-white">100%</div>
                </div>
                <p className="text-lg text-foreground font-semibold">Perfiles verificados</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-homi-purple to-homi-ultraLightPurple mb-6 shadow-xl">
                  <div className="text-3xl font-bold text-white">Gratis</div>
                </div>
                <p className="text-lg text-foreground font-semibold">Crear tu perfil</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Empieza a buscar tu compañero de piso
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Únete a HomiMatch y encuentra personas compatibles para compartir piso
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Crear mi perfil gratis
            </Button>
          </Link>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default SeoCitiesIndexPage;
