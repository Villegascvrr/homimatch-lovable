import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Home, Shield, MapPin } from "lucide-react";
import { SeoCityData, seoCities } from "@/data/seoCities";

interface CityLandingTemplateProps {
  city: SeoCityData;
}

export const CityLandingTemplate = ({ city }: CityLandingTemplateProps) => {
  const otherCities = seoCities.filter(c => c.slug !== city.slug);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Encontrar compañero de piso en {city.name}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Encontrar compañeros de piso en {city.name} es más fácil que nunca. Crea tu perfil, conecta con personas compatibles y comparte piso en cualquier zona de la ciudad.
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Unirme a HomiMatch
            </Button>
          </Link>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <Users className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Encuentra personas afines</h3>
                <p className="text-muted-foreground">
                  Conecta con futuros compañeros de piso que compartan tus intereses y estilo de vida
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Home className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Comparte gastos</h3>
                <p className="text-muted-foreground">
                  Reduce tus costes de vivienda compartiendo piso con personas compatibles
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Shield className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Perfiles verificados</h3>
                <p className="text-muted-foreground">
                  Todos los usuarios verifican su identidad para mayor seguridad y confianza
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <MapPin className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Busca por zona</h3>
                <p className="text-muted-foreground">
                  Filtra por barrio y encuentra compañeros de piso en tu zona favorita de {city.name}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Options Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Opciones para encontrar compañero de piso en {city.name}
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-4">
              Da igual si <strong>busco compañero de piso {city.name}</strong>, <strong>se busca compañero de piso {city.name}</strong> o necesitas encontrar <strong>compañeros de piso {city.name}</strong>. HomiMatch te ayuda a conectar con personas que buscan <strong>compañera de piso {city.name}</strong> o <strong>buscamos compañera de piso en {city.name}</strong>.
            </p>
            <p className="mb-4">
              Da igual si buscas alquilar una habitación o compartir para reducir gastos: aquí puedes conectar con personas que buscan piso en {city.name}.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            ¿Cómo encontrar compañeros de piso en {city.name} fácilmente?
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-4">
              Gracias a <strong>HomiMatch</strong> puedes filtrar por intereses, estilo de vida, disponibilidad y zona. Puedes encontrar perfiles verificados, personas con habitación disponible y compañeros de piso compatibles.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8 not-prose">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Crea tu perfil</h3>
                <p className="text-sm text-muted-foreground">Completa tu información y preferencias</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Explora perfiles</h3>
                <p className="text-sm text-muted-foreground">Encuentra personas compatibles en {city.name}</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Conecta</h3>
                <p className="text-sm text-muted-foreground">Chatea y conoce a tus futuros compañeros</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Consejos antes de compartir piso en {city.name}
          </h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Qué preguntar en la primera visita</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Horarios y rutinas de los actuales compañeros</li>
                  <li>Normas de convivencia establecidas</li>
                  <li>Distribución de gastos y tareas del hogar</li>
                  <li>Condiciones del contrato y depósito</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Cómo firmar un acuerdo de convivencia</h3>
                <p className="text-muted-foreground mb-3">
                  Un acuerdo de convivencia por escrito ayuda a prevenir conflictos. Incluye:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Normas sobre limpieza y mantenimiento</li>
                  <li>Política de visitas e invitados</li>
                  <li>Uso de espacios comunes</li>
                  <li>Procedimiento para resolver disputas</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Cómo evitar problemas comunes</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Comunica tus expectativas desde el principio</li>
                  <li>Establece un sistema justo para dividir gastos</li>
                  <li>Respeta los espacios personales de cada uno</li>
                  <li>Mantén una comunicación abierta y honesta</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Preguntas frecuentes sobre compartir piso en {city.name}
          </h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  ¿Cómo encuentro compañero de piso en {city.name}?
                </h3>
                <p className="text-muted-foreground">
                  En HomiMatch puedes crear tu perfil gratuito, indicar tus preferencias y conectar con personas compatibles que buscan compartir piso en {city.name}.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  ¿Es seguro usar HomiMatch?
                </h3>
                <p className="text-muted-foreground">
                  Sí, todos los usuarios verifican su identidad y puedes chatear dentro de la plataforma antes de compartir información personal.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  ¿Cuánto cuesta usar HomiMatch?
                </h3>
                <p className="text-muted-foreground">
                  Crear tu perfil y explorar es completamente gratis. Puedes empezar a conectar con compañeros de piso en {city.name} sin coste alguno.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  ¿Puedo buscar por zona específica en {city.name}?
                </h3>
                <p className="text-muted-foreground">
                  Sí, puedes filtrar por barrio o zona para encontrar compañeros de piso cerca de tu ubicación preferida en {city.name}.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16 text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Empieza a buscar tu compañero de piso en {city.name}
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Únete a HomiMatch y encuentra a tu compañero de piso ideal hoy mismo
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Crear mi perfil gratis
            </Button>
          </Link>
        </section>

        {/* Internal Linking Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-foreground">
            Encuentra compañeros de piso en otras ciudades
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {otherCities.slice(0, 12).map((otherCity) => (
              <Link
                key={otherCity.slug}
                to={`/companero-de-piso/${otherCity.slug}`}
                className="text-primary hover:text-primary/80 hover:underline text-sm"
              >
                {otherCity.name}
              </Link>
            ))}
          </div>
          <Link
            to="/companero-de-piso"
            className="inline-block mt-4 text-primary hover:text-primary/80 hover:underline font-medium"
          >
            Ver todas las ciudades →
          </Link>
        </section>
      </main>
    </div>
  );
};
