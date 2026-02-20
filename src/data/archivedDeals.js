// ==================== ARCHIVED DEALS ====================
// When a deal expires: move it from activeDeals.js to the TOP of this array (newest first)
// These are sorted newest first so pagination always shows most recent expired deals first

const archivedDeals = [
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
