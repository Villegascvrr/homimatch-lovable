import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { seoCities } from "@/data/seoCities";
import { mockProfiles } from "@/data/mockProfiles";
import { MapPin, Star, Shield, UserCheck, Search, MessageCircle, Users } from "lucide-react";
import { useState } from "react";

const SeoCitiesIndexPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCities = seoCities.filter(city =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // JSON-LD para LocalBusiness España
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "HomiMatch España",
    "description": "Encuentra compañeros de piso en toda España. Conecta con personas afines en más de 30 ciudades españolas.",
    "url": "https://homimatch.com/companero-de-piso",
    "telephone": "+34-XXX-XXX-XXX",
    "email": "hi@homimatch.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ES"
    },
    "areaServed": {
      "@type": "Country",
      "name": "España"
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
      }
    ]
  };

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
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-10 md:py-16 max-w-7xl">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-[1fr,auto] gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-6 max-w-xl">
              <div className="inline-block">
                <span className="px-4 py-1.5 rounded-full bg-homi-purple/10 text-homi-purple text-sm font-medium flex items-center gap-1.5 w-fit">
                  <MapPin className="w-3.5 h-3.5" />
                  Disponible en España
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Encontrar compañero de piso en <span className="homi-gradient-text">España</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Encontrar compañeros de piso en España es más fácil que nunca. Crea tu perfil, conecta con personas compatibles y comparte piso en cualquier zona de la ciudad.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link to="/register" className="inline-block">
                  <Button size="lg" className="w-full sm:w-auto rounded-full bg-gradient-to-r from-homi-purple to-homi-lightPurple hover:from-homi-lightPurple hover:to-homi-purple text-white font-bold shadow-lg shadow-purple-500/30 transform hover:scale-105 transition-all duration-300">
                    Unirme a HomiMatch
                  </Button>
                </Link>
                <Link to="/matching" className="inline-block">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full border-2 bg-background hover:bg-homi-purple/5">
                    Explorar perfiles
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-background bg-gradient-to-br from-homi-purple to-homi-lightPurple"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-background bg-gradient-to-br from-homi-lightPurple to-homi-purple"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-background bg-gradient-to-br from-homi-purple to-homi-ultraLightPurple"></div>
                </div>
                <span className="text-sm text-muted-foreground font-medium">+500 usuarios activos</span>
              </div>

              {/* Tarjeta Elena - Solo móvil */}
              <Card className="overflow-hidden border-0 shadow-2xl rounded-3xl bg-card lg:hidden mt-6">
                <div className="relative h-64">
                  <img 
                    src={mockProfiles[0].imgUrl} 
                    alt={mockProfiles[0].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1.5 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg">
                      Activo ahora
                    </span>
                    <span className="px-3 py-1.5 bg-homi-purple text-white text-xs font-semibold rounded-full flex items-center gap-1 shadow-lg">
                      <Star className="w-3.5 h-3.5" fill="white" />
                      {mockProfiles[0].compatibility}%
                    </span>
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="mb-2">
                    <h3 className="font-bold text-xl text-foreground">{mockProfiles[0].name}, {mockProfiles[0].age}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {mockProfiles[0].location}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {mockProfiles[0].bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {mockProfiles[0].tags.slice(0, 3).map((tag) => (
                      <span key={tag.id} className="px-3 py-1 bg-homi-purple/10 text-homi-purple text-xs rounded-full font-medium">
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Content - Profile Cards */}
            <div className="hidden lg:flex gap-6">
              {/* Elena Card */}
              <Card className="overflow-hidden border-0 shadow-2xl rounded-3xl bg-card w-[280px]">
                <div className="relative h-80">
                  <img 
                    src={mockProfiles[0].imgUrl} 
                    alt={mockProfiles[0].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1.5 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg">
                      Activo ahora
                    </span>
                    <span className="px-3 py-1.5 bg-homi-purple text-white text-xs font-semibold rounded-full flex items-center gap-1 shadow-lg">
                      <Star className="w-3.5 h-3.5" fill="white" />
                      {mockProfiles[0].compatibility}%
                    </span>
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="mb-2">
                    <h3 className="font-bold text-xl text-foreground">{mockProfiles[0].name}, {mockProfiles[0].age}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {mockProfiles[0].location}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {mockProfiles[0].bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {mockProfiles[0].tags.slice(0, 3).map((tag) => (
                      <span key={tag.id} className="px-3 py-1 bg-homi-purple/10 text-homi-purple text-xs rounded-full font-medium">
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Carlos Card */}
              <Card className="overflow-hidden border-0 shadow-2xl rounded-3xl bg-card w-[280px]">
                <div className="relative h-80">
                  <img 
                    src={mockProfiles[1].imgUrl} 
                    alt={mockProfiles[1].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1.5 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg">
                      Activo ahora
                    </span>
                    <span className="px-3 py-1.5 bg-homi-purple text-white text-xs font-semibold rounded-full flex items-center gap-1 shadow-lg">
                      <Star className="w-3.5 h-3.5" fill="white" />
                      {mockProfiles[1].compatibility}%
                    </span>
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="mb-2">
                    <h3 className="font-bold text-xl text-foreground">{mockProfiles[1].name}, {mockProfiles[1].age}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {mockProfiles[1].location}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {mockProfiles[1].bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {mockProfiles[1].tags.slice(0, 3).map((tag) => (
                      <span key={tag.id} className="px-3 py-1 bg-homi-purple/10 text-homi-purple text-xs rounded-full font-medium">
                        {tag.name}
                      </span>
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
            <Badge className="mb-4 px-4 py-2 bg-homi-purple/10 text-homi-purple border-0 text-sm font-semibold">
              Elige tu ubicación
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold homi-gradient-text mb-6">
              Selecciona tu ciudad
            </h2>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar ciudad..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 rounded-full border-2 border-border focus:border-homi-purple focus:ring-homi-purple text-base"
                />
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredCities.length > 0 ? (
              filteredCities.map((city) => (
                <Link key={city.slug} to={`/companero-de-piso/${city.slug}`}>
                  <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer h-full border-0 bg-card rounded-3xl shadow-lg transform hover:scale-105">
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
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No se encontraron ciudades que coincidan con "{searchQuery}"
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Why HomiMatch Section */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Badge className="mb-4 px-4 py-2 bg-homi-purple/10 text-homi-purple border-0 text-sm font-semibold">
              Ventajas
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold homi-gradient-text">
              ¿Por qué usar HomiMatch?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 bg-card rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-homi-purple to-homi-lightPurple mb-6 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold homi-gradient-text mb-2">35+</div>
              <p className="text-base text-foreground font-semibold">Ciudades en España</p>
            </Card>
            <Card className="border-0 bg-card rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-homi-lightPurple to-homi-purple mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold homi-gradient-text mb-2">100%</div>
              <p className="text-base text-foreground font-semibold">Perfiles verificados</p>
            </Card>
            <Card className="border-0 bg-card rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center">
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
              <Badge className="mb-4 px-4 py-2 bg-homi-purple/10 text-homi-purple border-0 text-sm font-semibold">
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
