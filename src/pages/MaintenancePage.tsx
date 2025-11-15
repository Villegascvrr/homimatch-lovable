import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Home, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

/**
 * Página de mantenimiento mostrada después del registro
 * Informa a los usuarios que la web está en mantenimiento temporal
 */
const MaintenancePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center px-4 py-12 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-3xl w-full space-y-8">
          {/* Sección de éxito */}
          <div className="text-center space-y-3">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-homi-purple to-homi-lightPurple rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Tu cuenta se ha creado con éxito
            </h1>
            <p className="text-lg text-muted-foreground">
              Gracias por registrarte en HomiMatch.
            </p>
          </div>

          {/* Mensaje de mantenimiento */}
          <Card className="bg-muted/50 border-border/50">
            <CardContent className="pt-6 text-center space-y-2">
              <h2 className="text-xl font-semibold text-foreground">
                Web en mantenimiento temporal
              </h2>
              <p className="text-muted-foreground">
                Estamos realizando ajustes para mejorar tu experiencia.
              </p>
            </CardContent>
          </Card>

          {/* Sección destacada de la app */}
          <Card className="bg-gradient-to-br from-homi-purple to-homi-lightPurple border-0 shadow-2xl">
            <CardContent className="pt-8 pb-8 text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                La app oficial de HomiMatch llegará muy pronto
              </h2>
              <div className="space-y-3 text-white/95">
                <p className="text-lg font-medium">
                  Es la forma más rápida y sencilla de encontrar compañero de piso.
                </p>
                <p className="text-base">
                  Te avisaremos por email en cuanto esté lista para descargarla.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Mantente al día */}
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Mantente al día
            </h3>
            <Button 
              asChild 
              className="w-full sm:w-auto bg-gradient-to-r from-homi-purple to-homi-lightPurple hover:from-homi-purple/90 hover:to-homi-lightPurple/90 text-white font-semibold shadow-lg" 
              size="lg"
            >
              <a 
                href="https://www.instagram.com/homimatch_es/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2"
              >
                <Instagram className="w-5 h-5" />
                Síguenos en Instagram: @homimatch_es
              </a>
            </Button>
          </div>

          {/* Botón volver al inicio */}
          <div className="pt-4">
            <Button asChild variant="outline" className="w-full" size="lg">
              <Link to="/" className="flex items-center justify-center gap-2">
                <Home className="w-4 h-4" />
                Volver al inicio
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
export default MaintenancePage;