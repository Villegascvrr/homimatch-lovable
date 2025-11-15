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
        <Card className="max-w-2xl w-full shadow-xl">
          <CardHeader className="text-center space-y-4 pb-4">
            {/* Icono de éxito */}
            <div className="flex justify-center mb-2">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-homi-purple to-homi-lightPurple rounded-full flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-homi-purple to-homi-lightPurple rounded-full blur-xl opacity-40 animate-pulse"></div>
              </div>
            </div>

            {/* Título principal */}
            <CardTitle className="text-3xl md:text-4xl font-bold">
              ¡Tu cuenta se ha creado con éxito! 🎉
            </CardTitle>
            
            <CardDescription className="text-lg font-medium homi-gradient-text">
              Gracias por registrarte en HomiMatch 💜
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6 pt-2">
            {/* Mensaje de mantenimiento */}
            <div className="bg-homi-ultraLightPurple/30 border border-homi-purple/20 rounded-xl p-6 space-y-3">
              <p className="text-center text-foreground leading-relaxed">
                Nuestra web está temporalmente en <span className="font-semibold text-homi-purple">mantenimiento</span>.
              </p>
              <p className="text-center text-muted-foreground leading-relaxed">
                La app estará disponible muy pronto y te avisaremos por email en cuanto esté lista.
              </p>
            </div>

            {/* Llamado a Instagram */}
            <div className="text-center space-y-4">
              <p className="text-foreground font-medium">
                Para no perderte nada, síguenos en Instagram:
              </p>
              
              <Button 
                asChild 
                className="w-full sm:w-auto bg-gradient-to-r from-homi-purple to-homi-lightPurple hover:from-homi-purple/90 hover:to-homi-lightPurple/90 text-white font-semibold"
                size="lg"
              >
                <a 
                  href="https://www.instagram.com/homimatch_es/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Instagram className="w-5 h-5" />
                  @homimatch_es
                </a>
              </Button>
            </div>

            {/* Separador */}
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
            </div>

            {/* Botón volver al inicio */}
            <Button 
              asChild 
              variant="outline" 
              className="w-full"
              size="lg"
            >
              <Link to="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Volver al inicio
              </Link>
            </Button>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default MaintenancePage;
