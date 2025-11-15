import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Index from '@/pages/Index';
import RegisterPage from '@/pages/RegisterPage';
import SignInPage from '@/pages/SignInPage';
import MaintenancePage from '@/pages/MaintenancePage';
import MatchingLandingPage from '@/pages/MatchingLandingPage';
import ScrollToTop from '@/components/layout/ScrollToTop';
import { AuthProvider } from '@/context/AuthContext';
import { Toaster } from '@/components/ui/toaster';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CookiesPage from './pages/CookiesPage';
import ChatPage from './pages/ChatPage';
import ProfilePage from './pages/ProfilePage';
import MatchesPage from './pages/MatchesPage';
import SeoCityLandingPage from './pages/SeoCityLandingPage';
import SeoCitiesIndexPage from './pages/SeoCitiesIndexPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <div className="min-h-screen bg-background pt-16 md:pt-20">
            <ScrollToTop />
            <Routes>
              {/* Rutas principales */}
              <Route path="/" element={<Index />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/maintenance" element={<MaintenancePage />} />
              <Route path="/matching" element={<MatchingLandingPage />} />
              
              {/* SEO Landing Pages */}
              <Route path="/companero-de-piso" element={<SeoCitiesIndexPage />} />
              <Route path="/companero-de-piso/:city" element={<SeoCityLandingPage />} />
              
              {/* Autenticación */}
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/reset-password" element={<ResetPasswordPage />} />
              
              {/* Legales */}
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/cookies" element={<CookiesPage />} />
              
              {/* Rutas protegidas */}
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/matches" element={<MatchesPage />} />
              
              {/* Redirigir rutas antiguas a registro o mantenimiento */}
              <Route path="/precios" element={<Navigate to="/register" replace />} />
              <Route path="/suscripcion" element={<Navigate to="/register" replace />} />
              <Route path="/success" element={<Navigate to="/maintenance" replace />} />
              <Route path="/profile/edit" element={<Navigate to="/maintenance" replace />} />
              <Route path="/coming-soon" element={<Navigate to="/maintenance" replace />} />
              
              {/* 404 - Redirigir al inicio */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Toaster />
          </div>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
