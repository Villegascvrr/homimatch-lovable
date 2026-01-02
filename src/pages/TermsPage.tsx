import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Users, Shield, AlertTriangle, Mail, Scale, UserCheck, Ban, RefreshCw } from 'lucide-react';

const TermsPage = () => {
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
                    <FileText className="w-8 h-8 text-homi-purple" />
                  </div>
                </div>
                <h1 className="text-3xl font-bold mb-2">Términos de Servicio</h1>
                <p className="text-muted-foreground">Última actualización: 2 de enero de 2026</p>
              </div>
              
              <div className="prose prose-slate max-w-none space-y-8">
                {/* Introduction */}
                <p className="text-lg">
                  Bienvenido a HomiMatch. Estos términos establecen las reglas de uso de nuestra plataforma. 
                  Al usar HomiMatch, aceptas estos términos en su totalidad.
                </p>

                {/* Highlighted Box - Key Points */}
                <div className="bg-gradient-to-r from-homi-ultraLightPurple/50 to-purple-50 p-6 rounded-xl border border-homi-lightPurple/30">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-homi-purple" />
                    Resumen de tus derechos y obligaciones
                  </h2>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Puedes usar HomiMatch para encontrar compañeros de piso compatibles.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Puedes eliminar tu cuenta y datos en cualquier momento.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>No puedes usar la plataforma para actividades ilegales o fraudulentas.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>No puedes acosar, discriminar o engañar a otros usuarios.</span>
                    </li>
                  </ul>
                </div>

                {/* Section 1: What is HomiMatch */}
                <div>
                  <h2 className="text-xl font-semibold mt-8 mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-homi-purple" />
                    1. ¿Qué es HomiMatch?
                  </h2>
                  <p className="mb-4">
                    HomiMatch es una plataforma que conecta a estudiantes y jóvenes profesionales con compañeros 
                    de piso potencialmente compatibles a través de un sistema de matching inteligente.
                  </p>
                  
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Nuestros servicios incluyen:</h3>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Creación de perfiles personalizados</li>
                      <li>• Sistema de matching basado en compatibilidad de estilo de vida</li>
                      <li>• Comunicación segura entre usuarios</li>
                      <li>• Herramientas de búsqueda y filtrado por ciudad, intereses y preferencias</li>
                    </ul>
                  </div>
                </div>

                {/* Section 2: Account Registration */}
                <div>
                  <h2 className="text-xl font-semibold mt-8 mb-4 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-homi-purple" />
                    2. Registro y cuenta
                  </h2>
                  <p className="mb-4">Para usar HomiMatch necesitas crear una cuenta. Al hacerlo:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Debes proporcionar <strong>información veraz y actualizada</strong></li>
                    <li>Debes ser <strong>mayor de 18 años</strong></li>
                    <li>Eres responsable de mantener <strong>segura tu contraseña</strong></li>
                    <li>Eres responsable de <strong>todas las actividades</strong> que ocurran bajo tu cuenta</li>
                  </ul>
                  
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mt-4">
                    <p className="text-blue-800 text-sm">
                      💡 <strong>Consejo:</strong> Usa una contraseña única y segura. Si sospechas que alguien 
                      ha accedido a tu cuenta, cámbiala inmediatamente y contacta con nosotros.
                    </p>
                  </div>
                </div>

                {/* Section 3: User Conduct */}
                <div>
                  <h2 className="text-xl font-semibold mt-8 mb-4 flex items-center gap-2">
                    <Ban className="w-5 h-5 text-homi-purple" />
                    3. Conducta del usuario
                  </h2>
                  <p className="mb-4">
                    Para mantener HomiMatch como un espacio seguro y respetuoso, <strong>está prohibido</strong>:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                      <p className="text-red-800 text-sm font-medium">❌ Proporcionar información falsa</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                      <p className="text-red-800 text-sm font-medium">❌ Actividades ilegales o fraude</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                      <p className="text-red-800 text-sm font-medium">❌ Acosar o discriminar usuarios</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                      <p className="text-red-800 text-sm font-medium">❌ Contenido ofensivo o difamatorio</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                      <p className="text-red-800 text-sm font-medium">❌ Acceso no autorizado a cuentas</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                      <p className="text-red-800 text-sm font-medium">❌ Spam o publicidad no solicitada</p>
                    </div>
                  </div>
                  
                  <p className="mt-4 text-muted-foreground text-sm">
                    El incumplimiento de estas normas puede resultar en la suspensión o eliminación de tu cuenta.
                  </p>
                </div>

                {/* Section 4: Content */}
                <div>
                  <h2 className="text-xl font-semibold mt-8 mb-4">4. Contenido del usuario</h2>
                  <p className="mb-4">
                    Al publicar contenido en HomiMatch (fotos, descripciones, mensajes):
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Garantizas que tienes los <strong>derechos necesarios</strong> sobre ese contenido</li>
                    <li>Garantizas que <strong>no infringe derechos de terceros</strong></li>
                    <li>Otorgas a HomiMatch una licencia para mostrar ese contenido dentro de la plataforma</li>
                  </ul>
                  <p className="mt-4 text-muted-foreground text-sm">
                    Nota: Tu contenido sigue siendo tuyo. Solo usamos la licencia para poder mostrarlo a otros usuarios 
                    dentro de la app.
                  </p>
                </div>

                {/* Section 5: Safety */}
                <div>
                  <h2 className="text-xl font-semibold mt-8 mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-homi-purple" />
                    5. Seguridad y responsabilidad
                  </h2>
                  <p className="mb-4">
                    Nos esforzamos por mantener un entorno seguro, pero es importante que tú también actúes con precaución:
                  </p>
                  
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      Recomendaciones de seguridad
                    </h3>
                    <ul className="space-y-1 text-amber-800 text-sm">
                      <li>• Conoce a otros usuarios en lugares públicos la primera vez</li>
                      <li>• No compartas información financiera o muy personal por chat</li>
                      <li>• Reporta comportamientos sospechosos o inapropiados</li>
                      <li>• Verifica la identidad de las personas antes de firmar contratos</li>
                    </ul>
                  </div>
                  
                  <p className="mt-4 text-muted-foreground text-sm">
                    HomiMatch no se responsabiliza de las interacciones que ocurran fuera de nuestra plataforma 
                    ni de los acuerdos de alquiler que realices con otros usuarios.
                  </p>
                </div>

                {/* Section 6: Modifications */}
                <div>
                  <h2 className="text-xl font-semibold mt-8 mb-4 flex items-center gap-2">
                    <RefreshCw className="w-5 h-5 text-homi-purple" />
                    6. Cambios en el servicio
                  </h2>
                  <p>
                    Nos reservamos el derecho de modificar, mejorar o discontinuar funcionalidades de HomiMatch. 
                    Te notificaremos sobre cambios significativos a través de la app o por email.
                  </p>
                </div>

                {/* Section 7: Termination */}
                <div>
                  <h2 className="text-xl font-semibold mt-8 mb-4">7. Terminación de cuenta</h2>
                  <div className="space-y-4">
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">Por tu parte:</h3>
                      <p className="text-muted-foreground text-sm">
                        Puedes eliminar tu cuenta en cualquier momento. Tus datos serán eliminados según 
                        nuestra política de privacidad.
                      </p>
                    </div>
                    
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">Por nuestra parte:</h3>
                      <p className="text-muted-foreground text-sm">
                        Podemos suspender o terminar tu cuenta si violas estos términos, actúas de forma 
                        fraudulenta o pones en riesgo a otros usuarios.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 8: Limitation */}
                <div>
                  <h2 className="text-xl font-semibold mt-8 mb-4">8. Limitación de responsabilidad</h2>
                  <p>
                    En la medida permitida por la ley, HomiMatch no será responsable por daños indirectos, 
                    incidentales o consecuentes derivados del uso de la plataforma. Esto incluye, pero no se limita a, 
                    pérdidas económicas derivadas de acuerdos con otros usuarios.
                  </p>
                </div>

                {/* Section 9: Applicable Law */}
                <div>
                  <h2 className="text-xl font-semibold mt-8 mb-4">9. Ley aplicable</h2>
                  <p>
                    Estos términos se rigen por la legislación española. Para cualquier controversia, 
                    las partes se someten a los juzgados y tribunales de España.
                  </p>
                </div>

                {/* Section 10: Contact */}
                <div>
                  <h2 className="text-xl font-semibold mt-8 mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-homi-purple" />
                    10. Contacto
                  </h2>
                  <p className="mb-4">
                    Si tienes alguna pregunta sobre estos Términos de Servicio, puedes contactarnos:
                  </p>
                  <div className="bg-homi-ultraLightPurple/50 p-4 rounded-lg">
                    <p className="font-semibold">📧 Email de contacto:</p>
                    <a 
                      href="mailto:contact@homimatch.com" 
                      className="text-homi-purple font-semibold hover:underline"
                    >
                      contact@homimatch.com
                    </a>
                  </div>
                </div>

                {/* Final note */}
                <div className="border-t border-border pt-6 mt-8">
                  <p className="text-muted-foreground text-sm text-center">
                    Al usar HomiMatch, confirmas que has leído, entendido y aceptado estos Términos de Servicio.
                  </p>
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

export default TermsPage;
