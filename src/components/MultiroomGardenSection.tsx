import React from 'react';
import { MULTIROOM_GARDEN } from '../data/content.ts';
import {
  Volume2,
  Film,
  CloudRain,
  Wind,
  Sun,
  Trees,
  CheckCircle2,
  Music2,
  Radio,
  Tv,
} from 'lucide-react';

export const MultiroomGardenSection: React.FC = () => {
  return (
    <section id="multimedia-ogrod" className="py-24 bg-[#071822] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Volume2 className="w-3.5 h-3.5" />
            <span>Multimedia, Kino Domowe & Ogród</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Muzyka w każdym pokoju. Ogród, który wie, kiedy podlać trawę.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Inteligentny dom to także relaks po ciężkim dniu. Wdrażamy bezramkowe głośniki sufitowe,
            automatyczne sceny kinowe oraz stacje meteo, które dbają o taras i trawnik.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Multiroom Audio & Cinema */}
          <div className="rounded-3xl bg-[#0A2230]/70 border border-white/10 p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                  <Music2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    {MULTIROOM_GARDEN.audio.title}
                  </h3>
                  <div className="text-xs text-purple-400 font-medium">Apple AirPlay 2 • Spotify Connect • Dolby Atmos</div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                {MULTIROOM_GARDEN.audio.desc}
              </p>

              <div className="p-4 rounded-2xl bg-[#071822] border border-white/5 text-xs text-slate-200 leading-relaxed mb-6">
                <span className="font-bold text-amber-300 block mb-1">Mówiąc po ludzku:</span>
                {MULTIROOM_GARDEN.audio.humanNote}
              </div>

              <div className="space-y-2.5">
                {MULTIROOM_GARDEN.audio.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
              <span>Głośniki podtynkowe z magnetyczną maskownicą</span>
              <span className="text-purple-400 font-mono">0 WIDOCZNYCH KABLI</span>
            </div>
          </div>

          {/* Card 2: Garden & Weather Protection */}
          <div className="rounded-3xl bg-[#0A2230]/70 border border-white/10 p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Trees className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    {MULTIROOM_GARDEN.garden.title}
                  </h3>
                  <div className="text-xs text-emerald-400 font-medium">Stacja pogodowa • Nawadnianie sekcyjne • Ochrona markiz</div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                {MULTIROOM_GARDEN.garden.desc}
              </p>

              <div className="p-4 rounded-2xl bg-[#071822] border border-white/5 text-xs text-slate-200 leading-relaxed mb-6">
                <span className="font-bold text-amber-300 block mb-1">Mówiąc po ludzku:</span>
                {MULTIROOM_GARDEN.garden.humanNote}
              </div>

              <div className="space-y-2.5">
                {MULTIROOM_GARDEN.garden.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
              <span>Ultradźwiękowa stacja bez ruchomych łopatek</span>
              <span className="text-emerald-400 font-mono">AUTO-ZWIANIE MARKIZ</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
