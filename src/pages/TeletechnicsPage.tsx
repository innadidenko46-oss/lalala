import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { TeletechnicsSection } from '../components/TeletechnicsSection.tsx';
import { HikvisionShowcase } from '../components/HikvisionShowcase.tsx';
import { Network, ShieldCheck, ArrowRight, Video, Server, HardDrive, Wifi, Eye } from 'lucide-react';

export const TeletechnicsPage: React.FC = () => {
  return (
    <div className="bg-[#071822] text-slate-200">
      <PageHeader
        badge="Teletechnika & CCTV"
        title="Monitoring Wizyjny AI, Bezpieczeństwo i Sieci LAN RACK 19''"
        description="Projektujemy i wykonujemy profesjonalną infrastrukturę teletechniczną. Cyfrowy monitoring 4K z rozpoznawaniem osób i pojazdów, 100% lokalny zapis NVR bez abonamentów i certyfikowane okablowanie strukturalne."
        icon={<Network className="w-4 h-4 text-sky-400" />}
        image="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=2000&q=85"
      />

      {/* Dreamy Visual Atmosphere Showcase for Security & Networks */}
      <section className="py-12 bg-[#05141D] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl overflow-hidden bg-[#0A2230]/70 border border-white/10 group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=85"
                  alt="Dyskretna kamera 4K z rozpoznawaniem osób"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2230] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#071822]/80 backdrop-blur-md text-[11px] font-semibold text-sky-400 border border-white/10">
                  Dyskrecja na elewacji
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-white text-base">Kamery 4K AI Bez Szpecenia Domu</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light">
                  Kamery w kolorze elewacji z inteligentnym filtrem – reagują na ludzi i auta, ignorując koty i kołyszące się gałęzie.
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden bg-[#0A2230]/70 border border-white/10 group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85"
                  alt="Szafa RACK i bezpieczny rejestrator danych"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2230] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#071822]/80 backdrop-blur-md text-[11px] font-semibold text-emerald-400 border border-white/10">
                  Zapis w szafie RACK
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-white text-base">Serce Domowej Sieci LAN</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light">
                  Wszystkie kable internetowe schodzą się do jednej zamykanej szafy technicznej. Czysty montaż z zasilaniem awaryjnym UPS.
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden bg-[#0A2230]/70 border border-white/10 group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=85"
                  alt="Szybkie Wi-Fi na terenie całej posesji"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2230] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#071822]/80 backdrop-blur-md text-[11px] font-semibold text-amber-400 border border-white/10">
                  Płynny Roaming Wi-Fi
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-white text-base">Internet w Ogrodzie i Garażu</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light">
                  Punkty dostępowe w sufitach zapewniają płynne przełączanie sygnału podczas spaceru po domu i ogrodzie bez zrywania połączeń.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Teletechnics Section Component */}
      <TeletechnicsSection />

      {/* Latest Hikvision Series Showcase */}
      <HikvisionShowcase />

      {/* Deep-dive into Local Security vs Cloud Cameras */}
      <section className="py-16 bg-[#05141D] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Dlaczego lokalny rejestrator NVR zamiast kamer z obcą chmurą?
            </h2>
            <p className="mt-2 text-sm text-slate-300 font-light">
              Większość tanich kamer domowych przesyła strumień wideo do serwerów zewnętrznych.
              W standardzie DOMENCE Twoje prywatne życie pozostaje wyłącznie w Twoim domu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-7 rounded-3xl bg-[#0A2230]/70 border border-emerald-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <HardDrive className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Standard DOMENCE: Rejestrator NVR PoE</h3>
                  <span className="text-xs text-emerald-400 font-semibold">100% Twoja Własność</span>
                </div>
              </div>
              <ul className="space-y-3 text-xs text-slate-300 font-light">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Brak miesięcznych opłat:</strong> Nie płacisz 20-50 zł/miesięcznie za każdą kamerę w abonamencie.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Bezpieczeństwo prywatności:</strong> Obraz z kamer nie opuszcza Twojej szafy RACK – nikt postronny nie ma do niego wglądu.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Stabilność PoE:</strong> Zasilanie i transmisja 4K odbywają się po jednym odpornym kablu ethernetowym (brak zrywania Wi-Fi).</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Dyski klasy Surveillance (WD Purple):</strong> Ciągły zapis 24/7 przez 30 dni z możliwością szybkiego przeszukiwania zdarzeń.</span>
                </li>
              </ul>
            </div>

            <div className="p-7 rounded-3xl bg-[#0A2230]/40 border border-red-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Typowe Kamery Chmurowe (Consumer Wi-Fi)</h3>
                  <span className="text-xs text-red-400 font-semibold">Zależność od dostawcy</span>
                </div>
              </div>
              <ul className="space-y-3 text-xs text-slate-400 font-light">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>Wymagają drogich subskrypcji, by przechowywać historię dłuższą niż 24 godziny.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>Ryzyko wycieku prywatnych nagrań do obcych serwerów poza krajem.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>Zaniki sygnału Wi-Fi i podatność na tanie zagłuszarki fal radiowych.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>Gdy w domu padnie internet, kamery przestają rejestrować zdarzenia.</span>
                </li>
              </ul>
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
              Efektywność Energetyczna, Bilansowanie PV i Ładowarki EV
            </div>
          </div>
          <Link
            to="/energetyka"
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
