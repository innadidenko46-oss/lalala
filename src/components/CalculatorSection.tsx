import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SMART_MODULES } from '../data/content.ts';
import { PropertyState, AreaRange } from '../types.ts';
import {
  Hammer,
  Home,
  Video,
  Building,
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Phone,
  Mail,
  User,
  Sparkles,
  Camera,
  Server,
  FileCheck,
  HelpCircle,
} from 'lucide-react';

interface CalculatorSectionProps {
  selectedPropertyState?: PropertyState;
  onStateChange?: (state: PropertyState) => void;
}

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({
  selectedPropertyState = 'retro',
  onStateChange,
}) => {
  const [step, setStep] = useState<number>(1);
  const [propertyState, setPropertyState] = useState<PropertyState>(selectedPropertyState);
  const [areaRange, setAreaRange] = useState<AreaRange>('61_110');
  const [activeModuleCategory, setActiveModuleCategory] = useState<string>('all');
  const [selectedModuleIds, setSelectedModuleIds] = useState<string[]>([
    'water_shield',
    'master_off',
    'intercom_poe',
    'cctv_starter',
    'switchboard_protection_pack',
  ]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    agreement: true,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    if (selectedPropertyState) {
      setPropertyState(selectedPropertyState);
    }
  }, [selectedPropertyState]);

  const handleSelectStep1 = (val: PropertyState) => {
    setPropertyState(val);
    onStateChange?.(val);
    setStep(2);
  };

  const handleSelectStep2 = (val: AreaRange) => {
    setAreaRange(val);
    setStep(3);
  };

  const toggleModule = (id: string) => {
    setSelectedModuleIds((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  // Price Calculation Logic
  const calculateTotal = () => {
    let baseInfrastructure = 3800; // Retrofit base
    if (propertyState === 'security') baseInfrastructure = 2400;
    if (propertyState === 'deweloperski') baseInfrastructure = 7200; // DIN distribution prefabrication
    if (propertyState === 'commercial') baseInfrastructure = 5900;

    let modulesSum = 0;
    selectedModuleIds.forEach((id) => {
      const mod = SMART_MODULES.find((m) => m.id === id);
      if (mod) modulesSum += mod.price;
    });

    let subTotal = baseInfrastructure + modulesSum;

    // Area Multiplier
    let areaMult = 1.0;
    if (areaRange === '61_110') areaMult = 1.15;
    if (areaRange === '111_180') areaMult = 1.35;
    if (areaRange === 'ponad_180') areaMult = 1.65;

    return Math.round((subTotal * areaMult) / 50) * 50;
  };

  const totalPrice = calculateTotal();
  const grossPrice = Math.round(totalPrice * 1.23);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const getAreaLabel = (range: AreaRange) => {
    switch (range) {
      case 'do_60':
        return 'do 60 m²';
      case '61_110':
        return '61 – 110 m²';
      case '111_180':
        return '111 – 180 m²';
      case 'ponad_180':
        return '> 180 m²';
    }
  };

  const getPropertyLabel = (state: PropertyState) => {
    switch (state) {
      case 'deweloperski':
        return 'Stan deweloperski (Szyna DIN)';
      case 'retro':
        return 'Wykończone wnętrze (Bez kucia)';
      case 'security':
        return 'Ochrona wejścia & Wideodomofon';
      case 'commercial':
        return 'Biuro / Lokal komercyjny';
    }
  };

  const filteredModules =
    activeModuleCategory === 'all'
      ? SMART_MODULES
      : SMART_MODULES.filter((m) => m.category === activeModuleCategory);

  const moduleCategories = [
    { id: 'all', label: 'Wszystkie moduły' },
    { id: 'safety', label: 'Bezpieczeństwo & Woda' },
    { id: 'teletechnics', label: 'CCTV & Teletechnika' },
    { id: 'comfort', label: 'Komfort & Światło' },
    { id: 'energy', label: 'Energia & EV' },
    { id: 'power', label: 'Zasilanie & Rozdzielnica' },
  ];

  return (
    <section id="kalkulator" className="py-24 bg-[#05141D] relative overflow-hidden border-t border-white/10">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Container */}
        <div className="rounded-3xl bg-[#0A2230]/90 border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl">
          
          {/* Progress Bar & Header */}
          {!isSubmitted && (
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-3">
                <span className="flex items-center gap-1.5 text-amber-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Transparentny Kalkulator 360°</span>
                </span>
                <span className="font-mono text-slate-300">Krok {step} z 4</span>
              </div>
              
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-400"
                  animate={{ width: `${step * 25}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}

          {/* Steps Content */}
          <AnimatePresence mode="wait">
            
            {/* STEP 1: Property Stage */}
            {step === 1 && !isSubmitted && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  Jaki jest stan Twojej nieruchomości?
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-8">
                  Wybierz etap inwestycji, aby dobrać odpowiednią architekturę instalacji, okablowania i montażu.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <button
                    type="button"
                    onClick={() => handleSelectStep1('deweloperski')}
                    className={`p-6 rounded-2xl text-left transition-all border cursor-pointer ${
                      propertyState === 'deweloperski'
                        ? 'bg-[#0E2B3C] border-amber-400 shadow-lg shadow-amber-500/10 ring-1 ring-amber-400/40'
                        : 'bg-[#071822]/70 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                      <Hammer className="w-5 h-5" />
                    </div>
                    <div className="text-base font-bold text-white">Stan deweloperski</div>
                    <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Remont od podstaw lub budowa. Automatyka na szynie DIN w rozdzielnicy i teletechnika.
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelectStep1('retro')}
                    className={`p-6 rounded-2xl text-left transition-all border cursor-pointer ${
                      propertyState === 'retro'
                        ? 'bg-[#0E2B3C] border-amber-400 shadow-lg shadow-amber-500/10 ring-1 ring-amber-400/40'
                        : 'bg-[#071822]/70 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                      <Home className="w-5 h-5" />
                    </div>
                    <div className="text-base font-bold text-white">Wnętrze wykończone</div>
                    <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Bez kucia ścian i bez kurzu. Mikromoduły dopuszkowe montowane za włącznikami w 24h.
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelectStep1('security')}
                    className={`p-6 rounded-2xl text-left transition-all border cursor-pointer ${
                      propertyState === 'security'
                        ? 'bg-[#0E2B3C] border-amber-400 shadow-lg shadow-amber-500/10 ring-1 ring-amber-400/40'
                        : 'bg-[#071822]/70 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                      <Video className="w-5 h-5" />
                    </div>
                    <div className="text-base font-bold text-white">Ochrona & Wejście</div>
                    <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Wideodomofon IP, ekran dotykowy 7", bramka kurierska i kamery CCTV z AI.
                    </div>
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Square Footage */}
            {step === 2 && !isSubmitted && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  Jaka jest przybliżona powierzchnia?
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-8">
                  Wielkość obiektu pozwala oszacować liczbę pętli oświetleniowych, termostatów strefowych i obwodów zabezpieczających.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {(['do_60', '61_110', '111_180', 'ponad_180'] as AreaRange[]).map((range) => (
                    <button
                      key={range}
                      type="button"
                      onClick={() => handleSelectStep2(range)}
                      className={`p-5 rounded-2xl text-center font-bold text-sm transition-all border cursor-pointer ${
                        areaRange === range
                          ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20'
                          : 'bg-[#071822]/70 text-white border-white/10 hover:border-white/20 hover:bg-[#071822]'
                      }`}
                    >
                      {getAreaLabel(range)}
                    </button>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Wstecz</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Modules Selector with Live Price */}
            {step === 3 && !isSubmitted && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                    Wybierz moduły automatyzacji & teletechniki
                  </h3>
                  <span className="text-xs font-mono text-amber-400">
                    Kalkulacja w czasie rzeczywistym
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mb-5">
                  Zaznacz funkcje, których potrzebujesz. Ceny zawierają sprzęt, montaż bezpyłowy oraz testy Fail-Safe.
                </p>

                {/* Categories Tab Filter */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {moduleCategories.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setActiveModuleCategory(c.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        activeModuleCategory === c.id
                          ? 'bg-amber-500 text-slate-950 font-bold'
                          : 'bg-[#071822] text-slate-400 hover:text-white border border-white/5'
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>

                <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
                  {filteredModules.map((mod) => {
                    const isChecked = selectedModuleIds.includes(mod.id);
                    return (
                      <div
                        key={mod.id}
                        onClick={() => toggleModule(mod.id)}
                        className={`p-4 rounded-2xl transition-all border cursor-pointer ${
                          isChecked
                            ? 'bg-[#0E2B3C] border-amber-400/80 shadow-md shadow-amber-500/10'
                            : 'bg-[#071822]/60 border-white/5 hover:border-white/15'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3.5">
                            <div
                              className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                                isChecked
                                  ? 'bg-amber-500 text-slate-950'
                                  : 'border border-white/30 bg-white/5'
                              }`}
                            >
                              {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>

                            <div>
                              <div className="text-xs sm:text-sm text-white font-bold flex flex-wrap items-center gap-2">
                                <span>{mod.name}</span>
                                {mod.badge && (
                                  <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                    {mod.badge}
                                  </span>
                                )}
                              </div>
                              <div className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                                {mod.description}
                              </div>
                            </div>
                          </div>

                          <div className="text-right shrink-0 ml-2">
                            <span className="text-xs sm:text-sm font-mono font-bold text-white">
                              +{mod.price.toLocaleString('pl-PL')} zł
                            </span>
                            <span className="block text-[9px] text-slate-500">z montażem</span>
                          </div>
                        </div>

                        {/* Plain language note right in the card */}
                        <div className="mt-2.5 pt-2 border-t border-white/5 text-[11px] text-slate-300 flex items-start gap-2 bg-[#071822]/50 p-2 rounded-lg">
                          <span className="text-amber-400 font-bold shrink-0">W praktyce:</span>
                          <span className="leading-normal">{mod.humanExplanation}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Real-time Subtotal bar */}
                <div className="mt-6 p-4 rounded-2xl bg-[#071822] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <span className="text-[11px] text-slate-400 block font-mono">
                      Bieżący szacunek (infrastruktura + {selectedModuleIds.length} wybranych modułów):
                    </span>
                    <span className="text-2xl font-display font-black text-amber-400">
                      {totalPrice.toLocaleString('pl-PL')} PLN netto
                    </span>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-1/2 sm:w-auto px-4 py-3 text-xs text-slate-400 hover:text-white flex items-center justify-center gap-1 font-mono cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Wstecz</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(4)}
                      className="w-1/2 sm:w-auto py-3.5 px-6 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Zobacz Kosztorys</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 4: Summary & Contact Form */}
            {step === 4 && !isSubmitted && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold uppercase tracking-wider mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Konfiguracja Gotowa</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                    Szacowany koszt inwestycji DOMENCE:
                  </h3>

                  <div className="mt-4 p-5 rounded-2xl bg-[#071822] border border-amber-500/40 inline-block shadow-xl">
                    <div className="font-display text-3xl sm:text-4xl font-black text-white">
                      od {totalPrice.toLocaleString('pl-PL')} PLN netto
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      {grossPrice.toLocaleString('pl-PL')} PLN brutto (z 23% VAT)
                    </div>
                    <div className="text-[11px] font-mono text-amber-400 mt-1">
                      (sprzęt + montaż bez pyłu + test Fail-Safe + gwarancja inżynieryjna)
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-center gap-4 text-xs text-slate-400">
                    <span>Etap: <strong>{getPropertyLabel(propertyState)}</strong></span>
                    <span>•</span>
                    <span>Metraż: <strong>{getAreaLabel(areaRange)}</strong></span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Imię i nazwisko
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="np. Michał Nowak"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#071822] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-amber-400 outline-none"
                      />
                      <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Telefon kontaktowy
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+48 500 000 000"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#071822] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-amber-400 outline-none"
                        />
                        <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Adres e-mail
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="michal@twojadomena.pl"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#071822] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-amber-400 outline-none"
                        />
                        <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 text-[10px] text-slate-400">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.agreement}
                        onChange={(e) =>
                          setFormData({ ...formData, agreement: e.target.checked })
                        }
                        className="mt-0.5 accent-amber-500 w-4 h-4 rounded"
                      />
                      <span className="leading-snug">
                        Zgadzam się na kontakt inżyniera DOMENCE w celu bezpłatnego potwierdzenia doboru urządzeń i przesłania wyceny PDF.
                      </span>
                    </label>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="sm:w-1/3 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider text-center transition-all cursor-pointer"
                    >
                      ← Zmień Moduły
                    </button>

                    <button
                      type="submit"
                      className="sm:w-2/3 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-amber-500/25 active:scale-95 cursor-pointer"
                    >
                      Odbierz Kosztorys & Audyt 0 PLN
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* STEP SUCCESS: Confirmation */}
            {isSubmitted && (
              <motion.div
                key="step-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-5 ring-8 ring-amber-500/10">
                  <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  Dziękujemy, {formData.name || 'Inwestorze'}!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
                  Szczegółowy wykaz urządzeń DOMENCE dla metrażu {getAreaLabel(areaRange)} oraz poradnik techniczny As-Built wysłaliśmy na Twój adres e-mail.
                </p>

                <div className="p-5 rounded-2xl bg-[#071822] border border-white/10 max-w-md mx-auto mb-6 text-left">
                  <div className="text-xs font-bold text-amber-400 mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Kolejny krok inżynieryjny:</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Nasz inżynier skontaktuje się telefonicznie w ciągu 2 godzin roboczych, aby zweryfikować stan rozdzielnicy i bezpłatnie potwierdzić dogodny termin audytu na obiekcie.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setStep(1);
                  }}
                  className="px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-bold text-slate-300 uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Skonfiguruj kolejny obiekt
                </button>
              </motion.div>
            )}

          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};
