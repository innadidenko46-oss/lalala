import React from 'react';
import { motion } from 'motion/react';
import { PACKAGES } from '../data/content.ts';
import { Check, Sparkles, Clock, ArrowRight, HelpCircle } from 'lucide-react';
import { PropertyState } from '../types.ts';

interface PackagesSectionProps {
  onSelectPackage: (type: PropertyState) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="pakiety" className="py-24 bg-[#05141D] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Transparentność 100% • Gwarancja Stałej Ceny</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Pakiety Wdrożeniowe «Pod Klucz»
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            Sprzęt w cenach dystrybucyjnych + profesjonalny montaż inżynieryjny DOMENCE + uporządkowana rozdzielnica + 24 miesiące gwarancji.
          </p>
        </div>

        {/* 3 Packages Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg) => {
            const isBestseller = pkg.badgeType === 'bestseller';
            return (
              <motion.div
                key={pkg.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isBestseller
                    ? 'bg-gradient-to-b from-[#0C2D3F] to-[#081F2C] border-2 border-amber-500 shadow-2xl shadow-amber-500/15'
                    : 'bg-[#0A2230]/70 border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Top Bestseller Badge */}
                {isBestseller && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-[10px] uppercase tracking-widest shadow-md">
                    Bestseller: Bez Kucia Ścian
                  </div>
                )}

                <div>
                  {/* Category & Timeframe */}
                  <div className="flex justify-between items-center mb-4 mt-1">
                    <span
                      className={`text-[10px] font-bold uppercase px-3 py-1 rounded-full ${
                        isBestseller
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          : 'bg-white/5 text-slate-300'
                      }`}
                    >
                      {pkg.categoryBadge}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{pkg.timeframe}</span>
                    </div>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Plain Language Summary Box */}
                  <div className="mt-3 p-3 rounded-xl bg-[#071822] border border-white/5 text-[11px] text-slate-300">
                    <span className="font-bold text-amber-400 block mb-0.5">Najważniejsze korzyści:</span>
                    {pkg.humanSummary}
                  </div>

                  {/* Price Box */}
                  <div className="mt-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs text-slate-400">od</span>
                      <span className="font-display text-3xl sm:text-4xl font-black text-white">
                        {pkg.priceNetto.toLocaleString('pl-PL')}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">PLN netto</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      {pkg.priceBrutto.toLocaleString('pl-PL')} PLN brutto (z VAT 23%)
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mt-6 space-y-3">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      Zakres wdrożenia:
                    </div>
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Select Button */}
                <button
                  onClick={() => onSelectPackage(pkg.recommendedFor)}
                  className={`mt-8 w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isBestseller
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-lg shadow-amber-500/25'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  <span>Wybierz Ten Pakiet</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Solution Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400">
            Potrzebujesz integracji z pompą ciepła, KNX, monitoringiem 4K lub nietypowym systemem bramowym?{' '}
            <a href="#kalkulator" className="text-amber-400 underline hover:text-amber-300">
              Skonfiguruj w kalkulatorze 360° lub zamów bezpłatny audyt inżynieryjny.
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
