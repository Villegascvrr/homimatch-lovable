import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { User, Edit } from 'lucide-react';
import ProfileForm from "./ProfileForm";
import ProfileAuthGate from '../auth/ProfileAuthGate';

const ProfilePage = () => {
  const { user, session, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [profileLoading, setProfileLoading] = useState(true);
  const [profile, setProfile] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  // Early return if not authenticated and not loading
  if (!loading && !user && !session) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20 pb-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ProfileAuthGate />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  useEffect(() => {
    const fetchProfileData = async () => {
      if (!user?.id) {
        console.log("No user ID available for profile fetch");
        setProfileLoading(false);
        return;
      }

      try {
        console.log("Fetching profile data for user ID:", user.id);
        setProfileLoading(true);
        setError(null);
        
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('auth_user_id', user.id)
          .maybeSingle();
        
        if (error) {
          console.error("Error fetching profile:", error.message);
          setError("No se pudo cargar el perfil. Por favor, inténtalo de nuevo.");
          throw error;
        }
        if (!data) {
          navigate('/profile/edit');
          return;
        }

        setProfile(data);
      } catch (err) {
        console.error("Error in fetchProfileData:", err);
      } finally {
        setProfileLoading(false);
      }
    };

    if (user) {
      fetchProfileData();
    } else if (!loading) {
      setProfileLoading(false);
    }
  }, [user, navigate, loading]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Refresh profile data
    if (user?.id) {
      supabase
        .from('profiles')
        .select('*')
        .eq('auth_user_id', user.id)
        .maybeSingle()
        .then(({ data }) => {
          if (data) setProfile(data);
        });
    }
  };

  if (loading || profileLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20 pb-12 bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground">Cargando perfil...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20 pb-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-6">
                <p className="text-destructive">{error}</p>
                <Button onClick={() => window.location.reload()} className="mt-4">
                  Reintentar
                </Button>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (isEditing) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20 pb-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ProfileForm 
                onSaved={handleSaveProfile}
                cancelEdit={() => setIsEditing(false)}
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">
                      {profile?.first_name} {profile?.last_name}
                    </h1>
                    <p className="text-muted-foreground">{profile?.email}</p>
                  </div>
                </div>
                <Button onClick={handleEditClick} variant="outline">
                  <Edit className="w-4 h-4 mr-2" />
                  Editar perfil
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Información básica</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Nombre</p>
                      <p className="font-medium">{profile?.first_name || 'No especificado'}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Apellido</p>
                      <p className="font-medium">{profile?.last_name || 'No especificado'}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">{profile?.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
