import React from 'react';
import { motion } from 'motion/react';
import { WORKFLOW_STEPS } from '../data/content.ts';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#071822] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Kultura Pracy i Odbioru</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Jak pracujemy: od konfiguracji po gotowy dom
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Zero chaosu i zero niedomówień. Każdy krok ma określony czas realizacji i jasne standardy jakościowe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {WORKFLOW_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-5 rounded-2xl bg-[#0A2230]/70 border border-white/5 hover:border-amber-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-display font-black text-amber-400">
                  {step.number}
                </span>
                <h3 className="text-sm font-bold text-white mt-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center text-[10px] text-slate-500 font-mono">
                <span>Krok {idx + 1} z 5</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
