
import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { 
  Mail, 
  User,
  ArrowRight,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { useIsMobile } from '@/hooks/use-mobile';
import { useWaitingList } from '@/hooks/useWaitingList';
import { checkEmailExists } from '@/lib/waiting-list';
import { signInWithGoogleOAuth } from '@/lib/auth-helpers';

const formSchema = z.object({
  firstName: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres' }),
  lastName: z.string().min(2, { message: 'Los apellidos deben tener al menos 2 caracteres' }),
  email: z.string().email({ message: 'Email inválido' }),
  terms: z.boolean().refine(val => val === true, {
    message: 'Debes aceptar los términos y condiciones',
  }),
});

const RegisterPage = () => {
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const formContainerRef = useRef<HTMLDivElement>(null);
  const { registerToWaitingList, isLoading } = useWaitingList();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      terms: false,
    },
    mode: "onBlur"
  });
  
  // Remove email validation check - allow duplicates silently
  // useEffect(() => {
  //   const email = form.watch("email");
  //   if (!email || !email.includes('@')) {
  //     setIsCheckingEmail(false);
  //     return;
  //   }
  //   
  //   setIsCheckingEmail(true);
  //   const timer = setTimeout(async () => {
  //     try {
  //       const exists = await checkEmailExists(email);
  //       if (exists) {
  //         form.setError("email", {
  //           type: "manual",
  //           message: "Este correo electrónico ya está en nuestra lista de espera."
  //         });
  //       } else {
  //         form.clearErrors("email");
  //       }
  //     } catch (error) {
  //       console.error("Error checking email:", error);
  //     } finally {
  //       setIsCheckingEmail(false);
  //     }
  //   }, 800);
  //   
  //   return () => {
  //     clearTimeout(timer);
  //     setIsCheckingEmail(false);
  //   };
  // }, [form.watch("email")]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Prevent multiple submissions
    if (isLoading) return;
    
    try {
      const result = await registerToWaitingList({
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
      });

      if (result.success) {
        // Navegar directamente sin mostrar toast
        const isNew = !result.alreadyExists;
        navigate(`/maintenance?isNew=${isNew}`);
      } else {
        toast({
          title: "Error en el registro",
          description: result.error?.message || "Ha ocurrido un error al registrarte",
          variant: "destructive",
        });
      }
    } catch (error: any) {
      console.error("Error during registration:", error);
      toast({
        title: "Error",
        description: error.message || "Ha ocurrido un error al registrarte",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Regístrate Gratis | HomiMatch - Encuentra tu Compañero de Piso</title>
        <meta name="description" content="Únete a HomiMatch y encuentra tu compañero de piso ideal. Regístrate gratis y accede a nuestro algoritmo inteligente de compatibilidad. ¡Empieza hoy!" />
        <link rel="canonical" href="https://homimatch.com/register" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Regístrate Gratis | HomiMatch - Encuentra tu Compañero de Piso" />
        <meta property="og:description" content="Únete a HomiMatch y encuentra tu compañero de piso ideal. Regístrate gratis y accede a nuestro algoritmo inteligente de compatibilidad. ¡Empieza hoy!" />
        <meta property="og:image" content="https://homimatch.com/lovable-uploads/e5ed243f-ce37-4556-9a8d-2c8ca65a01a5.png" />
        <meta property="og:url" content="https://homimatch.com/register" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="HomiMatch" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Regístrate Gratis | HomiMatch - Encuentra tu Compañero de Piso" />
        <meta name="twitter:description" content="Únete a HomiMatch y encuentra tu compañero de piso ideal. Regístrate gratis y accede a nuestro algoritmo inteligente de compatibilidad. ¡Empieza hoy!" />
        <meta name="twitter:image" content="https://homimatch.com/lovable-uploads/e5ed243f-ce37-4556-9a8d-2c8ca65a01a5.png" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
      
      <main className="flex-grow pt-20 pb-12">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto" ref={formContainerRef}>
            <div className="glass-card p-4 md:p-8 rounded-xl mb-20">
              <div className="text-center mb-8">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                  <span className="homi-gradient-text">Crear tu cuenta</span>
                </h1>
                <p className="text-muted-foreground">
                  Únete a HomiMatch y encuentra tu compañero de piso ideal
                </p>
              </div>
              
              {/* Google Sign In Button */}
              <div className="mb-6">
                <Button 
                  type="button"
                  className="w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 flex items-center justify-center gap-2 rounded-full"
                  onClick={() => signInWithGoogleOAuth()}
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                    <path d="M1 1h22v22H1z" fill="none" />
                  </svg>
                  Continuar con Google
                </Button>
              </div>

              {/* Divider */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">O regístrate con email</span>
                </div>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-4 sm:space-y-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nombre</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input 
                                  placeholder="Tu nombre" 
                                  className="pl-10 rounded-full" 
                                  {...field} 
                                />
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Apellidos</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input 
                                  placeholder="Tus apellidos" 
                                  className="pl-10 rounded-full" 
                                  {...field} 
                                />
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Correo electrónico</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input 
                                placeholder="tu@email.com" 
                                type="email" 
                                className={`pl-10 rounded-full ${isCheckingEmail ? 'pr-10' : ''}`} 
                                {...field} 
                              />
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                              {isCheckingEmail && (
                                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-homi-purple border-b-transparent"></div>
                                </div>
                              )}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="terms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-normal">
                              Acepto los <Link to="/terms" className="text-homi-purple hover:underline">términos y condiciones</Link> y la <Link to="/privacy" className="text-homi-purple hover:underline">política de privacidad</Link>
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit"
                      className="rounded-full bg-homi-purple hover:bg-homi-purple/90 w-full mt-4 flex items-center gap-1"
                      disabled={isLoading || isCheckingEmail}
                    >
                      {isLoading ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-b-transparent"></div>
                          Registrando...
                        </>
                      ) : (
                        <>
                          Unirme a HomiMatch
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </>
                      )}
                    </Button>
                    
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>
        
        <Footer />
      </div>
    </>
  );
};

export default RegisterPage;
