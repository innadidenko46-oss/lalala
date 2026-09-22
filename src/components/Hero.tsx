import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield, Sparkles, ArrowDown, CheckCircle2, ChevronRight, Video, Cpu, Hammer } from 'lucide-react';
import { PropertyState } from '../types.ts';

interface HeroProps {
  onSelectCategory: (category: PropertyState) => void;
  onScrollToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectCategory, onScrollToCalculator }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background with layered architectural ambiance & brand petrol tone */}
      <div className="absolute inset-0 -z-10 bg-[#071822]">
        {/* Subtle radial ambient glows matching DOMENCE amber & petrol-cyan */}
        <div className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-amber-500/10 blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-[160px] pointer-events-none" />

        {/* High-end architectural luxury backdrop with subtle overlay */}
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85"
          alt="Nowoczesna rezydencja z automatyką DOMENCE"
          className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity"
        />

        {/* High-contrast smooth gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071822] via-[#071822]/95 to-[#071822]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071822] via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          {/* Brand Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-400 mb-6 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span className="tracking-wide">Architektura Local-First • 100% Funkcji Offline Bez Abonamentu</span>
          </motion.div>

          {/* Main Headline with DOMENCE Typographic Impact */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]"
          >
            Inteligentny dom i wideodomofonia IP.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-sky-400">
              Inżynieryjny spokój.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl"
          >
            Projektujemy i wdrażamy systemy automatyki domowej oraz wideodomofony IP w standardzie rezydencjalnym.
            Precyzyjny montaż bez pyłu, ochrona przed zalaniem w 3 sekundy i pełna prywatność bez chmury.
          </motion.p>

          {/* Key Trust Points */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300 font-medium"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Czysty montaż bez pyłu</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Przejrzyste zasady i 24 m-ce gwarancji</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Warszawa & Mazowsze</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={onScrollToCalculator}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-widest transition-all text-center shadow-lg shadow-amber-500/25 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Dobierz System w 60 Sekund</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <Link
              to="/pakiety"
              className="px-8 py-4 rounded-full bg-[#0A2230]/70 hover:bg-[#0E2B3C] border border-white/10 hover:border-amber-400/40 text-white font-semibold text-xs uppercase tracking-widest transition-all text-center flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Pakiety & Wyceny</span>
            </Link>
          </motion.div>
        </div>

        {/* 3 Entry Cards reflecting the 3 core client scenarios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1: Stan Deweloperski */}
          <div
            onClick={() => onSelectCategory('deweloperski')}
            className="group relative rounded-2xl p-5 bg-[#0A2230]/70 hover:bg-[#0D2D40] border border-white/10 hover:border-amber-400/50 transition-all duration-300 cursor-pointer shadow-lg hover:-translate-y-1 overflow-hidden"
          >
            <div className="h-44 rounded-xl overflow-hidden mb-4 relative">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                alt="Stan deweloperski rozdzielnica"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071822] via-[#071822]/40 to-transparent" />
              <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#071822]/80 backdrop-blur-md text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
                <Hammer className="w-3 h-3" />
                <span>Nowy Budynek / Remont</span>
              </span>
            </div>

            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                Stan Deweloperski
              </h3>
              <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Kompletna automatyka na szynie DIN w rozdzielnicy, sterowanie podłogówką i okablowanie gwiazdowe.
            </p>
          </div>

          {/* Card 2: Wykończone Mieszkanie */}
          <div
            onClick={() => onSelectCategory('retro')}
            className="group relative rounded-2xl p-5 bg-[#0A2230]/70 hover:bg-[#0D2D40] border border-amber-500/40 hover:border-amber-400 transition-all duration-300 cursor-pointer shadow-lg hover:-translate-y-1 overflow-hidden ring-1 ring-amber-500/20"
          >
            <div className="h-44 rounded-xl overflow-hidden mb-4 relative">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
                alt="Gotowe wnętrze wykończone bez kucia"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071822] via-[#071822]/40 to-transparent" />
              <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#071822]/80 backdrop-blur-md text-sky-400 border border-sky-500/30 flex items-center gap-1.5">
                <Cpu className="w-3 h-3" />
                <span>Bez Kucia Ścian</span>
              </span>
            </div>

            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                Wykończone Wnętrze
              </h3>
              <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Mikromoduły dopuszkowe montowane za włącznikami. Tarcza antyzalaniowa i automatyka w 24 godziny.
            </p>
          </div>

          {/* Card 3: Wideodomofon IP & Kamery */}
          <div
            onClick={() => onSelectCategory('security')}
            className="group relative rounded-2xl p-5 bg-[#0A2230]/70 hover:bg-[#0D2D40] border border-white/10 hover:border-amber-400/50 transition-all duration-300 cursor-pointer shadow-lg hover:-translate-y-1 overflow-hidden"
          >
            <div className="h-44 rounded-xl overflow-hidden mb-4 relative">
              <img
                src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=800&q=80"
                alt="Wideodomofon IP wejście"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071822] via-[#071822]/40 to-transparent" />
              <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#071822]/80 backdrop-blur-md text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
                <Video className="w-3 h-3" />
                <span>Intercom & Wejście</span>
              </span>
            </div>

            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                Wideodomofon IP & Kamery
              </h3>
              <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Dotykowy monitor 7", zdalne otwieranie furtki kurierom przez smartfon i zapis wideo 100% w Twoim domu.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
