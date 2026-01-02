import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Database, Users, Lock, Mail, Clock, FileCheck } from 'lucide-react';

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 pb-12">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Card className="shadow-md">
            <CardContent className="p-6 md:p-8">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-homi-ultraLightPurple rounded-full">
                    <Shield className="w-8 h-8 text-homi-purple" />
                  </div>
                </div>
                <h1 className="text-3xl font-bold mb-2">Política de Privacidad</h1>
                <p className="text-muted-foreground">Última actualización: 2 de enero de 2026</p>
              </div>
              
              <div className="prose prose-slate max-w-none space-y-8">
                {/* Introduction */}
                <p className="text-lg">
                  En HomiMatch nos tomamos muy en serio tu privacidad. Esta política explica de forma clara y transparente 
                  qué datos recopilamos, para qué los usamos y cómo los protegemos.
                </p>

                {/* Highlighted Box - Key Points */}
                <div className="bg-gradient-to-r from-homi-ultraLightPurple/50 to-purple-50 p-6 rounded-xl border border-homi-lightPurple/30">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-homi-purple" />
                    Lo más importante
                  </h2>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span><strong>No vendemos tus datos</strong> a terceros bajo ninguna circunstancia.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span><strong>No usamos tus datos para publicidad personalizada.</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Solo recopilamos los datos <strong>estrictamente necesarios</strong> para el servicio.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Puedes <strong>eliminar tu cuenta y datos</strong> en cualquier momento.</span>
                    </li>
                  </ul>
                </div>

                {/* Section 1: Data We Collect */}
                <div>
                  <h2 className="text-xl font-semibold mt-8 mb-4 flex items-center gap-2">
                    <Database className="w-5 h-5 text-homi-purple" />
                    1. Datos que recopilamos y por qué
                  </h2>
                  <p className="mb-4">
                    En HomiMatch recopilamos únicamente los datos necesarios para ofrecer el servicio de búsqueda 
                    y compatibilidad entre compañeros de piso.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">📧 Datos de cuenta</h3>
                      <p className="text-muted-foreground text-sm">
                        Nombre, email y método de autenticación (email o Google), necesarios para crear y gestionar tu cuenta.
                      </p>
                    </div>
                    
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">👤 Datos de perfil</h3>
                      <p className="text-muted-foreground text-sm">
                        Información que decides completar voluntariamente, como edad aproximada, ciudad, preferencias de convivencia, 
                        hábitos, intereses o descripción personal. Estos datos se utilizan exclusivamente para mejorar el matching 
                        entre usuarios y mostrarte perfiles compatibles.
                      </p>
                    </div>
                    
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">📊 Datos de uso</h3>
                      <p className="text-muted-foreground text-sm">
                        Información básica sobre cómo interactúas con la app (por ejemplo, acciones dentro de la aplicación), 
                        con fines de mejora del producto y detección de errores.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 2: Purpose */}
                <div>
                  <h2 className="text-xl font-semibold mt-8 mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-homi-purple" />
                    2. Finalidad del uso de los datos
                  </h2>
                  <p className="mb-4">Usamos los datos personales únicamente para:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Permitir la creación y gestión de cuentas de usuario</li>
                    <li>Facilitar el matching entre usuarios con perfiles compatibles</li>
                    <li>Mostrar perfiles relevantes dentro de la aplicación</li>
                    <li>Mejorar la funcionalidad, seguridad y experiencia de usuario</li>
                    <li>Cumplir con obligaciones legales cuando sea necesario</li>
                  </ul>
                  
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg mt-4">
                    <p className="text-green-800 font-medium">
                      ⚠️ <strong>No utilizamos los datos para publicidad personalizada ni los vendemos a terceros.</strong>
                    </p>
                  </div>
                </div>

                {/* Section 3: Data Sharing */}
                <div>
                  <h2 className="text-xl font-semibold mt-8 mb-4 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-homi-purple" />
                    3. Compartición de datos
                  </h2>
                  <p className="mb-4">
                    <strong>No compartimos datos personales con terceros con fines comerciales.</strong>
                  </p>
                  <p className="mb-4">
                    Podemos utilizar proveedores tecnológicos (por ejemplo, servicios de autenticación o infraestructura cloud) 
                    que procesan datos en nuestro nombre y bajo estrictos acuerdos de confidencialidad. Estos proveedores:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Solo acceden a los datos necesarios para prestar el servicio</li>
                    <li>Están obligados contractualmente a proteger tus datos</li>
                    <li>No pueden usar tus datos para sus propios fines</li>
                  </ul>
                </div>

                {/* Section 4: Data Retention */}
                <div>
                  <h2 className="text-xl font-semibold mt-8 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-homi-purple" />
                    4. Conservación de datos
                  </h2>
                  <p className="mb-4">
                    Los datos se conservan mientras tu cuenta esté activa en HomiMatch.
                  </p>
                  <p className="mb-4">
                    <strong>Puedes solicitar la eliminación de tu cuenta y de todos tus datos asociados en cualquier momento</strong>, 
                    contactándonos a través del email indicado más abajo.
                  </p>
                  <p>
                    Una vez solicitada la eliminación, procederemos a borrar tus datos personales de forma definitiva, 
                    salvo aquellos que debamos conservar por obligación legal.
                  </p>
                </div>

                {/* Section 5: User Rights */}
                <div>
                  <h2 className="text-xl font-semibold mt-8 mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-homi-purple" />
                    5. Derechos del usuario
                  </h2>
                  <p className="mb-4">Como usuario, tienes derecho a:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Acceder</strong> a tus datos personales</li>
                    <li><strong>Rectificar</strong> datos inexactos o incompletos</li>
                    <li><strong>Solicitar la eliminación</strong> de tus datos</li>
                    <li><strong>Oponerte</strong> al tratamiento de tus datos</li>
                    <li><strong>Retirar tu consentimiento</strong> en cualquier momento</li>
                    <li><strong>Portabilidad</strong>: obtener tus datos en un formato estructurado</li>
                  </ul>
                  
                  <div className="bg-homi-ultraLightPurple/50 p-4 rounded-lg mt-4">
                    <p className="font-medium">
                      Para ejercer cualquiera de estos derechos, contáctanos en:
                    </p>
                    <a 
                      href="mailto:contact@homimatch.com" 
                      className="text-homi-purple font-semibold hover:underline"
                    >
                      contact@homimatch.com
                    </a>
                  </div>
                </div>

                {/* Section 6: Security */}
                <div>
                  <h2 className="text-xl font-semibold mt-8 mb-4">6. Seguridad de los datos</h2>
                  <p>
                    Implementamos medidas técnicas y organizativas para garantizar la seguridad de tus datos personales:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mt-4">
                    <li>Encriptación de datos en tránsito y en reposo</li>
                    <li>Acceso restringido a datos personales</li>
                    <li>Monitorización continua de seguridad</li>
                    <li>Infraestructura cloud segura y certificada</li>
                  </ul>
                </div>

                {/* Section 7: Legal Basis */}
                <div>
                  <h2 className="text-xl font-semibold mt-8 mb-4">7. Base legal para el tratamiento</h2>
                  <p>El tratamiento de tus datos se basa en:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-4">
                    <li><strong>Tu consentimiento</strong>, otorgado al registrarte y usar nuestros servicios</li>
                    <li><strong>La ejecución del contrato</strong> de servicios entre tú y HomiMatch</li>
                    <li><strong>Interés legítimo</strong> en mejorar y mantener nuestros servicios de forma segura</li>
                    <li><strong>Obligaciones legales</strong> cuando sea aplicable</li>
                  </ul>
                </div>

                {/* Section 8: Changes */}
                <div>
                  <h2 className="text-xl font-semibold mt-8 mb-4">8. Cambios en la política de privacidad</h2>
                  <p>
                    Nos reservamos el derecho a modificar esta Política de Privacidad para adaptarla a cambios legales 
                    o mejoras en nuestros servicios. Te notificaremos cualquier cambio significativo a través de la 
                    aplicación o por email.
                  </p>
                </div>

                {/* Section 9: Contact */}
                <div>
                  <h2 className="text-xl font-semibold mt-8 mb-4">9. Responsable del tratamiento y contacto</h2>
                  <p className="mb-4">
                    <strong>Responsable:</strong> HomiMatch
                  </p>
                  <p className="mb-4">
                    Si tienes alguna pregunta sobre esta política de privacidad o sobre cómo tratamos tus datos, 
                    puedes contactarnos en:
                  </p>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="font-semibold">📧 Email de contacto:</p>
                    <a 
                      href="mailto:contact@homimatch.com" 
                      className="text-homi-purple font-semibold hover:underline"
                    >
                      contact@homimatch.com
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPage;
