import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { PackagesSection } from '../components/PackagesSection.tsx';
import { Package, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Clock, Calculator } from 'lucide-react';
import { PropertyState } from '../types.ts';

export const PackagesPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectPackage = (propertyState: PropertyState) => {
    navigate(`/kalkulator?state=${propertyState}`);
  };

  return (
    <div className="bg-[#071822] text-slate-200">
      <PageHeader
        badge="Pakiety Wdrożeniowe"
        title="Przejrzyste Pakiety «Pod Klucz» z Gwarancją Stałej Ceny"
        description="Sprzęt w cenach dystrybucyjnych + profesjonalny montaż inżynieryjny DOMENCE + 24 miesiące formalnej gwarancji. Wybierz pakiet dopasowany do stanu Twojego lokalu."
        icon={<Package className="w-4 h-4 text-emerald-400" />}
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=85"
      />

      {/* Dreamy Visual Atmosphere Showcase for Property Packages */}
      <section className="py-12 bg-[#05141D] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl overflow-hidden bg-[#0A2230]/70 border border-white/10 group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85"
                  alt="Domy w budowie i stan surowy otwarty"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2230] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#071822]/80 backdrop-blur-md text-[11px] font-semibold text-amber-400 border border-white/10">
                  Stan Surowy / Budowa
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-white text-base">Magistrala Przewodowa KNX</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light">
                  Kompletne ułożenie zielonych kabli magistralnych i szafy sterowniczej przed tynkami i wylewkami.
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden bg-[#0A2230]/70 border border-white/10 group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85"
                  alt="Apartamenty w stanie deweloperskim"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2230] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#071822]/80 backdrop-blur-md text-[11px] font-semibold text-sky-400 border border-white/10">
                  Stan Deweloperski
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-white text-base">Adaptacja Istniejących Obwodów</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light">
                  Wykorzystanie zastanych puszek i okablowania. Inteligentne oświetlenie, rolety i strefowe sterowanie ciepłem.
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden bg-[#0A2230]/70 border border-white/10 group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=85"
                  alt="Wnętrza zamieszkane bez niszczenia ścian"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2230] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#071822]/80 backdrop-blur-md text-[11px] font-semibold text-emerald-400 border border-white/10">
                  Wnętrza Wykończone
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-white text-base">Modernizacja Bez Pyłu</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light">
                  Montaż w puszkach bez naruszania gładzi. Zero malowania po montażu, 100% lokalna automatyka.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Packages Section Component */}
      <PackagesSection onSelectPackage={handleSelectPackage} />

      {/* What every package includes */}
      <section className="py-16 bg-[#05141D] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Co zawiera każdy pakiet DOMENCE bez żadnych ukrytych dopłat?
            </h2>
            <p className="mt-2 text-sm text-slate-300 font-light">
              W przeciwieństwie do ekip doliczających koszty za każdy metr kabla i puszkę,
              w DOMENCE otrzymujesz stałą, przejrzystą wycenę ryczałtową.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-[#0A2230]/70 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Projekt Wykonawczy</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Indywidualny rzut instalacji, dobór aparatów modułowych oraz bilans mocy urządzeń.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0A2230]/70 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Czysty Montaż</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Estetyczny montaż, zabezpieczenie podłóg filcem i bezpyłowe wiercenie w ścianach.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0A2230]/70 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Testy Bezpieczeństwa</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Weryfikacja sprawności wyłączników różnicowoprądowych, ciągłości pętli i pełna kontrola działania urządzeń.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0A2230]/70 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">24 Miesiące Opieki</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Gwarancja na piśmie, zdalne wsparcie konfiguratora oraz bezpłatna optymalizacja scen po 30 dniach od wdrożenia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Area Banner */}
      <section className="py-12 bg-[#071822] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-slate-400">Kolejny obszar portalu:</div>
            <div className="text-base font-bold text-white">
              Baza Wiedzy, Odpowiedzi na Pytania & FAQ
            </div>
          </div>
          <Link
            to="/faq"
            className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
          >
            <span>Zobacz szczegóły</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
