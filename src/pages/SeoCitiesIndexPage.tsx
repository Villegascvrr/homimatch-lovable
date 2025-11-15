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
      
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Encuentra compañeros de piso en toda España
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            HomiMatch te ayuda a conectar con personas afines para compartir piso en más de 35 ciudades españolas. Busca por tu ciudad y encuentra a tu compañero ideal.
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Unirme a HomiMatch
            </Button>
          </Link>
        </section>

        {/* Cities Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Selecciona tu ciudad
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {seoCities.map((city) => (
              <Link key={city.slug} to={`/companero-de-piso/${city.slug}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {city.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Ver compañeros de piso
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
        <section className="mb-16 bg-primary/5 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-foreground text-center">
            ¿Por qué usar HomiMatch?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">35+</div>
              <p className="text-muted-foreground">Ciudades en España</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Perfiles verificados</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">Gratis</div>
              <p className="text-muted-foreground">Crear tu perfil</p>
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
