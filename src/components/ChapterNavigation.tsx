import React, { useState, useEffect } from 'react';
import {
  Layers,
  Network,
  Zap,
  Volume2,
  Sparkles,
  BookOpen,
  Wrench,
  Calculator,
} from 'lucide-react';

export const ChapterNavigation: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState<string>('systemy');

  const chapters = [
    { id: 'systemy', label: 'Technologie & KNX', icon: Layers },
    { id: 'teletechnika', label: 'Teletechnika & CCTV', icon: Network },
    { id: 'multimedia-ogrod', label: 'Audio & Ogród', icon: Volume2 },
    { id: 'scenariusze', label: 'Scenariusze Dnia', icon: Sparkles },
    { id: 'baza-wiedzy', label: 'Baza Wiedzy FAQ', icon: BookOpen },
    { id: 'kalkulator', label: 'Konfigurator', icon: Calculator },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveChapter(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    chapters.forEach((ch) => {
      const el = document.getElementById(ch.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav aria-label="Spis działów" className="sticky top-[58px] z-30 bg-[#071822]/95 backdrop-blur-md border-y border-white/10 shadow-lg py-2">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar scroll-smooth">
        {chapters.map((ch) => {
          const Icon = ch.icon;
          const isActive = activeChapter === ch.id;

          return (
            <button
              key={ch.id}
              onClick={() => scrollToChapter(ch.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                isActive
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className="w-3.5 h-3.5 shrink-0 text-amber-400" />
              <span>{ch.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
