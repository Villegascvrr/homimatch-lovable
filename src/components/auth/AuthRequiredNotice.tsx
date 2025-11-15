import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const AuthRequiredNotice = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-background to-muted/20">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">Acceso Restringido</CardTitle>
            <CardDescription className="text-base">
              Regístrate o inicia sesión para acceder a esta función
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button asChild className="w-full" size="lg">
              <Link to="/register">Registrarse</Link>
            </Button>
            <Button asChild variant="outline" className="w-full" size="lg">
              <Link to="/signin">Iniciar Sesión</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default AuthRequiredNotice;
