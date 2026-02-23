// ==================== ARCHIVED DEALS ====================
// When a deal expires: move it from activeDeals.js to the TOP of this array (newest first)
// These are sorted newest first so pagination always shows most recent expired deals first

const archivedDeals = [
  {
    id: 2,
    slug: 'cancun-mexico',
    city: 'austin',
    destination: 'Cancún, Mexico',
    price: 197,
    originalPrice: 380,
    airline: 'Southwest',
    dates: 'Feb-Apr 2026',
    route: 'AUS → CUN',
    type: 'Beach',
    image: 'https://images.unsplash.com/photo-1670465897319-9c2e9b2b1f22?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Direct Flight', 'Weekend Deals'],
    savings: 52,
    detectedAt: '2026-02-18T15:00:00Z',
    status: 'expired',
    dealDetails: {
      baggage: '2 free checked bags included',
      stops: 'Nonstop',
      duration: '2h 15m',
      bookingClass: 'Wanna Get Away',
      alliance: 'Southwest (no alliances)'
    },
    destinationInfo: {
      visa: 'No visa required for US citizens',
      currency: 'Mexican Peso (MXN) - $1 ≈ 17 MXN',
      bestTime: 'December-April (dry season, perfect beach weather)',
      topTips: [
        'Hotel Zone has best beaches but downtown is more authentic',
        'Book tours through hotel - safer than street vendors',
        'Taxis are expensive - use Uber or colectivos',
        'Visit Chichen Itza early (7am) to beat crowds',
        'Carry pesos - better exchange rate than paying in USD'
      ]
    },
    verifiedDates: [
      { outbound: 'Mar 10', return: 'Mar 17', length: 7, dayOfWeek: 'Mon' },
      { outbound: 'Mar 17', return: 'Mar 24', length: 7, dayOfWeek: 'Mon' },
      { outbound: 'Apr 07', return: 'Apr 14', length: 7, dayOfWeek: 'Mon' },
    ]
  },
  {
    id: 3,
    slug: 'chicago-illinois',
    city: 'austin',
    destination: 'Chicago',
    price: 115,
    originalPrice: 375,
    airline: 'AA',
    dates: 'April 2026, Sep-Nov 2026',
    route: 'AUS → ORD',
    type: 'Domestic',
    image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Premium Economy', 'Oneworld'],
    savings: 31,
    detectedAt: '2026-02-17T20:00:00Z',
    status: 'expired',
    dealDetails: {
      baggage: '1 carry-on, 1 personal item',
      stops: 'Nonstop',
      duration: '2h 45m',
      bookingClass: 'Economy',
      alliance: 'Oneworld (American Airlines)'
    },
    destinationInfo: {
      visa: 'N/A (domestic)',
      currency: 'USD',
      bestTime: 'May-September (warm weather, festivals)',
      topTips: [
        'CTA train from airport is $5 vs $50+ Uber',
        'Chicago Architecture Boat Tour is a must-do',
        'Deep dish pizza: Lou Malnati\'s or Pequod\'s',
        'Millennium Park and Cloud Gate (The Bean) are free',
        'Navy Pier has free fireworks Wednesday & Saturday nights'
      ]
    },
    verifiedDates: [
      { outbound: 'Apr 10', return: 'Apr 17', length: 7, dayOfWeek: 'Thu' },
      { outbound: 'Apr 24', return: 'May 01', length: 7, dayOfWeek: 'Thu' },
    ]
  },
];

export default archivedDeals;
