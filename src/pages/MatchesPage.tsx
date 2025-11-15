import { useAuth } from '@/context/AuthContext';
import AuthRequiredNotice from '@/components/auth/AuthRequiredNotice';
import AppInDevelopmentNotice from '@/components/auth/AppInDevelopmentNotice';

const MatchesPage = () => {
  const { session } = useAuth();

  if (!session) {
    return <AuthRequiredNotice message="Para ver tus matches, necesitas iniciar sesión o registrarte" />;
  }

  return <AppInDevelopmentNotice />;
};

export default MatchesPage;
