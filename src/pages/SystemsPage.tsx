import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { SystemsComparisonSection } from '../components/SystemsComparisonSection.tsx';
import { KnxShellyShowcase } from '../components/KnxShellyShowcase.tsx';
import { Layers, ShieldCheck, CheckCircle2, ArrowRight, AlertTriangle, Sparkles } from 'lucide-react';

export const SystemsPage: React.FC = () => {
  return (
    <div className="bg-[#071822] text-slate-200">
      <PageHeader
        badge="Technologie & KNX"
        title="Architektury Magistralne i Hybrydowe: KNX, Loxone, Home Assistant"
        description="Obiektywne zestawienie systemów automatyki budynkowej. Analizujemy koszty, otwartość standardów, niezależność od chmury oraz wymagania dotyczące okablowania dla domów i apartamentów."
        icon={<Layers className="w-4 h-4 text-amber-400" />}
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85"
      />

      {/* Dreamy Visual Atmosphere Showcase for Lighting & Systems */}
      <section className="py-12 bg-[#05141D] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl overflow-hidden bg-[#0A2230]/70 border border-white/10 group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85"
                  alt="Światło architektoniczne i inteligentne sceny"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2230] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#071822]/80 backdrop-blur-md text-[11px] font-semibold text-amber-400 border border-white/10">
                  Ciepłe światło 2200K
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-white text-base">Architektura Światła Bez Olśnień</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light">
                  Niewidoczne linie LED COB w sufitach podwieszanych i cokołach tworzą miękki, nastrojowy klimat o zmierzchu.
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden bg-[#0A2230]/70 border border-white/10 group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=85"
                  alt="Minimalistyczne włączniki ścienne i panele dotykowe"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2230] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#071822]/80 backdrop-blur-md text-[11px] font-semibold text-sky-400 border border-white/10">
                  Jeden przycisk na ścianie
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-white text-base">Koniec z Baterią Włączników</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light">
                  Zamiast 6 oddzielnych klawiszy obok siebie montujemy jeden szklany lub metalowy panel KNX z termostatem.
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden bg-[#0A2230]/70 border border-white/10 group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85"
                  alt="Niezawodna magistrala przewodowa w szafie rozdzielczej"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2230] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#071822]/80 backdrop-blur-md text-[11px] font-semibold text-emerald-400 border border-white/10">
                  Przewód magistralny
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-white text-base">Stabilność na 30+ Lat</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light">
                  Standard przewodowy KNX gwarantuje, że instalacja działa bez zakłóceń radiowych nawet w gęstej zabudowie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Systems Comparison Matrix Component */}
      <SystemsComparisonSection onConsultSystem={() => {}} />

      {/* Deep Dive: Full Capabilities of KNX & Shelly System */}
      <KnxShellyShowcase />

      {/* Detailed Architectural Comparison Guidance */}
      <section className="py-16 bg-[#05141D] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Kiedy wybrać KNX, kiedy Loxone, a kiedy Home Assistant?
            </h2>
            <p className="mt-2 text-sm text-slate-300 font-light">
              Jako niezależny integrator nie forsujemy jednego producenta. Dobieramy technologię
              ściśle do etapu budowy, budżetu oraz preferencji użytkowników.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-[#0A2230]/70 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                  Stan surowy / Rezydencje
                </div>
                <h3 className="text-xl font-bold text-white mb-3">KNX (Magistrala TP1)</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4 font-light">
                  Wybierz KNX, jeśli budujesz dom od podstaw lub robisz generalny remont. Każde
                  urządzenie (włącznik, aktor, termostat) komunikuje się po zielonym kablu magistralnym.
                  Nawet jeśli procesor ulegnie uszkodzeniu, oświetlenie i rolety działają bez zarzutu.
                </p>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Żywotność instalacji: 30+ lat</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Ponad 500 certyfikowanych marek (Gira, ABB, Theben)</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/kalkulator"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300"
              >
                <span>Wyceń instalację KNX</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-3xl bg-[#0A2230]/70 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
                  Stan deweloperski / Kompletny ekosystem
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Loxone (Miniserver)</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4 font-light">
                  Wybierz Loxone, jeśli zależy Ci na gotowym, niesamowicie spójnym ekosystemie:
                  strefowym audio, oświetleniu nastrojowym, integracji HVAC i stacji meteo zarządzanych
                  przez jeden centralny sterownik PLC.
                </p>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>Natywna aplikacja z natychmiastowym czasem reakcji</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>Błyskawiczne parowanie z pompami ciepła i rekuperacją</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/kalkulator"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300"
              >
                <span>Wyceń instalację Loxone</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-3xl bg-[#0A2230]/70 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                  Wykończone wnętrza / Bez kucia ścian
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Home Assistant (Zigbee / Matter)</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4 font-light">
                  Idealne rozwiązanie, jeśli masz już pomalowane ściany. Montujemy dyskretne mikromoduły
                  w puszkach pod Twoimi istniejącymi włącznikami. Wszystko łączy się lokalnie z Twoim domowym serwerem.
                </p>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Montaż bez pyłu i niszczenia gładzi gipsowych</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Niezależność od chmury (Local-First 100%)</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/kalkulator"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
              >
                <span>Wyceń Home Assistant</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Local-First Warning Banner */}
          <div className="mt-12 p-6 rounded-3xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
            <div>
              <h4 className="text-sm font-bold text-white">
                Dlaczego DOMENCE nie instaluje tanich zabawek marketowych z chmurą producenta?
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed font-light">
                Typowe urządzenia marketowe (popularne gniazdka i żarówki Wi-Fi) komunikują się przez
                serwery w Azji. Kiedy w domu zabraknie internetu, tracisz kontrolę nad oświetleniem i
                ogrzewaniem. Co gorsza, producenci po kilku latach wyłączają swoje serwery, zamieniając
                Twoje urządzenia w elektrośmieci. W DOMENCE wdrażamy wyłącznie urządzenia pracujące w
                standardzie <strong>Local-First</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Area Banner */}
      <section className="py-12 bg-[#071822] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-slate-400">Kolejny obszar instalacji:</div>
            <div className="text-base font-bold text-white">
              Monitoring Wizyjny CCTV AI, Sieci LAN i Szafy RACK
            </div>
          </div>
          <Link
            to="/teletechnika"
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
