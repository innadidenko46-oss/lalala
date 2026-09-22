import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { KNX_SHELLY_CAPABILITIES } from '../data/content.ts';
import {
  Sparkles,
  Sun,
  SlidersHorizontal,
  Flame,
  Volume2,
  Radar,
  Smartphone,
  CheckCircle2,
  Cpu,
  Radio,
  ArrowRight,
  Mic,
  Music,
  Wind,
  Moon,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';
import { Link } from 'react-router-dom';

export const KnxShellyShowcase: React.FC = () => {
  const [activeCapId, setActiveCapId] = useState<string>(KNX_SHELLY_CAPABILITIES[0].id);
  const { theme } = useTheme();
  const isDay = theme === 'day';

  const activeCap =
    KNX_SHELLY_CAPABILITIES.find((c) => c.id === activeCapId) || KNX_SHELLY_CAPABILITIES[0];

  const getCapIcon = (id: string) => {
    switch (id) {
      case 'cap-lighting':
        return <Sun className="w-5 h-5" />;
      case 'cap-blinds':
        return <SlidersHorizontal className="w-5 h-5" />;
      case 'cap-climate':
        return <Flame className="w-5 h-5" />;
      case 'cap-audio':
        return <Volume2 className="w-5 h-5" />;
      case 'cap-sensors':
        return <Radar className="w-5 h-5" />;
      default:
        return <Smartphone className="w-5 h-5" />;
    }
  };

  return (
    <section className={`py-20 relative overflow-hidden transition-colors duration-500 border-t ${
      isDay ? 'bg-slate-100/70 border-slate-200 text-slate-800' : 'bg-[#06141F] border-white/10 text-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 border ${
              isDay
                ? 'bg-amber-100 text-amber-900 border-amber-300'
                : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
            }`}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>Maksimum Możliwości Systemu</span>
            </div>
            <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
              isDay ? 'text-slate-950' : 'text-white'
            }`}>
              KNX & Shelly: Od subtelnych rolet po komendę «Chcę poćwiczyć jogę»
            </h2>
            <p className={`mt-3 text-sm sm:text-base leading-relaxed ${
              isDay ? 'text-slate-600' : 'text-slate-300'
            }`}>
              Połączenie niezniszczalnej magistrali przewodowej <strong>KNX</strong> z elastycznymi modułami <strong>Shelly Plus & Pro</strong>. 
              Zobacz, jak dom reaguje na pozycję słońca, komendy głosowe i codzienne nastroje domowników.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className={`px-3 py-1.5 rounded-xl border font-mono font-medium ${
              isDay ? 'bg-white border-slate-300 text-slate-700' : 'bg-white/5 border-white/10 text-slate-300'
            }`}>
              Magistrala KNX TP1
            </span>
            <span className={`px-3 py-1.5 rounded-xl border font-mono font-medium ${
              isDay ? 'bg-white border-slate-300 text-slate-700' : 'bg-white/5 border-white/10 text-slate-300'
            }`}>
              Shelly Pro LAN DIN
            </span>
            <span className={`px-3 py-1.5 rounded-xl border font-mono font-medium ${
              isDay ? 'bg-white border-slate-300 text-slate-700' : 'bg-white/5 border-white/10 text-slate-300'
            }`}>
              100% Offline Local-First
            </span>
          </div>
        </div>

        {/* Feature Interactive Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {KNX_SHELLY_CAPABILITIES.map((cap) => {
            const isSelected = cap.id === activeCapId;
            return (
              <button
                key={cap.id}
                onClick={() => setActiveCapId(cap.id)}
                className={`p-3.5 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? isDay
                      ? 'bg-white border-amber-500 shadow-md shadow-amber-500/15 ring-1 ring-amber-500'
                      : 'bg-[#0E2A3C] border-amber-400 shadow-lg shadow-amber-500/10 ring-1 ring-amber-400/40'
                    : isDay
                      ? 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                      : 'bg-[#0A2230]/50 border-white/5 hover:border-white/15 hover:bg-[#0A2230]'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-2.5 ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : isDay
                      ? 'bg-slate-100 text-slate-600'
                      : 'bg-white/5 text-slate-400'
                }`}>
                  {getCapIcon(cap.id)}
                </div>
                <div>
                  <div className={`text-[10px] font-bold uppercase tracking-wider line-clamp-1 ${
                    isSelected
                      ? isDay ? 'text-amber-800' : 'text-amber-400'
                      : isDay ? 'text-slate-500' : 'text-slate-400'
                  }`}>
                    {cap.badge}
                  </div>
                  <div className={`text-xs font-bold mt-0.5 leading-snug line-clamp-2 ${
                    isDay ? 'text-slate-900' : 'text-white'
                  }`}>
                    {cap.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Capability Deep Dive Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCap.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className={`rounded-3xl border p-6 sm:p-8 lg:p-10 shadow-2xl ${
              isDay
                ? 'bg-white border-slate-200 shadow-slate-200/70'
                : 'bg-[#0A2230]/90 border-white/10 shadow-black/40'
            }`}
          >
            {/* Top row: Title and Real Life Scenario Highlight */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 pb-8 border-b border-slate-200 dark:border-white/10">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                    isDay ? 'bg-amber-100 text-amber-900' : 'bg-amber-500/20 text-amber-300'
                  }`}>
                    {activeCap.badge}
                  </span>
                </div>
                <h3 className={`font-display text-2xl sm:text-3xl font-extrabold ${
                  isDay ? 'text-slate-900' : 'text-white'
                }`}>
                  {activeCap.title}
                </h3>
                <p className={`mt-3 text-sm sm:text-base leading-relaxed font-light ${
                  isDay ? 'text-slate-600' : 'text-slate-300'
                }`}>
                  {activeCap.description}
                </p>

                {/* Bullet Features Checklist */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeCap.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span className={isDay ? 'text-slate-700' : 'text-slate-300'}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real-Life Experience Scenario Box */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div className={`p-5 rounded-2xl border ${
                  isDay
                    ? 'bg-gradient-to-br from-amber-50 to-orange-50/50 border-amber-200/80 text-slate-800'
                    : 'bg-gradient-to-br from-amber-500/10 via-[#071822] to-amber-500/5 border-amber-500/30 text-slate-200'
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span className={`text-xs font-bold uppercase tracking-wider ${
                      isDay ? 'text-amber-900' : 'text-amber-400'
                    }`}>
                      Scenariusz w Codziennym Życiu
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed italic font-medium">
                    "{activeCap.scenariosExample}"
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-dashed border-slate-200 dark:border-white/10 flex items-center justify-between text-xs">
                  <span className={isDay ? 'text-slate-500' : 'text-slate-400'}>
                    Działa automatycznie w tle
                  </span>
                  <Link
                    to="/scenariusze"
                    className="font-bold text-amber-500 hover:text-amber-600 flex items-center gap-1.5 transition-colors"
                  >
                    <span>Zobacz wszystkie scenariusze</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Comparison: KNX Engineering vs Shelly Execution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* KNX Role */}
              <div className={`p-5 sm:p-6 rounded-2xl border ${
                isDay
                  ? 'bg-slate-50 border-slate-200 text-slate-800'
                  : 'bg-[#071822] border-white/5 text-slate-300'
              }`}>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    KNX
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold ${isDay ? 'text-slate-900' : 'text-white'}`}>
                      Inżynieria Magistralna KNX
                    </h4>
                    <span className="text-[10px] text-emerald-500 font-semibold uppercase tracking-wider">
                      Trwałość na 30 lat • Zielony przewód magistralny
                    </span>
                  </div>
                </div>
                <p className="text-xs leading-relaxed font-light">
                  {activeCap.knxAdvantage}
                </p>
              </div>

              {/* Shelly Role */}
              <div className={`p-5 sm:p-6 rounded-2xl border ${
                isDay
                  ? 'bg-slate-50 border-slate-200 text-slate-800'
                  : 'bg-[#071822] border-white/5 text-slate-300'
              }`}>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-mono font-bold text-xs">
                    SH
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold ${isDay ? 'text-slate-900' : 'text-white'}`}>
                      Moduły Shelly Plus & Pro (DIN/Puszka)
                    </h4>
                    <span className="text-[10px] text-sky-400 font-semibold uppercase tracking-wider">
                      Bez kucia tynków • Szyna DIN z LAN RJ45
                    </span>
                  </div>
                </div>
                <p className="text-xs leading-relaxed font-light">
                  {activeCap.shellyAdvantage}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
