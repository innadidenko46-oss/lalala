import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext.tsx';
import { ScrollToTop } from './components/ScrollToTop.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { MobileStickyBar } from './components/MobileStickyBar.tsx';
import { CookieBanner } from './components/CookieBanner.tsx';

// Separate Section Pages
import { HomePage } from './pages/HomePage.tsx';
import { SystemsPage } from './pages/SystemsPage.tsx';
import { TeletechnicsPage } from './pages/TeletechnicsPage.tsx';
import { MultiroomGardenPage } from './pages/MultiroomGardenPage.tsx';
import { ScenariosPage } from './pages/ScenariosPage.tsx';
import { PackagesPage } from './pages/PackagesPage.tsx';
import { FaqPage } from './pages/FaqPage.tsx';
import { CalculatorPage } from './pages/CalculatorPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen font-sans selection:bg-amber-500 selection:text-slate-950 flex flex-col transition-colors duration-500 ${
      theme === 'day' ? 'bg-[#F8FAFC] text-slate-800' : 'bg-[#040A10] text-slate-200'
    }`}>
      {/* Persistent Global Navigation */}
      <Navbar />

      {/* Dynamic Route Content */}
      <main className="flex-1 pt-[68px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/systemy" element={<SystemsPage />} />
          <Route path="/teletechnika" element={<TeletechnicsPage />} />
          <Route path="/multimedia-ogrod" element={<MultiroomGardenPage />} />
          <Route path="/scenariusze" element={<ScenariosPage />} />
          <Route path="/pakiety" element={<PackagesPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/kalkulator" element={<CalculatorPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          {/* Redirects */}
          <Route path="/standard-pracy" element={<Navigate to="/pakiety" replace />} />
          <Route path="/energetyka" element={<Navigate to="/systemy" replace />} />
          <Route path="/pomiary-sep" element={<Navigate to="/systemy" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Persistent Mobile Quick-Bar */}
      <MobileStickyBar />

      {/* Cookie Consent Banner */}
      <CookieBanner />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <ScrollToTop />
        <AppContent />
      </HashRouter>
    </ThemeProvider>
  );
}
