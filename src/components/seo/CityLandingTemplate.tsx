import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Home, Shield, MapPin, Heart, CheckCircle, X, Plus, Star, Search } from "lucide-react";
import { SeoCityData, seoCities } from "@/data/seoCities";
import { mockProfiles } from "@/data/mockProfiles";

interface CityLandingTemplateProps {
  city: SeoCityData;
}

export const CityLandingTemplate = ({ city }: CityLandingTemplateProps) => {
  const otherCities = seoCities.filter(c => c.slug !== city.slug);
  
  // Usar los primeros 3 perfiles para el hero (Elena, Carlos, Laura)
  const heroProfiles = mockProfiles.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Limpio y moderno */}
      <section className="relative overflow-hidden bg-background py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-[1fr,auto] gap-16 items-start">
            {/* Texto Hero */}
            <div className="space-y-6 max-w-xl">
              <div className="inline-block">
                <span className="px-4 py-1.5 rounded-full bg-homi-purple/10 text-homi-purple text-sm font-medium flex items-center gap-1.5 w-fit">
                  <MapPin className="w-3.5 h-3.5" />
                  Disponible en {city.name}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Encontrar compañero de piso en <span className="homi-gradient-text">{city.name}</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Encontrar compañeros de piso en {city.name} es más fácil que nunca. Crea tu perfil, conecta con personas compatibles y comparte piso en cualquier zona de la ciudad.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link to="/register" className="inline-block">
                  <Button size="lg" className="w-full sm:w-auto rounded-full bg-gradient-to-r from-homi-purple to-homi-lightPurple hover:from-homi-lightPurple hover:to-homi-purple text-white font-bold shadow-lg shadow-purple-500/30 transform hover:scale-105 transition-all duration-300 px-8">
                    Unirme a HomiMatch
                  </Button>
                </Link>
                <Link to="/matching" className="inline-block">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full border-2 bg-background hover:bg-homi-purple/5 px-8">
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
            </div>

            {/* Tarjetas de perfiles - Más grandes y prominentes */}
            <div className="relative hidden lg:block">
              <div className="flex gap-6">
                {/* Tarjeta 1 - Elena */}
                <Card className="overflow-hidden border-0 shadow-2xl rounded-3xl bg-card w-[300px]">
                  <div className="relative h-[300px]">
                    <img 
                      src={heroProfiles[0].imgUrl} 
                      alt={heroProfiles[0].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1.5 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg">
                        Activo ahora
                      </span>
                      <span className="px-3 py-1.5 bg-homi-purple text-white text-xs font-semibold rounded-full flex items-center gap-1 shadow-lg">
                        <Star className="w-3.5 h-3.5" fill="white" />
                        {heroProfiles[0].compatibility}%
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <div className="mb-2">
                      <h3 className="font-bold text-xl text-foreground">{heroProfiles[0].name}, {heroProfiles[0].age}</h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {city.name}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {heroProfiles[0].bio}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {heroProfiles[0].tags.slice(0, 3).map((tag) => (
                        <span key={tag.id} className="px-3 py-1 bg-homi-purple/10 text-homi-purple text-xs rounded-full font-medium">
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Tarjeta 2 - Carlos */}
                <Card className="overflow-hidden border-0 shadow-2xl rounded-3xl bg-card w-[300px]">
                  <div className="relative h-[300px]">
                    <img 
                      src={heroProfiles[1].imgUrl} 
                      alt={heroProfiles[1].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1.5 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg">
                        Activo ahora
                      </span>
                      <span className="px-3 py-1.5 bg-homi-purple text-white text-xs font-semibold rounded-full flex items-center gap-1 shadow-lg">
                        <Star className="w-3.5 h-3.5" fill="white" />
                        {heroProfiles[1].compatibility}%
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <div className="mb-2">
                      <h3 className="font-bold text-xl text-foreground">{heroProfiles[1].name}, {heroProfiles[1].age}</h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {city.name}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {heroProfiles[1].bio}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {heroProfiles[1].tags.slice(0, 3).map((tag) => (
                        <span key={tag.id} className="px-3 py-1 bg-homi-purple/10 text-homi-purple text-xs rounded-full font-medium">
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Ventajas */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full bg-homi-purple/10 text-homi-purple text-sm font-medium">
                ✨ Ventajas exclusivas
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 homi-gradient-text">
              ¿Por qué usar HomiMatch en {city.name}?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              La forma más moderna y segura de encontrar compañero de piso
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-homi-ultraLightPurple/10 rounded-3xl">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-homi-purple to-homi-lightPurple flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Encuentra personas afines</h3>
              <p className="text-muted-foreground">
                Conecta con futuros compañeros que compartan tus intereses y estilo de vida
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-homi-ultraLightPurple/10 rounded-3xl">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-homi-lightPurple to-homi-purple flex items-center justify-center mb-4 shadow-lg">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Comparte gastos</h3>
              <p className="text-muted-foreground">
                Reduce tus costes de vivienda compartiendo piso con personas compatibles
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-homi-ultraLightPurple/10 rounded-3xl">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-homi-purple to-homi-ultraLightPurple flex items-center justify-center mb-4 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Perfiles verificados</h3>
              <p className="text-muted-foreground">
                Todos los usuarios verifican su identidad para mayor seguridad y confianza
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-homi-ultraLightPurple/10 rounded-3xl">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-homi-lightPurple to-homi-ultraLightPurple flex items-center justify-center mb-4 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Busca por zona</h3>
              <p className="text-muted-foreground">
                Filtra por barrio y encuentra compañeros en tu zona favorita de {city.name}
              </p>
            </Card>
          </div>
        </section>

        {/* Options Section - SEO Content */}
        <section className="mb-24 bg-gradient-to-br from-homi-ultraLightPurple/30 via-homi-lightPurple/5 to-transparent rounded-3xl p-10 md:p-16 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Opciones para encontrar compañero de piso en {city.name}
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Da igual si <strong className="text-foreground">busco compañero de piso {city.name}</strong>, <strong className="text-foreground">se busca compañero de piso {city.name}</strong> o necesitas encontrar <strong className="text-foreground">compañeros de piso {city.name}</strong>. HomiMatch te ayuda a conectar con personas que buscan <strong className="text-foreground">compañera de piso {city.name}</strong> o <strong className="text-foreground">buscamos compañera de piso en {city.name}</strong>.
            </p>
            <p>
              Da igual si buscas alquilar una habitación o compartir para reducir gastos: aquí puedes conectar con personas que buscan piso en {city.name}.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Cómo encontrar compañeros de piso en {city.name} fácilmente?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Gracias a <strong className="text-foreground">HomiMatch</strong> puedes filtrar por intereses, estilo de vida, disponibilidad y zona. Puedes encontrar perfiles verificados, personas con habitación disponible y compañeros de piso compatibles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-homi-purple to-homi-lightPurple flex items-center justify-center mx-auto transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <div className="absolute -inset-2 bg-homi-purple/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Crea tu perfil</h3>
              <p className="text-muted-foreground">Completa tu información, preferencias y lo que buscas en un compañero de piso</p>
            </div>

            <div className="text-center group">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-homi-lightPurple to-homi-purple flex items-center justify-center mx-auto transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <div className="absolute -inset-2 bg-homi-lightPurple/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Explora perfiles</h3>
              <p className="text-muted-foreground">Descubre personas compatibles en {city.name} con nuestro sistema de matching</p>
            </div>

            <div className="text-center group">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-homi-purple to-homi-ultraLightPurple flex items-center justify-center mx-auto transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <div className="absolute -inset-2 bg-homi-purple/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Conecta y chatea</h3>
              <p className="text-muted-foreground">Chatea con tus matches y conoce a tus futuros compañeros de piso</p>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Consejos antes de compartir piso en {city.name}
            </h2>
            <p className="text-lg text-muted-foreground">
              Todo lo que necesitas saber para una convivencia perfecta
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-homi-ultraLightPurple/10 rounded-3xl">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-homi-purple to-homi-lightPurple flex items-center justify-center mb-6 shadow-lg">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Qué preguntar en la primera visita</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-homi-purple mt-0.5 flex-shrink-0" />
                    <span>Horarios y rutinas de los actuales compañeros</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-homi-purple mt-0.5 flex-shrink-0" />
                    <span>Normas de convivencia establecidas</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-homi-purple mt-0.5 flex-shrink-0" />
                    <span>Distribución de gastos y tareas del hogar</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-homi-purple mt-0.5 flex-shrink-0" />
                    <span>Condiciones del contrato y depósito</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-homi-ultraLightPurple/10 rounded-3xl">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-homi-lightPurple to-homi-purple flex items-center justify-center mb-6 shadow-lg">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Cómo firmar un acuerdo de convivencia</h3>
                <p className="text-muted-foreground mb-4">
                  Un acuerdo de convivencia por escrito ayuda a prevenir conflictos. Incluye:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-homi-purple mt-0.5 flex-shrink-0" />
                    <span>Normas sobre limpieza y mantenimiento</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-homi-purple mt-0.5 flex-shrink-0" />
                    <span>Política de visitas e invitados</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-homi-purple mt-0.5 flex-shrink-0" />
                    <span>Uso de espacios comunes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-homi-ultraLightPurple/10 rounded-3xl">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-homi-purple to-homi-ultraLightPurple flex items-center justify-center mb-6 shadow-lg">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Cómo evitar problemas comunes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-homi-purple mt-0.5 flex-shrink-0" />
                    <span>Comunica tus expectativas desde el principio</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-homi-purple mt-0.5 flex-shrink-0" />
                    <span>Establece un sistema justo para dividir gastos</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-homi-purple mt-0.5 flex-shrink-0" />
                    <span>Respeta los espacios personales de cada uno</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-homi-purple mt-0.5 flex-shrink-0" />
                    <span>Mantén una comunicación abierta y honesta</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full bg-homi-purple/10 text-homi-purple text-sm font-medium">
                ❓ FAQ
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 homi-gradient-text">
              Preguntas frecuentes sobre compartir piso en {city.name}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 border-l-4 border-l-homi-purple bg-gradient-to-r from-homi-purple/5 to-background rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3 text-foreground flex items-start gap-2">
                  <span className="text-homi-purple">Q:</span>
                  ¿Cómo encuentro compañero de piso en {city.name}?
                </h3>
                <p className="text-muted-foreground pl-6">
                  En HomiMatch puedes crear tu perfil gratuito, indicar tus preferencias y conectar con personas compatibles que buscan compartir piso en {city.name}.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 border-l-4 border-l-homi-lightPurple bg-gradient-to-r from-homi-lightPurple/5 to-background rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3 text-foreground flex items-start gap-2">
                  <span className="text-homi-lightPurple">Q:</span>
                  ¿Es seguro usar HomiMatch?
                </h3>
                <p className="text-muted-foreground pl-6">
                  Sí, todos los usuarios verifican su identidad y puedes chatear dentro de la plataforma antes de compartir información personal.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 border-l-4 border-l-homi-purple bg-gradient-to-r from-homi-purple/5 to-background rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3 text-foreground flex items-start gap-2">
                  <span className="text-homi-purple">Q:</span>
                  ¿Cuánto cuesta usar HomiMatch?
                </h3>
                <p className="text-muted-foreground pl-6">
                  Crear tu perfil y explorar es completamente gratis. Puedes empezar a conectar con compañeros de piso en {city.name} sin coste alguno.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 border-l-4 border-l-homi-lightPurple bg-gradient-to-r from-homi-lightPurple/5 to-background rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3 text-foreground flex items-start gap-2">
                  <span className="text-homi-lightPurple">Q:</span>
                  ¿Puedo buscar por zona específica en {city.name}?
                </h3>
                <p className="text-muted-foreground pl-6">
                  Sí, puedes filtrar por barrio o zona para encontrar compañeros de piso cerca de tu ubicación preferida en {city.name}.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-24 relative overflow-hidden rounded-3xl shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-homi-purple via-homi-lightPurple to-homi-ultraLightPurple"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTI2IDM0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDEwYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
          
          <div className="relative px-8 py-20 md:py-28 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="inline-block mb-4">
                <span className="px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium border border-white/30">
                  🚀 Únete hoy
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Empieza a buscar tu compañero de piso en {city.name}
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
                Únete a HomiMatch y encuentra a tu compañero de piso ideal hoy mismo. Gratis, fácil y rápido.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link to="/register">
                  <Button size="lg" className="w-full sm:w-auto rounded-full bg-white text-homi-purple hover:bg-white/95 font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-6 text-lg">
                    Crear mi perfil gratis
                  </Button>
                </Link>
                <Link to="/matching">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full border-2 border-white text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-6 text-lg font-semibold">
                    Ver perfiles en {city.name}
                  </Button>
                </Link>
              </div>

              <div className="pt-10 flex items-center justify-center gap-12 text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm">100% Gratis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm">Perfiles Verificados</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm">Chat Seguro</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Linking Section */}
        <section className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Encuentra compañeros de piso en otras ciudades
            </h2>
            <p className="text-lg text-muted-foreground">
              HomiMatch está disponible en toda España
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {otherCities.slice(0, 20).map((otherCity) => (
              <Link
                key={otherCity.slug}
                to={`/companero-de-piso/${otherCity.slug}`}
                className="group"
              >
                <Card className="h-full hover:shadow-lg hover:border-homi-purple transition-all duration-300 cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <MapPin className="w-6 h-6 mx-auto mb-2 text-homi-purple group-hover:scale-110 transition-transform duration-300" />
                    <p className="font-semibold text-sm group-hover:text-homi-purple transition-colors">
                      {otherCity.name}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/companero-de-piso">
              <Button variant="outline" size="lg" className="rounded-full border-2 border-homi-purple text-homi-purple hover:bg-homi-purple hover:text-white">
                Ver todas las ciudades disponibles →
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};
