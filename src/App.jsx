import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';

// Lazy Loaded Pages
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Careers = lazy(() => import('./pages/Careers'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

// Services Sub-Pages
const WebDev = lazy(() => import('./pages/services/WebDev'));
const MobileDev = lazy(() => import('./pages/services/MobileDev'));
const AdminDash = lazy(() => import('./pages/services/AdminDash'));
const SaaSDev = lazy(() => import('./pages/services/SaaSDev'));
const FitGenCore = lazy(() => import('./pages/FitGenCore'));

// Premium Loading Spinner
const LoadingScreen = () => (
  <div className="min-h-screen bg-dark-bg flex flex-col items-center justify-center text-gray-300">
    <div className="relative flex items-center justify-center">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
      <div className="absolute h-6 w-6 rounded-full bg-blue-500/10 blur-xs"></div>
    </div>
    <span className="text-[10px] uppercase tracking-widest text-gray-500 mt-4 font-semibold">Loading WickGen</span>
  </div>
);

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-dark-bg text-gray-300 flex flex-col justify-between selection:bg-blue-600/30 selection:text-white">
      {/* Scroll to Top helper on route change */}
      <ScrollToTop />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Suspense fallback={<LoadingScreen />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route 
                path="/" 
                element={
                  <PageTransition>
                    <Home />
                  </PageTransition>
                } 
              />
              <Route 
                path="/services/web-development" 
                element={
                  <PageTransition>
                    <WebDev />
                  </PageTransition>
                } 
              />
              <Route 
                path="/services/mobile-development" 
                element={
                  <PageTransition>
                    <MobileDev />
                  </PageTransition>
                } 
              />
              <Route 
                path="/services/admin-dashboards" 
                element={
                  <PageTransition>
                    <AdminDash />
                  </PageTransition>
                } 
              />
              <Route 
                path="/services/saas-development" 
                element={
                  <PageTransition>
                    <SaaSDev />
                  </PageTransition>
                } 
              />
              <Route 
                path="/fitgencore" 
                element={
                  <PageTransition>
                    <FitGenCore />
                  </PageTransition>
                } 
              />
              <Route 
                path="/about" 
                element={
                  <PageTransition>
                    <AboutUs />
                  </PageTransition>
                } 
              />
              <Route 
                path="/careers" 
                element={
                  <PageTransition>
                    <Careers />
                  </PageTransition>
                } 
              />
              <Route 
                path="/contact" 
                element={
                  <PageTransition>
                    <Contact />
                  </PageTransition>
                } 
              />
              <Route 
                path="/privacy" 
                element={
                  <PageTransition>
                    <PrivacyPolicy />
                  </PageTransition>
                } 
              />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
