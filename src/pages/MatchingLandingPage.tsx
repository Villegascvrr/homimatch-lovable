import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MatchCard from '@/components/matching/MatchCard';
import { mockProfiles } from '@/data/mockProfiles';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

/**
 * Página de matching simplificada para la landing
 * Muestra perfiles fake que redirigen al registro
 */
const MatchingLandingPage = () => {
  const navigate = useNavigate();
  const {
    user
  } = useAuth();
  const handleProfileClick = () => {
    if (user) {
      // Si ya está registrado, ir a página de mantenimiento
      navigate('/maintenance');
    } else {
      // Si no está registrado, ir a registro
      navigate('/register');
    }
  };
  return (
    <>
      <Helmet>
        <title>Descubre Compañeros de Piso Compatibles | HomiMatch</title>
        <meta name="description" content="Explora perfiles de personas que comparten tus intereses y estilo de vida. Encuentra tu compañero de piso ideal con nuestro algoritmo de compatibilidad." />
        <link rel="canonical" href="https://homimatch.com/matching" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Descubre Compañeros de Piso Compatibles | HomiMatch" />
        <meta property="og:description" content="Explora perfiles de personas que comparten tus intereses y estilo de vida. Encuentra tu compañero de piso ideal con nuestro algoritmo de compatibilidad." />
        <meta property="og:image" content="https://homimatch.com/lovable-uploads/e5ed243f-ce37-4556-9a8d-2c8ca65a01a5.png" />
        <meta property="og:url" content="https://homimatch.com/matching" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="HomiMatch" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Descubre Compañeros de Piso Compatibles | HomiMatch" />
        <meta name="twitter:description" content="Explora perfiles de personas que comparten tus intereses y estilo de vida. Encuentra tu compañero de piso ideal con nuestro algoritmo de compatibilidad." />
        <meta name="twitter:image" content="https://homimatch.com/lovable-uploads/e5ed243f-ce37-4556-9a8d-2c8ca65a01a5.png" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8 mt-8">
        {/* Header */}
        <div className="text-center mb-12">
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Descubre <span className="homi-gradient-text">compañeros compatibles</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explora perfiles de personas que comparten tus intereses y estilo de vida
          </p>
          
          {!user && <Button size="lg" className="rounded-full bg-gradient-to-r from-homi-purple to-homi-lightPurple hover:from-homi-lightPurple hover:to-homi-purple" onClick={() => navigate('/register')}>
              Regístrate para ver más
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>}
        </div>

        {/* Grid de perfiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {mockProfiles.slice(0, 3).map(profile => <div key={profile.id} onClick={handleProfileClick} className="cursor-pointer transition-transform hover:scale-105">
              <MatchCard id={profile.id} name={profile.name} age={profile.age} location={profile.location} bio={profile.bio} imgUrl={profile.imgUrl} tags={profile.tags} compatibility={profile.compatibility} sevilla_zona={profile.sevilla_zona} roommatesNeeded={profile.roommatesNeeded} has_apartment={profile.has_apartment} onLike={handleProfileClick} onPass={handleProfileClick} onView={handleProfileClick} />
            </div>)}
        </div>

        {/* CTA final */}
        {!user && <div className="text-center mt-12 mb-8">
            <div className="bg-gradient-to-r from-homi-purple/10 to-homi-lightPurple/10 border border-homi-purple/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                ¿Listo para encontrar tu compañero ideal?
              </h3>
              
              <Button size="lg" className="rounded-full bg-gradient-to-r from-homi-purple to-homi-lightPurple hover:from-homi-lightPurple hover:to-homi-purple" onClick={() => navigate('/register')}>
                Crear cuenta gratis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>}
      </main>
        
        <Footer />
      </div>
    </>
  );
};
export default MatchingLandingPage;