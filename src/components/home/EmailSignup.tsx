
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle2, ArrowRight, User, Mail } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useWaitingList } from '@/hooks/useWaitingList';
import { checkEmailExists } from '@/lib/waiting-list';
import { signInWithGoogleOAuth } from '@/lib/auth-helpers';

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: 'El nombre debe tener al menos 2 caracteres'
  }),
  lastName: z.string().min(2, {
    message: 'Los apellidos deben tener al menos 2 caracteres'
  }),
  email: z.string().email({
    message: 'Email inválido'
  })
});

const EmailSignup = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const formContainerRef = useRef<HTMLDivElement>(null);
  const { registerToWaitingList, isLoading } = useWaitingList();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    mode: "onBlur"
  });

  useEffect(() => {
    if (formContainerRef.current) {
      window.scrollTo(0, 0);
      setTimeout(() => {
        if (formContainerRef.current) {
          const headerOffset = 100;
          const formTop = formContainerRef.current.getBoundingClientRect().top;
          const offsetPosition = formTop + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 50);
    }
  }, []);

  // Remove email validation check - allow duplicates silently
  // useEffect(() => {
  //   const email = form.watch("email");
  //   if (!email || !email.includes('@')) return;
  //   
  //   const timer = setTimeout(() => {
  //     validateEmailNotInUse(email);
  //   }, 800);
  //   
  //   return () => clearTimeout(timer);
  // }, [form.watch("email")]);
  
  const validateEmailNotInUse = async (email: string) => {
    if (!email || !email.includes('@')) return;
    
    setIsCheckingEmail(true);
    try {
      const exists = await checkEmailExists(email);
      if (exists) {
        form.setError("email", {
          type: "manual",
          message: "Este correo electrónico ya está en nuestra lista de espera."
        });
      } else {
        form.clearErrors("email");
      }
    } catch (error) {
      console.error("Error checking email:", error);
    } finally {
      setIsCheckingEmail(false);
    }
  };

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
          title: "Error",
          description: result.error?.message || "Ha ocurrido un error. Inténtalo de nuevo.",
          variant: "destructive"
        });
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Ha ocurrido un error. Inténtalo de nuevo.",
        variant: "destructive"
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-homi-ultraLightPurple to-white dark:from-homi-purple/20 dark:to-background rounded-xl border border-homi-purple/20 shadow-md animate-fade-in">
        <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
        <h3 className="text-2xl font-bold mb-3">¡Gracias por registrarte!</h3>
        <p className="text-center text-lg mb-4">
          Te hemos añadido a nuestra lista de espera. Te notificaremos cuando la app esté lista.
        </p>
      </div>
    );
  }

  return <div className="w-full max-w-3xl mx-auto" ref={formContainerRef}>
      <div className="mb-6 text-center">
        <h3 className="text-xl font-semibold mb-2">Crea tu cuenta en Homi</h3>
        <p className="text-muted-foreground">
          Regístrate para encontrar compañeros de piso compatibles con tu estilo de vida.
        </p>
      </div>

      <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl p-6 md:p-8 animate-fade-in">
        
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField control={form.control} name="firstName" render={({
                field
              }) => <FormItem>
                    <FormLabel>Nombre *</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input 
                          id="firstName" 
                          placeholder="Tu nombre" 
                          className="pl-10 rounded-full" 
                          disabled={isLoading}
                          {...field}
                        />
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />
              
              <FormField control={form.control} name="lastName" render={({
                field
              }) => <FormItem>
                    <FormLabel>Apellidos *</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input 
                          id="lastName" 
                          placeholder="Tus apellidos" 
                          className="pl-10 rounded-full" 
                          disabled={isLoading}
                          {...field}
                        />
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />
            </div>
            
            <FormField control={form.control} name="email" render={({
              field
            }) => <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="tu@email.com" 
                        className={`pl-10 rounded-full ${isCheckingEmail ? 'pr-10' : ''}`}
                        disabled={isLoading}
                        {...field}
                      />
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      {isCheckingEmail && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-b-transparent"></div>
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>} />
            
            <Button 
              type="submit" 
              disabled={isLoading || isCheckingEmail} 
              className="w-full mt-6 rounded-full"
            >
              {isLoading ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-b-transparent mr-2"></div>
                  Registrando...
                </>
              ) : (
                <>
                  Unirme a HomiMatch
                  <ArrowRight className="ml-1 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </Form>
      </div>
      
      <div className="mt-4 text-center text-xs text-muted-foreground">
        Al crear tu perfil, aceptas nuestros términos y condiciones.
      </div>
    </div>;
};

export default EmailSignup;
