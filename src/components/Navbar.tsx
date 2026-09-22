import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, ArrowRight, Calculator, Sun, Moon } from 'lucide-react';
import { Logo } from './Logo.tsx';
import { useTheme } from '../context/ThemeContext.tsx';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // All sections laid out on a SINGLE level (no dropdowns or hidden submenus)
  const navLinks = [
    { label: 'Systemy & KNX', path: '/systemy' },
    { label: 'CCTV & Sieci', path: '/teletechnika' },
    { label: 'Multimedia & Ogród', path: '/multimedia-ogrod' },
    { label: 'Scenariusze', path: '/scenariusze' },
    { label: 'Pakiety', path: '/pakiety' },
    { label: 'FAQ', path: '/faq' },
  ];

  const isDay = theme === 'day';

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isDay
            ? isScrolled
              ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-md shadow-slate-200/50 py-2.5'
              : 'bg-white/90 backdrop-blur-md border-b border-slate-200/50 py-3.5'
            : isScrolled
              ? 'bg-[#040A10]/95 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/40 py-2.5'
              : 'bg-gradient-to-b from-[#040A10]/95 via-[#040A10]/80 to-transparent py-3.5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-6 flex items-center justify-between gap-2">
          
          {/* Brand Logo - acts as Home Icon / Button */}
          <Link
            to="/"
            className="flex items-center group shrink-0 transition-transform active:scale-95"
            title="DOMENCE - Strona Główna"
            aria-label="DOMENCE - Strona Główna"
          >
            <Logo size="sm" variant={isDay ? 'dark' : 'light'} showSubtitle={true} />
          </Link>

          {/* Desktop Navigation: ALL ITEMS ON A SINGLE ROW WITHOUT DROPDOWNS */}
          <nav className={`hidden lg:flex items-center gap-1 xl:gap-2 2xl:gap-3 text-[11px] xl:text-xs font-semibold uppercase tracking-wide ${
            isDay ? 'text-slate-600' : 'text-slate-300'
          }`}>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-2.5 xl:px-3 py-1.5 rounded-lg whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? isDay
                        ? 'text-amber-600 bg-amber-500/15 font-bold shadow-sm shadow-amber-500/10'
                        : 'text-amber-400 bg-amber-500/15 font-bold shadow-sm shadow-amber-500/10'
                      : isDay
                        ? 'hover:text-amber-600 hover:bg-slate-100'
                        : 'hover:text-amber-400 hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions + Day/Night Atmosphere Switcher */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-2.5 shrink-0">
            {/* Ambiance Switcher: Day (Dzień) vs Dreamy Dusk (Zmierzch) */}
            <button
              onClick={toggleTheme}
              className={`px-3 py-1.5 rounded-xl border text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                isDay
                  ? 'bg-slate-100/80 hover:bg-slate-200/80 border-slate-200 text-slate-700'
                  : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-300 hover:text-white'
              }`}
              title={isDay ? 'Włącz nastrojowy tryb wieczorny (Zmierzch)' : 'Włącz jasny tryb architektoniczny (Dzień)'}
              aria-label="Przełącz atmosferę dzień / zmierzch"
            >
              {isDay ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Zmierzch</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Dzień</span>
                </>
              )}
            </button>

            <Link
              to="/kontakt"
              className={`flex items-center gap-1.5 text-xs font-semibold transition-colors px-3 py-2 rounded-xl border whitespace-nowrap ${
                isDay
                  ? 'bg-slate-100 hover:bg-slate-200/80 border-slate-200 text-slate-700 hover:text-amber-600'
                  : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-300 hover:text-amber-400'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>Kontakt</span>
            </Link>

            <Link
              to="/kalkulator"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-amber-500/20 active:scale-95 flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Wycena</span>
            </Link>
          </div>

          {/* Mobile Right Controls: Ambiance Button + Menu Button */}
          <div className="flex sm:hidden items-center gap-1.5">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl border text-xs flex items-center justify-center transition-all ${
                isDay
                  ? 'bg-slate-100 border-slate-200 text-slate-700'
                  : 'bg-white/5 border-white/10 text-amber-400'
              }`}
              aria-label="Przełącz tryb dzień / zmierzch"
            >
              {isDay ? <Moon className="w-4 h-4 text-indigo-500" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border ${
                isDay
                  ? 'bg-slate-100 border-slate-200 text-slate-800'
                  : 'bg-white/5 border-white/10 text-slate-200 hover:text-white'
              }`}
              aria-label="Otwórz menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-x-0 top-[60px] z-40 border-b p-5 lg:hidden shadow-2xl max-h-[calc(100vh-65px)] overflow-y-auto ${
              isDay
                ? 'bg-white/98 backdrop-blur-2xl border-slate-200 text-slate-800'
                : 'bg-[#040A10]/98 backdrop-blur-2xl border-white/10 text-slate-200'
            }`}
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-semibold py-2.5 px-3 rounded-xl flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-amber-500/15 text-amber-500 font-bold'
                        : isDay
                          ? 'text-slate-700 hover:text-amber-600 hover:bg-slate-100'
                          : 'text-slate-200 hover:text-amber-400 hover:bg-white/5'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </NavLink>
              ))}

              <div className={`pt-3 flex flex-col gap-2.5 border-t mt-2 ${isDay ? 'border-slate-200' : 'border-white/10'}`}>
                <Link
                  to="/kalkulator"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Kalkulator Wyceny</span>
                </Link>

                <Link
                  to="/kontakt"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl border text-sm font-semibold ${
                    isDay
                      ? 'bg-slate-100 border-slate-200 text-slate-800'
                      : 'bg-white/5 border-white/10 text-slate-200'
                  }`}
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>Kontakt i Konsultacja</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
