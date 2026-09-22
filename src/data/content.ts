import {
  SmartModule,
  PackageOffer,
  LifeScenario,
  SystemComparison,
  TeletechnicService,
  FaqItem,
  KnxShellyCapability,
  HikvisionProductLine,
} from '../types.ts';

export const SYSTEM_COMPARISONS: SystemComparison[] = [
  {
    id: 'knx',
    name: 'KNX / Gira / Ekinex / Theben',
    tagline: 'Światowy standard przemysłowy i rezydencjalny (magistrala zielonego kabla)',
    cableType: 'Magistrala przewodowa (Bus)',
    bestFor: 'Wille i rezydencje na etapie stanu surowego ze sporym budżetem i naciskiem na prestiż',
    autonomyOffline: '100% Pełna lokalnie',
    pros: [
      'Certyfikowany międzynarodowy standard ISO/IEC od ponad 30 lat, produkowany przez 500+ marek (Gira, ABB, Ekinex, Basalte, Jung)',
      'Niezrównany wybór luksusowych przycisków ściennych z prawdziwego kamienia, szczotkowanego mosiądzu, szkła i skóry',
      'Brak pojedynczego punktu awarii – rozproszona inteligencja w każdym sensorze i aktorze',
      'Bezpośrednia integracja z cyfrową magistralą oświetleniową DALI-2 (płynne ściemnianie od 0.1% i Tunable White)',
    ],
    cons: [
      'Bardzo wysoki koszt zakupu certyfikowanego osprzętu magistralnego i licencjonowanego oprogramowania ETS',
      'Wymaga bezwzględnie ułożenia 4-żyłowego kabla magistralnego YCYM na etapie tynków',
    ],
    humanVerdict:
      'Absolutna najwyższa półka automatyki przewodowej. W ścianie biegnie zielony przewód magistralny łączący włączniki i czujki. Działa dekadami bez żadnej konserwacji i oferuje ekskluzywne wykończenia przycisków z granitu, mosiądzu lub matowego szkła.',
    estimatedCostScale: 'Premium / Rezydencjalny',
  },
  {
    id: 'shelly',
    name: 'Shelly Pro & Plus (Wi-Fi / LAN / Matter)',
    tagline: 'Inteligentny dom nowej generacji: szyna DIN w rozdzielnicy i mikromoduły bez kucia ścian',
    cableType: 'Hybrydowy (LAN + Bezprzewodowy)',
    bestFor: 'Wykończone wnętrza oraz nowoczesne rozdzielnice: bezpyłowy montaż lub instalacja modułowa na szynie DIN',
    autonomyOffline: '100% Pełna lokalnie',
    pros: [
      'Linia Shelly Pro montowana bezpośrednio na szynę DIN w rozdzielnicy z bezpośrednim kablem LAN RJ45',
      'Linia Shelly Plus montowana bezpyłowo za istniejącymi włącznikami w puszkach 60mm (zero kucia ścian)',
      'Wbudowany precyzyjny pomiar poboru energii dla każdego obwodu oświetlenia i gniazd',
      '100% otwarta praca lokalna bez wymogu łączenia z chmurą producenta (MQTT, REST API, Home Assistant)',
      'Doskonały stosunek ceny do możliwości – elastyczna rozbudowa pokój po pokoju',
    ],
    cons: [
      'Wymaga głębokich puszek podtynkowych (min. 60mm) przy wersji dopuszkowej Plus',
      'Wymaga stabilnej, profesjonalnej sieci Wi-Fi lub okablowania LAN w szafie',
    ],
    humanVerdict:
      'Nowoczesny i niesamowicie wszechstronny standard. Moduły Shelly Pro w rozdzielnicy sterują obwodami przez przewody, a mikromoduły Shelly Plus pozwalają zautomatyzować gotowe mieszkanie w 24 godziny bez kurzu i bez remontu.',
    estimatedCostScale: 'Średni',
  },
  {
    id: 'home_assistant',
    name: 'Home Assistant (Local-First Pro Integrator)',
    tagline: 'Standard DOMENCE: bez abonamentów, 100% lokalny, łączy KNX + Shelly + Hikvision',
    cableType: 'Hybrydowy (LAN + Bezprzewodowy)',
    bestFor: 'Domy i rezydencje, gdzie liczy się bezkompromisowa prywatność, zaawansowane scenariusze i zero opłat',
    autonomyOffline: '100% Pełna lokalnie',
    pros: [
      'Pełna niezależność od chmury – działa nawet po odcięciu kabla internetowego dostawcy',
      'Łączy w jednym interfejsie magistralę KNX, moduły Shelly Pro/Plus, kamery i domofony Hikvision oraz klimatyzację',
      'Brak jakichkolwiek subskrypcji i abonamentów chmurowych',
      'Potężny silnik scenariuszy (joga, budzenie światłem, tarcza antyzalaniowa, powitanie w domu)',
    ],
    cons: [
      'Wymaga profesjonalnego inżynierskiego wdrożenia i serwera dedykowanego w szafie RACK',
    ],
    humanVerdict:
      'Prywatny mózg domu w cichej szafce teletechnicznej. Nagrania z kamer i dane domowników zostają w Twoim domu. System działa stabilnie bez względu na internet czy awarie zewnętrznych serwerów.',
    estimatedCostScale: 'Średni',
  },
  {
    id: 'loxone',
    name: 'Loxone (Miniserver)',
    tagline: 'Zintegrowany ekosystem przewodowy z mocnym naciskiem na audio i oświetlenie',
    cableType: 'Magistrala przewodowa (Bus)',
    bestFor: 'Nowe domy jednorodzinne o spójnej, zamkniętej koncepcji producenta',
    autonomyOffline: '100% Lokalna z opcją chmury',
    pros: [
      'Świetna integracja nagłośnienia wielostrefowego (Audioserver)',
      'Stabilna komunikacja po skrętce CAT oraz magistrali Tree',
      'Gotowa, dopracowana logika sterowania klimatem i zacienieniem',
    ],
    cons: [
      'Zależność od jednego austriackiego producenta (hardware lock-in)',
      'Wysoki próg wejścia finansowego dla osprzętu dedykowanego',
    ],
    humanVerdict:
      'Spójne, dopracowane środowisko technologiczne jednej marki. Wszystko działa bardzo płynnie, dopóki korzystasz głównie z podzespołów z oferty tego producenta.',
    estimatedCostScale: 'Wysoki',
  },
];

export const KNX_SHELLY_CAPABILITIES: KnxShellyCapability[] = [
  {
    id: 'cap-lighting',
    title: 'Oświetlenie Nastrojowe & DALI-2 (Tunable White & HCL)',
    category: 'lighting',
    badge: 'Human Centric Lighting',
    description:
      'Płynne ściemnianie od 0.1% do 100% bez migotania. Zmiana temperatury barwowej światła (1800K ciepły bursztyn do 6500K rześkie światło dzienne) dopasowana do dobowego rytmu człowieka.',
    knxAdvantage:
      'Bramki KNX-DALI-2 sterują bezpośrednio oprawami architektonicznymi, szynoprzewodami magnetycznymi i taśmami LED COB z dokładnością do pojedynczej diody.',
    shellyAdvantage:
      'Moduły Shelly Pro Dimmer 1/2PM na szynę DIN oraz Shelly Plus Dimmer w puszkach pozwalają ściemniać tradycyjne obwody LED 230V i paski LED 12/24V RGBW.',
    scenariosExample:
      'Rano światło łagodnie budzi ciepłym blaskiem wschodu słońca. W nocy czujnik w podłodze zapala subtelne światło cokołowe 1800K na 5%, by nie rozbudzać wzroku.',
    features: [
      'Ściemnianie 0.1–100% bez efektu migotania kamerą',
      'Tunable White (regulacja barwy 1800K – 6500K)',
      'Dedykowane sceny relaksu, czytania, kolacji i kina',
      'Eliminacja tętnienia i ochrona wzroku',
    ],
  },
  {
    id: 'cap-blinds',
    title: 'Automatyka Rolet, Żaluzji Fasadowych & Zasłon (Sun-Tracking)',
    category: 'blinds',
    badge: 'Precyzja Kąta Lameli',
    description:
      'Inteligentne sterowanie roletami i żaluzjami fasadowymi. System precyzyjnie obraca lamele zgodnie z pozycją słońca na niebie, wpuszczając naturalne światło i blokując nagrzewanie pokoju.',
    knxAdvantage:
      'Aktory roletowe KNX ze sprzężeniem zwrotnym kąta lameli do 1 stopnia i zintegrowaną stacją meteo z czujnikiem wiatru (ochrona przed połamaniem przez wichurę).',
    shellyAdvantage:
      'Moduły Shelly Pro 2PM (szyna DIN) oraz Shelly Plus 2PM z precyzyjną autokalibracją pozycji procentowej rolety bez dodatkowych czujników krańcowych.',
    scenariosExample:
      'Po wypowiedzeniu "Chcę poćwiczyć jogę" rolety zamykają się, dając pełną prywatność. O poranku uchylają się powoli, by wpuścić pierwsze promienie słońca.',
    features: [
      'Śledzenie kąta słońca (Sun Tracking) zapobiegające upałom',
      'Płynne ciche budzenie naturalnym światłem poranka',
      'Automatyczne zamykanie o zmierzchu lub po wyjściu z domu',
      'Ochrona przed silnym wiatrem ze stacji pogodowej',
    ],
  },
  {
    id: 'cap-climate',
    title: 'Klimat Strefowy, Ogrzewanie Podłogowe & Rekuperacja',
    category: 'climate',
    badge: 'Komfort & Oszczędność 25%',
    description:
      'Niezależna temperatura w każdym pomieszczeniu. Algorytmy PWM sterują bezszelestnymi siłownikami rozdzielacza podłogówki, klimakonwektorami i wentylacją mechaniczną.',
    knxAdvantage:
      'Aktory grzewcze KNX z wbudowanymi regulatorami PI i siłownikami termoelektrycznymi 24V/230V oraz wielofunkcyjne termostaty ścienne z wyświetlaczami e-ink/TFT.',
    shellyAdvantage:
      'Sterowniki Shelly Pro 4PM w rozdzielnicy ogrzewania we współpracy z bezprzewodowymi sensorami temperatury i wilgotności Shelly Plus H&T.',
    scenariosExample:
      'W sypialni utrzymywane jest rześkie 18.5°C do głębokiego snu, a w łazience 23°C. Podczas wietrzenia okna ogrzewanie w danym pokoju wyłącza się automatycznie.',
    features: [
      'Strefowa regulacja temperatury w każdym pokoju',
      'Algorytm bezwładności podłogówki zapobiegający przegrzewaniu',
      'Automatyczne wyłączenie grzania przy otwartym oknie (kontaktron)',
      'Monitorowanie jakości powietrza (CO2, VOC, wilgotność)',
    ],
  },
  {
    id: 'cap-audio',
    title: 'Nagłośnienie Multiroom & Dźwięk Przestrzenny',
    category: 'audio',
    badge: 'Dźwięk Wtopiony w Architekturę',
    description:
      'Bezramkowe głośniki sufitowe w strefie dziennej, sypialni, łazience i na tarasie. Niezależna muzyka ze Spotify, Apple Music lub radia w każdym pomieszczeniu.',
    knxAdvantage:
      'Bramki audio KNX pozwalają sterować głośnością i utworami bezpośrednio z eleganckich przycisków ściennych obok włączników światła.',
    shellyAdvantage:
      'Wyzwalanie strumieniowania i automatyzacji audio przez skrypty Shelly i integrację z lokalnymi odtwarzaczami sieciowymi (AirPlay 2, Linkplay, Sonos).',
    scenariosExample:
      'Gdy włączasz scenę jogi, w pokoju natychmiast płynie uspokajający ambient. Gdy dzwoni domofon Hikvision, muzyka w salonie płynnie się przycisza.',
    features: [
      'Niezależne strefy dźwięku (Salon, Kuchnia, Taras, Łazienka)',
      'Apple AirPlay 2, Spotify Connect, Tidal i radio internetowe',
      'Przyciszanie muzyki podczas dzwonienia domofonu lub alarmu',
      'Płynne przejścia dźwięku i budzenie ulubioną playlistą',
    ],
  },
  {
    id: 'cap-sensors',
    title: 'Sensoryka Obecności True Presence & Radary mmWave',
    category: 'sensors',
    badge: 'Niewidzialna Inteligencja',
    description:
      'Nowoczesne czujniki radarowe fal milimetrowych wykrywają mikroruchy (oddychanie człowieka). Światło nie gaśnie, gdy siedzisz nieruchomo, czytasz książkę lub medytujesz na macie.',
    knxAdvantage:
      'Certyfikowane sufitowe czujniki obecności KNX (np. Steinel True Presence / Theben theRoc) montowane licowo w gipsie z pomiarem jasności lux w czasie rzeczywistym.',
    shellyAdvantage:
      'Integracja radarów mmWave z mikromodułami Shelly pozwala przekształcić zwykłą lampę w inteligentne źródło światła reagujące w 0.05 sekundy.',
    scenariosExample:
      'Czujnik wie, że jesteś w pokoju, nawet gdy leżysz nieruchomo podczas relaksacji po jodze – światło nie zgaśnie i nie musisz machać ręką.',
    features: [
      'Detekcja mikroruchów (oddychanie, czytanie, medytacja)',
      'Podział pomieszczenia na strefy (np. sofa, biurko, łóżko)',
      'Pomiar natężenia światła dziennego (regulacja stałego oświetlenia)',
      'Kontaktrony ukryte w ramach okien i drzwi wejściowych',
    ],
  },
  {
    id: 'cap-interface',
    title: 'Luksusowe Przyciski, Panele Dotykowe & Sterowanie Głosem',
    category: 'interface',
    badge: 'Minimalizm na Ścianie',
    description:
      'Koniec z rzędem 6 plastikowych włączników. Jeden minimalistyczny panel z kamienia, metalu lub szkła zastępuje wszystkie klawisze, termostat i sterownik rolet.',
    knxAdvantage:
      'Ekskluzywne kolekcje Gira Esprit, Ekinex 71 Series, Basalte Fibonacci z prawdziwego marmuru, brązu i szkła z programowalnymi diodami LED stanu.',
    shellyAdvantage:
      'Mikromoduły Shelly współpracują z dowolnym wybranym przez architekta osprzętem klawiszowym (np. Jung LS990, Schneider Sedna, Berker Q.7).',
    scenariosExample:
      'Wypowiedz na głos "Chcę poćwiczyć jogę" do asystenta lub naciśnij jeden klawisz "Scena Relaks" przy wejściu do pokoju.',
    features: [
      'Dotykowe panele ścienne 4" i 8" z podglądem kamer i klimatu',
      'Przyciski z haptyczną informacją zwrotną i podświetleniem LED',
      'Sterowanie głosowe offline bez wysyłania nagrań do internetu',
      'Nowoczesna aplikacja na smartfony i tablety domowników',
    ],
  },
];

export const HIKVISION_PRODUCTS: HikvisionProductLine[] = [
  {
    id: 'hik-colorvu',
    series: 'Hikvision ColorVu 3.0 & Smart Hybrid Light',
    category: 'cctv_colorvu',
    tagline: 'Krystaliczny kolor 24/7 w nocy z przetwornikiem F1.0 Super-Confocal',
    keyTech: 'Obiektyw o super-aperturze F1.0 + matryca 4K Ultra HD 1/1.2" CMOS',
    bestUse: 'Elewacja domu, strefa podjazdu, ogród, strefa wejściowa',
    highlights: [
      'Pełnokolorowy obraz o zmierzchu i w nocy bez sztucznego naświetlania',
      'Smart Hybrid Light: dyskretne widzenie IR, które płynnie przełącza się na miękkie światło białe po wykryciu człowieka',
      'Rozdzielczość 4K (8 Megapikseli) z kompresją H.265+ oszczędzającą 75% dysku',
      'Metalowa obudowa IK10 (wandaloodporna) i IP67 (pełna odporność na mróz i ulewy)',
    ],
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'hik-acusense',
    series: 'Hikvision AcuSense 2.0 & Live Guard',
    category: 'cctv_acusense',
    tagline: 'Analityka AI Deep Learning: 98.9% redukcji fałszywych alarmów + aktywna syrena',
    keyTech: 'Klasyfikacja celów Człowiek / Pojazd + zintegrowany stroboskop i głośnik audio',
    bestUse: 'Obwód posesji, brama wjazdowa, garaż, ochrona przed intruzami',
    highlights: [
      'Precyzyjne odróżnianie ludzi i samochodów od zwierząt, kołyszących się gałęzi czy ulewnego deszczu',
      'Live Guard: wbudowany stroboskop i komunikat głosowy ("Strefa chroniona, proszę opuścić teren") odstraszający intruza zanim dotknie ogrodzenia',
      'Dwukierunkowe audio: możliwość rozmowy przez kamerę bezpośrednio z poziomu telefonu',
      'Natychmiastowe powiadomienia PUSH z precyzyjnym zdjęciem zdarzenia na smartfon',
    ],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'hik-tandemvu',
    series: 'Hikvision TandemVu Dual-Lens PTZ',
    category: 'cctv_tandemvu',
    tagline: 'Dwa obiektywy w jednej kamerze: stały podgląd 180° + obrotowy zoom 32x ze śledzeniem celu',
    keyTech: 'Kanał panoramiczny do ogólnego widoku + moduł obrotowy PTZ z auto-trackingiem',
    bestUse: 'Duże posesje, ogrody rezydencji, strefy wjazdu i tereny otwarte',
    highlights: [
      'Górny obiektyw stale monitoruje całą przestrzeń 180° – brak jakichkolwiek martwych stref',
      'Dolny moduł PTZ z zoomem optycznym 25x/32x automatycznie namierza i podąża za poruszającą się osobą (Smart Tracking 3.0)',
      'Odczytywanie tablic rejestracyjnych pojazdów wjeżdżających na posesję',
      'Zastępuje 3 tradycyjne kamery statyczne w jednym estetycznym punkcie montażowym',
    ],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'hik-intercom-modular',
    series: 'Hikvision IP Modular Intercom 2nd Gen (KD8 / KD9 Series)',
    category: 'intercom_modular',
    tagline: 'Elegancka stacja bramowa ze stali nierdzewnej lub aluminium anodowanego',
    keyTech: 'Kamera 2MP Fisheye 180° WDR + moduły zbliżeniowe Mifare/NFC/Bluetooth + zamek szyfrowy',
    bestUse: 'Furtka wejściowa, brama frontowa rezydencji, główne wejście do budynku',
    highlights: [
      'Modułowa budowa: zestawienie modułu kamery z klawiaturą PIN, czytnikiem breloków i ekranem lokatorów',
      'Szerokokątna kamera 180° widzi całą sylwetkę osoby stojącej przed furtką oraz paczkę na ziemi',
      'Bezpośrednie sterowanie elektrozaczepem furtki i automatyką bramy wjazdowej z dwóch niezależnych przekaźników',
      'Wandaloodporna obudowa IK08/IK09 odporna na trudne warunki atmosferyczne od -40°C do +60°C',
    ],
    image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'hik-minmoe-face',
    series: 'Hikvision MinMoe Face Recognition Terminals',
    category: 'intercom_face',
    tagline: 'Otwieranie furtki i drzwi w 0.2 sekundy za pomocą biometrii twarzy bez kluczy',
    keyTech: 'Algorytm Deep Learning Face Recognition z podwójną kamerą antyspoofing 3D',
    bestUse: 'Furtka wejściowa, drzwi główne do domu, wejście do strefy prywatnej',
    highlights: [
      'Wchodzisz do domu z siatkami z zakupami bez szukania kluczy – stacja rozpoznaje Twoją twarz w 0.2 sekundy',
      'Algorytm zapobiega oszustwom – nie da się otworzyć drzwi zdjęciem, filmem na telefonie ani maską',
      'Kamera z doświetleniem IR działa niezawodnie w kompletnych ciemnościach i w pełnym słońcu',
      'Możliwość generowania tymczasowych kodów QR na smartfon dla gości i kurierów',
    ],
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'hik-android-screen',
    series: 'Hikvision Android Touch Station (DS-KH9510 / KH9310)',
    category: 'intercom_android',
    tagline: 'Dotykowy ekran 10" IPS ze szkłem 2.5D z wbudowaną obsługą Smart Home',
    keyTech: 'System Android + obsługa aplikacji Home Assistant / KNX + podgląd kamer CCTV na żywo',
    bestUse: 'Ściana w holu, kuchnia, salon, gabinet – centralny punkt sterowania domem',
    highlights: [
      'Wielofunkcyjny ekran: oprócz odbierania domofonu uruchamia aplikację sterowania domem (światło, rolety, klimat)',
      'Błyskawiczny podgląd na żywo ze wszystkich kamer posesji w pełnej rozdzielczości',
      'Interkom domowy: rozmowy głosowe między pokojami (np. kuchnia z piętrem)',
      'Zasilanie PoE (jeden cienki przewód sieciowy dostarcza prąd i dane)',
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85',
  },
];

export const TELETECHNIC_SERVICES: TeletechnicService[] = [
  {
    id: 'cctv_ai',
    title: 'Monitoring Wizyjny Hikvision ColorVu & AcuSense AI',
    subtitle: 'Kamery 4K / 8MP, pełen kolor w nocy F1.0, rozpoznawanie ludzi i aut, eliminacja fałszywych alarmów',
    icon: 'Camera',
    description:
      'Cyfrowa telewizja przemysłowa IP oparta na flagowych przetwornikach Hikvision ColorVu 3.0 z technologią Smart Hybrid Light i analityką AcuSense AI. Krystaliczny obraz w nocy, aktywny stroboskop Live Guard i pełna prywatność bez wysyłania nagrań do chmury.',
    humanExplanation:
      'Kamera widzi w nocy w żywych barwach, odróżnia człowieka i auto od kota czy gałęzi na wietrze, więc telefon nie wibruje bez powodu. Wszystkie nagrania zapisują się w Twojej domowej szafce na twardym dysku, bez opłat abonamentowych.',
    equipment: [
      'Kamery kopułkowe lub tubowe Hikvision 4K ColorVu / AcuSense w obudowach IK10/IP67',
      'Rejestrator NVR Hikvision Pro z dyskami serwerowymi (WD Purple / Seagate SkyHawk) do pracy ciągłej 24/7',
      'Zasilanie PoE (jeden kabel sieciowy dostarcza obraz i prąd do kamery na odległość do 100m)',
      'Aplikacja Hik-Connect: szyfrowany podgląd w telefonie bez stałego publicznego adresu IP i bez opłat',
    ],
    specs: [
      'Przetworniki ultra-czułe F1.0 z technologią ColorVu (obraz w kolorze 24/7)',
      'Algorytmy Deep Learning (filtracja 98.9% fałszywych alarmów)',
      'Kompresja H.265+ (oszczędność do 75% miejsca na twardym dysku)',
      'Odporność na skrajne temperatury od -40°C do +60°C',
    ],
  },
  {
    id: 'access_control',
    title: 'Wideodomofony IP Hikvision Modular & Rozpoznawanie Twarzy MinMoe',
    subtitle: 'Moduły ze stali nierdzewnej, biometria twarzy 0.2s, zdalne otwieranie furtki i bramy w smartfonie',
    icon: 'KeyRound',
    description:
      'Kompleksowa kontrola wejścia oparta na modułowych panelach zewnętrznych Hikvision 2nd Gen (DS-KD8003/KD9203) oraz terminalach biometrycznych MinMoe Face Recognition. Wygodne wejście bez kluczy, wideorozmowy w aplikacji Hik-Connect i dotykowe ekrany Android w domu.',
    humanExplanation:
      'Wchodzisz na posesję bez szukania kluczy – furtka otwiera się na widok Twojej twarzy, na kod lub brelok. Gdy dzwoni kurier, odbierasz wideo na telefonie stojąc w korku, jednym kliknięciem uchylasz furtkę i widzisz, jak zostawia paczkę.',
    equipment: [
      'Modułowa stacja bramowa Hikvision ze stali nierdzewnej z kamerą szerokokątną 180° WDR',
      'Terminale rozpoznawania twarzy Hikvision MinMoe z podwójną kamerą antyspoofingową',
      'Dotykowy monitor wewnętrzny 7" lub 10" ze szkłem 2.5D z obsługą aplikacji Smart Home (Home Assistant/Shelly)',
      'Atestowane elektrozaczepy rewersyjne i zamki silnikowe ze sterowaniem dwustopniowym',
    ],
    specs: [
      'Rozpoznanie twarzy w 0.2 sekundy z ochroną przed zdjęciami (antyspoofing)',
      'Darmowa aplikacja Hik-Connect na nielimitowaną liczbę telefonów domowników',
      'Czasowe kody PIN i kody QR dla kurierów i serwisantów',
      'Integracja z automatyką: dzwonek wycisza muzykę multiroom i włącza światło przed furtką',
    ],
  },
  {
    id: 'structured_lan',
    title: 'Sieci Strukturalne LAN, Światłowody & Szafy RACK 19"',
    subtitle: 'Szybki internet w całym domu: okablowanie kat. 6A/7, switche PoE+ i Wi-Fi 6/7 Mesh',
    icon: 'Network',
    description:
      'Projekt i wykonanie certyfikowanego okablowania teleinformatycznego. Centralna szafa serwerowa RACK 19", organizery kabli, patchpanele krosowe, zasilacze awaryjne UPS oraz profesjonalne punkty dostępowe Wi-Fi montowane podtynkowo i podsufitowo.',
    humanExplanation:
      'Cyfrowy kręgosłup domu: stabilny internet bez zrywania połączeń podczas wideorozmów czy oglądania filmów w 4K. Kable doprowadzone do biurek i telewizorów, a dyskretne punkty Wi-Fi na suficie płynnie przełączają telefon między piętrami i ogrodem.',
    equipment: [
      'Szafa RACK 19" z wentylacją termostatyczną i szklanymi drzwiami dymionymi',
      'Przewody teleinformatyczne S/FTP kat. 6A / 7 (przepustowość do 10 Gbit/s)',
      'Switche zarządzalne PoE+ z podziałem na bezpieczne sieci VLAN (Kamery, IoT, Dom, Goście)',
      'Punkty dostępowe Wi-Fi 6/7 podsufitowe z technologią Seamless Roaming',
    ],
    specs: [
      'Pomiary toru transmisyjnego miernikiem certyfikacyjnym Fluke',
      'Zasilanie gwarantowane UPS (monitoring i internet działają bez prądu)',
      'Pełna izolacja kamer i automatyki od domowych komputerów (VLAN IoT)',
    ],
  },
  {
    id: 'alarm_sswin',
    title: 'Systemy Alarmowe SSWiN & Ochrona Obwodowa',
    subtitle: 'Certyfikowane centrale alarmowe Grade 2 / Grade 3 zintegrowane z automatyką KNX/Shelly',
    icon: 'ShieldAlert',
    description:
      'Wdrożenia oparte na certyfikowanych centralach alarmowych ze zintegrowanymi kontaktronami okiennymi, czujkami kurtynowymi zewnętrznymi i czujkami dualnymi PIR+MW. Synergia z kamerami Hikvision AcuSense.',
    humanExplanation:
      'Czujniki okienne pracują podwójnie: w nocy pilnują domu przed włamaniem, a w dzień wyłączają klimatyzację i grzejnik przy wietrzeniu. Kiedy uzbrajasz alarm kodem przy wyjściu, dom sam gasi wszystkie światła i zamyka rolety.',
    equipment: [
      'Centrala alarmowa ze zintegrowanym powiadomieniem GSM LTE i łącznością IP',
      'Czujki kurtynowe zewnętrzne (ochrona posesji zanim ktoś dotknie okna)',
      'Szklane dotykowe manipulatory ścienne z czytnikiem breloków zbliżeniowych',
      'Syreny zewnętrzne z własnym zasilaniem akumulatorowym',
    ],
    specs: [
      'Atesty ubezpieczeniowe EN 50131 Grade 2 / Grade 3',
      'Podział na niezależne strefy (np. parter, garaż, ogród)',
      'Opcjonalne powiadomienie wybranej agencji ochrony',
    ],
  },
];

export const SCENARIOS: LifeScenario[] = [
  {
    id: 'sc-yoga',
    number: '01',
    title: '«Chcę poćwiczyć jogę» (Joga & Medytacja Mindfulness)',
    tag: 'Relaks & Prywatność',
    tagColor: '#8B5CF6',
    trigger: 'Komenda głosowa: "Chcę poćwiczyć jogę" lub dedykowany przycisk sceny na ścianie',
    description:
      'Powiedz "Chcę poćwiczyć jogę" lub naciśnij jeden klawisz. Dom w ułamku sekundy przekształca pokój w intymne studio medytacji: ostre światło sufitowe gaśnie, zapalają się ciepłe bursztynowe linie LED, rolety zamykają się, by odciąć spojrzenia z zewnątrz, a z głośników płynie kojący dźwięk.',
    humanNote:
      'Nie musisz chodzić po pokoju, zaciągać rolet, szukać pilota od klimatyzacji ani włączać głośnika w telefonie. Wypowiadasz jedno zdanie, rozkładasz matę i natychmiast zanurzasz się w stanie skupienia.',
    detailPoints: [
      'Główne światło płynnie gaśnie, zapalają się ciepłe cokoły LED 2200K na 15% jasności',
      'Rolety lub żaluzje fasadowe bezszelestnie opuszczają się, zapewniając 100% prywatności',
      'W strefie ćwiczeń multiroom włącza uspokajający ambient, mantry lub dźwięki lasu',
      'Wentylacja mechaniczna/rekuperacja bezgłośnie zwiększa dopływ świeżego tlenu',
      'Dzwonek domofonu i powiadomienia w tym pokoju zostają wyciszone (tryb Zen)',
    ],
    actionSteps: [
      { icon: 'Sun', label: 'Światło Nastrojowe', detail: 'Ciepły bursztyn 2200K na 15% (linie cokołowe i podsufitowe)' },
      { icon: 'SlidersHorizontal', label: 'Rolety i Żaluzje', detail: 'Zamknięcie dla pełnej dyskrecji przed okiem sąsiadów' },
      { icon: 'Volume2', label: 'Akustyka Multiroom', detail: 'Spokojny ambient lub playlista Joga & Zen ze Spotify/Tidal' },
      { icon: 'Wind', label: 'Mikroklimat', detail: 'Cichy napływ natlenionego powietrza, temperatura 21.5°C' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80',
    icon: 'Sparkles',
  },
  {
    id: 'sc-sunrise',
    number: '02',
    title: 'Łagodne Budzenie Słońcem (Sunrise Wake-Up)',
    tag: 'Zdrowy Sen & Energia',
    tagColor: '#F59E0B',
    trigger: 'Harmonogram biologiczny lub godzina budzika w telefonie',
    description:
      'Budzenie bez drastycznego dźwięku budzika. 20 minut przed planowanym wstaniem rolety unoszą się powoli wpuszczając poranne promienie słońca, oświetlenie w sypialni symuluje świt, podłoga w łazience staje się przyjemnie ciepła, a z głośników cicho płynie ulubiony poranny podcast.',
    humanNote:
      'Wstajesz naturalnie wypoczęty, bo Twoje ciało powoli reaguje na narastające światło słoneczne. Wchodzisz bosą stopą na ciepłe płytki w łazience, a z kuchni dobiega zapach świeżo zmielonej kawy.',
    detailPoints: [
      'Płynne unoszenie rolet i lameli o 10-20% wpuszczające naturalne słońce',
      'Światło w sypialni naśladuje świt, przechodząc z 2000K do rześkiego 3500K',
      'Klimat: podgrzanie podłogi w łazience do 23.5°C przed wejściem pod prysznic',
      'Cicha poranna playlista lub wiadomości w głośnikach sufitowych',
      'Uruchomienie ekspresu do kawy w kuchni dokładnie o ustalonej porze',
    ],
    actionSteps: [
      { icon: 'SunMedium', label: 'Światło Świtu', detail: 'Płynne rozjaśnianie od ciepłego bursztynu do światła dziennego' },
      { icon: 'SlidersHorizontal', label: 'Rolety', detail: 'Płynne uchylenie wpuszczające pierwsze promienie poranka' },
      { icon: 'Flame', label: 'Ciepła Podłoga', detail: 'Automatyczne dogrzanie łazienki do komfortowych 23.5°C' },
      { icon: 'Coffee', label: 'Ekspres', detail: 'Świeża kawa gotowa w momencie zejścia do kuchni' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    icon: 'Sun',
  },
  {
    id: 'sc-masteroff',
    number: '03',
    title: 'Wyjście z domu w 1 sekundę (Master Off)',
    tag: 'Bezpieczeństwo & Wygoda',
    tagColor: '#EF4444',
    trigger: 'Pojedynczy klawisz przy drzwiach wejściowych lub zbliżenie breloka',
    description:
      'Jeden przycisk przy drzwiach odcina zasilanie z gniazd żelazka, ekspresu i płyty indukcyjnej, gasi wszystkie światła w całym domu, opuszcza żaluzje fasadowe, przełącza ogrzewanie w tryb oszczędny i uzbraja monitoring z analityką AI.',
    humanNote:
      'Koniec z nerwowym wracaniem się z połowy drogi na spotkanie, by sprawdzić, czy żelazko jest wyjęte z gniazdka. Wciskasz guzik i wiesz, że dom jest bezpiecznie uśpiony i strzeżony.',
    detailPoints: [
      'Koniec z zastanawianiem się "czy na pewno wyłączyłem żelazko"',
      'Automatyczne obniżenie temperatury do trybu Eco (-2°C oszczędności)',
      'Dioda LED przy drzwiach potwierdza, że wszystkie okna są zamknięte',
      'Kamery Hikvision AcuSense przechodzą w aktywny tryb obrony obwodowej',
    ],
    actionSteps: [
      { icon: 'Power', label: 'Obwody Ryzyka', detail: 'Mechaniczne odcięcie zasilania gniazd żelazka i płyty' },
      { icon: 'LightbulbOff', label: 'Wszystkie Światła', detail: 'Płynne wygaszenie oświetlenia we wszystkich pokojach' },
      { icon: 'ShieldCheck', label: 'Bezpieczeństwo', detail: 'Uzbrojenie stref alarmu i aktywacja analityki sylwetek AI' },
      { icon: 'SlidersHorizontal', label: 'Zacienienie', detail: 'Opuszczenie rolet chroniące wnętrza przed spojrzeniami' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    icon: 'LogOut',
  },
  {
    id: 'sc-cinema',
    number: '04',
    title: 'Kino Domowe & Wieczór Filmowy (Movie Night)',
    tag: 'Multimedia & Atmosfera',
    tagColor: '#3B82F6',
    trigger: 'Komenda "Włącz kino", przycisk w salonie lub włączenie telewizora/projektora',
    description:
      'Gdy nadchodzi czas na film, dom natychmiast zamienia salon w salę kinową: żaluzje zjeżdżają tworząc 100% zaciemnienia blackout, oświetlenie gaśnie zostawiając kinowy akcent 5%, opuszcza się ekran projektora, a nagłośnienie Dolby Atmos wypełnia przestrzeń.',
    humanNote:
      'Prawdziwy kinowy klimat bez wstawania z kanapy. Jeden dotyk sprawia, że światło przygasa płynnie jak w sali kinowej przed seansem.',
    detailPoints: [
      '100% zaciemnienia roletami lub zasłonami z tkaniną blackout',
      'Dyskretne oświetlenie przypodłogowe 5% w barwie kinowej indygo/ciepłej',
      'Uruchomienie projektora, ekranu elektrycznego i amplitunera AV',
      'Wyciszenie zbędnych powiadomień w strefie salonu',
    ],
    actionSteps: [
      { icon: 'SlidersHorizontal', label: 'Zaciemnienie', detail: 'Całkowite zaryglowanie rolet i zasłon blackout' },
      { icon: 'Sun', label: 'Światło Kinowe', detail: 'Płynne przygaśnięcie do 5% pod kanapą i szafką RTV' },
      { icon: 'Tv', label: 'Projekcja', detail: 'Opuszczenie windy projektora i włączenie nagłośnienia kinowego' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    icon: 'Tv',
  },
  {
    id: 'sc-courier',
    number: '05',
    title: 'Kurier i Furtka pod Stałą Kontrolą (Hikvision IP)',
    tag: 'Wideodomofon & Dostęp',
    tagColor: '#F97316',
    trigger: 'Naciśnięcie dzwonka na stacji bramowej Hikvision KD8003 / KD9613',
    description:
      'Dzwonek natychmiast przekierowuje wideorozmowę na Twój smartfon w aplikacji Hik-Connect. Rozmawiasz z kurierem stojąc w korku, jednym kliknięciem uchylasz furtkę i widzisz na żywo w 4K, jak kładzie paczkę pod wiatą.',
    humanNote:
      'Nie musisz prosić sąsiada o odbiór przesyłki ani jeździć do punktu odbioru. Otwierasz furtkę na odległość, a nagranie zapisuje się na Twoim domowym dysku NVR.',
    detailPoints: [
      'Krystaliczny dźwięk dwukierunkowy z aktywną redukcją szumów wiatru i ulicy',
      'Możliwość generowania tymczasowych kodów PIN/QR dla kurierów i ekip',
      'Zapis obrazu w 4K wyłącznie na lokalnym dysku w domu – pełna ochrona RODO',
      'Wyciszenie muzyki multiroom w domu na czas dzwonienia furtki',
    ],
    actionSteps: [
      { icon: 'Video', label: 'Połączenie HD', detail: 'Błyskawiczne wideo 180° w telefonie w aplikacji Hik-Connect' },
      { icon: 'KeyRound', label: 'Zdalne Otwarcie', detail: 'Jedno dotknięcie zwalnia elektrozaczep furtki' },
      { icon: 'HardDrive', label: 'Zapis NVR', detail: 'Zdarzenie zapisane na fizycznym dysku bez opłat abonamentowych' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200&q=80',
    icon: 'Video',
  },
  {
    id: 'sc-water',
    number: '06',
    title: 'Tarcza Antyzalaniowa Fail-Safe w < 3 sekundy',
    tag: 'Ochrona Majątku',
    tagColor: '#0284C7',
    trigger: 'Wykrycie wilgoci przez czujnik pod pralką, zmywarką lub w kotłowni',
    description:
      'Gdy pęka wężyk pod umywalką w środku nocy, sensor natychmiast wysyła bezpośredni sygnał do zaworu silnikowego ze stali nierdzewnej. Dopływ wody zostaje odcięty mechanicznie w 3 sekundy, nawet przy braku prądu i internetu.',
    humanNote:
      'Zalanie sąsiada lub zniszczenie dębowego parkietu za kilkadziesiąt tysięcy złotych zostaje zduszone w zarodku w 3 sekundy, nawet gdy śpisz głęboko lub jesteś na wakacjach.',
    detailPoints: [
      '100% lokalna praca Fail-Safe bez udziału zewnętrznej chmury',
      'Zawory kulowe ze sprężyną powrotną odcinające wodę nawet przy braku zasilania',
      'Błyskawiczne powiadomienie PUSH na telefon z dokładną lokalizacją wycieku',
      'Cykliczne auto-odkamienianie zaworów raz w tygodniu w nocy',
    ],
    actionSteps: [
      { icon: 'Droplets', label: 'Detekcja Wycieku', detail: 'Reakcja sensora w ułamku sekundy' },
      { icon: 'ShieldAlert', label: 'Mechaniczne Odcięcie', detail: 'Zamknięcie głównego zaworu wody w < 3s' },
      { icon: 'Phone', label: 'Alarm PUSH', detail: 'Powiadomienie na telefony domowników z mapą wycieku' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    icon: 'Droplets',
  },
  {
    id: 'sc-sleep',
    number: '07',
    title: 'Biorytmiczny Sen & Nocne Przebudzenie (Bio-Sleep)',
    tag: 'Zdrowie & Biorytm',
    tagColor: '#10B981',
    trigger: 'Wykrycie ruchu stopą przy łóżku w godzinach 23:00 - 06:00',
    description:
      'Gdy wstajesz w nocy do łazienki lub do dziecka, radar pod łóżkiem zapala wyłącznie delikatne podświetlenie cokołowe na 5% w barwie ciepłego bursztynu 1800K. Światło prowadzi Cię bez oślepiania i bez blokowania wydzielania melatoniny.',
    humanNote:
      'Nie musisz szukać po omacku włącznika ani mrużyć oczu przed ostrym światłem. Idziesz bezpiecznie oświetloną ścieżką, a po powrocie do łóżka natychmiast zasypiasz z powrotem.',
    detailPoints: [
      'Barwa 1800K (amber) wolna od niebieskich fal blokujących melatoninę',
      'Temperatura w sypialni automatycznie obniżana do 18.5°C na czas snu',
      'Cicha praca siłowników ogrzewania i bezgłośne wygaszanie',
      'Brak dźwięków powiadomień i pukania domofonu w strefie sypialnej',
    ],
    actionSteps: [
      { icon: 'Moon', label: 'Cokoły Bursztynowe', detail: 'Światło 1800K na 5% prowadzi do celu bez oślepiania' },
      { icon: 'Thermometer', label: 'Klimat Nocny', detail: 'Rześkie 18.5°C sprzyjające głębokiej fazie snu REM' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef9?auto=format&fit=crop&w=1200&q=80',
    icon: 'Moon',
  },
];

export const WORKFLOW_STEPS = [
  {
    number: '01',
    title: 'Wstępna Konfiguracja w Kalkulatorze',
    desc: 'Wybierasz stan inwestycji, metraż i pożądane moduły teletechniczne w 60 sekund.',
    humanNote: 'Od razu wiesz, w jakim rzędzie wielkości finansowej się poruszamy. Zero ukrytych kosztów.',
  },
  {
    number: '02',
    title: 'Audyt Inżynieryjny na Obiekcie 0 PLN',
    desc: 'Nasz certyfikowany inżynier weryfikuje rozdzielnicę, puszki, trasy kablowe i przewód N.',
    humanNote: 'Nie zgadujemy – sprawdzamy fizycznie instalację miernikami, aby wykluczyć niespodzianki.',
  },
  {
    number: '03',
    title: 'Projekt & Transparentna Wycena',
    desc: 'Precyzyjny wykaz urządzeń, rzetelny kosztorys oraz przejrzysty harmonogram robót.',
    humanNote: 'Jasne zasady od samego początku – wiesz dokładnie, co i za ile zostanie zainstalowane.',
  },
  {
    number: '04',
    title: 'Czysty & Precyzyjny Montaż',
    desc: 'Praca z odsysaniem pyłu, dbałość o wykończenie wnętrz i trwałe oznakowanie obwodów.',
    humanNote: 'Wchodzimy w ochraniaczach na obuwie. Po skończonej pracy zostawiamy nienaganny porządek.',
  },
  {
    number: '05',
    title: 'Test Fail-Safe, Uruchomienie & Szkolenie',
    desc: 'Demonstrujemy działanie systemu, konfigurujemy aplikacje i przekazujemy przejrzystą dokumentację.',
    humanNote: 'Upewniamy się, że każdy domownik swobodnie korzysta z nowych funkcji i czuje się bezpiecznie.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'dzialanie',
    question: 'Czy system KNX i Shelly działa, gdy w domu zabraknie internetu?',
    simpleAnswer:
      'Tak, w 100%! Wszystkie funkcje domowe (włączniki ścienne KNX, moduły Shelly Pro/Plus, wyłączanie wody, sterowanie roletami, scenariusze jogi, ogrzewanie, podgląd z kamer Hikvision i wideodomofon na monitorze) działają bezpośrednio w Twojej sieci domowej bez połączenia ze światem zewnętrznym.',
    technicalDetails:
      'Magistrala przewodowa KNX (TP1) jest zdecentralizowana i nie wymaga nawet centralnego procesora. Moduły Shelly Pro i Plus w sieci lokalnej komunikują się bezpośrednio przez protokół CoAP/MQTT z domowym serwerem. Brak internetu oznacza jedynie brak powiadomień poza domem – cały budynek działa w 100% autonomicznie (Local-First).',
  },
  {
    category: 'bezpieczenstwo',
    question: 'Czy kamery Hikvision i nagrania z wideodomofonu są bezpieczne przed hakerami?',
    simpleAnswer:
      'Tak, ponieważ nie wysyłamy Twoich nagrań na obce serwery w chmurze. Obraz z kamer ColorVu, AcuSense i wideodomofonu zapisuje się na fizycznym twardym dysku w rejestratorze NVR w Twojej szafie RACK.',
    technicalDetails:
      'Instalacje DOMENCE izolują urządzenia wizyjne w dedykowanej podsieci VLAN bez bezpośredniego dostępu do publicznego internetu. Zdalny dostęp w aplikacji Hik-Connect odbywa się przez szyfrowany strumień z uwierzytelnianiem dwuskładnikowym (2FA) i lokalnym kodem weryfikacyjnym.',
  },
  {
    category: 'remont',
    question: 'Mam już wykończone mieszkanie (płytki, gładzie). Czy muszę cokolwiek kuć?',
    simpleAnswer:
      'Nie! W wykończonych obiektach stosujemy mikromoduły Shelly Plus. Montujemy je w istniejących puszkach pod Twoimi włącznikami światła oraz sensory bezprzewodowe. Montaż wykonujemy bezpyłowo z odsysaniem pyłu klasy H13, więc po naszym wyjściu nie ma ani grama kurzu.',
    technicalDetails:
      'Instalujemy miniaturowe mikromoduły Shelly Plus 1PM / 2PM / Dimmer za tradycyjnym osprzętem klawiszowym. W przypadku braku przewodu neutralnego N stosujemy moduły z bypassami rezystancyjnymi zapobiegającymi żarzeniu się diod LED. Zawór odcinający wodę montowany jest bezpośrednio na istniejącym zaworze kulowym.',
  },
  {
    category: 'dzialanie',
    question: 'Czy obsługa systemu nie będzie za trudna dla dzieci lub starszych rodziców?',
    simpleAnswer:
      'Wszystkie tradycyjne włączniki na ścianach działają tak samo jak w zwykłym domu. Dziecko lub senior po prostu wciska klawisz na ścianie, a światło się zapala. Aplikacja czy asystent głosowy to tylko wygodny dodatek dla chętnych.',
    technicalDetails:
      'Projektujemy automatykę z zachowaniem zasady Fail-Safe. Każdy obwód posiada fizyczny interfejs manualny. W przypadku awarii sterownika, obwody powracają do stanu bezpiecznego i można nimi sterować ręcznie za pomocą tradycyjnego klawisza.',
  },
  {
    category: 'koszty',
    question: 'Czy inteligentny dom z KNX lub Shelly realnie obniża rachunki?',
    simpleAnswer:
      'Realne oszczędności pochodzą z dwóch źródeł: strefowego ogrzewania (obniżanie temperatury o 2-3°C w nieużywanych pokojach i w nocy daje ok. 15-22% oszczędności) oraz automatyki rolet (latem zatrzymują upał przed szybą, zmniejszając koszty klimatyzacji nawet o 40%).',
    technicalDetails:
      'Wykorzystujemy algorytmy predykcyjne oparte na bezwładności cieplnej budynku oraz czujnikach nasłonecznienia. System opuszcza żaluzje fasadowe po stronie południowej przed przegrzaniem wnętrza, eliminując potrzebę pracy klimatyzatorów na wysokich obrotach.',
  },
];

export const SMART_MODULES: SmartModule[] = [
  {
    id: 'water_shield',
    name: 'Tarcza antyzalaniowa Fail-Safe (zawór 230V + czujniki)',
    badge: 'Kluczowe',
    description: 'Mechaniczne odcięcie głównego zaworu wody w <3 sekundy po wykryciu wycieku. Działa bez internetu.',
    humanExplanation: 'Pęka wężyk pralki w środku nocy? Czujnik pod pralką natychmiast sam zakręca główny zawór wody. Dom jest bezpieczny, a Ty nie wracasz do zalanego parkietu.',
    price: 1250,
    category: 'safety',
    icon: 'ShieldCheck',
  },
  {
    id: 'master_off',
    name: 'Scenariusz «Wyłącz wszystko» (Master Off) + ochrona gniazd',
    badge: 'Must have',
    description: 'Jeden przycisk przy drzwiach gasi oświetlenie i bezpiecznie odłącza zasilanie żelazka, płyty i ekspresu.',
    humanExplanation: 'Wychodzisz w pośpiechu z domu? Wciskasz jeden klawisz przy drzwiach. Wszystkie światła gasną, żelazko traci prąd, a rolety się zamykają. Zero stresu w drodze do pracy.',
    price: 850,
    category: 'safety',
    icon: 'Power',
  },
  {
    id: 'cctv_starter',
    name: 'Monitoring Hikvision 4K z analityką AcuSense AI (2 kamery + rejestrator NVR)',
    badge: 'Nowość ColorVu',
    description: 'Kamery 4K ColorVu z detekcją ludzi/pojazdów, pełen kolor w nocy, dysk serwerowy 2TB, zapis w domu bez abonamentu.',
    humanExplanation: 'Kamery odróżniają psa od intruza. Obraz nagrywa się na dysk w Twojej szafie w nocy w kolorze. Podgląd w telefonie za darmo bez opłat abonamentowych.',
    price: 3400,
    category: 'teletechnics',
    icon: 'Camera',
  },
  {
    id: 'alarm_satel_pack',
    name: 'Certyfikowany Alarm SSWiN Grade 2 + integracja kontaktronów',
    badge: 'Bezpieczeństwo',
    description: 'Centrala hybrydowa, klawiatura szklana, 4 czujki ruchu PIR+MW i powiadomienie LTE.',
    humanExplanation: 'Profesjonalny alarm z atestem. Te same czujki w dzień sterują oświetleniem, a po wyjściu z domu strzegą posesji.',
    price: 3900,
    category: 'teletechnics',
    icon: 'ShieldAlert',
  },
  {
    id: 'blinds_control',
    name: 'Automatyka rolet, żaluzji fasadowych i sceny jogi',
    description: 'Precyzyjna regulacja kąta lameli, automatyczne zamykanie o zmierzchu, wietrze lub komendzie «Chcę poćwiczyć jogę».',
    humanExplanation: 'Rano słońce łagodnie Cię budzi, do jogi rolety tworzą pełną prywatność, a latem żaluzje same blokują upał.',
    price: 1400,
    category: 'comfort',
    icon: 'SlidersHorizontal',
  },
  {
    id: 'hvac_control',
    name: 'Strefowa regulacja ogrzewania podłogowego i mikroklimatu',
    description: 'Niezależna temperatura w każdym pokoju, algorytmy histerezy i realna oszczędność do 25% energii.',
    humanExplanation: 'W sypialni masz rześkie 18.5°C do snu, w łazience cieplutkie 23°C. Grzejniki nie pracują bez sensu, gdy wietrzysz pokój.',
    price: 1800,
    category: 'comfort',
    icon: 'Flame',
  },
  {
    id: 'intercom_poe',
    name: 'Wideodomofon IP Hikvision Modular (panel dotykowy 7" Android + zdalna furtka)',
    badge: 'Standard DOMENCE',
    description: 'Wideo rozmowy na smartfonie, sterowanie elektrozaczepem furtki i podgląd kuriera bez abonamentu.',
    humanExplanation: 'Kurier dzwoni do furtki? Odbierasz na telefonie stojąc w korku, otwierasz furtkę i widzisz, jak kładzie paczkę pod drzwiami.',
    price: 2900,
    category: 'access',
    icon: 'Video',
  },
  {
    id: 'rack_network_pack',
    name: 'Szafa Teletechniczna RACK 19" + Switch PoE + Wi-Fi 6 Mesh',
    badge: 'Infrastruktura',
    description: 'Certyfikowane okablowanie, szafa serwerowa z patchpanelem i bezszwowy roaming Wi-Fi w całym domu.',
    humanExplanation: 'Cyfrowy fundament: koniec z zawieszającym się internetem i martwymi strefami w sypialni czy ogrodzie. Wszystkie kable uporządkowane w estetycznej szafce.',
    price: 3200,
    category: 'teletechnics',
    icon: 'Network',
  },
  {
    id: 'switchboard_protection_pack',
    name: 'Ochrona przeciwprzepięciowa T1+T2 & rozdzielnica DIN',
    badge: 'Ochrona AGD',
    description: 'Wielostopniowe ograniczniki przepięć chroniące elektronikę, pompę ciepła i sprzęt przed burzą.',
    humanExplanation: 'Skuteczna tarcza przed wyładowaniami atmosferycznymi. Każdy obwód trwale oznaczony czytelną etykietą i schematem.',
    price: 950,
    category: 'power',
    icon: 'Cpu',
  },
  {
    id: 'dimming_scenes',
    name: 'Ściemnianie LED DALI-2 & sceny nastrojowe (Joga, Kolacja, Sen)',
    description: 'Łagodne rozjaśnianie rano, nocne podświetlenie cokołowe 1800K na 5% i kinowe sceny dopasowane do nastroju.',
    humanExplanation: 'W nocy światło w korytarzu nie razi po oczach, zapala się delikatnie na 5%. Scena jogi jednym kliknięciem tworzy relaksujący klimat.',
    price: 1100,
    category: 'comfort',
    icon: 'Sun',
  },
  {
    id: 'gate_control',
    name: 'Integracja bramy wjazdowej, garażu i czujników otwarcia',
    description: 'Automatyczne otwieranie geolokalizacją, kontrola stanu zamknięcia i powiadomienia o niedomknięciu.',
    humanExplanation: 'Zbliżasz się do posesji – brama sama się otwiera. Wyjeżdżasz i nie pamiętasz, czy zamknąłeś garaż? Sprawdzasz w aplikacji lub dom sam zamknie go za Tobą.',
    price: 750,
    category: 'access',
    icon: 'DoorClosed',
  },
];

export const PACKAGES: PackageOffer[] = [
  {
    id: 'security_intercom',
    title: 'Wideodomofon IP Hikvision & Monitoring Posesji',
    categoryBadge: 'Teletechnika & Kontrola Wejścia',
    badgeType: 'standard',
    timeframe: '1–2 dni robocze',
    description: 'Kompleksowa kontrola bramy i furtki, eliminacja fałszywych alarmów z AcuSense AI, bezpłatny podgląd wideo 4K bez abonamentu.',
    humanSummary: 'Pełen spokój przy wejściu: wiesz, kto dzwoni, otwierasz furtkę telefonem i masz pewność, że posesja jest pod stałą dyskretną ochroną kamer ColorVu.',
    priceNetto: 5300,
    priceBrutto: 6519,
    recommendedFor: 'security',
    features: [
      'Stacja bramowa IP Hikvision ze stali nierdzewnej z kamerą 180° i stykami do furtki',
      'Dotykowy monitor wewnętrzny 7" Android ze szkłem 2.5D i podglądem kamer',
      '2x kamery fasadowe 4K Hikvision ColorVu z analityką ludzi i aut AcuSense AI',
      'Rejestrator NVR z dyskiem serwerowym 2TB bez opłat chmurowych',
      'Precyzyjny i czysty montaż bez pyłu w wykończonych wnętrzach',
      'Brak ukrytych abonamentów – darmowa aplikacja Hik-Connect',
      'Możliwość otwierania furtki z poziomu smartfona z dowolnego miejsca',
    ],
  },
  {
    id: 'retrofit_smart',
    title: 'Smart Retrofit Shelly (Wykończone Wnętrze Bez Kucia)',
    categoryBadge: 'Bestseller: Bez Ingerencji w Tynki',
    badgeType: 'bestseller',
    timeframe: '1–2 dni robocze',
    description: 'Kompletna automatyka Shelly Plus bez kurzu i bez niszczenia gładzi. Zabezpieczenie przed zalaniem, oświetlenie, rolety i sceny jogi.',
    humanSummary: 'Przekształcamy gotowe mieszkanie lub dom w nowoczesny smart home w 48 godzin. Twoje ściany i płytki pozostają nienaruszone.',
    priceNetto: 6900,
    priceBrutto: 8487,
    recommendedFor: 'retro',
    features: [
      '6x mikromodułów dopuszkowych Shelly Plus z pomiarem zużycia prądu',
      '2x cyfrowe ściemniacze oświetlenia LED bez efektu migotania z trybem nocnym',
      'Tarcza antyzalaniowa Fail-Safe: 3 sensory zalania + siłownik zaworu kulowego 3s',
      'Sterowanie roletami ze sceną «Chcę poćwiczyć jogę» i «Budzenie słońcem»',
      'Lokalna centrala Home Assistant Pro (pełna prywatność i 100% offline)',
      'Scenariusz Master Off ("Wyjdź z domu") przy drzwiach wejściowych',
      'Czysty montaż bezpyłowy z odciągiem H13 w 24-48 godzin',
    ],
  },
  {
    id: 'developer_din',
    title: 'KNX & Shelly Pro Rezydencja (Szyna DIN + Magistrala)',
    categoryBadge: 'Pełny Standard Inżynieryjny',
    badgeType: 'premium',
    timeframe: '3–5 dni roboczych',
    description: 'Magistrala przewodowa KNX z osprzętem Gira/Ekinex, moduły Shelly Pro DIN w rozdzielnicy elektrycznej oraz szafa teletechniczna RACK.',
    humanSummary: 'Najwyższy standard dla nowo budowanych domów: trwałość na 30 lat, kable magistralne w tynku, certyfikowana rozdzielnica i pełna dokumentacja powykonawcza.',
    priceNetto: 14900,
    priceBrutto: 18327,
    recommendedFor: 'deweloperski',
    features: [
      'Magistrala przewodowa KNX z aktorami oświetlenia DALI-2 i roletowymi',
      'Moduły Shelly Pro z bezpośrednią łącznością sieciową LAN RJ45 w rozdzielnicy',
      'Sterownik strefowego ogrzewania podłogowego dla 6-8 niezależnych obwodów',
      '2x zawory kulowe ze stali nierdzewnej 230V ze sprężyną powrotną Fail-Safe',
      'Kompletna szafka teletechniczna RACK 19" z panelem krosowym i switchem PoE',
      'Prefabrykacja i czytelne znakowanie rozdzielnicy z ochroną przeciwprzepięciową T1+T2',
      'Pełne wdrożenie scenariuszy: Joga, Poranne Budzenie Słońcem, Master Off, Kino Domowe',
    ],
  },
];

export const MULTIROOM_GARDEN = {
  audio: {
    title: 'Multiroom Audio & Domowe Kino',
    desc: 'Dyskretne głośniki sufitowe bezramkowe i nagłośnienie tarasu. Muzyka ze Spotify, Apple Music lub radia internetowego gra dokładnie w tych strefach, w których przebywasz.',
    humanNote:
      'W łazience relaksujesz się przy spokojnej muzyce, w kuchni cicho gra poranny podcast, a na tarasie leci playlista spotkania ze znajomymi. Wszystkim sterujesz intuicyjnie ze smartfona lub przycisku na ścianie.',
    features: [
      'Niezależne strefy dźwięku (np. Salon, Kuchnia, Taras, Łazienka, Sypialnia)',
      'Wsparcie dla Apple AirPlay 2, Spotify Connect, Tidal i Bluetooth',
      'Scena "Kino Domowe": jedno dotknięcie opuszcza rolety, przygasza światła do 5%, włącza projektor i nagłośnienie Dolby Atmos',
    ],
  },
  garden: {
    title: 'Automatyka Ogrodu i Ochrona Pogodowa',
    desc: 'Lokalna stacja pogodowa na dachu i sekcyjne nawadnianie kropelkowe. Dom wie, kiedy padał deszcz, jak mocno wieje wiatr i kiedy schować markizę.',
    humanNote:
      'Zraszacze trawnika nie włączą się, jeśli przed chwilą spadł deszcz. A gdy zerwie się gwałtowna burza, system sam natychmiast zwinie kosztowną markizę na tarasie, zanim połamie ją porywisty wiatr.',
    features: [
      'Stacja meteo z ultradźwiękowym czujnikiem siły i kierunku wiatru',
      'Czujniki deszczu i wilgotności gleby na dedykowanych sekcjach trawnika',
      'Automatyczne zamykanie okien dachowych Velux/Fakro przy pierwszych kroplach deszczu',
      'Oświetlenie ogrodu zapalające się łagodnie dokładnie o zachodzie słońca',
    ],
  },
};
