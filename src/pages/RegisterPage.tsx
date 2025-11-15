
import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    <div className="min-h-screen flex flex-col">
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
                          Unirme a la lista de espera
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
  );
};

export default RegisterPage;
