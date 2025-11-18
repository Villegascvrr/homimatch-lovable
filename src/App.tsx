import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Index from '@/pages/Index';
import RegisterPage from '@/pages/RegisterPage';
import SignInPage from '@/pages/SignInPage';
import ScrollToTop from '@/components/layout/ScrollToTop';
import { AuthProvider } from '@/context/AuthContext';
import { Toaster } from '@/components/ui/toaster';

// Lazy load pages para reducir el bundle inicial
const MaintenancePage = lazy(() => import('@/pages/MaintenancePage'));
const MatchingLandingPage = lazy(() => import('@/pages/MatchingLandingPage'));
const ForgotPasswordPage = lazy(() => import('./pages/ForgotPasswordPage'));
const ResetPasswordPage = lazy(() => import('./pages/ResetPasswordPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const CookiesPage = lazy(() => import('./pages/CookiesPage'));
const ChatPage = lazy(() => import('./pages/ChatPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const MatchesPage = lazy(() => import('./pages/MatchesPage'));
const SeoCityLandingPage = lazy(() => import('./pages/SeoCityLandingPage'));
const SeoCitiesIndexPage = lazy(() => import('./pages/SeoCitiesIndexPage'));

// Componente de carga simple
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <div className="min-h-screen bg-background pt-16 md:pt-20">
            <ScrollToTop />
            <Suspense fallback={<PageLoader />}>
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
            </Suspense>
            <Toaster />
          </div>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
