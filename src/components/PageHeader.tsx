import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface PageHeaderProps {
  chapterNumber?: string;
  badge: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  description,
  icon,
  image,
}) => {
  return (
    <div className="relative py-14 md:py-20 bg-[#071822] border-b border-white/10 overflow-hidden">
      {/* Dreamy ambient photo background if provided, or default architectural dusk photo */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={
            image ||
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80'
          }
          alt={title}
          className="w-full h-full object-cover object-center opacity-20 filter brightness-75 contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071822] via-[#071822]/90 to-[#071822]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071822] via-transparent to-transparent" />
        {/* Soft Dreamy color glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation - Clean & without numbers */}
        <nav aria-label="Nawigacja" className="flex items-center gap-2 text-xs text-slate-400 mb-6">
          <Link
            to="/"
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Strona Główna</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-amber-400 font-medium">{badge}</span>
        </nav>

        {/* Minimalist Badge */}
        <div className="flex items-center gap-2.5 mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
            {icon}
            <span>{badge}</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-4xl leading-[1.15]">
          {title}
        </h1>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed font-light">
          {description}
        </p>
      </div>
    </div>
  );
};
