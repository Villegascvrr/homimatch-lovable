import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Home, CheckCircle, Mail } from 'lucide-react';
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
  return <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-muted/10">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full">
          {/* Unified Content Card */}
          <Card className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl shadow-lg overflow-hidden">
            <CardContent className="p-8 md:p-10">
              {/* Success Header */}
              <div className="text-center mb-8 space-y-3">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-homi-purple/10 to-homi-lightPurple/10 border border-homi-purple/20 mb-2">
                  <CheckCircle className="w-7 h-7 text-homi-purple" strokeWidth={2.5} />
                </div>
                
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                  Tu cuenta se ha creado con éxito
                </h1>
                <p className="text-base text-muted-foreground">
                  Gracias por registrarte en HomiMatch.
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>

              {/* App Section - Destacado */}
              <div className="bg-gradient-to-br from-homi-purple to-homi-lightPurple rounded-xl p-6 md:p-8 text-center mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                La app oficial de HomiMatch llegará muy pronto
              </h2>
              
              <p className="text-base md:text-lg text-white flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Te avisaremos por email cuando esté lista.
              </p>
              </div>

              {/* Maintenance Notice */}
              <div className="bg-muted/30 rounded-lg p-5 text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-4 h-4 rounded-full border-2 border-muted-foreground border-t-transparent animate-spin"></div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Web en mantenimiento temporal
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground">
                  Estamos realizando ajustes para mejorar tu experiencia.
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>

              {/* Instagram CTA */}
              <div className="text-center space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    
                    <h3 className="text-lg font-bold text-foreground">
                      Mantente al día para no è           
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Síguenos para enterarte antes que nadie del lanzamiento de la app
                  </p>
                </div>

                <Button asChild className="w-full bg-gradient-to-r from-homi-purple to-homi-lightPurple hover:from-homi-purple/90 hover:to-homi-lightPurple/90 text-white font-semibold shadow-lg rounded-lg h-11 transition-all hover:scale-[1.02]">
                  <a href="https://www.instagram.com/homimatch_es/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <Instagram className="w-5 h-5" />
                    <span>Seguir en Instagram (@homimatch)</span>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Back Button */}
          <div className="text-center mt-6">
            <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground" size="sm">
              <Link to="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Volver al inicio
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default MaintenancePage;