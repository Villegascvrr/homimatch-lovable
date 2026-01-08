import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Cookie, Settings, Shield, Clock, ToggleLeft, Mail, Info, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookiesPage = () => {
  const currentDate = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Cookie className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Política de Cookies
              </h1>
              <p className="text-muted-foreground">
                Última actualización: {currentDate}
              </p>
            </div>

            {/* Summary Box */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-10">
              <div className="flex items-start gap-3">
                <Info className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h2 className="font-semibold text-foreground mb-2">Resumen</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    HomiMatch utiliza únicamente cookies esenciales necesarias para el funcionamiento del sitio.
                    <strong className="text-foreground"> No utilizamos cookies de publicidad ni de seguimiento de terceros.</strong>
                    {' '}Puedes gestionar las cookies desde la configuración de tu navegador.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 1: What are cookies */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Cookie className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">¿Qué son las cookies?</h2>
              </div>
              <div className="pl-12 space-y-3 text-muted-foreground">
                <p>
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. 
                  Permiten que el sitio recuerde tus preferencias y mejore tu experiencia de navegación.
                </p>
                <p>
                  Las cookies no pueden dañar tu dispositivo ni acceder a otros archivos almacenados en él.
                </p>
              </div>
            </section>

            {/* Section 2: Cookies we use */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Settings className="h-5 w-5 text-green-600" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Cookies que utilizamos</h2>
              </div>
              <div className="pl-12 space-y-4">
                <p className="text-muted-foreground">
                  En HomiMatch utilizamos únicamente cookies estrictamente necesarias para el funcionamiento del servicio:
                </p>
                
                <div className="space-y-4">
                  {/* Cookie type 1 */}
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h3 className="font-medium text-foreground mb-2">🔐 Cookies de sesión</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li><strong>Propósito:</strong> Mantener tu sesión activa mientras navegas</li>
                      <li><strong>Duración:</strong> Se eliminan al cerrar el navegador</li>
                      <li><strong>Necesarias:</strong> Sí, para el funcionamiento básico</li>
                    </ul>
                  </div>
                  
                  {/* Cookie type 2 */}
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h3 className="font-medium text-foreground mb-2">⚙️ Cookies de preferencias</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li><strong>Propósito:</strong> Recordar tus preferencias (idioma, tema)</li>
                      <li><strong>Duración:</strong> Hasta 1 año</li>
                      <li><strong>Necesarias:</strong> Sí, para mejorar tu experiencia</li>
                    </ul>
                  </div>
                  
                  {/* Cookie type 3 */}
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h3 className="font-medium text-foreground mb-2">🔒 Cookies de autenticación</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li><strong>Propósito:</strong> Identificarte de forma segura cuando inicias sesión</li>
                      <li><strong>Duración:</strong> Mientras tu sesión esté activa</li>
                      <li><strong>Necesarias:</strong> Sí, para acceder a tu cuenta</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: What we DON'T use */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-100 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Cookies que NO utilizamos</h2>
              </div>
              <div className="pl-12">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="text-red-500">✗</span>
                      <span><strong>Cookies de publicidad:</strong> No mostramos anuncios personalizados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-500">✗</span>
                      <span><strong>Cookies de seguimiento de terceros:</strong> No rastreamos tu actividad en otros sitios</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-500">✗</span>
                      <span><strong>Cookies de redes sociales:</strong> No compartimos datos con redes sociales</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4: How to manage cookies */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <ToggleLeft className="h-5 w-5 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Cómo gestionar las cookies</h2>
              </div>
              <div className="pl-12 space-y-4 text-muted-foreground">
                <p>
                  Puedes controlar y eliminar las cookies desde la configuración de tu navegador. 
                  Ten en cuenta que desactivar las cookies esenciales puede afectar al funcionamiento del sitio.
                </p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="font-medium text-foreground mb-2">Instrucciones por navegador:</p>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                    <li>• <strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
                    <li>• <strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
                    <li>• <strong>Edge:</strong> Configuración → Privacidad → Cookies</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5: Data retention */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Clock className="h-5 w-5 text-amber-600" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Conservación de datos</h2>
              </div>
              <div className="pl-12 text-muted-foreground">
                <p>
                  Las cookies de sesión se eliminan automáticamente cuando cierras el navegador. 
                  Las cookies persistentes (como las de preferencias) se conservan hasta su fecha de expiración 
                  o hasta que las elimines manualmente desde tu navegador.
                </p>
              </div>
            </section>

            {/* Section 6: Updates */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-cyan-100 rounded-lg">
                  <Shield className="h-5 w-5 text-cyan-600" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Cambios en esta política</h2>
              </div>
              <div className="pl-12 text-muted-foreground">
                <p>
                  Podemos actualizar esta política de cookies ocasionalmente. 
                  Cualquier cambio será publicado en esta página con la fecha de actualización correspondiente.
                </p>
              </div>
            </section>

            {/* Section 7: Contact */}
            <section className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <Mail className="h-5 w-5 text-indigo-600" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Contacto</h2>
              </div>
              <div className="pl-12 text-muted-foreground">
                <p>
                  Si tienes preguntas sobre nuestra política de cookies, puedes contactarnos en:{' '}
                  <a 
                    href="mailto:contact@homimatch.com" 
                    className="text-primary hover:underline font-medium"
                  >
                    contact@homimatch.com
                  </a>
                </p>
              </div>
            </section>

            {/* Related links */}
            <div className="border-t pt-6 mt-10">
              <p className="text-sm text-muted-foreground mb-3">Documentos relacionados:</p>
              <div className="flex flex-wrap gap-3">
                <Link 
                  to="/privacy" 
                  className="text-sm text-primary hover:underline"
                >
                  Política de Privacidad
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link 
                  to="/terms" 
                  className="text-sm text-primary hover:underline"
                >
                  Términos de Servicio
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default CookiesPage;
