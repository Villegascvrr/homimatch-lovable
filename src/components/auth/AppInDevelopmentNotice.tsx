import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Construction, Home, Instagram } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const AppInDevelopmentNotice = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-start justify-center pt-20 p-4 bg-gradient-to-b from-background to-muted/20">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Construction className="h-6 w-6 text-primary animate-pulse" />
            </div>
            <CardTitle className="text-2xl">HomiMatch en Desarrollo</CardTitle>
            <CardDescription className="text-base">
              Estamos trabajando en esta función. ¡Pronto estará disponible!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button asChild className="w-full" size="lg">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Volver al Inicio
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full" size="lg">
              <a 
                href="https://www.instagram.com/homimatch_es/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram className="mr-2 h-4 w-4" />
                Síguenos en Instagram
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default AppInDevelopmentNotice;
