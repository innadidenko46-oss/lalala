import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader.tsx';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  FileCheck,
  Building2,
  Sparkles,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    propertyType: 'Mieszkanie stan deweloperski',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="bg-[#071822] text-slate-200">
      <PageHeader
        badge="Kontakt & Audyt"
        title="Skontaktuj się z Inżynierami DOMENCE"
        description="Masz rzut instalacji elektrycznej lub budujesz dom? Prześlij nam projekt do darmowej weryfikacji inżynieryjnej lub zadzwoń bezpośrednio do kierownika realizacji."
        icon={<Phone className="w-4 h-4 text-amber-400" />}
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85"
      />

      <section className="py-16 bg-[#05141D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details & Office */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-2">
                  Biuro Projektowe & Dział Realizacji
                </h2>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Realizujemy instalacje na terenie Warszawy, aglomeracji mazowieckiej oraz
                  kompleksowe projekty rezydencjalne w całej Polsce.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-4">
                <a
                  href="tel:+48221234567"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[#0A2230]/80 border border-white/10 hover:border-amber-400/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 group-hover:bg-amber-500/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Inżynier prowadzący (Kierownik Realizacji)
                    </div>
                    <div className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                      +48 22 123 45 67
                    </div>
                    <div className="text-[11px] text-emerald-400 font-medium mt-0.5">
                      Poniedziałek – Piątek: 08:00 – 18:00
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:kontakt@domence.pl"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[#0A2230]/80 border border-white/10 hover:border-amber-400/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0 group-hover:bg-sky-500/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Weryfikacja Projektów & Oferty
                    </div>
                    <div className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                      kontakt@domence.pl
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Odpowiadamy zazwyczaj w ciągu 4 godzin roboczych
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#0A2230]/80 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Siedziba i Warsztat Prefabrykacji Rozdzielnic
                    </div>
                    <div className="text-sm font-bold text-white">
                      DOMENCE Sp. z o.o.
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5">
                      ul. Cybernetyki 9, 02-677 Warszawa (Mokotów Business Park)
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="p-6 rounded-3xl bg-amber-500/5 border border-amber-500/20">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Standard Inżynierski DOMENCE</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Uprawnienia elektroinstalacyjne Eksploatacja + Dozór</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Certyfikowany instalator KNX Partner i Loxone Expert</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Polisa OC firmy na kwotę 2 000 000 PLN</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Direct Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#0A2230]/90 border border-white/10 shadow-2xl relative">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Dziękujemy za kontakt!
                    </h3>
                    <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                      Twój formularz trafił bezpośrednio do inżyniera projektanta DOMENCE.
                      Skontaktujemy się telefonicznie lub mailowo w ciągu kilku godzin.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-6 py-2.5 rounded-full bg-white/10 text-white hover:bg-white/15 text-xs font-bold transition-all"
                    >
                      Wyślij kolejne zapytanie
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white mb-1">
                        Wyślij zapytanie lub zamów darmowy audyt
                      </h3>
                      <p className="text-xs text-slate-400">
                        Wypełnij poniższe pola – przygotujemy wstępną kalkulację techniczną.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Imię i Nazwisko *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jan Kowalski"
                          className="w-full px-4 py-3 rounded-xl bg-[#071822] border border-white/15 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-amber-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Numer Telefonu *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+48 500 000 000"
                          className="w-full px-4 py-3 rounded-xl bg-[#071822] border border-white/15 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Adres E-mail *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jan@kowalski.pl"
                          className="w-full px-4 py-3 rounded-xl bg-[#071822] border border-white/15 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-amber-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Miejscowość / Lokalizacja
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="np. Warszawa, Konstancin, Piaseczno"
                          className="w-full px-4 py-3 rounded-xl bg-[#071822] border border-white/15 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Rodzaj Inwestycji
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#071822] border border-white/15 text-white text-xs focus:outline-none focus:border-amber-400"
                      >
                        <option>Mieszkanie stan deweloperski (okablowanie standardowe)</option>
                        <option>Dom / Rezydencja w budowie (instalacja pod KNX / Loxone)</option>
                        <option>Wykończony dom/mieszkanie (montaż bez kucia ścian)</option>
                        <option>Monitoring CCTV AI i ochrona obwodowa SSWiN</option>
                        <option>Przegląd, uporządkowanie i serwis rozdzielnicy</option>
                        <option>Ładowarka samochodu elektrycznego (Wallbox DLB) + PV</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Opis Projektu / Pytania
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Napisz krótko o planowanym zakresie, metrażu lub etapie budowy..."
                        className="w-full px-4 py-3 rounded-xl bg-[#071822] border border-white/15 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-amber-400 resize-none"
                      />
                    </div>

                    <div className="text-[11px] text-slate-400 flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>
                        Szanujemy Twoją prywatność. Dane kontaktowe służą wyłącznie do sporządzenia
                        oferty technicznej DOMENCE. Nie przesyłamy spamu reklamowego.
                      </span>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-xl shadow-amber-500/20 active:scale-98 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {loading ? (
                        <span>Wysyłanie zapytania...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Wyślij zapytanie do inżyniera</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
