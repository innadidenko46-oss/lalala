import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { MultiroomGardenSection } from '../components/MultiroomGardenSection.tsx';
import { Volume2, ArrowRight, Film, Wind, Trees, Sun, Music2 } from 'lucide-react';

export const MultiroomGardenPage: React.FC = () => {
  return (
    <div className="bg-[#071822] text-slate-200">
      <PageHeader
        badge="Multimedia & Ogród"
        title="Dźwięk Wielostrefowy Multiroom, Kino Domowe & Bezpieczny Ogród"
        description="Technologia, która służy Twojemu wypoczynkowi. Muzyka płynąca z dyskretnych głośników sufitowych, automatyczne sceny kinowe oraz ultradźwiękowa ochrona markiz i roślinności przed gwałtownymi zjawiskami pogodowymi."
        icon={<Volume2 className="w-4 h-4 text-purple-400" />}
        image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85"
      />

      {/* Dreamy Visual Atmosphere Showcase for Audio & Garden */}
      <section className="py-12 bg-[#05141D] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl overflow-hidden bg-[#0A2230]/70 border border-white/10 group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=85"
                  alt="Dyskretne głośniki architektoniczne w suficie"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2230] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#071822]/80 backdrop-blur-md text-[11px] font-semibold text-purple-400 border border-white/10">
                  Dźwięk bez kabli na widoku
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-white text-base">Głośniki Schowane w Suficie</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light">
                  Magnetyczne bezramkowe maskownice malowane pod kolor sufitu sprawiają, że źródło dźwięku staje się niewidoczne.
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden bg-[#0A2230]/70 border border-white/10 group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=85"
                  alt="Nastrojowy taras z muzyką o zmierzchu"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2230] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#071822]/80 backdrop-blur-md text-[11px] font-semibold text-amber-400 border border-white/10">
                  Strefa tarasowa IP66
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-white text-base">Taras i Ogród w Nocy</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light">
                  Odporne na mróz i deszcz nagłośnienie tarasowe pozwala cieszyć się ulubioną playlistą przy lampce wina.
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden bg-[#0A2230]/70 border border-white/10 group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85"
                  alt="Inteligentne zraszacze i stacja pogodowa"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2230] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#071822]/80 backdrop-blur-md text-[11px] font-semibold text-emerald-400 border border-white/10">
                  Czujnik wilgotności gleby
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-white text-base">Zraszanie Tylko Kiedy Trzeba</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light">
                  System nie podlewa trawnika w deszczowe dni ani w pełnym słońcu, oszczędzając do 40% wody rocznie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Multiroom & Garden Section Component */}
      <MultiroomGardenSection />

      {/* Deep-dive into Cinema & Garden Logic */}
      <section className="py-16 bg-[#05141D] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Kino domowe i stacja meteo zintegrowane w jednym systemie
            </h2>
            <p className="mt-2 text-sm text-slate-300 font-light">
              W tradycyjnym domu musisz używać 4 różnych pilotów i aplikacji. W DOMENCE wszystko
              działa w oparciu o naturalne sceny.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-7 rounded-3xl bg-[#0A2230]/70 border border-purple-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                  <Film className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Scena «Seans Kinowy» – 1 Kliknięcie</h3>
                  <span className="text-xs text-purple-400 font-semibold">Pełna automatyzacja salonu</span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4 font-light">
                Gdy wybierasz scenę kinową (przyciskiem na ścianie lub w aplikacji):
              </p>
              <ul className="space-y-2.5 text-xs text-slate-300 font-light">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Rolety zewnętrzne opuszczają się, eliminując odblaski słoneczne.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Główne oświetlenie płynnie gaśnie, a subtelne taśmy LED COB przy podłodze ściemniają się do 10%.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Amplituner audio Dolby Atmos uruchamia się z optymalnym źródłem dźwięku.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Wentylacja / rekuperacja przechodzi w cichy tryb, aby szum nie zakłócał dialogów.</span>
                </li>
              </ul>
            </div>

            <div className="p-7 rounded-3xl bg-[#0A2230]/70 border border-emerald-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Wind className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Autonomia Pogodowa i Ochrona Tarasu</h3>
                  <span className="text-xs text-emerald-400 font-semibold">Bezpieczeństwo w czasie burzy</span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4 font-light">
                Stacja meteorologiczna na dachu stale mierzy prędkość wiatru, temperaturę i opady:
              </p>
              <ul className="space-y-2.5 text-xs text-slate-300 font-light">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Wiatr powyżej 45 km/h automatycznie zwija markizy i żaluzje fasadowe, chroniąc je przed połamaniem.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Czujnik deszczu natychmiast zamyka okna dachowe przy pierwszych kroplach deszczu.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Automatyczne podlewanie zostaje wstrzymane, jeśli w ciągu ostatnich 12 godzin spadł deszcz.</span>
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
              Praktyczne Scenariusze Codziennego Dnia
            </div>
          </div>
          <Link
            to="/scenariusze"
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
