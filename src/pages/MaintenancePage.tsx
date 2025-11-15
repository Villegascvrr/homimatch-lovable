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
      
      <main className="flex-grow flex items-center justify-center px-6 py-16">
        <div className="max-w-4xl w-full">
          {/* Success Header */}
          <div className="text-center mb-12 space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-homi-purple/10 to-homi-lightPurple/10 border-2 border-homi-purple/20">
              <CheckCircle className="w-11 h-11 text-homi-purple" strokeWidth={2.5} />
            </div>
            
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Tu cuenta se ha creado con éxito
              </h1>
              <p className="text-xl text-muted-foreground font-light">
                Gracias por registrarte en HomiMatch.
              </p>
            </div>
          </div>

          {/* Main App Card - DESTACADO */}
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-br from-homi-purple to-homi-lightPurple rounded-3xl blur-2xl opacity-20"></div>
            <Card className="relative bg-gradient-to-br from-homi-purple via-homi-purple to-homi-lightPurple border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-10 md:p-14 text-center space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    La app oficial de HomiMatch<br />llegará muy pronto
                  </h2>
                  
                  <div className="h-1 w-24 bg-white/30 rounded-full mx-auto"></div>
                  
                  <div className="space-y-4 pt-2">
                    
                    <p className="text-lg text-white/85 font-light max-w-2xl mx-auto flex items-center justify-center gap-2">
                      <Mail className="w-5 h-5" />
                      Te avisaremos por email cuando esté lista.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Maintenance Notice */}
          <div className="mb-10">
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl max-w-md mx-auto">
              <CardContent className="p-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 rounded-full border-2 border-muted-foreground border-t-transparent animate-spin"></div>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Web en mantenimiento temporal
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Estamos realizando ajustes para mejorar tu experiencia.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Instagram CTA Section - Destacado */}
          <div className="mb-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-homi-purple/20 to-homi-lightPurple/20 rounded-3xl blur-xl"></div>
              <Card className="relative bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-2 border-homi-purple/30 rounded-3xl shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-homi-purple/10 to-transparent rounded-full blur-3xl"></div>
                <CardContent className="relative p-10 md:p-12 text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-homi-purple/20 to-homi-lightPurple/20 border border-homi-purple/30 mb-2">
                    <Instagram className="w-8 h-8 text-homi-purple" strokeWidth={2} />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      Mantente al día
                    </h3>
                    <p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
                      Síguenos para enterarte antes que nadie del lanzamiento de la app
                    </p>
                  </div>

                  <Button 
                    asChild 
                    className="w-full max-w-md bg-gradient-to-r from-homi-purple to-homi-lightPurple hover:from-homi-purple/90 hover:to-homi-lightPurple/90 text-white font-bold shadow-2xl rounded-xl border-0 h-14 text-lg transition-all hover:scale-105" 
                    size="lg"
                  >
                    <a 
                      href="https://www.instagram.com/homimatch_es/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-center gap-3"
                    >
                      <Instagram className="w-6 h-6" />
                      <span>Seguir en Instagram (@homimatch_es)</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center">
            <Button asChild variant="outline" className="rounded-xl border-border/50 hover:bg-muted/50" size="lg">
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