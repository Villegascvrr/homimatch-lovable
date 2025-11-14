import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Home, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useAuth } from '@/context/AuthContext';

/**
 * Página de mantenimiento mostrada después del registro
 * Informa a los usuarios que la app está en desarrollo
 */
const MaintenancePage = () => {
  const { user } = useAuth();

  useEffect(() => {
    // Scroll to top cuando se carga la página
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full">
          {/* Icono animado */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-homi-purple to-homi-lightPurple rounded-full flex items-center justify-center animate-pulse-soft">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-homi-purple to-homi-lightPurple rounded-full blur-xl opacity-50 animate-pulse"></div>
            </div>
          </div>

          {/* Mensaje principal */}
          <div className="bg-white dark:bg-card border border-border rounded-2xl p-8 shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
              {user ? (
                <>¡Gracias por registrarte{user?.user_metadata?.firstName ? `, ${user.user_metadata.firstName}` : ''}!</>
              ) : (
                <>¡Bienvenido a HomiMatch!</>
              )}
            </h1>
            
            <div className="bg-homi-ultraLightPurple/50 border border-homi-purple/20 rounded-xl p-6 mb-6">
              <p className="text-center text-lg text-foreground mb-4">
                <span className="font-semibold homi-gradient-text">HomiMatch está en desarrollo</span>
              </p>
              <p className="text-center text-muted-foreground">
                Estamos trabajando en la nueva versión de la aplicación para ofrecerte 
                la mejor experiencia en la búsqueda de compañeros de piso.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {user ? (
                <>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-homi-purple mt-2"></div>
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Te notificaremos por email</span> cuando la aplicación esté lista para usar
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-homi-purple mt-2"></div>
                    <p className="text-muted-foreground">
                      Tu cuenta está <span className="font-semibold text-foreground">completamente configurada</span> y lista
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-homi-purple mt-2"></div>
                    <p className="text-muted-foreground">
                      Serás de los <span className="font-semibold text-foreground">primeros en acceder</span> cuando lancemos
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-homi-purple mt-2"></div>
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Regístrate</span> para ser notificado cuando esté lista
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-homi-purple mt-2"></div>
                    <p className="text-muted-foreground">
                      Tendrás acceso prioritario a todas las funcionalidades
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-homi-purple mt-2"></div>
                    <p className="text-muted-foreground">
                      Sé de los <span className="font-semibold text-foreground">primeros en encontrar</span> tu compañero de piso ideal
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button 
                asChild
                className="flex-1 bg-gradient-to-r from-homi-purple to-homi-lightPurple hover:from-homi-lightPurple hover:to-homi-purple text-white rounded-full"
              >
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Volver al inicio
                </Link>
              </Button>
              
              <Button 
                variant="outline"
                className="flex-1 rounded-full"
                onClick={() => window.open('https://instagram.com/homimatch', '_blank')}
              >
                <Instagram className="mr-2 h-4 w-4" />
                Síguenos en Instagram
              </Button>
            </div>

            {/* Mensaje adicional */}
            <p className="text-center text-sm text-muted-foreground">
              Síguenos en <a href="https://instagram.com/homimatch" target="_blank" rel="noopener noreferrer" className="text-homi-purple hover:underline font-medium">@homimatch</a> para estar al día con todas las novedades
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MaintenancePage;
