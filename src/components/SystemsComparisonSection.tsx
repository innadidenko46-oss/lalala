import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SYSTEM_COMPARISONS } from '../data/content.ts';
import {
  Layers,
  Check,
  X,
  ShieldCheck,
  HelpCircle,
  Cpu,
  Cable,
  Wifi,
  DollarSign,
  ArrowRight,
  Info,
} from 'lucide-react';

export const SystemsComparisonSection: React.FC<{ onConsultSystem?: (systemName: string) => void }> = ({
  onConsultSystem,
}) => {
  const [activeSystemId, setActiveSystemId] = useState<string>('home_assistant');

  const activeSystem = SYSTEM_COMPARISONS.find((s) => s.id === activeSystemId) || SYSTEM_COMPARISONS[0];

  return (
    <section id="systemy" className="py-24 bg-[#071822] relative overflow-hidden border-t border-white/10">
      {/* Subtle ambient light */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Architektura & Technologie</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Rzetelne porównanie standardów
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
              Nie faworyzujemy na siłę jednego rozwiązania. Dobieramy technologię do etapu budowy, stanu tynków
              i Twojego budżetu. Zobacz szczere zestawienie zalet, wad i kosztów.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-2 text-xs text-slate-400 bg-[#0A2230] p-3 rounded-xl border border-white/5">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Kliknij system, aby zobaczyć szczegóły inżynieryjne</span>
          </div>
        </div>

        {/* System Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {SYSTEM_COMPARISONS.map((system) => {
            const isSelected = system.id === activeSystemId;
            return (
              <button
                key={system.id}
                onClick={() => setActiveSystemId(system.id)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-[#0A2230] border-amber-500/60 shadow-lg shadow-amber-500/10 ring-1 ring-amber-500/30'
                    : 'bg-[#0A2230]/40 border-white/5 hover:border-white/20 hover:bg-[#0A2230]/70'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        isSelected ? 'bg-amber-500/20 text-amber-300' : 'bg-white/5 text-slate-400'
                      }`}
                    >
                      {system.estimatedCostScale}
                    </span>
                    {system.id === 'home_assistant' && (
                      <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">
                        DOMENCE DEFAULT
                      </span>
                    )}
                  </div>
                  <div className="font-display font-bold text-white text-base sm:text-lg">
                    {system.name}
                  </div>
                </div>
                <div className="text-[11px] text-slate-400 mt-2 line-clamp-1">
                  {system.cableType}
                </div>
              </button>
            );
          })}
        </div>

        {/* In-depth System Detailed Panel */}
        <motion.div
          key={activeSystem.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl bg-[#0A2230]/80 border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl relative"
        >
          {/* Top Banner with Human Translation */}
          <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Co to oznacza dla Ciebie w praktyce? (Mówiąc po ludzku)
              </div>
              <p className="text-sm text-slate-200 mt-1 font-medium leading-relaxed">
                {activeSystem.humanVerdict}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Specs Column */}
            <div className="lg:col-span-4 space-y-5">
              <div className="p-4 rounded-xl bg-[#071822]/60 border border-white/5">
                <div className="text-xs text-slate-400 font-semibold mb-1">Dla kogo to najlepszy wybór?</div>
                <div className="text-sm font-medium text-white leading-relaxed">{activeSystem.bestFor}</div>
              </div>

              <div className="p-4 rounded-xl bg-[#071822]/60 border border-white/5">
                <div className="text-xs text-slate-400 font-semibold mb-1">Typ połączenia (okablowanie)</div>
                <div className="text-sm font-semibold text-sky-400 flex items-center gap-2">
                  <Cable className="w-4 h-4" />
                  <span>{activeSystem.cableType}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#071822]/60 border border-white/5">
                <div className="text-xs text-slate-400 font-semibold mb-1">Działanie offline bez internetu</div>
                <div className="text-sm font-semibold text-emerald-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{activeSystem.autonomyOffline}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#071822]/60 border border-white/5">
                <div className="text-xs text-slate-400 font-semibold mb-1">Szacowany koszt aparatury</div>
                <div className="text-sm font-semibold text-amber-400 flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  <span>Próg: {activeSystem.estimatedCostScale}</span>
                </div>
              </div>
            </div>

            {/* Right Pros & Cons Columns */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Pros */}
              <div className="p-5 rounded-2xl bg-[#071822]/70 border border-emerald-500/20">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
                  <Check className="w-4 h-4" />
                  <span>Zalety rozwiązania</span>
                </div>
                <ul className="space-y-3">
                  {activeSystem.pros.map((pro, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="p-5 rounded-2xl bg-[#071822]/70 border border-red-500/20">
                <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
                  <X className="w-4 h-4" />
                  <span>Ograniczenia i minusy</span>
                </div>
                <ul className="space-y-3">
                  {activeSystem.cons.map((con, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Action bottom banner */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              Chcesz skonsultować, który standard najlepiej sprawdzi się w Twoim domu?
            </div>
            <a
              href="#kalkulator"
              onClick={() => onConsultSystem?.(activeSystem.name)}
              className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-amber-500 hover:text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 border border-white/15"
            >
              <span>Dobierz system w kalkulatorze</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
