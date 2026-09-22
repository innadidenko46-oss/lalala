import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { KnowledgeBaseSection } from '../components/KnowledgeBaseSection.tsx';
import { BookOpen, ArrowRight, MessageSquare } from 'lucide-react';

export const FaqPage: React.FC = () => {
  return (
    <div className="bg-[#071822] text-slate-200">
      <PageHeader
        badge="Baza Wiedzy & FAQ"
        title="Przewodnik Inwestora: Odpowiedzi na Wszystkie Pytania"
        description="Rozwiewamy obawy i wątpliwości. Dowiedz się, jak dom działa bez internetu, ile realnie pozwala zaoszczędzić automatyka i jak wygląda montaż bez pyłu."
        icon={<BookOpen className="w-4 h-4 text-amber-400" />}
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85"
      />

      {/* Main Knowledge Base & FAQ Section Component */}
      <KnowledgeBaseSection />

      {/* Have another question? Call us */}
      <section className="py-16 bg-[#05141D] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0C2D3F] to-[#081F2C] border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-3">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Masz nietypowe pytanie dotyczące swojego projektu?</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                Porozmawiaj bezpośrednio z inżynierem prowadzącym
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed font-light">
                Nie łączymy z call center. Odbiera inżynier automatyk z ponad 10-letnim doświadczeniem w instalacjach domowych i teletechnicznych.
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <Link
                to="/kontakt"
                className="px-6 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20"
              >
                Zadaj Pytanie Inżynierowi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Next Area Banner */}
      <section className="py-12 bg-[#071822] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-slate-400">Kolejny obszar portalu:</div>
            <div className="text-base font-bold text-white">
              Transparentny Kalkulator Wyceny 360° w 60 Sekund
            </div>
          </div>
          <Link
            to="/kalkulator"
            className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
          >
            <span>Przejdź do Kalkulatora</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
