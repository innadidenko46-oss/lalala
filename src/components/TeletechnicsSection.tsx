import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TELETECHNIC_SERVICES } from '../data/content.ts';
import { 
  Network, 
  ChevronDown, 
  ChevronUp, 
  Video, 
  Server, 
  ShieldAlert, 
  KeyRound, 
  CheckCircle2, 
  HardDrive 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

export const TeletechnicsSection: React.FC = () => {
  const [expandedServiceId, setExpandedServiceId] = useState<string>('cctv');
  const { theme } = useTheme();
  const isDay = theme === 'day';

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Video':
        return <Video className="w-6 h-6 text-amber-500" />;
      case 'Server':
        return <Server className="w-6 h-6 text-sky-500" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-emerald-500" />;
      default:
        return <KeyRound className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="teletechnika" className={`py-24 relative overflow-hidden transition-colors duration-500 border-t ${
      isDay ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-[#05141D] border-white/10 text-slate-200'
    }`}>
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Chapter Header */}
        <div className="max-w-3xl mb-14">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 border ${
            isDay 
              ? 'bg-amber-100 text-amber-800 border-amber-300' 
              : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
          }`}>
            <Network className="w-3.5 h-3.5" />
            <span>Teletechnika & Bezpieczeństwo Obiektu</span>
          </div>
          <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            isDay ? 'text-slate-900' : 'text-white'
          }`}>
            Infrastruktura teletechniczna, monitoring i kontrola dostępu.
          </h2>
          <p className={`mt-3 text-sm sm:text-base leading-relaxed ${
            isDay ? 'text-slate-600' : 'text-slate-300'
          }`}>
            Fundament stabilnego budynku: szafa RACK z krosownicą, monitoring IP 4K z detekcją sylwetek, 
            certyfikowany system alarmowy oraz wideodomofon zintegrowany z automatyką bramy. 
            Bez zewnętrznych abonamentów – z pełną prywatnością danych w Twojej sieci.
          </p>
        </div>

        {/* 4 Interactive Teletechnic Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {TELETECHNIC_SERVICES.map((service) => {
            const isExpanded = expandedServiceId === service.id;

            return (
              <div
                key={service.id}
                className={`rounded-3xl p-6 sm:p-7 transition-all duration-300 border ${
                  isExpanded
                    ? isDay
                      ? 'bg-white border-amber-400 shadow-lg'
                      : 'bg-[#0A2230] border-amber-500/40 shadow-xl'
                    : isDay
                      ? 'bg-white/80 border-slate-200 hover:border-slate-300'
                      : 'bg-[#0A2230]/50 border-white/5 hover:border-white/15'
                }`}
              >
                {/* Header of the card */}
                <div
                  onClick={() => setExpandedServiceId(isExpanded ? '' : service.id)}
                  className="cursor-pointer flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 mt-0.5 border ${
                      isDay 
                        ? 'bg-amber-50 border-amber-200' 
                        : 'bg-amber-500/15 border-amber-500/20'
                    }`}>
                      {getIcon(service.icon)}
                    </div>
                    <div>
                      <h3 className={`font-display text-lg sm:text-xl font-bold ${
                        isDay ? 'text-slate-900' : 'text-white'
                      }`}>
                        {service.title}
                      </h3>
                      <p className={`text-xs font-medium mt-1 ${
                        isDay ? 'text-amber-700' : 'text-amber-400'
                      }`}>
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <button
                    className={`p-2 rounded-xl shrink-0 ${
                      isDay ? 'bg-slate-100 text-slate-600 hover:text-slate-900' : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}
                    aria-label="Rozwiń szczegóły"
                  >
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>

                {/* Practical insight box always visible */}
                <div className={`mt-5 p-4 rounded-2xl border text-xs leading-relaxed flex items-start gap-3 ${
                  isDay 
                    ? 'bg-slate-50 border-slate-200 text-slate-700' 
                    : 'bg-[#071822]/80 border-white/5 text-slate-200'
                }`}>
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <div>
                    <span className={`font-bold block mb-1 ${isDay ? 'text-amber-800' : 'text-amber-300'}`}>
                      W praktyce:
                    </span>
                    {service.humanExplanation}
                  </div>
                </div>

                {/* Expanded Technical Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`overflow-hidden mt-6 pt-5 border-t space-y-5 ${
                        isDay ? 'border-slate-200' : 'border-white/10'
                      }`}
                    >
                      <p className={`text-xs leading-relaxed ${isDay ? 'text-slate-600' : 'text-slate-300'}`}>
                        {service.description}
                      </p>

                      {/* Equipment List */}
                      <div>
                        <div className={`text-[11px] font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 ${
                          isDay ? 'text-slate-500' : 'text-slate-400'
                        }`}>
                          <HardDrive className="w-3.5 h-3.5 text-amber-500" />
                          <span>Zastosowane komponenty:</span>
                        </div>
                        <ul className="space-y-2">
                          {service.equipment.map((item, idx) => (
                            <li key={idx} className={`text-xs flex items-start gap-2 ${
                              isDay ? 'text-slate-700' : 'text-slate-200'
                            }`}>
                              <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Specifications pills */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {service.specs.map((spec, idx) => (
                          <span
                            key={idx}
                            className={`text-[10px] font-mono px-2.5 py-1 rounded-md border ${
                              isDay
                                ? 'bg-slate-100 border-slate-200 text-slate-700'
                                : 'bg-white/5 border-white/10 text-slate-300'
                            }`}
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Teletechnic Standard Banner */}
        <div className={`mt-12 p-6 rounded-3xl border flex flex-col md:flex-row items-center justify-between gap-6 ${
          isDay
            ? 'bg-white border-slate-200 shadow-md'
            : 'bg-gradient-to-r from-[#0A2230] via-[#0E2B3C] to-[#0A2230] border-white/10'
        }`}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-500 flex items-center justify-center shrink-0">
              <Server className="w-6 h-6" />
            </div>
            <div>
              <div className={`font-display font-bold text-base ${isDay ? 'text-slate-900' : 'text-white'}`}>
                Certyfikowana szafa RACK 19" z czytelnym opisem portów
              </div>
              <div className={`text-xs mt-0.5 ${isDay ? 'text-slate-500' : 'text-slate-400'}`}>
                Wszystkie tory transmisyjne zarabiamy na patchpanelach i badamy miernikiem parametrów sieci.
              </div>
            </div>
          </div>

          <a
            href="#kalkulator"
            className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap"
          >
            Wycena instalacji
          </a>
        </div>

      </div>
    </section>
  );
};
