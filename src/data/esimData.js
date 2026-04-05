// ==================== eSIM COUNTRY DATA ====================
// Real pricing sourced from Airalo (April 2026 spot-checks)
// Prices in USD. Coverage/network data is accurate.
// airaloSlug = country slug used in Airalo URLs (e.g. airalo.com/mexico-esim)

const esimData = [
  {
    id: 'mexico',
    slug: 'mexico-esim',
    country: 'Mexico',
    airaloSlug: 'mexico',
    flag: '🇲🇽',
    heroImage: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1200&q=80',
    metaTitle: 'Best eSIM for Mexico 2026 — Stay Connected Without Roaming Fees',
    metaDesc: 'Traveling to Mexico? Get an Airalo eSIM from $5. Works on Telcel & AT&T Mexico. No roaming bills.',
    intro: `Mexico is the most popular international destination for US travelers — and roaming charges from US carriers can hit $10–15/day if you're not careful. An eSIM is the smartest solution: buy it before you board, activate it when you land, and pay a fraction of what your carrier charges.`,
    networks: ['Telcel', 'AT&T México', 'Movistar'],
    coverage: 'Excellent 4G/LTE coverage in tourist areas. 5G available in Mexico City, Guadalajara, and Monterrey.',
    plans: [
      { data: '1 GB', days: 7, price: 4.50, priceNote: 'Great for a weekend trip to Cancún' },
      { data: '3 GB', days: 15, price: 9.00, priceNote: 'Most popular for a week-long vacation' },
      { data: '5 GB', days: 30, price: 13.00, priceNote: 'Best value for digital nomads' },
      { data: '10 GB', days: 30, price: 18.00, priceNote: 'Heavy users or remote workers' },
    ],
    vsCarrier: {
      carrierCost: '$10/day roaming = $70/week',
      esimCost: '$9 for 3 GB / 15 days',
      savings: 'Save ~$61 on a 7-day trip',
    },
    tips: [
      'Buy your eSIM 1–2 days before departure so you can test activation at home.',
      'Telcel has the best rural coverage — choose a Telcel plan if visiting Oaxaca or Chiapas.',
      'Keep your US number active (just enable roaming for calls only, not data) for 2FA texts.',
      'Top-up is easy inside the Airalo app — no need to find a SIM card kiosk.',
      'Cancún, Los Cabos, and Puerto Vallarta have excellent LTE even on beaches.',
    ],
    popularFrom: ['Dallas (DFW)', 'Houston (IAH)', 'Austin (AUS)', 'San Antonio (SAT)'],
    flightTime: '2.5–3.5 hours from the US',
    topDestinations: ['Cancún', 'Mexico City', 'Los Cabos', 'Puerto Vallarta', 'Guadalajara', 'Oaxaca'],
    faqs: [
      {
        q: 'Will an eSIM work at the Cancún airport?',
        a: 'Yes. Coverage at CUN airport is excellent. Your eSIM activates as soon as the plane lands and you get a signal — before you even reach customs.',
      },
      {
        q: 'Can I use WhatsApp calls with an eSIM?',
        a: 'Absolutely. WhatsApp, FaceTime (WiFi calling), and all VoIP apps work great. Just make sure you\'re not accidentally using cellular calling from your primary US SIM.',
      },
      {
        q: 'Does the eSIM replace my US number?',
        a: 'No — it runs alongside your regular SIM. Your US number stays active for calls and texts (you\'ll just pay your carrier\'s per-minute rate for those, which is usually cheap or included). The eSIM handles your data.',
      },
      {
        q: 'Which Airalo plan should I buy for a week in Tulum?',
        a: 'The 3 GB / 15-day plan is the sweet spot. 3 GB is plenty for Maps, Instagram, and WhatsApp for a week, and the 15-day window gives you flexibility if your trip extends.',
      },
    ],
  },

  {
    id: 'colombia',
    slug: 'colombia-esim',
    country: 'Colombia',
    airaloSlug: 'colombia',
    flag: '🇨🇴',
    heroImage: 'https://images.unsplash.com/photo-1582972236019-ea4af5ffe587?w=1200&q=80',
    metaTitle: 'Best eSIM for Colombia 2026 — Medellín, Bogotá & Cartagena',
    metaDesc: 'Traveling to Colombia? An Airalo eSIM starts at $6 and keeps you connected in Medellín, Bogotá, and Cartagena. No roaming fees.',
    intro: `Colombia has exploded as a top destination for budget-conscious American travelers — great food, stunning scenery, and a dollar that stretches far. Connectivity is solid in major cities, but an eSIM from a local operator gives you far better speeds and prices than US carrier roaming.`,
    networks: ['Claro Colombia', 'Movistar Colombia', 'Tigo'],
    coverage: 'Strong 4G coverage in Bogotá, Medellín, Cartagena, and Cali. More limited in rural coffee-growing regions — download offline maps before venturing out.',
    plans: [
      { data: '1 GB', days: 7, price: 5.00, priceNote: 'Good for a short Cartagena stay' },
      { data: '3 GB', days: 15, price: 10.00, priceNote: 'Most popular for Medellín + coffee region' },
      { data: '5 GB', days: 30, price: 15.00, priceNote: 'Ideal for a month-long stay or digital nomad visa' },
    ],
    vsCarrier: {
      carrierCost: '$10/day roaming = $100/10 days',
      esimCost: '$10 for 3 GB / 15 days',
      savings: 'Save ~$90 on a 10-day trip',
    },
    tips: [
      'Download Google Maps offline for the coffee region (Salento, Manizales) — coverage gets spotty.',
      'Claro has the widest coverage across Colombia including smaller towns.',
      'WiFi in Medellín\'s El Poblado neighborhood is excellent — supplement with a smaller data plan.',
      'The Digital Nomad Visa lets you stay 2 years — get a 30-day plan and top up monthly.',
    ],
    popularFrom: ['Houston (IAH)', 'Dallas (DFW)', 'Miami (MIA)'],
    flightTime: '4–5 hours from the US',
    topDestinations: ['Medellín', 'Bogotá', 'Cartagena', 'Cali', 'Salento', 'Santa Marta'],
    faqs: [
      {
        q: 'Is connectivity reliable in Medellín?',
        a: 'Yes — Medellín has excellent 4G/LTE and even 5G in El Poblado and Laureles. Many cafés have gigabit WiFi. Your biggest concern is the cable car to Parque Arví, where signal drops briefly.',
      },
      {
        q: 'What about internet in Cartagena?',
        a: 'Good in the Walled City and Bocagrande. Beach areas at Playa Blanca have limited signal. An eSIM beats the hotel WiFi which is often slow and congested.',
      },
      {
        q: 'Can I get a local SIM instead?',
        a: 'You can at the airport (Claro and Tigo both have kiosks), but you\'ll need your passport and may wait 20–30 minutes. An eSIM you activate in 5 minutes from your couch the night before.',
      },
    ],
  },

  {
    id: 'spain',
    slug: 'spain-esim',
    country: 'Spain',
    airaloSlug: 'spain',
    flag: '🇪🇸',
    heroImage: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&q=80',
    metaTitle: 'Best eSIM for Spain 2026 — Barcelona, Madrid & the Costa',
    metaDesc: 'Skip €10/day EU roaming charges. Get an Airalo eSIM for Spain from $8. Works on Movistar, Vodafone ES. Perfect for Barcelona & Madrid.',
    intro: `Spain is a perennial favorite for US travelers — and eSIMs have completely changed the connectivity game here. Rather than paying your US carrier's international day pass ($10+/day), a local eSIM gives you faster speeds, more data, and costs a fraction of the price for a two-week trip.`,
    networks: ['Movistar', 'Vodafone Spain', 'Orange Spain'],
    coverage: 'Excellent nationwide. 5G available in Madrid, Barcelona, Valencia, Seville, and Bilbao.',
    plans: [
      { data: '1 GB', days: 7, price: 5.50, priceNote: 'Long weekend in Barcelona' },
      { data: '5 GB', days: 15, price: 12.00, priceNote: 'Two-week Spain trip' },
      { data: '10 GB', days: 30, price: 18.00, priceNote: 'Month-long Eurotrip base' },
      { data: '20 GB', days: 30, price: 28.00, priceNote: 'Remote workers needing reliable data' },
    ],
    vsCarrier: {
      carrierCost: '$10/day T-Mobile or Verizon day pass = $140/2 weeks',
      esimCost: '$12 for 5 GB / 15 days',
      savings: 'Save ~$128 on a 2-week trip',
    },
    tips: [
      'Airalo\'s Europe regional plan covers 30+ countries — great if you\'re doing a multi-country trip.',
      'Spain has one of Europe\'s best rail networks (Renfe) — download the app before you land.',
      'Movistar and Vodafone both have rock-solid 5G in the main cities.',
      'The Camino de Santiago has decent coverage on the French route but some rural gaps — download Wikiloc maps offline.',
    ],
    popularFrom: ['Dallas (DFW)', 'Houston (IAH)', 'Austin (AUS)'],
    flightTime: '10–11 hours from the US (usually 1 stop)',
    topDestinations: ['Barcelona', 'Madrid', 'Seville', 'Valencia', 'San Sebastián', 'Málaga'],
    faqs: [
      {
        q: 'Can I use a single eSIM for Spain + Portugal?',
        a: 'Yes — Airalo sells Europe-wide regional plans that cover both countries plus 28 more EU/EEA nations. If you\'re island-hopping or train-tripping across borders, the regional plan is the better deal.',
      },
      {
        q: 'How does Spain\'s eSIM compare to a local SIM?',
        a: 'Local SIMs at Madrid Barajas (MAD) or Barcelona El Prat (BCN) run €10–15 and require a passport registration. An eSIM is instant, cheaper, and you set it up from home. Win on every front.',
      },
      {
        q: 'Does Airalo\'s Spain eSIM work in the Canary Islands?',
        a: 'Yes — the Canary Islands are part of Spain (not just EU but actually Spain), so a Spain eSIM covers Gran Canaria, Tenerife, Lanzarote, etc.',
      },
    ],
  },

  {
    id: 'japan',
    slug: 'japan-esim',
    country: 'Japan',
    airaloSlug: 'japan',
    flag: '🇯🇵',
    heroImage: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&q=80',
    metaTitle: 'Best eSIM for Japan 2026 — Tokyo, Kyoto & Osaka Guide',
    metaDesc: 'Japan eSIM from $9. Fast IIJmio & Docomo networks. Perfect for navigating Tokyo, Kyoto, and the bullet train. Skip pocket WiFi rentals.',
    intro: `Japan has world-class mobile infrastructure — but foreign SIM cards aren't sold at every corner store, and pocket WiFi rental costs add up fast ($8–12/day pickup fee + return hassle). An eSIM is the modern traveler's solution: buy in advance, activate on landing, and spend your time exploring instead of hunting for WiFi.`,
    networks: ['IIJmio (Docomo backbone)', 'Softbank', 'au/KDDI'],
    coverage: 'Exceptional nationwide including rural areas, mountain trails, and subway systems. Japan consistently ranks top 5 globally for mobile network quality.',
    plans: [
      { data: '3 GB', days: 15, price: 9.00, priceNote: 'Short trip to Tokyo + Kyoto' },
      { data: '5 GB', days: 30, price: 14.00, priceNote: 'Most popular for 2-week Japan loop' },
      { data: '10 GB', days: 30, price: 22.00, priceNote: 'Heavy users / content creators' },
      { data: 'Unlimited*', days: 30, price: 35.00, priceNote: '*Speed-capped at 1 Mbps after 3 GB/day' },
    ],
    vsCarrier: {
      carrierCost: 'Pocket WiFi rental $10/day = $140 for 2 weeks',
      esimCost: '$14 for 5 GB / 30 days',
      savings: 'Save ~$126 and skip the return hassle',
    },
    tips: [
      'Activate your eSIM on the plane when you enable airplane mode + WiFi — you\'ll be connected before you reach immigration.',
      'Google Maps works perfectly for JR train navigation — a life-saver in Tokyo.',
      'Most convenience stores (7-Eleven, Lawson, FamilyMart) have free WiFi — great for video calls.',
      'IC Cards (Suica/Pasmo) are now available on iPhone Apple Wallet — no physical card needed.',
      'Download Hyperdia or Google Maps offline for the shinkansen routes between cities.',
    ],
    popularFrom: ['Dallas (DFW)', 'Houston (IAH)', 'Austin (AUS)'],
    flightTime: '13–15 hours from the US (direct or 1 stop)',
    topDestinations: ['Tokyo', 'Kyoto', 'Osaka', 'Hiroshima', 'Nara', 'Hakone'],
    faqs: [
      {
        q: 'Is pocket WiFi or an eSIM better for Japan?',
        a: 'eSIM, without question. Pocket WiFi costs $8–12/day, you share the connection with your group (which causes slowdowns), you need to keep the device charged, and you have to return it at the airport. eSIM is personal, instant, and cheaper.',
      },
      {
        q: 'Does an eSIM work on the shinkansen (bullet train)?',
        a: 'Yes — coverage on the Tokaido Shinkansen (Tokyo-Osaka) is excellent. You may get brief drops in tunnels but nothing meaningful. Perfect for downloading maps and messaging while the scenery flies by at 320 km/h.',
      },
      {
        q: 'What if I need a Japanese phone number?',
        a: 'eSIMs don\'t include a local number — they\'re data only. For calling Japanese numbers, use Line or WhatsApp. For emergencies, 110 (police) and 119 (ambulance) work from any phone without a local number.',
      },
    ],
  },

  {
    id: 'italy',
    slug: 'italy-esim',
    country: 'Italy',
    airaloSlug: 'italy',
    flag: '🇮🇹',
    heroImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=80',
    metaTitle: 'Best eSIM for Italy 2026 — Rome, Florence & the Amalfi Coast',
    metaDesc: 'Italy eSIM from $6. Works on TIM & Vodafone Italy. Navigate Rome, Florence, and the Amalfi Coast without roaming charges.',
    intro: `Italy is bucket-list Europe — and you don't want to be frantically hunting for WiFi in the Colosseum queue. A local eSIM gives you Google Maps, translation apps, and Instagram-worthy upload speeds everywhere from Rome to Cinque Terre, for far less than your carrier's international plan.`,
    networks: ['TIM (Telecom Italia)', 'Vodafone Italy', 'WindTre'],
    coverage: 'Very good in cities and tourist areas. Some gaps on the Amalfi Coast cliffs and in the Dolomites — download offline maps for drives.',
    plans: [
      { data: '1 GB', days: 7, price: 5.00, priceNote: 'Long weekend in Rome' },
      { data: '5 GB', days: 15, price: 11.00, priceNote: 'Classic 2-week Italy trip' },
      { data: '10 GB', days: 30, price: 19.00, priceNote: 'Extended stay or Italy + Europe' },
    ],
    vsCarrier: {
      carrierCost: '$10/day carrier day pass = $140/2 weeks',
      esimCost: '$11 for 5 GB / 15 days',
      savings: 'Save ~$129 on a 2-week Italy trip',
    },
    tips: [
      'Book Colosseum tickets 2–3 weeks in advance — the site often sells out. Having data helps when you realize this on arrival.',
      'Trains in Italy run on Trenitalia and Italo — download both apps before your trip.',
      'The Cinque Terre hiking trails have OK signal — enough for emergencies and Maps.',
      'Airalo\'s Europe plan covers Italy + all neighboring countries if you\'re doing a Grand Tour.',
    ],
    popularFrom: ['Dallas (DFW)', 'Houston (IAH)', 'Austin (AUS)'],
    flightTime: '10–12 hours from the US (usually 1 stop)',
    topDestinations: ['Rome', 'Florence', 'Venice', 'Amalfi Coast', 'Cinque Terre', 'Sicily'],
    faqs: [
      {
        q: 'Does an eSIM work on the Cinque Terre hiking trail?',
        a: 'Mostly yes — coverage is good in the villages and on most of the trail. A few cliff-side sections have weak signal. Download Google Maps offline for the Via dell\'Amore section just in case.',
      },
      {
        q: 'Can I buy a TIM SIM card at the Rome airport?',
        a: 'Yes, but expect a queue and passport registration. An eSIM is just easier — activate it from your home the night before and you land in Rome already connected.',
      },
    ],
  },

  {
    id: 'thailand',
    slug: 'thailand-esim',
    country: 'Thailand',
    airaloSlug: 'thailand',
    flag: '🇹🇭',
    heroImage: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=1200&q=80',
    metaTitle: 'Best eSIM for Thailand 2026 — Bangkok, Chiang Mai & the Islands',
    metaDesc: 'Thailand eSIM from $5. AIS & DTAC networks. Stay connected in Bangkok, Koh Samui, and Phuket without roaming fees.',
    intro: `Thailand has one of Southeast Asia's best mobile networks and some of the cheapest data prices in the world — an eSIM here is a no-brainer. Whether you're navigating Bangkok's chaos, island-hopping in Koh Tao, or trekking near Chiang Mai, local data is cheap and fast.`,
    networks: ['AIS', 'DTAC', 'True Move H'],
    coverage: 'Excellent in Bangkok, Chiang Mai, and Phuket. Good on major islands. Some gaps in national parks and jungle areas — expected for any carrier.',
    plans: [
      { data: '1 GB', days: 7, price: 4.00, priceNote: 'Short Bangkok trip' },
      { data: '5 GB', days: 15, price: 8.00, priceNote: 'Two-week beach + city combo' },
      { data: '15 GB', days: 30, price: 15.00, priceNote: 'Month in Thailand for digital nomads' },
      { data: 'Unlimited', days: 30, price: 22.00, priceNote: 'Best for heavy streamers and remote workers' },
    ],
    vsCarrier: {
      carrierCost: '$10/day carrier roaming = $150/15 days',
      esimCost: '$8 for 5 GB / 15 days',
      savings: 'Save ~$142 on a 2-week trip',
    },
    tips: [
      'AIS has the best island coverage — pick AIS-backed plans for Koh Samui, Koh Phangan, or Phuket.',
      'Grab (the Southeast Asian Uber) requires working data — essential for Bangkok traffic.',
      'Download maps of Bangkok offline — the city is enormous and data can get patchy in malls.',
      'Thailand 30-day tourist visa is free on arrival — perfect for a longer stay with unlimited data.',
    ],
    popularFrom: ['Dallas (DFW)', 'Houston (IAH)'],
    flightTime: '18–22 hours from the US (2 stops usually)',
    topDestinations: ['Bangkok', 'Chiang Mai', 'Phuket', 'Koh Samui', 'Koh Tao', 'Pai'],
    faqs: [
      {
        q: 'Is there good WiFi at Bangkok Suvarnabhumi airport (BKK)?',
        a: 'Yes — airport WiFi is decent. But you\'ll want your own data the moment you\'re in a taxi to the hotel. Bangkok traffic is legendary and Google Maps on cellular is essential.',
      },
      {
        q: 'What\'s the best eSIM plan for island-hopping in Thailand?',
        a: 'A 5 GB / 15-day AIS-network plan covers most islands well. On Koh Tao and Koh Chang, signal can get slow during peak hours — avoid large downloads then.',
      },
    ],
  },

  {
    id: 'portugal',
    slug: 'portugal-esim',
    country: 'Portugal',
    airaloSlug: 'portugal',
    flag: '🇵🇹',
    heroImage: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=80',
    metaTitle: 'Best eSIM for Portugal 2026 — Lisbon, Porto & the Algarve',
    metaDesc: 'Portugal eSIM from $6. Stay connected in Lisbon, Porto, Sintra, and the Algarve. NOS & Vodafone Portugal networks.',
    intro: `Portugal is one of Europe's best value destinations — affordable by Western European standards, with incredible food, wine, and scenery. An eSIM here is cheap and the networks are solid, making it easy to navigate Lisbon's hills or find the best beach on the Algarve.`,
    networks: ['NOS', 'Vodafone Portugal', 'MEO'],
    coverage: 'Excellent in Lisbon, Porto, and the Algarve coast. Good in Sintra and Évora. Some rural Alentejo gaps.',
    plans: [
      { data: '3 GB', days: 15, price: 7.50, priceNote: 'Lisbon + Porto combo trip' },
      { data: '5 GB', days: 30, price: 12.00, priceNote: 'Full Portugal itinerary' },
      { data: '10 GB', days: 30, price: 18.00, priceNote: 'Digital nomad visa stay' },
    ],
    vsCarrier: {
      carrierCost: '$10/day carrier day pass = $100/10 days',
      esimCost: '$7.50 for 3 GB / 15 days',
      savings: 'Save ~$92 on a 10-day trip',
    },
    tips: [
      'Portugal is in the EU so an Airalo Europe regional plan works great here.',
      'Sintra day trip from Lisbon: the palaces are packed — having data for timed entry reservations is essential.',
      'The Algarve coast has great coverage even in smaller beach towns.',
      'Consider Portugal\'s Digital Nomad Visa — the tech scene in Lisbon is booming.',
    ],
    popularFrom: ['Dallas (DFW)', 'Houston (IAH)'],
    flightTime: '10–11 hours from the US (usually 1 stop)',
    topDestinations: ['Lisbon', 'Porto', 'Sintra', 'Algarve', 'Alentejo', 'Azores'],
    faqs: [
      {
        q: 'Does an eSIM work on the Azores?',
        a: 'Yes — but you\'ll need a plan that covers Portugal\'s autonomous regions. Check that your plan includes Azores and Madeira. A general "Portugal" plan typically covers both, but double-check before buying.',
      },
    ],
  },

  {
    id: 'peru',
    slug: 'peru-esim',
    country: 'Peru',
    airaloSlug: 'peru',
    flag: '🇵🇪',
    heroImage: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&q=80',
    metaTitle: 'Best eSIM for Peru 2026 — Machu Picchu, Lima & Cusco',
    metaDesc: 'Peru eSIM from $7. Stay connected in Lima, Cusco, and on the Inca Trail. Claro & Movistar networks. No roaming fees.',
    intro: `Peru is a bucket-list destination — Machu Picchu, the Sacred Valley, Lake Titicaca, and Lima's world-class food scene. Connectivity ranges from excellent in cities to basic near the high-altitude sites. Having a local eSIM means you can navigate, research, and share without relying on spotty hotel WiFi.`,
    networks: ['Claro Peru', 'Movistar Peru', 'Entel'],
    coverage: 'Good in Lima and Cusco. Decent on the main Sacred Valley sites. Limited or no signal on the Inca Trail above 3,000m and in parts of the Amazon basin.',
    plans: [
      { data: '1 GB', days: 7, price: 6.00, priceNote: 'Lima + Cusco without the trail' },
      { data: '3 GB', days: 15, price: 10.00, priceNote: 'Full Peru circuit (incl. offline maps)' },
      { data: '5 GB', days: 30, price: 16.00, priceNote: 'Peru + Bolivia combo' },
    ],
    vsCarrier: {
      carrierCost: '$10/day = $100 for 10 days',
      esimCost: '$10 for 3 GB / 15 days',
      savings: 'Save ~$90 on a 10-day trip',
    },
    tips: [
      'Download offline maps for the Sacred Valley and Machu Picchu before you leave Cusco.',
      'Claro has the best Cusco coverage. Movistar is stronger in Lima.',
      'Book Machu Picchu tickets online (advance reservation required) — the booking site requires reliable internet.',
      'The Inca Trail is a 4-day hike with no signal — your eSIM won\'t help there, but it\'s great for the rest.',
      'Altitude sickness apps and offline guides are worth downloading before heading above 3,500m.',
    ],
    popularFrom: ['Houston (IAH)', 'Dallas (DFW)', 'Miami (MIA)'],
    flightTime: '7–9 hours from the US (usually 1 stop in Bogotá or Lima hub)',
    topDestinations: ['Lima', 'Cusco', 'Machu Picchu', 'Sacred Valley', 'Lake Titicaca', 'Arequipa'],
    faqs: [
      {
        q: 'Will my eSIM work at Machu Picchu?',
        a: 'Surprisingly yes — Claro and Movistar have towers serving Aguas Calientes and the Machu Picchu citadel itself. Signal is weak inside some ruins but you\'ll have data to upload that sunrise photo.',
      },
      {
        q: 'What about the Amazon jungle?',
        a: 'In Iquitos and Puerto Maldonado (main Amazon gateways) you\'ll have OK signal in town. Lodges inside the jungle are typically WiFi only via satellite, and coverage drops off quickly outside towns.',
      },
    ],
  },

  {
    id: 'france',
    slug: 'france-esim',
    country: 'France',
    airaloSlug: 'france',
    flag: '🇫🇷',
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80',
    metaTitle: 'Best eSIM for France 2026 — Paris, Provence & the French Riviera',
    metaDesc: 'France eSIM from $7. Navigate Paris, Provence, and Nice with fast Orange & SFR data. No roaming fees.',
    intro: `France receives more tourists than any other country on earth — and Paris's Metro alone is enough reason to have working data on your phone at all times. An eSIM gives you seamless connectivity from Charles de Gaulle arrival to your last croissant in a Marais café.`,
    networks: ['Orange France', 'SFR', 'Bouygues Telecom'],
    coverage: 'Excellent in Paris, Lyon, Marseille, and Nice. 5G in major cities. Some rural gaps in Provence and the Alps — excellent for the Riviera coast.',
    plans: [
      { data: '3 GB', days: 15, price: 9.00, priceNote: 'Paris-focused trip' },
      { data: '5 GB', days: 15, price: 13.00, priceNote: 'Paris + Provence road trip' },
      { data: '10 GB', days: 30, price: 20.00, priceNote: 'Extended France or multi-country Europe' },
    ],
    vsCarrier: {
      carrierCost: '$10/day carrier plan = $120/12 days',
      esimCost: '$9 for 3 GB / 15 days',
      savings: 'Save ~$111 on a 12-day trip',
    },
    tips: [
      'Buy a Navigo Découverte transit card (physical card, €5) for unlimited Paris Metro/RER rides per week.',
      'Orange has the best Paris Metro coverage — most Airalo France plans use Orange or SFR.',
      'The French Riviera (Nice, Cannes, Monaco) has excellent coverage even on beach and yacht.',
      'Download SNCF app for train schedules — France\'s TGV network is world-class.',
    ],
    popularFrom: ['Dallas (DFW)', 'Houston (IAH)'],
    flightTime: '10–11 hours from the US (usually 1 stop)',
    topDestinations: ['Paris', 'Nice', 'Lyon', 'Bordeaux', 'Provence', 'Mont Saint-Michel'],
    faqs: [
      {
        q: 'Does the eSIM work in the Paris Metro underground?',
        a: 'Yes — Paris has invested heavily in Metro underground coverage. Orange and SFR (which most Airalo plans use) have coverage in most stations and many tunnels. You might lose signal briefly between stations.',
      },
      {
        q: 'Is a Europe-wide plan better than a France-only plan?',
        a: 'If you\'re doing France only, a France plan is slightly cheaper. But if you\'re adding Belgium, Germany, Switzerland, or Italy, get the Europe regional plan — it\'s a much better deal for multi-country trips.',
      },
    ],
  },

  {
    id: 'greece',
    slug: 'greece-esim',
    country: 'Greece',
    airaloSlug: 'greece',
    flag: '🇬🇷',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&q=80',
    metaTitle: 'Best eSIM for Greece 2026 — Athens, Santorini & the Greek Islands',
    metaDesc: 'Greece eSIM from $6. Stay connected in Athens, Santorini, Mykonos, and Crete. Cosmote & Vodafone GR networks.',
    intro: `Greece island-hopping is one of the great travel experiences — ferries, sunsets, and incredible seafood. But navigating ferry schedules, booking transfers, and finding your villa's hidden alley in Oia absolutely requires working data. An eSIM is cheap insurance against getting stranded on a dock with no connection.`,
    networks: ['Cosmote (Deutsche Telekom)', 'Vodafone Greece', 'Wind Hellas'],
    coverage: 'Excellent on major islands (Santorini, Mykonos, Corfu, Crete). Good on Rhodes and Zakynthos. Weaker signal on smaller remote islands like Tilos or Kastellorizo.',
    plans: [
      { data: '3 GB', days: 15, price: 8.00, priceNote: 'Athens + 2 islands' },
      { data: '5 GB', days: 30, price: 14.00, priceNote: 'Extended island-hopping' },
    ],
    vsCarrier: {
      carrierCost: '$10/day = $150/15 days',
      esimCost: '$8 for 3 GB / 15 days',
      savings: 'Save ~$142 on a 15-day Greece trip',
    },
    tips: [
      'Use Ferryhopper app to book Greek island ferries — an absolute must, requires good internet.',
      'Santorini gets very crowded in summer — book volcano tours and sunset dinner spots in advance.',
      'Cosmote has the best island coverage overall, especially on smaller Cyclades islands.',
      'Download offline Google Maps for Santorini\'s Oia neighborhood — the caldera-side alleys are a maze.',
    ],
    popularFrom: ['Dallas (DFW)', 'Houston (IAH)'],
    flightTime: '12–14 hours from the US (usually 1–2 stops)',
    topDestinations: ['Athens', 'Santorini', 'Mykonos', 'Crete', 'Rhodes', 'Corfu'],
    faqs: [
      {
        q: 'Will an eSIM work on the ferry between islands?',
        a: 'Yes for most major routes. Cosmote has decent coverage on the open Aegean. You\'ll stay connected on routes like Piraeus→Santorini or Santorini→Mykonos. Signal weakens in the middle of the sea but you\'ll have signal near ports.',
      },
    ],
  },

  {
    id: 'vietnam',
    slug: 'vietnam-esim',
    country: 'Vietnam',
    airaloSlug: 'vietnam',
    flag: '🇻🇳',
    heroImage: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1200&q=80',
    metaTitle: 'Best eSIM for Vietnam 2026 — Hanoi, Ho Chi Minh City & Ha Long Bay',
    metaDesc: 'Vietnam eSIM from $5. Viettel & Vinaphone networks. Navigate Hanoi, HCMC, and Ha Long Bay without roaming fees.',
    intro: `Vietnam is one of Southeast Asia's most rewarding destinations — incredible street food, dramatic scenery, and a fraction of the cost of Western travel. Data costs almost nothing on a local plan, and with Vietnam's strong 4G network, you'll navigate the motorbike chaos of Hanoi with ease.`,
    networks: ['Viettel', 'Vinaphone', 'Mobifone'],
    coverage: 'Excellent in Hanoi and Ho Chi Minh City. Good in Hoi An, Da Nang, and Hue. Limited on some remote islands and in deep Mekong Delta channels.',
    plans: [
      { data: '3 GB', days: 15, price: 5.00, priceNote: 'HCMC + Mekong Delta' },
      { data: '5 GB', days: 30, price: 9.00, priceNote: 'Full north-to-south Vietnam trip' },
      { data: '10 GB', days: 30, price: 15.00, priceNote: 'Vietnam + Cambodia or Thailand combo' },
    ],
    vsCarrier: {
      carrierCost: '$10/day = $150 for 15 days',
      esimCost: '$5 for 3 GB / 15 days',
      savings: 'Save ~$145 on a 15-day trip',
    },
    tips: [
      'Grab (SE Asia Uber equivalent) is essential in Hanoi and HCMC — requires data.',
      'Ha Long Bay cruise boats often have WiFi — your eSIM is mainly for the travel days.',
      'Download maps of Hoi An\'s Ancient Town offline — it\'s small but easy to get turned around.',
      'The Reunification Express train from HCMC to Hanoi has WiFi in some classes — supplement with eSIM.',
    ],
    popularFrom: ['Dallas (DFW)', 'Houston (IAH)'],
    flightTime: '18–22 hours from the US (2 stops usually)',
    topDestinations: ['Hanoi', 'Ho Chi Minh City', 'Ha Long Bay', 'Hoi An', 'Da Nang', 'Phú Quốc'],
    faqs: [
      {
        q: 'Is it easy to get a local SIM in Vietnam?',
        a: 'Yes — Viettel SIMs are sold everywhere including the airport, for about $3–5. But you need to handle passport registration, and the clerk may speak limited English. An eSIM you activate yourself in 2 minutes is just easier.',
      },
    ],
  },

  {
    id: 'costa-rica',
    slug: 'costa-rica-esim',
    country: 'Costa Rica',
    airaloSlug: 'costa-rica',
    flag: '🇨🇷',
    heroImage: 'https://images.unsplash.com/photo-1580237541049-2d715a09486e?w=1200&q=80',
    metaTitle: 'Best eSIM for Costa Rica 2026 — Arenal, Manuel Antonio & San José',
    metaDesc: 'Costa Rica eSIM from $7. Stay connected near Arenal, Monteverde, and Manuel Antonio. Kolbi & Movistar CR networks.',
    intro: `Costa Rica is Central America's adventure capital — volcanoes, cloud forests, and two coastlines. It's also one of the easier tropical destinations to navigate with a smartphone: good roads, well-marked national parks, and decent 4G in most tourist areas. An eSIM keeps you connected from San José to the Osa Peninsula.`,
    networks: ['Kolbi (ICE)', 'Movistar Costa Rica', 'Claro Costa Rica'],
    coverage: 'Good in San José, the Central Valley, Arenal, and the Pacific coast. Weaker in deep jungle areas like the Osa Peninsula and some Caribbean Coast spots.',
    plans: [
      { data: '3 GB', days: 15, price: 9.00, priceNote: 'Perfect for a 10-day adventure circuit' },
      { data: '5 GB', days: 30, price: 14.00, priceNote: 'Month of Pura Vida' },
    ],
    vsCarrier: {
      carrierCost: '$10/day = $100/10 days',
      esimCost: '$9 for 3 GB / 15 days',
      savings: 'Save ~$91 on a 10-day trip',
    },
    tips: [
      'Kolbi (the state carrier) has the widest rural coverage — choose Kolbi-backed plans if you\'re going deep into nature.',
      'Roads in Costa Rica are notoriously bad in the rainy season — Google Maps helps, but download offline too.',
      'WhatsApp is the communication standard in Costa Rica — everyone from tour guides to shuttle drivers uses it.',
      'Manuel Antonio National Park requires advance online booking — do it before you arrive in the country.',
    ],
    popularFrom: ['Houston (IAH)', 'Dallas (DFW)', 'Austin (AUS)'],
    flightTime: '3–4 hours from the US (some direct flights)',
    topDestinations: ['San José', 'Arenal', 'Monteverde', 'Manuel Antonio', 'Tamarindo', 'Puerto Viejo'],
    faqs: [
      {
        q: 'Is there good internet near Arenal Volcano?',
        a: 'Yes — La Fortuna (the main town near Arenal) has good 4G coverage and most hotels have WiFi. Signal drops once you\'re in the jungle on hiking trails, but you\'ll have it everywhere you sleep and eat.',
      },
    ],
  },
];

export default esimData;

// Helper to find a country by slug
export const findEsimBySlug = (slug) =>
  esimData.find((c) => c.slug === slug);
