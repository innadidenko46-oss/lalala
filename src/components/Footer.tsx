import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo.tsx';
import { Shield, Phone, Mail, MapPin, Cookie, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const openCookiePreferences = () => {
    localStorage.removeItem('domence_cookie_consent');
    window.location.reload();
  };

  return (
    <footer className="bg-[#040E15] border-t border-white/10 pt-16 pb-24 md:pb-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <Link to="/" aria-label="DOMENCE Strona Główna">
                <Logo size="md" variant="light" showSubtitle={true} />
              </Link>
              <p className="mt-4 text-slate-400 max-w-sm leading-relaxed text-xs">
                Inżynieryjne wdrożenia automatyki domowej (KNX, Home Assistant, Loxone), teletechniki,
                monitoringu CCTV AI oraz instalacji fotowoltaicznych i stacji ładowania EV.
                Autonomia offline Local-First, estetyczny montaż i przejrzyste rozdzielnice.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-mono text-amber-400">
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                Norma PN-HD 60364
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                Local-First Offline 100%
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                Lokalny NVR bez chmury RODO
              </span>
            </div>
          </div>

          {/* Chapters & Services */}
          <div className="md:col-span-5 grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
                Rozwiązania
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <Link to="/systemy" className="hover:text-amber-400 transition-colors">
                    Technologie & KNX
                  </Link>
                </li>
                <li>
                  <Link to="/teletechnika" className="hover:text-amber-400 transition-colors">
                    Monitoring CCTV & RACK
                  </Link>
                </li>
                <li>
                  <Link to="/multimedia-ogrod" className="hover:text-amber-400 transition-colors">
                    Multiroom & Ogród
                  </Link>
                </li>
                <li>
                  <Link to="/scenariusze" className="hover:text-amber-400 transition-colors">
                    Scenariusze Dnia
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
                Wdrożenia & Narzędzia
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <Link to="/pakiety" className="hover:text-amber-400 transition-colors">
                    Pakiety «Pod Klucz»
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-amber-400 transition-colors">
                    Baza Wiedzy & FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/kalkulator" className="hover:text-amber-400 transition-colors font-semibold text-amber-400">
                    Kalkulator Wyceny 360°
                  </Link>
                </li>
                <li>
                  <Link to="/kontakt" className="hover:text-amber-400 transition-colors">
                    Kontakt & Audyt 0 PLN
                  </Link>
                </li>
                <li>
                  <button
                    onClick={openCookiePreferences}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-slate-400 text-left cursor-pointer"
                  >
                    <Cookie className="w-3.5 h-3.5 text-amber-400" />
                    <span>Ustawienia plików cookies</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Kontakt z Inżynierem
            </h4>

            <a
              href="tel:+48221234567"
              className="flex items-center gap-2.5 text-xs text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <span>+48 22 123 45 67</span>
            </a>

            <a
              href="mailto:kontakt@domence.pl"
              className="flex items-center gap-2.5 text-xs text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-4 h-4 text-sky-400 shrink-0" />
              <span>kontakt@domence.pl</span>
            </a>

            <div className="flex items-start gap-2.5 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>ul. Cybernetyki 9, 02-677 Warszawa (Obszar: cała Polska)</span>
            </div>

            <div className="pt-2">
              <Link
                to="/kontakt"
                className="inline-block px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-[11px] transition-colors"
              >
                Formularz Audytu 0 PLN
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-300">
          <div>
            © {new Date().getFullYear()} DOMENCE Sp. z o.o. Wszelkie prawa zastrzeżone. Standard Inżynierski.
          </div>

          <div className="flex items-center gap-6">
            <span>Polityka Prywatności RODO</span>
            <span>Bezpieczeństwo Instalacji</span>
            <button
              onClick={openCookiePreferences}
              className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Cookie className="w-3 h-3 text-amber-400" />
              <span>Zarządzaj cookies</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
