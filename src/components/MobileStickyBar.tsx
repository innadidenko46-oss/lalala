import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calculator } from 'lucide-react';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#071822]/95 backdrop-blur-xl border-t border-white/10 p-3 shadow-2xl">
      <div className="flex items-center gap-2">
        <Link
          to="/kontakt"
          className="flex-1 py-3 px-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs flex items-center justify-center gap-2 active:bg-white/10 transition-colors"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>Kontakt</span>
        </Link>

        <Link
          to="/kalkulator"
          className="flex-[1.5] py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 transition-all text-center"
        >
          <Calculator className="w-4 h-4" />
          <span>Wycena 60s</span>
        </Link>
      </div>
    </div>
  );
};
