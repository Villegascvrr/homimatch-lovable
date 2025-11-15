import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Home, Shield, MapPin, Heart, Star, CheckCircle } from "lucide-react";
import { SeoCityData, seoCities } from "@/data/seoCities";
import { mockProfiles } from "@/data/mockProfiles";

interface CityLandingTemplateProps {
  city: SeoCityData;
}

export const CityLandingTemplate = ({ city }: CityLandingTemplateProps) => {
  const otherCities = seoCities.filter(c => c.slug !== city.slug);
  const featuredProfiles = mockProfiles.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Visual con gradiente */}
      <section className="relative overflow-hidden bg-gradient-to-br from-homi-ultraLightPurple/30 via-background to-background py-16 md:py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-homi-lightPurple/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-homi-purple/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texto Hero */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-1.5 rounded-full bg-homi-purple/10 text-homi-purple text-sm font-medium">
                  🏠 Disponible en {city.name}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Encontrar compañero de piso en <span className="homi-gradient-text">{city.name}</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground">
                Encontrar compañeros de piso en {city.name} es más fácil que nunca. Crea tu perfil, conecta con personas compatibles y comparte piso en cualquier zona de la ciudad.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/register" className="inline-block">
                  <Button size="lg" className="w-full sm:w-auto rounded-full bg-gradient-to-r from-homi-purple to-homi-lightPurple hover:from-homi-lightPurple hover:to-homi-purple text-white font-bold shadow-lg shadow-purple-500/30 transform hover:scale-105 transition-all duration-300">
                    Unirme a HomiMatch
                  </Button>
                </Link>
                <Link to="/matching" className="inline-block">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full border-2">
                    Explorar perfiles
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-background bg-gradient-to-br from-homi-purple to-homi-lightPurple"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-background bg-gradient-to-br from-homi-lightPurple to-homi-purple"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-background bg-gradient-to-br from-homi-purple to-homi-ultraLightPurple"></div>
                  </div>
                  <span className="text-sm text-muted-foreground">+500 usuarios activos</span>
                </div>
              </div>
            </div>

            {/* Collage de perfiles */}
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl shadow-xl p-4 transform hover:scale-105 transition-transform duration-300">
                    <img src={mockProfiles[0].imgUrl} alt={mockProfiles[0].name} className="w-full h-32 object-cover rounded-xl mb-3" />
                    <h4 className="font-semibold">{mockProfiles[0].name}, {mockProfiles[0].age}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">{mockProfiles[0].bio}</p>
                    <div className="flex items-center gap-1 mt-2">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{mockProfiles[0].compatibility}% compatible</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl shadow-xl p-4 transform hover:scale-105 transition-transform duration-300">
                    <img src={mockProfiles[1].imgUrl} alt={mockProfiles[1].name} className="w-full h-32 object-cover rounded-xl mb-3" />
                    <h4 className="font-semibold">{mockProfiles[1].name}, {mockProfiles[1].age}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">{mockProfiles[1].bio}</p>
                    <div className="flex items-center gap-1 mt-2">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{mockProfiles[1].compatibility}% compatible</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-white rounded-2xl shadow-xl p-4 transform hover:scale-105 transition-transform duration-300">
                    <img src={mockProfiles[2].imgUrl} alt={mockProfiles[2].name} className="w-full h-32 object-cover rounded-xl mb-3" />
                    <h4 className="font-semibold">{mockProfiles[2].name}, {mockProfiles[2].age}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">{mockProfiles[2].bio}</p>
                    <div className="flex items-center gap-1 mt-2">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{mockProfiles[2].compatibility}% compatible</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-homi-purple to-homi-lightPurple rounded-2xl shadow-xl p-6 text-white transform hover:scale-105 transition-transform duration-300">
                    <Heart className="w-8 h-8 mb-3" />
                    <h4 className="font-bold text-xl mb-2">+1000</h4>
                    <p className="text-sm opacity-90">Compañeros encontrados en {city.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Perfiles Destacados */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perfiles destacados en <span className="homi-gradient-text">{city.name}</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Conecta con personas que buscan compañero de piso en tu zona
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProfiles.map((profile) => (
              <Card key={profile.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative">
                  <img 
                    src={profile.imgUrl} 
                    alt={profile.name} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {profile.compatibility}%
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-bold mb-2">{profile.name}, {profile.age}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{profile.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {profile.tags.slice(0, 3).map((tag) => (
                      <span key={tag.id} className="px-3 py-1 bg-homi-ultraLightPurple text-homi-purple text-xs rounded-full font-medium">
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/register">
              <Button size="lg" variant="outline" className="rounded-full border-2">
                Ver todos los perfiles en {city.name}
              </Button>
            </Link>
          </div>
        </section>

        {/* Ventajas */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Por qué usar HomiMatch en {city.name}?
            </h2>
            <p className="text-lg text-muted-foreground">
              La forma más moderna y segura de encontrar compañero de piso
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-xl transition-shadow duration-300 border-2">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-homi-purple to-homi-lightPurple flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Encuentra personas afines</h3>
              <p className="text-muted-foreground">
                Conecta con futuros compañeros que compartan tus intereses y estilo de vida
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl transition-shadow duration-300 border-2">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-homi-lightPurple to-homi-purple flex items-center justify-center mb-4">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Comparte gastos</h3>
              <p className="text-muted-foreground">
                Reduce tus costes de vivienda compartiendo piso con personas compatibles
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl transition-shadow duration-300 border-2">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-homi-purple to-homi-ultraLightPurple flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Perfiles verificados</h3>
              <p className="text-muted-foreground">
                Todos los usuarios verifican su identidad para mayor seguridad y confianza
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl transition-shadow duration-300 border-2">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-homi-lightPurple to-homi-ultraLightPurple flex items-center justify-center mb-4">
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
        <section className="mb-20 bg-gradient-to-br from-homi-ultraLightPurple/20 to-transparent rounded-3xl p-8 md:p-12">
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

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl transition-shadow duration-300 border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-homi-purple to-homi-lightPurple flex items-center justify-center mb-4">
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

            <Card className="hover:shadow-xl transition-shadow duration-300 border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-homi-lightPurple to-homi-purple flex items-center justify-center mb-4">
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

            <Card className="hover:shadow-xl transition-shadow duration-300 border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-homi-purple to-homi-ultraLightPurple flex items-center justify-center mb-4">
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
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Preguntas frecuentes sobre compartir piso en {city.name}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-homi-purple">
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

            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-homi-lightPurple">
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

            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-homi-purple">
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

            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-homi-lightPurple">
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
        <section className="mb-20 relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-homi-purple via-homi-lightPurple to-homi-ultraLightPurple"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTI2IDM0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDEwYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
          
          <div className="relative px-8 py-16 md:py-20 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Empieza a buscar tu compañero de piso en {city.name}
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Únete a HomiMatch y encuentra a tu compañero de piso ideal hoy mismo. Gratis, fácil y rápido.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/register">
                  <Button size="lg" className="w-full sm:w-auto rounded-full bg-white text-homi-purple hover:bg-white/90 font-bold shadow-xl transform hover:scale-105 transition-all duration-300">
                    Crear mi perfil gratis
                  </Button>
                </Link>
                <Link to="/matching">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full border-2 border-white text-white hover:bg-white/10">
                    Ver perfiles en {city.name}
                  </Button>
                </Link>
              </div>

              <div className="pt-6 flex items-center justify-center gap-8 text-white/90">
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
