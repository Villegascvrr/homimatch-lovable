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
                    
                    <p className="text-lg text-white/85 font-light max-w-2xl mx-auto">
                      Te avisaremos por email en cuanto esté lista.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Grid Layout for Secondary Info */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Maintenance Notice */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl">
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

            {/* Social Follow */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl">
              <CardContent className="p-8 flex flex-col items-center justify-center space-y-4 h-full">
                <h3 className="text-lg font-semibold text-foreground">
                  Mantente al día
                </h3>
                <Button asChild className="w-full bg-gradient-to-r from-homi-purple to-homi-lightPurple hover:from-homi-purple/90 hover:to-homi-lightPurple/90 text-white font-semibold shadow-lg rounded-xl" size="lg">
                  <a href="https://www.instagram.com/homimatch_es/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Instagram className="w-5 h-5" />
                    @homimatch_es
                  </a>
                </Button>
              </CardContent>
            </Card>
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