import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { seoCities } from "@/data/seoCities";
import { mockProfiles } from "@/data/mockProfiles";
import { MapPin, UserCheck, Search, MessageCircle, CheckCircle, Users, Shield } from "lucide-react";

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
      
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-homi-purple/20 to-homi-lightPurple/20 text-homi-purple border-0 text-sm font-semibold">
                35+ ciudades disponibles
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Encuentra <span className="homi-gradient-text">compañeros de piso</span> en toda España
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                HomiMatch te ayuda a conectar con personas afines para compartir piso en más de 35 ciudades españolas
              </p>
              <Link to="/register">
                <Button size="lg" className="rounded-full bg-gradient-to-r from-homi-purple to-homi-lightPurple hover:from-homi-lightPurple hover:to-homi-purple text-white font-bold shadow-lg shadow-purple-500/30 transform hover:scale-105 transition-all duration-300 px-8 py-6 text-lg">
                  Unirme a HomiMatch
                </Button>
              </Link>
            </div>
            
            {/* Right Content - Profile Cards */}
            <div className="hidden lg:flex gap-6 justify-center">
              {/* Elena Card */}
              <Card className="w-64 overflow-hidden border-0 bg-gradient-to-br from-background to-homi-ultraLightPurple/10 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-300">
                <img 
                  src={mockProfiles[0].imgUrl} 
                  alt={mockProfiles[0].name}
                  className="w-full h-72 object-cover"
                />
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground">{mockProfiles[0].name}, {mockProfiles[0].age}</h3>
                    <Badge className="bg-gradient-to-r from-homi-purple to-homi-lightPurple text-white border-0">
                      {mockProfiles[0].compatibility}%
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{mockProfiles[0].location}</p>
                  <div className="flex flex-wrap gap-2">
                    {mockProfiles[0].tags.slice(0, 3).map((tag) => (
                      <Badge key={tag.id} variant="secondary" className="text-xs bg-homi-purple/10 text-homi-purple border-0">
                        {tag.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Carlos Card */}
              <Card className="w-64 overflow-hidden border-0 bg-gradient-to-br from-background to-homi-ultraLightPurple/10 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-300 mt-12">
                <img 
                  src={mockProfiles[1].imgUrl} 
                  alt={mockProfiles[1].name}
                  className="w-full h-72 object-cover"
                />
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground">{mockProfiles[1].name}, {mockProfiles[1].age}</h3>
                    <Badge className="bg-gradient-to-r from-homi-purple to-homi-lightPurple text-white border-0">
                      {mockProfiles[1].compatibility}%
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{mockProfiles[1].location}</p>
                  <div className="flex flex-wrap gap-2">
                    {mockProfiles[1].tags.slice(0, 3).map((tag) => (
                      <Badge key={tag.id} variant="secondary" className="text-xs bg-homi-purple/10 text-homi-purple border-0">
                        {tag.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Cities Grid */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-homi-purple/20 to-homi-lightPurple/20 text-homi-purple border-0 text-sm font-semibold">
              Elige tu ubicación
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold homi-gradient-text">
              Selecciona tu ciudad
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {seoCities.map((city) => (
              <Link key={city.slug} to={`/companero-de-piso/${city.slug}`}>
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer h-full border-0 bg-gradient-to-br from-background to-homi-ultraLightPurple/10 rounded-2xl transform hover:scale-105">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-homi-purple to-homi-lightPurple flex items-center justify-center flex-shrink-0 shadow-md">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-foreground mb-0.5">
                          {city.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          Ver compañeros →
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Why HomiMatch Section */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-homi-purple/20 to-homi-lightPurple/20 text-homi-purple border-0 text-sm font-semibold">
              Ventajas
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold homi-gradient-text">
              ¿Por qué usar HomiMatch?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 bg-gradient-to-br from-background to-homi-ultraLightPurple/10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-homi-purple to-homi-lightPurple mb-6 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold homi-gradient-text mb-2">35+</div>
              <p className="text-base text-foreground font-semibold">Ciudades en España</p>
            </Card>
            <Card className="border-0 bg-gradient-to-br from-background to-homi-ultraLightPurple/10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-homi-lightPurple to-homi-purple mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold homi-gradient-text mb-2">100%</div>
              <p className="text-base text-foreground font-semibold">Perfiles verificados</p>
            </Card>
            <Card className="border-0 bg-gradient-to-br from-background to-homi-ultraLightPurple/10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-homi-purple to-homi-ultraLightPurple mb-6 shadow-lg">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold homi-gradient-text mb-2">Gratis</div>
              <p className="text-base text-foreground font-semibold">Crear tu perfil</p>
            </Card>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-20 relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-homi-purple/10 via-homi-lightPurple/5 to-transparent"></div>
          <div className="relative p-12 md:p-16">
            <div className="text-center mb-12">
              <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-homi-purple/20 to-homi-lightPurple/20 text-homi-purple border-0 text-sm font-semibold">
                Proceso
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold homi-gradient-text">
                Cómo funciona
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-homi-purple to-homi-lightPurple mb-6 shadow-lg">
                  <UserCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Crea tu perfil</h3>
                <p className="text-sm text-muted-foreground">
                  Completa tu perfil con tus preferencias y estilo de vida
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-homi-lightPurple to-homi-purple mb-6 shadow-lg">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Descubre compañeros</h3>
                <p className="text-sm text-muted-foreground">
                  Encuentra personas compatibles en tu ciudad
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-homi-purple to-homi-ultraLightPurple mb-6 shadow-lg">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Conecta y comparte</h3>
                <p className="text-sm text-muted-foreground">
                  Chatea y encuentra tu compañero de piso ideal
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-homi-purple/20 via-homi-lightPurple/15 to-homi-ultraLightPurple/20"></div>
          <div className="relative text-center p-12 md:p-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-homi-purple to-homi-lightPurple mb-6 shadow-xl">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 homi-gradient-text">
              Empieza a buscar tu compañero de piso
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Únete a HomiMatch y encuentra personas compatibles para compartir piso
            </p>
            <Link to="/register">
              <Button size="lg" className="rounded-full bg-gradient-to-r from-homi-purple to-homi-lightPurple hover:from-homi-lightPurple hover:to-homi-purple text-white font-bold shadow-lg shadow-purple-500/30 transform hover:scale-105 transition-all duration-300 px-8 py-6 text-lg">
                Crear mi perfil gratis
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default SeoCitiesIndexPage;
