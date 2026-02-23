// ==================== ACTIVE DEALS ====================
// Add new deals at the TOP of this array (newest first)
// When a deal expires: move it to archivedDeals.js

const activeDeals = [
  {
    id: 11,
    slug: 'charlotte-amalie-usvi',
    city: 'san-antonio',
    destination: 'Charlotte Amalie, US Virgin Islands',
    price: 240,
    originalPrice: 600,
    airline: 'American Airlines / United',
    dates: 'Mar - Apr 2026',
    route: 'SAT → STT',
    type: 'Beach',
    image: 'https://images.unsplash.com/photo-nVOFg37Jtks?w=800&auto=format&fit=crop',
    tags: ['31" Legroom', 'Seat USB'],
    savings: 60,
    detectedAt: '2026-02-20T19:12:00Z',
    status: 'active',
    dealDetails: {
      baggage: '1 carry-on, 1 personal item',
      stops: '1 stop',
      duration: '6h 10m',
      bookingClass: 'Economy',
      alliance: 'Oneworld (AA) / Star Alliance (United)',
    },
    destinationInfo: {
      visa: 'No visa required — US territory, government-issued photo ID accepted (passport recommended)',
      currency: 'US Dollar (USD) — same as mainland, no exchange needed',
      bestTime: 'December–April (dry season with perfect weather; avoid hurricane season May–Nov)',
      topTips: [
        'No passport needed for US citizens — a REAL ID-compliant license or government ID is enough to fly',
        'Magens Bay is one of the top-rated beaches in the world — arrive early to claim your spot',
        'Charlotte Amalie has legendary duty-free shopping — US citizens get a $1,600 exemption (vs $800 elsewhere)',
        'Rent a car to explore beyond the capital — remember driving is on the LEFT side of the road',
        'The Skyride to Paradise Point offers stunning panoramic views of the harbor and is worth every penny',
      ],
    },
    verifiedDates: [
      { outbound: 'Apr 08', return: 'Apr 15', length: 7, dayOfWeek: 'Wed' },
      { outbound: 'Apr 09', return: 'Apr 16', length: 7, dayOfWeek: 'Thu' },
      { outbound: 'Apr 10', return: 'Apr 17', length: 7, dayOfWeek: 'Fri' },
      { outbound: 'Apr 13', return: 'Apr 20', length: 7, dayOfWeek: 'Mon' },
      { outbound: 'Apr 14', return: 'Apr 21', length: 7, dayOfWeek: 'Tue' },
      { outbound: 'Apr 15', return: 'Apr 22', length: 7, dayOfWeek: 'Wed' },
      { outbound: 'Apr 16', return: 'Apr 23', length: 7, dayOfWeek: 'Thu' },
      { outbound: 'May 02', return: 'May 09', length: 7, dayOfWeek: 'Sat' },
      { outbound: 'May 04', return: 'May 11', length: 7, dayOfWeek: 'Mon' },
      { outbound: 'May 05', return: 'May 12', length: 7, dayOfWeek: 'Tue' },
      { outbound: 'May 06', return: 'May 13', length: 7, dayOfWeek: 'Wed' },
      { outbound: 'May 13', return: 'May 20', length: 7, dayOfWeek: 'Wed' },
      { outbound: 'May 14', return: 'May 25', length: 11, dayOfWeek: 'Thu' },
    ],
  },
  {
    id: 1,
    slug: 'madrid-spain',
    city: 'austin',
    destination: 'Madrid, Spain',
    price: 493,
    originalPrice: 1050,
    airline: 'British Airways',
    dates: 'April 2026, Sep-Nov 2026',
    route: 'AUS → MAD',
    type: 'International',
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Nonstop Available', 'Star Alliance'],
    savings: 49,
    detectedAt: '2026-02-18T18:00:00Z',
    status: 'active',
    dealDetails: {
      baggage: '1 carry-on, 1 personal item included',
      stops: 'Nonstop available',
      duration: '9h 30m',
      bookingClass: 'Economy',
      alliance: 'Oneworld (British Airways)'
    },
    destinationInfo: {
      visa: 'No visa required for US citizens (90-day stay)',
      currency: 'Euro (EUR) - $1 ≈ €0.92',
      bestTime: 'April-June, September-October (mild weather, fewer crowds)',
      topTips: [
        'Book Prado Museum tickets online in advance',
        'Metro is fastest way to get around - buy a 10-trip ticket',
        'Dinner starts late (9-10pm) - embrace the Spanish schedule',
        'Visit free on Sundays: Prado, Reina Sofia, Thyssen museums',
        'Try tapas hopping in La Latina neighborhood'
      ]
    },
    verifiedDates: [
      { outbound: 'Mar 07', return: 'Mar 14', length: 7, dayOfWeek: 'Fri' },
      { outbound: 'Mar 15', return: 'Mar 22', length: 7, dayOfWeek: 'Sat' },
      { outbound: 'Apr 05', return: 'Apr 12', length: 7, dayOfWeek: 'Sat' },
      { outbound: 'Apr 12', return: 'Apr 19', length: 7, dayOfWeek: 'Sat' },
      { outbound: 'Apr 19', return: 'Apr 29', length: 10, dayOfWeek: 'Sat' },
      { outbound: 'May 03', return: 'May 10', length: 7, dayOfWeek: 'Sat' },
      { outbound: 'May 10', return: 'May 24', length: 14, dayOfWeek: 'Sat' },
      { outbound: 'May 17', return: 'May 24', length: 7, dayOfWeek: 'Sat' },
    ]
  },
  {
    id: 5,
    slug: 'paris-france',
    city: 'houston',
    destination: 'Paris, France',
    price: 512,
    originalPrice: 1100,
    airline: 'Air France / Delta',
    dates: 'Apr-May 2026',
    route: 'IAH → CDG',
    type: 'International',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop',
    tags: ['SkyTeam', 'Spring Special'],
    savings: 53,
    detectedAt: '2026-02-18T14:00:00Z',
    status: 'active',
    dealDetails: {
      baggage: '1 carry-on, 1 checked bag',
      stops: '1 stop',
      duration: '12h 30m',
      bookingClass: 'Economy',
      alliance: 'SkyTeam (Air France/Delta)'
    },
    destinationInfo: {
      visa: 'No visa required for US citizens (90-day stay)',
      currency: 'Euro (EUR) - $1 ≈ €0.92',
      bestTime: 'April-June, September-October (pleasant weather)',
      topTips: [
        'Museum Pass saves time and money - skip ticket lines',
        'Metro is cheap and efficient - avoid taxis',
        'Louvre on Wednesday/Friday nights - fewer crowds',
        'Montmartre is stunning but very hilly - wear good shoes',
        'Bakeries close between lunch/dinner - stock up on pastries early'
      ]
    },
    verifiedDates: [
      { outbound: 'Apr 15', return: 'Apr 22', length: 7, dayOfWeek: 'Tue' },
      { outbound: 'May 06', return: 'May 13', length: 7, dayOfWeek: 'Tue' },
    ]
  },
  {
    id: 6,
    slug: 'honolulu-hawaii',
    city: 'houston',
    destination: 'Honolulu, Hawaii',
    price: 312,
    originalPrice: 680,
    airline: 'United',
    dates: 'Mar-Jun 2026',
    route: 'IAH → HNL',
    type: 'Beach',
    image: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?w=800&auto=format&fit=crop',
    tags: ['Island Paradise', 'Direct'],
    savings: 54,
    detectedAt: '2026-02-18T16:00:00Z',
    status: 'active',
    dealDetails: {
      baggage: '1 carry-on, 1 personal item',
      stops: 'Nonstop',
      duration: '7h 45m',
      bookingClass: 'Economy',
      alliance: 'Star Alliance (United)'
    },
    destinationInfo: {
      visa: 'N/A (domestic)',
      currency: 'USD',
      bestTime: 'April-May, September-November (dry, less crowded)',
      topTips: [
        'Rent a car - beaches and hikes spread across the island',
        'Waikiki is touristy - try North Shore for authentic vibe',
        'Pearl Harbor tickets book up fast - reserve online',
        'Hanauma Bay snorkeling requires reservation ($25)',
        'Pack reef-safe sunscreen - traditional sunscreen banned'
      ]
    },
    verifiedDates: [
      { outbound: 'Mar 25', return: 'Apr 01', length: 7, dayOfWeek: 'Wed' },
      { outbound: 'Apr 15', return: 'Apr 22', length: 7, dayOfWeek: 'Wed' },
    ]
  },
  {
    id: 7,
    slug: 'rome-italy',
    city: 'dallas',
    destination: 'Rome, Italy',
    price: 498,
    originalPrice: 1050,
    airline: 'American Airlines',
    dates: 'Mar-Apr 2026',
    route: 'DFW → FCO',
    type: 'International',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&auto=format&fit=crop',
    tags: ['Oneworld', 'History Buff'],
    savings: 53,
    detectedAt: '2026-02-17T20:00:00Z',
    status: 'active',
    dealDetails: {
      baggage: '1 carry-on, 1 personal item',
      stops: '1 stop',
      duration: '13h 15m',
      bookingClass: 'Economy',
      alliance: 'Oneworld (American Airlines)'
    },
    destinationInfo: {
      visa: 'No visa required for US citizens (90-day stay)',
      currency: 'Euro (EUR) - $1 ≈ €0.92',
      bestTime: 'April-June, September-October (mild temps)',
      topTips: [
        'Book Colosseum/Vatican tours online - avoid 2+ hour lines',
        'Roma Pass gets you into 2 sites + unlimited metro',
        'Trastevere neighborhood for authentic Roman dining',
        'Dress modestly for churches - cover shoulders/knees',
        'Restaurants add "coperto" cover charge - this is normal'
      ]
    },
    verifiedDates: [
      { outbound: 'Mar 18', return: 'Mar 25', length: 7, dayOfWeek: 'Wed' },
      { outbound: 'Apr 08', return: 'Apr 15', length: 7, dayOfWeek: 'Wed' },
    ]
  },
  {
    id: 8,
    slug: 'seattle-washington',
    city: 'dallas',
    destination: 'Seattle, Washington',
    price: 127,
    originalPrice: 290,
    airline: 'Alaska Airlines',
    dates: 'Feb-May 2026',
    route: 'DFW → SEA',
    type: 'Domestic',
    image: 'https://images.unsplash.com/photo-1629716520458-f8f11b3a81a8?w=800&auto=format&fit=crop',
    tags: ['Pacific Northwest', 'Direct'],
    savings: 56,
    detectedAt: '2026-02-18T12:00:00Z',
    status: 'active',
    dealDetails: {
      baggage: '1 carry-on, 1 personal item',
      stops: 'Nonstop',
      duration: '4h 10m',
      bookingClass: 'Economy',
      alliance: 'Oneworld (Alaska Airlines)'
    },
    destinationInfo: {
      visa: 'N/A (domestic)',
      currency: 'USD',
      bestTime: 'June-September (dry and sunny)',
      topTips: [
        'Link Light Rail from airport is $3 vs $50 Uber',
        'Pike Place Market early (8am) to avoid crowds',
        'Bring layers - weather changes quickly',
        'Original Starbucks is a tourist trap - skip it',
        'Ferry to Bainbridge Island for great city views'
      ]
    },
    verifiedDates: [
      { outbound: 'Mar 12', return: 'Mar 19', length: 7, dayOfWeek: 'Thu' },
      { outbound: 'Apr 16', return: 'Apr 23', length: 7, dayOfWeek: 'Thu' },
    ]
  },
  {
    id: 9,
    slug: 'los-angeles-california',
    city: 'san-antonio',
    destination: 'Los Angeles, CA',
    price: 97,
    originalPrice: 240,
    airline: 'Southwest',
    dates: 'Mar-Jun 2026',
    route: 'SAT → LAX',
    type: 'Domestic',
    image: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800&auto=format&fit=crop',
    tags: ['West Coast', 'Weekend Getaway'],
    savings: 60,
    detectedAt: '2026-02-18T08:00:00Z',
    status: 'active',
    dealDetails: {
      baggage: '2 free checked bags',
      stops: 'Nonstop',
      duration: '3h 20m',
      bookingClass: 'Wanna Get Away',
      alliance: 'Southwest (no alliances)'
    },
    destinationInfo: {
      visa: 'N/A (domestic)',
      currency: 'USD',
      bestTime: 'May-October (warm beach weather)',
      topTips: [
        'Rent a car - LA is massive and spread out',
        'Avoid driving 4-7pm - traffic is terrible',
        'Griffith Observatory is free with amazing views',
        'Beach parking is expensive - arrive before 10am',
        'In-N-Out Burger is a must - try Animal Style'
      ]
    },
    verifiedDates: [
      { outbound: 'Mar 14', return: 'Mar 21', length: 7, dayOfWeek: 'Sat' },
      { outbound: 'Apr 11', return: 'Apr 18', length: 7, dayOfWeek: 'Sat' },
    ]
  },
  {
    id: 10,
    slug: 'new-york-city',
    city: 'san-antonio',
    destination: 'New York City',
    price: 167,
    originalPrice: 380,
    airline: 'JetBlue',
    dates: 'Feb-Apr 2026',
    route: 'SAT → JFK',
    type: 'Domestic',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&auto=format&fit=crop',
    tags: ['Big Apple', 'Direct Flight'],
    savings: 56,
    detectedAt: '2026-02-18T13:00:00Z',
    status: 'active',
    dealDetails: {
      baggage: '1 carry-on, 1 personal item',
      stops: 'Nonstop',
      duration: '3h 55m',
      bookingClass: 'Blue Basic',
      alliance: 'JetBlue (no alliances)'
    },
    destinationInfo: {
      visa: 'N/A (domestic)',
      currency: 'USD',
      bestTime: 'April-June, September-November (mild weather)',
      topTips: [
        'Subway is fastest - get unlimited MetroCard',
        'Times Square is overrated - skip it',
        'Central Park, Brooklyn Bridge, High Line are free',
        'Museums have "suggested donation" - pay what you want',
        'Walk or subway everywhere - taxis/Ubers are expensive'
      ]
    },
    verifiedDates: [
      { outbound: 'Mar 08', return: 'Mar 15', length: 7, dayOfWeek: 'Sun' },
      { outbound: 'Apr 05', return: 'Apr 12', length: 7, dayOfWeek: 'Sun' },
    ]
  }
];

export default activeDeals;
