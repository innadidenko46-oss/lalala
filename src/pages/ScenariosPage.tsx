import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { ScenariosSection } from '../components/ScenariosSection.tsx';
import { Sparkles, ArrowRight, Droplets, LogOut, Moon, SunMedium } from 'lucide-react';

export const ScenariosPage: React.FC = () => {
  return (
    <div className="bg-[#071822] text-slate-200">
      <PageHeader
        badge="Scenariusze Dnia"
        title="Automatyzacja, Która Zdejmuje Stres z Twojej Głowy"
        description="Smart Home to nie gadżety w telefonie, lecz dom, który myśli za Ciebie. Odcinanie wody w 3 sekundy po zalaniu, bezpieczne przyjmowanie paczek od kuriera i automatyczne gaszenie wszystkich świateł przy wyjściu."
        icon={<Sparkles className="w-4 h-4 text-amber-400" />}
        image="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=85"
      />

      {/* Dreamy Visual Atmosphere Showcase for Scenarios */}
      <section className="py-12 bg-[#05141D] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl overflow-hidden bg-[#0A2230]/70 border border-white/10 group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=85"
                  alt="Spokojny poranek i automatyczne światło"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2230] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#071822]/80 backdrop-blur-md text-[11px] font-semibold text-amber-400 border border-white/10">
                  Budzenie światłem
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-white text-base">Łagodny Poranek</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light">
                  Żaluzje bezszelestnie unoszą się o określonej godzinie, a światło w łazience włącza się na delikatne 20%.
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden bg-[#0A2230]/70 border border-white/10 group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85"
                  alt="Jeden przycisk wyjścia z domu"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2230] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#071822]/80 backdrop-blur-md text-[11px] font-semibold text-sky-400 border border-white/10">
                  Przycisk Master-Off
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-white text-base">Pewność Przy Wyjściu</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light">
                  Nigdy więcej wracania z połowy drogi, by sprawdzić żelazko czy okno. Jeden klik przy drzwiach gasi wszystko.
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden bg-[#0A2230]/70 border border-white/10 group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85"
                  alt="Bezpieczeństwo wodne i ochrona przed zalaniem"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2230] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#071822]/80 backdrop-blur-md text-[11px] font-semibold text-emerald-400 border border-white/10">
                  Tarcza w 3 sekundy
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-white text-base">Ochrona Przed Zalaniem</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light">
                  Zawór ze sprężyną zamyka główny dopływ wody natychmiast po wykryciu wilgoci pod zmywarką lub pralką.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Scenarios Section Component */}
      <ScenariosSection />

      {/* Deep-dive into Fail-Safe Engineering */}
      <section className="py-16 bg-[#05141D] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Czym różni się zasada Fail-Safe od amatorskich rozwiązań?
            </h2>
            <p className="mt-2 text-sm text-slate-300 font-light">
              Prawdziwa inżynieria zakłada najgorszy możliwy scenariusz: pęka wężyk pod umywalką,
              a w tym samym momencie burza uszkadza linię zasilającą dom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-[#0A2230]/70 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Zawór ze Sprężyną Powrotną</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Stosujemy zawory kulowe z mechaniczną sprężyną. Nawet jeśli w całym domu nie ma prądu,
                sprężyna samoczynnie domyka zawór wody, chroniąc dębowe parkiety.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0A2230]/70 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
                <LogOut className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Fizyczny Przycisk Ścienny</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Przycisk «Wyjście z Domu» przy drzwiach wejściowych jest połączony kablem.
                Działa w 100% niezawodnie, nawet jeśli Twój smartfon się rozładował.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0A2230]/70 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Moon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Autonomia 24/7/365</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Wszystkie reguły logiczne pracują na domowym kontrolerze DIN. Brak internetu nie ma żadnego
                wpływu na harmonogramy, temperaturę czy reakcję na czujniki ruchu.
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
              Pakiety Wdrożeniowe «Pod Klucz»
            </div>
          </div>
          <Link
            to="/pakiety"
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
