import React from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  Network,
  Zap,
  Volume2,
  Sparkles,
  Wrench,
  Package,
  BookOpen,
  Calculator,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Cpu,
  Moon,
  Sun,
  Eye,
  Sliders,
} from 'lucide-react';
import { ProcessSection } from '../components/ProcessSection.tsx';
import { LightingAtmosphereShowcase } from '../components/LightingAtmosphereShowcase.tsx';
import { useTheme } from '../context/ThemeContext.tsx';

export const HomePage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDay = theme === 'day';

  const chapters = [
    {
      id: 'systemy',
      path: '/systemy',
      title: 'Technologie & Standardy Smart Home',
      subtitle: 'KNX • Loxone • Home Assistant • Zigbee',
      description:
        'Porównanie instalacji przewodowych i radiowych. Sterowanie oświetleniem, roletami i mikroklimatem z poziomu minimalistycznych włączników ściennych i telefonu.',
      icon: Layers,
      badge: 'Architektura & Sterowanie',
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Minimalistyczne wnętrze z ciepłym światłem smart home',
    },
    {
      id: 'teletechnika',
      path: '/teletechnika',
      title: 'Monitoring CCTV, Sieci LAN & Szafy RACK',
      subtitle: 'Kamery Hikvision ColorVu & AcuSense • Wideodomofon IP • Wi-Fi 6/7 • Alarm',
      description:
        'Szybka identyfikacja ludzi i pojazdów AI bez fałszywych alarmów. Prywatny rejestrator w szafie RACK bez opłat chmurowych i stabilny zasięg w całym ogrodzie.',
      icon: Network,
      badge: 'Prywatność & Zero Abonamentów',
      image:
        'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Dyskretna kamera zewnętrzna na nowoczesnej elewacji o zmierzchu',
    },
    {
      id: 'multimedia-ogrod',
      path: '/multimedia-ogrod',
      title: 'Dźwięk Multiroom & Inteligentny Ogród',
      subtitle: 'Dyskretne głośniki sufitowe • Taras • Strefy zraszania',
      description:
        'Niewidoczne nagłośnienie w strefie dziennej, łazience i na tarasie. Automatyczne nawadnianie ogrodu, które wstrzymuje cykl w oparciu o czujnik deszczu.',
      icon: Volume2,
      badge: 'Akustyka & Krajobraz',
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Klimatyczny taras o zmierzchu z nastrojowym oświetleniem i głośnikami zewnętrznymi',
    },
    {
      id: 'scenariusze',
      path: '/scenariusze',
      title: 'Scenariusze & Automatyzacja Codzienna',
      subtitle: 'Wyjście z domu • Ochrona przed zalaniem • Oświetlenie nocne',
      description:
        'Dotykowy klawisz przy drzwiach wyłącza oświetlenie i wybrane obwody gniazd. Sensory zalania natychmiast zamykają główny elektrozawór wody przy nieszczelności.',
      icon: Sparkles,
      badge: 'Ergonomia & Bezpieczeństwo',
      image:
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Ciepłe, przytulne wnętrze o poranku ze zautomatyzowanym oświetleniem',
    },
    {
      id: 'pakiety',
      path: '/pakiety',
      title: 'Pakiety Wdrożeniowe «Pod Klucz»',
      subtitle: 'Kompletny sprzęt i montaż • Przejrzysta wycena • Gwarancja',
      description:
        'Sprawdzone konfiguracje wdrożeniowe: od gotowych lokali bez ingerencji w tynki, po pełne rezydencje w profesjonalnym standardzie magistrali KNX.',
      icon: Package,
      badge: 'Pakiety & Wyceny',
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Profesjonalne komponenty automatyki i sterowniki modułowe',
    },
    {
      id: 'faq',
      path: '/faq',
      title: 'Baza Wiedzy & Odpowiedzi na Pytania',
      subtitle: 'Wszystko o działaniu offline, kosztach i obsłudze dla rodziny',
      description:
        'Sprawdź, jak instalacja zachowuje się podczas wyładowań i braku internetu, jak szybko zwraca się automatyka i jak wygląda codzienna obsługa.',
      icon: BookOpen,
      badge: 'Przewodnik Inwestora',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Czyste biuro projektowe z planami architektonicznymi i tabletem',
    },
    {
      id: 'kalkulator',
      path: '/kalkulator',
      title: 'Konfigurator Wyceny Instalacji',
      subtitle: 'Wybierz metraż i moduły • Sprawdź szacunkowy koszt',
      description:
        'Narzędzie do natychmiastowego oszacowania budżetu na markowe urządzenia i profesjonalny montaż inżynieryjny.',
      icon: Calculator,
      badge: 'Wycena Online',
      image:
        'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Cyfrowy tablet wyświetlający przejrzyste sterowanie domem',
    },
  ];

  const atmosphericMoments = [
    {
      title: 'Wieczorny Spokój',
      subtitle: 'Scena relaksu z ciepłym światłem 2200K',
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85',
      description: 'Miękkie światło pośrednie pod szafkami i sufitami koi wzrok po całym dniu pracy.',
    },
    {
      title: 'Scena Jogi & Medytacji',
      subtitle: 'Ciepły bursztyn LED i zamknięcie rolet',
      image:
        'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1000&q=85',
      description: 'Jedna komenda "Chcę poćwiczyć jogę" odcina spojrzenia z zewnątrz i włącza kojący ambient.',
    },
    {
      title: 'Poranny Rozruch',
      subtitle: 'Płynne podnoszenie rolet i komfort cieplny',
      image:
        'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=85',
      description: 'Światło w sypialni rozjaśnia się stopniowo, a w łazience wita Cię ciepła podłoga.',
    },
    {
      title: 'Ogród o Zmroku',
      subtitle: 'Dyskretna iluminacja zieleni i tarasu',
      image:
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85',
      description: 'Ciepłe punkty świetlne tworzą głębię w ogrodzie bez rażenia gości siedzących przy stole.',
    },
  ];

  return (
    <div className={`transition-colors duration-500 ${isDay ? 'bg-[#F8FAFC] text-slate-800' : 'bg-[#040A10] text-slate-200'}`}>
      
      {/* Hero Section with Dreamy Ambient Background */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-20 overflow-hidden">
        {/* Dreamy Background effects & Photography */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
            alt="Nowoczesny dom z inteligentną automatyką DOMENCE o zmierzchu"
            className={`w-full h-full object-cover object-center scale-105 transition-opacity duration-700 ${
              isDay ? 'opacity-15 filter brightness-110 contrast-95' : 'opacity-30 filter brightness-90 contrast-110'
            }`}
          />
          <div className={`absolute inset-0 transition-colors duration-700 ${
            isDay 
              ? 'bg-gradient-to-r from-white via-white/95 to-slate-50/80' 
              : 'bg-gradient-to-r from-[#040A10] via-[#040A10]/95 to-[#040A10]/70'
          }`} />
          <div className={`absolute inset-0 ${
            isDay ? 'bg-gradient-to-t from-[#F8FAFC] via-transparent to-transparent' : 'bg-gradient-to-t from-[#040A10] via-transparent to-transparent'
          }`} />
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[150px] pointer-events-none" />
          <div className="absolute top-1/3 -right-32 w-[650px] h-[650px] rounded-full bg-sky-500/10 blur-[170px] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            {/* Top Badge */}
            <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 backdrop-blur-md border ${
              isDay 
                ? 'bg-amber-100 text-amber-800 border-amber-300' 
                : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
            }`}>
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              <span>Kompleksowe Instalacje • Smart Home, Teletechnika & Stacje EV</span>
            </div>

            {/* Main Headline */}
            <h1 className={`font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] ${
              isDay ? 'text-slate-950' : 'text-white'
            }`}>
              Nowoczesny dom, który dba o Twój spokój, wygodę i prywatność.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600">
                Działa stabilnie, także bez internetu.
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`mt-5 text-base sm:text-lg leading-relaxed font-light ${
              isDay ? 'text-slate-600' : 'text-slate-300'
            }`}>
              Projektujemy i montujemy instalacje automatyki budynkowej, kamery z analityką ludzi i pojazdów, 
              szybkie sieci Wi-Fi oraz stacje ładowania samochodów. Bez zewnętrznych abonamentów, 
              z czytelną rozdzielnicą i czystym montażem w wykończonych wnętrzach.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/kalkulator"
                className="py-4 px-8 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-xl shadow-amber-500/20 active:scale-95 text-center flex items-center justify-center gap-2"
              >
                <span>Wyceń Inwestycję Online</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/systemy"
                className={`py-4 px-8 rounded-full font-bold text-xs uppercase tracking-wider transition-all border text-center flex items-center justify-center gap-2 ${
                  isDay 
                    ? 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300 shadow-sm' 
                    : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                }`}
              >
                <span>Poznaj Technologie Smart Home</span>
              </Link>
            </div>

            {/* Key Trust Badges */}
            <div className={`mt-10 pt-6 border-t grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs ${
              isDay ? 'border-slate-200 text-slate-700' : 'border-white/10 text-slate-300'
            }`}>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>100% Działa Offline</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Zero Abonamentów</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Ochrona Bezpieczników</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Czysty Montaż</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE 24H LIGHTING & ATMOSPHERE SHOWCASE (DAY VS NIGHT) */}
      <LightingAtmosphereShowcase />

      {/* Atmospheric Moments Gallery */}
      <section className={`py-16 border-t overflow-hidden ${
        isDay ? 'bg-white border-slate-200' : 'bg-[#03080E] border-white/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 border ${
                isDay 
                  ? 'bg-amber-100 text-amber-800 border-amber-300' 
                  : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
              }`}>
                <Moon className="w-3.5 h-3.5" />
                <span>Atmosfera & Wygoda</span>
              </div>
              <h2 className={`font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
                isDay ? 'text-slate-900' : 'text-white'
              }`}>
                Poczuj nastrojowe piękno nowoczesnego domu
              </h2>
            </div>
            <p className={`text-xs sm:text-sm max-w-md font-light ${
              isDay ? 'text-slate-600' : 'text-slate-400'
            }`}>
              Dobra automatyka to nie gadżet. To nastrojowe światło o zmroku, idealna temperatura i cisza.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {atmosphericMoments.map((moment, idx) => (
              <div
                key={idx}
                className={`group rounded-3xl border overflow-hidden transition-all duration-500 flex flex-col justify-between hover:shadow-2xl ${
                  isDay 
                    ? 'bg-slate-50 border-slate-200 hover:border-amber-400 hover:shadow-slate-300' 
                    : 'bg-[#0A2230]/80 border-white/10 hover:border-amber-400/50 hover:shadow-amber-500/10'
                }`}
              >
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 ${
                    isDay 
                      ? 'bg-gradient-to-t from-slate-900/60 via-transparent to-transparent' 
                      : 'bg-gradient-to-t from-[#0A2230] via-[#0A2230]/30 to-transparent'
                  }`} />
                </div>
                <div className="p-5">
                  <h3 className={`font-bold text-base transition-colors ${
                    isDay ? 'text-slate-900 group-hover:text-amber-700' : 'text-white group-hover:text-amber-300'
                  }`}>
                    {moment.title}
                  </h3>
                  <div className={`text-[11px] font-medium mt-0.5 ${
                    isDay ? 'text-amber-700' : 'text-amber-400/90'
                  }`}>
                    {moment.subtitle}
                  </div>
                  <p className={`text-xs mt-2 leading-relaxed ${
                    isDay ? 'text-slate-600' : 'text-slate-400'
                  }`}>
                    {moment.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Solutions Grid with High-Res Photography */}
      <section className={`py-20 border-t ${
        isDay ? 'bg-slate-50 border-slate-200' : 'bg-[#051119] border-white/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
              isDay ? 'text-slate-900' : 'text-white'
            }`}>
              Obszary instalacji i technologie
            </h2>
            <p className={`mt-3 text-sm sm:text-base font-light ${
              isDay ? 'text-slate-600' : 'text-slate-300'
            }`}>
              Każdy obszar to sprawdzona inżynieria, która podnosi bezpieczeństwo i komfort domowników.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {chapters.map((ch) => {
              const Icon = ch.icon;
              return (
                <Link
                  key={ch.id}
                  to={ch.path}
                  className={`group rounded-3xl border overflow-hidden transition-all duration-500 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 ${
                    isDay 
                      ? 'bg-white border-slate-200 hover:border-amber-400 hover:shadow-slate-300/70' 
                      : 'bg-[#0A2230]/70 border-white/10 hover:border-amber-400/50 hover:shadow-amber-500/10'
                  }`}
                >
                  {/* Photography Header */}
                  <div>
                    <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-900">
                      <img
                        src={ch.image}
                        alt={ch.imageAlt}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-85 group-hover:brightness-100"
                        loading="lazy"
                      />
                      <div className={`absolute inset-0 ${
                        isDay 
                          ? 'bg-gradient-to-t from-black/60 via-black/20 to-transparent' 
                          : 'bg-gradient-to-t from-[#0A2230] via-[#0A2230]/40 to-transparent'
                      }`} />
                      
                      {/* Floating Badge */}
                      <div className="absolute top-3.5 left-3.5">
                        <span className="text-[11px] font-semibold text-white px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 shadow-sm">
                          {ch.badge}
                        </span>
                      </div>

                      {/* Icon overlay */}
                      <div className="absolute bottom-3 right-3.5 w-10 h-10 rounded-2xl bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-amber-400 shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className={`font-display text-xl font-bold transition-colors ${
                        isDay ? 'text-slate-900 group-hover:text-amber-700' : 'text-white group-hover:text-amber-300'
                      }`}>
                        {ch.title}
                      </h3>
                      <div className={`text-xs font-semibold mt-1 ${
                        isDay ? 'text-amber-700' : 'text-amber-400/90'
                      }`}>
                        {ch.subtitle}
                      </div>

                      <p className={`text-xs mt-3 leading-relaxed font-light ${
                        isDay ? 'text-slate-600' : 'text-slate-300'
                      }`}>
                        {ch.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <div className={`pt-4 border-t flex items-center justify-between text-xs font-bold transition-colors ${
                      isDay 
                        ? 'border-slate-100 text-amber-700 group-hover:text-amber-800' 
                        : 'border-white/10 text-amber-400 group-hover:text-amber-300'
                    }`}>
                      <span>Zobacz szczegóły</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* Why DOMENCE Trust Pillars */}
      <section className={`py-20 border-t ${
        isDay ? 'bg-white border-slate-200' : 'bg-[#030A10] border-white/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
              isDay ? 'text-slate-900' : 'text-white'
            }`}>
              Zasady montażu i bezpieczeństwo
            </h2>
            <p className={`mt-3 text-sm sm:text-base font-light ${
              isDay ? 'text-slate-600' : 'text-slate-300'
            }`}>
              Trzy filary, które odróżniają profesjonalną instalację od amatorskich zestawów ze sklepu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`p-7 rounded-3xl border transition-all ${
              isDay 
                ? 'bg-slate-50 border-slate-200 hover:border-amber-400 shadow-sm' 
                : 'bg-[#0A2230]/60 border-white/10 hover:border-amber-400/30'
            }`}>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className={`text-lg font-bold mb-2 ${isDay ? 'text-slate-900' : 'text-white'}`}>
                Prywatność i praca bez internetu
              </h3>
              <p className={`text-xs leading-relaxed font-light ${isDay ? 'text-slate-600' : 'text-slate-300'}`}>
                Obraz z kamer i dane domowników zostają w Twoim domu. Żadne zewnętrzne serwery nie mają dostępu
                do Twoich pomieszczeń i nie ponosisz żadnych miesięcznych opłat.
              </p>
            </div>

            <div className={`p-7 rounded-3xl border transition-all ${
              isDay 
                ? 'bg-slate-50 border-slate-200 hover:border-sky-400 shadow-sm' 
                : 'bg-[#0A2230]/60 border-white/10 hover:border-sky-400/30'
            }`}>
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-500 flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className={`text-lg font-bold mb-2 ${isDay ? 'text-slate-900' : 'text-white'}`}>
                Przejrzysta rozdzielnica i ochrona AGD
              </h3>
              <p className={`text-xs leading-relaxed font-light ${isDay ? 'text-slate-600' : 'text-slate-300'}`}>
                Każdy bezpiecznik ma jasny opis i schemat. Zastosowane ograniczniki przepięć chronią pompę ciepła,
                sprzęt kuchenny, telewizory i komputery przed wyładowaniami burzowymi.
              </p>
            </div>

            <div className={`p-7 rounded-3xl border transition-all ${
              isDay 
                ? 'bg-slate-50 border-slate-200 hover:border-emerald-400 shadow-sm' 
                : 'bg-[#0A2230]/60 border-white/10 hover:border-emerald-400/30'
            }`}>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className={`text-lg font-bold mb-2 ${isDay ? 'text-slate-900' : 'text-white'}`}>
                Czysty i precyzyjny montaż
              </h3>
              <p className={`text-xs leading-relaxed font-light ${isDay ? 'text-slate-600' : 'text-slate-300'}`}>
                Pracujemy w wykończonych domach i mieszkaniach. Każde wiercenie wykonujemy z odsysaniem pyłu,
                zabezpieczamy podłogi i zostawiamy nienaganny porządek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <ProcessSection />

      {/* Direct Contact Banner */}
      <section className={`relative py-20 border-t overflow-hidden ${
        isDay 
          ? 'bg-gradient-to-r from-slate-900 to-slate-800 text-white' 
          : 'bg-gradient-to-r from-[#0C2D3F] to-[#081F2C] border-white/10'
      }`}>
        <div className="absolute inset-0 -z-10 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80"
            alt="Nowoczesny dom nocą"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Planujesz budowę, remont lub modernizację?
            </h2>
            <p className="text-sm text-slate-300 mt-2 max-w-xl font-light">
              Skonsultuj się z nami bezpłatnie. Doradzimy odpowiednie rozwiązania dla Twojego budynku
              i przygotujemy jasny kosztorys bez ukrytych opłat.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/kalkulator"
              className="px-6 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 active:scale-95"
            >
              Wyceń w konfiguratorze
            </Link>

            <Link
              to="/kontakt"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all border border-white/20"
            >
              Napisz do inżyniera
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
