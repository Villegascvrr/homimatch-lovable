import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import ProfileBasicInfo from "./ProfileBasicInfo";
import { Card } from "@/components/ui/card";

// Schema simplificado solo con datos básicos
const formSchema = z.object({
  firstName: z.string().min(1, 'El nombre es requerido'),
  lastName: z.string().min(1, 'El apellido es requerido'),
  email: z.string().email('Email inválido'),
});

type FormValues = z.infer<typeof formSchema>;

interface ProfileFormProps {
  onSaved?: () => void;
  cancelEdit?: () => void;
}

const ProfileForm = ({ onSaved, cancelEdit }: ProfileFormProps) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  });

  // Cargar datos del perfil
  useEffect(() => {
    const loadProfile = async () => {
      if (!user) return;
      
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('auth_user_id', user.id)
          .single();

        if (error) throw error;

        if (data) {
          form.reset({
            firstName: data.first_name || '',
            lastName: data.last_name || '',
            email: data.email || '',
          });
        }
      } catch (error) {
        console.error('Error loading profile:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [user, form]);

  const onSubmit = async (values: FormValues) => {
    if (!user) return;
    
    setSubmitting(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          first_name: values.firstName,
          last_name: values.lastName,
          email: values.email,
          updated_at: new Date().toISOString(),
        })
        .eq('auth_user_id', user.id);

      if (error) throw error;

      toast({
        title: "Perfil actualizado",
        description: "Los cambios se han guardado correctamente.",
      });

      if (onSaved) {
        onSaved();
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        title: "Error",
        description: "No se pudo actualizar el perfil.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <Card className="p-6">
        <p className="text-center text-muted-foreground">Cargando...</p>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <ProfileBasicInfo form={form} />
          
          <div className="flex gap-4 justify-end">
            {cancelEdit && (
              <Button
                type="button"
                variant="outline"
                onClick={cancelEdit}
                disabled={submitting}
              >
                Cancelar
              </Button>
            )}
            <Button type="submit" disabled={submitting}>
              {submitting ? 'Guardando...' : 'Guardar cambios'}
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
};

export default ProfileForm;
