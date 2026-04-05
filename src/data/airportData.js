// ==================== AIRPORT DATA ====================
// Texas departure airports + popular international arrival airports
// Updated April 2026

const airportData = [
  // ─── Texas Airports ───────────────────────────────────────
  {
    iata: 'DFW',
    slug: 'dfw',
    name: 'Dallas/Fort Worth International Airport',
    city: 'Dallas/Fort Worth',
    state: 'Texas',
    type: 'texas',
    heroImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80',
    metaTitle: 'DFW Airport International Travel Guide 2026 — Best Flights from Dallas',
    metaDesc: 'Flying internationally from DFW? Full guide to terminals, lounges, cheap parking, and the best international routes from Dallas/Fort Worth.',
    website: 'https://www.dfwairport.com',
    terminals: ['A (American Airlines domestic)', 'B (American international)', 'C (American + American Eagle)', 'D (international hub — best terminal)', 'E (budget airlines: Spirit, Frontier, Southwest Intl)'],
    internationalTerminal: 'Terminal D — largest and best equipped. Has Global Entry kiosks and the best international gate experience.',
    airlines: {
      primary: ['American Airlines (hub)', 'Frontier', 'Spirit'],
      international: ['British Airways', 'Aeromexico', 'Lufthansa', 'Air France', 'Japan Airlines (JAL)', 'Korean Air', 'Qatar Airways'],
    },
    topRoutes: [
      { dest: 'Cancún (CUN)', flight: '2h 40m', avgPrice: '$220 RT', direct: true },
      { dest: 'Mexico City (MEX)', flight: '2h 50m', avgPrice: '$245 RT', direct: true },
      { dest: 'London Heathrow (LHR)', flight: '9h 45m', avgPrice: '$680 RT', direct: true },
      { dest: 'Tokyo Narita (NRT)', flight: '13h 30m', avgPrice: '$900 RT', direct: true },
      { dest: 'Paris CDG', flight: '10h (1 stop)', avgPrice: '$730 RT', direct: false },
      { dest: 'Costa Rica SJO', flight: '3h 30m', avgPrice: '$340 RT', direct: true },
    ],
    transport: {
      dart: { desc: 'DART Orange Line connects DFW to downtown Dallas and Cityplace/Uptown', cost: '$2.50', time: '45–60 min to downtown' },
      taxi: { desc: 'Uber/Lyft from DFW to Dallas hotels', cost: '$25–40', time: '20–40 min depending on destination' },
      parking: {
        terminal: '$25–30/day',
        remote: '$10–15/day (SkyLink train to terminals)',
        tip: 'Book remote parking on SpotHero or ParkWhiz for $6–10/day — often much cheaper than airport rates',
      },
    },
    lounges: [
      { name: 'Admirals Club (American)', terminals: ['A', 'B', 'C', 'D', 'E'], access: 'AA status, Priority Pass (some), or day pass ($59)' },
      { name: 'Centurion Lounge (Amex)', terminal: 'D', access: 'Amex Platinum or Centurion card — excellent food and drinks' },
      { name: 'British Airways Lounge', terminal: 'D', access: 'BA business class or oneworld sapphire+' },
      { name: 'The Club (accessible by Priority Pass)', terminal: 'D', access: 'Priority Pass — good lounge' },
    ],
    tips: [
      'Terminal D is the international terminal — check in early for customs/immigration processing on return.',
      'TSA PreCheck lanes at DFW move extremely fast — worth the $78/5-year enrollment.',
      'The SkyLink train connects all terminals in under 10 minutes — no shuttle needed.',
      'American Admirals Club day passes are $59 — worth it for a long international layover.',
      'Global Entry kiosks in Terminal D speed up US return processing dramatically.',
      'DFW to downtown Dallas on DART is $2.50 — the most underused money-saver at this airport.',
    ],
    bestFor: 'The best Texas airport for international travel — most routes, most airlines, best lounge access, and direct flights to Europe/Asia.',
  },

  {
    iata: 'IAH',
    slug: 'iah',
    name: 'George Bush Intercontinental Airport',
    city: 'Houston',
    state: 'Texas',
    type: 'texas',
    heroImage: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=1200&q=80',
    metaTitle: 'IAH Airport International Travel Guide 2026 — Houston to the World',
    metaDesc: 'Flying from Houston Intercontinental (IAH)? Guide to terminals, United hub connections, and the best international routes from Houston.',
    website: 'https://www.fly2houston.com/iah',
    terminals: ['A (United)', 'B (United international)', 'C (United international)', 'D (international gates)', 'E (international including Delta, Air France, Lufthansa)'],
    internationalTerminal: 'Terminal E for most international departures (except United international which uses B/C).',
    airlines: {
      primary: ['United Airlines (hub)', 'Spirit', 'Frontier'],
      international: ['Air France', 'Lufthansa', 'Copa Airlines', 'Avianca', 'Aeromexico', 'KLM', 'British Airways'],
    },
    topRoutes: [
      { dest: 'Cancún (CUN)', flight: '2h 30m', avgPrice: '$230 RT', direct: true },
      { dest: 'Bogotá (BOG)', flight: '4h 50m', avgPrice: '$370 RT', direct: true },
      { dest: 'Mexico City (MEX)', flight: '2h 40m', avgPrice: '$240 RT', direct: true },
      { dest: 'Costa Rica (SJO)', flight: '3h 30m', avgPrice: '$320 RT', direct: true },
      { dest: 'Lima (LIM)', flight: '7h (1 stop)', avgPrice: '$550 RT', direct: false },
      { dest: 'Paris CDG', flight: '10h (direct Air France)', avgPrice: '$720 RT', direct: true },
    ],
    transport: {
      metro: { desc: 'No direct rail to IAH — Houston has limited public transit', cost: 'N/A', time: 'N/A' },
      taxi: { desc: 'Uber/Lyft to Downtown Houston', cost: '$35–50', time: '30–45 min' },
      shuttle: { desc: 'GO Airporter shuttle to Hobby (HOU)', cost: '$15', time: '45 min' },
      parking: {
        terminal: '$27–35/day',
        remote: '$12–18/day',
        tip: 'Economy lot C or D is $12/day and served by frequent shuttles. Book on SpotHero for $8–10.',
      },
    },
    lounges: [
      { name: 'United Club', terminals: ['B', 'C', 'E'], access: 'United status, Priority Pass (limited), or day pass ($59)' },
      { name: 'Polaris Lounge (United business)', terminal: 'E', access: 'United Polaris business class — outstanding food and showers' },
      { name: 'Air France Lounge', terminal: 'E', access: 'Air France/KLM business class or Flying Blue Platinum' },
    ],
    tips: [
      'IAH is United's hub — superb connectivity to South America (Copa, Avianca) and transatlantic routes.',
      'Terminal connections require going through security again in some cases — allow 90+ min for domestic→international connections.',
      'The Polaris Lounge in Terminal E is one of the best in North America if you have business class access.',
      'Hobby (HOU) is Houston's other airport — check both for Southwest and cheaper domestic fares.',
    ],
    bestFor: 'Best for South America routes (especially Colombia, Peru) and flights via United hub connections.',
  },

  {
    iata: 'AUS',
    slug: 'aus',
    name: 'Austin-Bergstrom International Airport',
    city: 'Austin',
    state: 'Texas',
    type: 'texas',
    heroImage: 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=1200&q=80',
    metaTitle: 'AUS Airport International Travel Guide 2026 — Austin to the World',
    metaDesc: 'Austin-Bergstrom International Airport is expanding rapidly. Direct flights to London, Cancún, and Mexico. Guide for Austin international travelers.',
    website: 'https://www.austintexas.gov/airport',
    terminals: ['Barbara Jordan Terminal (main)', 'South Terminal (Spirit/Frontier budget)'],
    internationalTerminal: 'Barbara Jordan Terminal — all international departures.',
    airlines: {
      primary: ['Southwest', 'American', 'United', 'Delta'],
      international: ['British Airways (direct London)', 'Aeromexico', 'Volaris', 'Frontier', 'Spirit'],
    },
    topRoutes: [
      { dest: 'Cancún (CUN)', flight: '2h 45m', avgPrice: '$250 RT', direct: true },
      { dest: 'Mexico City (MEX)', flight: '3h', avgPrice: '$270 RT', direct: true },
      { dest: 'London Heathrow (LHR)', flight: '9h 30m', avgPrice: '$720 RT', direct: true },
      { dest: 'Costa Rica (SJO)', flight: '4h (1 stop)', avgPrice: '$360 RT', direct: false },
    ],
    transport: {
      metro: { desc: 'CapMetro Airport Flyer (Route 100) to downtown Austin', cost: '$1.25', time: '35–45 min to downtown' },
      taxi: { desc: 'Uber/Lyft to downtown Austin', cost: '$20–30', time: '15–25 min' },
      parking: {
        terminal: '$22–28/day',
        remote: '$9–12/day',
        tip: 'Park at Austin Park & Ride on Airport Blvd — $7–9/day with free shuttle.',
      },
    },
    lounges: [
      { name: 'The Club Austin (Priority Pass)', terminal: 'Barbara Jordan', access: 'Priority Pass, day pass available' },
      { name: 'American Admirals Club', terminal: 'Barbara Jordan', access: 'AA status or day pass' },
    ],
    tips: [
      'AUS is booming — check for new international routes being added regularly.',
      'British Airways direct to London was a game-changer for Austin travelers — no more connecting through DFW.',
      'The South Terminal is basic but Spirit/Frontier fares from there can be $50–100 cheaper.',
      'CapMetro Route 100 to downtown is $1.25 and runs every 30 minutes — use it.',
    ],
    bestFor: 'Great for Austin residents. British Airways direct London route is excellent. Growing international selection.',
  },

  {
    iata: 'SAT',
    slug: 'sat',
    name: 'San Antonio International Airport',
    city: 'San Antonio',
    state: 'Texas',
    type: 'texas',
    heroImage: 'https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=1200&q=80',
    metaTitle: 'SAT Airport International Travel Guide 2026 — San Antonio Flights',
    metaDesc: 'San Antonio International Airport guide for international travel. Direct flights to Mexico, connections to the world. Tips for SA travelers.',
    website: 'https://www.sanantonio.gov/aviation',
    terminals: ['Terminal A', 'Terminal B'],
    internationalTerminal: 'Terminal A — Aeromexico and international departures.',
    airlines: {
      primary: ['American', 'Southwest', 'United', 'Delta'],
      international: ['Aeromexico', 'Volaris', 'United (via IAH)'],
    },
    topRoutes: [
      { dest: 'Cancún (CUN)', flight: '2h 30m', avgPrice: '$250 RT', direct: true },
      { dest: 'Mexico City (MEX)', flight: '2h 45m', avgPrice: '$265 RT', direct: true },
      { dest: 'Dallas (DFW)', flight: '45m', avgPrice: '$80 RT', direct: true },
    ],
    transport: {
      bus: { desc: 'VIA bus routes connect airport to downtown', cost: '$1.30', time: '30–40 min' },
      taxi: { desc: 'Uber/Lyft to downtown SA', cost: '$15–25', time: '12–20 min' },
      parking: {
        terminal: '$18–24/day',
        remote: '$8–12/day',
        tip: 'SAT parking is cheaper than DFW/IAH — the terminal garage is usually convenient enough.',
      },
    },
    lounges: [],
    tips: [
      'SAT has fewer international options than DFW/IAH — worth comparing prices at all 3 Texas airports.',
      'For most international destinations, it's worth driving to Houston or Dallas if prices differ by $100+.',
      'San Antonio to Austin or Houston by car is 1–1.5 hours — expanding your airport options significantly.',
    ],
    bestFor: 'Convenient for San Antonio residents for Mexico routes. Limited international selection vs. DFW/IAH.',
  },

  {
    iata: 'HOU',
    slug: 'hou',
    name: 'William P. Hobby Airport',
    city: 'Houston',
    state: 'Texas',
    type: 'texas',
    heroImage: 'https://images.unsplash.com/photo-1571769267292-e24dfadebbdc?w=1200&q=80',
    metaTitle: 'Houston Hobby Airport (HOU) International Guide 2026',
    metaDesc: 'Houston Hobby Airport (HOU) for Southwest flights to Mexico and the Caribbean. Tips for HOU travelers flying internationally.',
    website: 'https://www.fly2houston.com/hou',
    terminals: ['Main Terminal (single consolidated terminal)'],
    internationalTerminal: 'International Terminal added by Southwest for Mexico/Caribbean routes.',
    airlines: {
      primary: ['Southwest Airlines (main hub)', 'JetBlue', 'Aeromexico'],
      international: ['Southwest (Cancún, Mexico City, Cabo, Puerto Vallarta)', 'Aeromexico'],
    },
    topRoutes: [
      { dest: 'Cancún (CUN)', flight: '2h 25m', avgPrice: '$210 RT', direct: true },
      { dest: 'Mexico City (MEX)', flight: '2h 40m', avgPrice: '$235 RT', direct: true },
      { dest: 'Los Cabos (SJD)', flight: '3h', avgPrice: '$250 RT', direct: true },
      { dest: 'Puerto Vallarta (PVR)', flight: '3h', avgPrice: '$240 RT', direct: true },
    ],
    transport: {
      metro: { desc: 'METRORail Red Line to downtown Houston', cost: '$1.25', time: '45 min to Theater District' },
      taxi: { desc: 'Uber/Lyft to downtown', cost: '$20–30', time: '20–30 min' },
      parking: {
        terminal: '$20–25/day',
        remote: '$8–12/day',
        tip: 'HOU parking is cheaper than IAH and the airport is smaller — terminal garage is easy.',
      },
    },
    lounges: [],
    tips: [
      'Southwest's hub at HOU means often the cheapest Mexico prices in Texas — always check southwest.com.',
      'Southwest fares don't appear on Google Flights or Kayak — their website only.',
      'HOU is smaller and less stressful than IAH — faster security and easier navigation.',
      'The METRORail Red Line to downtown Houston is $1.25 — a great option for avoiding Uber surge pricing.',
    ],
    bestFor: 'Best Texas airport for Southwest Mexico deals. Often cheapest for Cancún, Mexico City, and Cabo.',
  },

  // ─── Popular Arrival Airports ─────────────────────────────
  {
    iata: 'CUN',
    slug: 'cun',
    name: 'Cancún International Airport',
    city: 'Cancún',
    country: 'Mexico',
    type: 'international',
    heroImage: 'https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=1200&q=80',
    metaTitle: 'Cancún Airport (CUN) Guide 2026 — Arrive, Get Your Bearings, Get to Your Hotel',
    metaDesc: 'Complete Cancún airport guide: how to get from CUN to your hotel, avoid taxi scams, get pesos, and breeze through customs.',
    transport: [
      { type: 'ADO Bus', dest: 'Cancún City', cost: '$4', time: '30 min', note: 'Most reliable budget option' },
      { type: 'ADO Bus', dest: 'Playa del Carmen', cost: '$12', time: '70 min', note: 'Excellent value vs. taxis' },
      { type: 'ADO Bus', dest: 'Tulum', cost: '$16', time: '100 min', note: 'Direct from airport — don't take taxi' },
      { type: 'Official Taxi', dest: 'Hotel Zone (Zona Hotelera)', cost: '$25 fixed rate', time: '20 min', note: 'Use official taxi desk inside airport, not outside hustlers' },
      { type: 'Shared Shuttle', dest: 'Playa del Carmen', cost: '$15–20', time: '80 min', note: 'Multiple operators — compare at arrivals' },
    ],
    tips: [
      'The MOST IMPORTANT tip: don't talk to anyone outside the airport. ADO bus counter is inside, right after customs.',
      'Ignore all "transfer" offers from men with clipboards outside arrivals — overpriced and often sketchy.',
      'Get pesos at the airport ATM (Banorte or HSBC inside — not outside). Exchange rate is OK, not great.',
      'The ADO bus from CUN to Playa del Carmen ($12) is the smartest move. Comfortable, A/C, on time.',
      'TSA PreCheck doesn't apply on return from Mexico — budget extra time for US customs/immigration.',
    ],
    terminals: ['Terminal 2 (most US airlines)', 'Terminal 3 (international, newer)', 'Terminal 4 (charter/budget)'],
    customs: 'Push the traffic light button on exit — red light means bag inspection, green means you're free to go. Randomized.',
  },

  {
    iata: 'MEX',
    slug: 'mex',
    name: 'Mexico City International Airport (Benito Juárez)',
    city: 'Mexico City',
    country: 'Mexico',
    type: 'international',
    heroImage: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1200&q=80',
    metaTitle: 'Mexico City Airport (MEX & AIFA) Guide 2026 — Getting In and Around CDMX',
    metaDesc: 'Mexico City airport guide: MEX vs AIFA, how to get to your hotel safely, avoid scams, and navigate one of the world's busiest airports.',
    transport: [
      { type: 'Metro Line 5', dest: 'City center (Terminal Aérea station)', cost: '$0.30', time: '25–45 min', note: 'ONLY recommended with light luggage — can be chaotic' },
      { type: 'Authorized Airport Taxi', dest: 'Roma/Condesa/Polanco', cost: '$15–22', time: '20–40 min', note: 'Buy ticket inside from official desks — NOT street taxis' },
      { type: 'Uber', dest: 'Anywhere in CDMX', cost: '$8–15', time: '20–40 min', note: 'Most reliable and transparent option — download before you land' },
      { type: 'Metrobús Line 4', dest: 'Buenavista (north) or downtown', cost: '$0.50', time: '30–50 min', note: 'Requires a rechargeable Metrobús card — available at airport' },
    ],
    tips: [
      'Uber from MEX is the safest and most transparent transport — price quoted upfront, no fare surprises.',
      'AIFA (the newer airport) is 50km north of the city. Check carefully which airport your flight uses.',
      'Terminal 1 and Terminal 2 at MEX are NOT connected inside — if you're connecting, check which terminal.',
      'Don't take taxis from outside the building. Authorized taxi booths are inside the terminal.',
    ],
    terminals: ['Terminal 1 (domestic + some international)', 'Terminal 2 (Aeromexico hub + Skyteam partners)'],
    customs: 'Similar to CUN — traffic light system. US citizens clear in separate line. Global Entry eligible.',
  },

  {
    iata: 'MDE',
    slug: 'mde',
    name: 'José María Córdova International Airport (Medellín)',
    city: 'Medellín (Rionegro)',
    country: 'Colombia',
    type: 'international',
    heroImage: 'https://images.unsplash.com/photo-1582972236019-ea4af5ffe587?w=1200&q=80',
    metaTitle: 'Medellín Airport (MDE) Guide 2026 — Getting to El Poblado',
    metaDesc: 'Medellín airport (MDE) is 45km from El Poblado. How to get to Medellín cheaply and safely from José María Córdova airport.',
    transport: [
      { type: 'Sitva Bus + Metro', dest: 'El Poblado/Laureles', cost: '$1.50', time: '90 min', note: 'Cheapest option — bus to Envigado Metro, then Metro' },
      { type: 'Taxi (metered)', dest: 'El Poblado', cost: '$20–28', time: '50–70 min', note: 'OK option — use metered taxis from official stand' },
      { type: 'Uber/InDriver', dest: 'El Poblado', cost: '$14–20', time: '50–70 min', note: 'Most recommended — transparent pricing, safe' },
    ],
    tips: [
      'MDE is in Rionegro, 45km from Medellín's El Poblado — budget 50–70 minutes to your hotel.',
      'Uber works well from MDE. Book in arrivals, driver meets you outside.',
      'The mountain road has beautiful views but can get foggy at night — not an issue, just slow.',
    ],
    terminals: ['Main Terminal (single terminal)'],
    customs: 'Efficient. Colombian customs gives 90 days on a tourist visa. Declare cash over $10,000 USD.',
  },
];

export default airportData;

export const findAirportByIata = (iata) =>
  airportData.find((a) => a.iata === iata.toUpperCase());

export const findAirportBySlug = (slug) =>
  airportData.find((a) => a.slug === slug);

export const texasAirports = airportData.filter((a) => a.type === 'texas');
export const internationalAirports = airportData.filter((a) => a.type === 'international');
