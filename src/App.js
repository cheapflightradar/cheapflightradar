import React, { useState, useEffect } from 'react';
import { Search, MapPin, Calendar, DollarSign, Plane, TrendingDown, Bell, Menu, X, ArrowLeft, Info, Share2, Heart, ExternalLink, Radar, SlidersHorizontal } from 'lucide-react';

// ==================== HOMEPAGE COMPONENT ====================
const HomePage = ({ onDealClick }) => {
  const [selectedCity, setSelectedCity] = useState('austin');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to calculate relative time
  const getRelativeTime = (timestamp) => {
    const now = new Date();
    const detected = new Date(timestamp);
    const diffMs = now - detected;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 60) return `${diffMins} ${diffMins === 1 ? 'minute' : 'minutes'} ago`;
    if (diffHours < 24) return `${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ago`;
    if (diffDays < 30) return `${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago`;
    const diffMonths = Math.floor(diffDays / 30);
    return `${diffMonths} ${diffMonths === 1 ? 'month' : 'months'} ago`;
  };

  const cities = [
    { id: 'austin', name: 'Austin', airport: 'AUS', emoji: '🌮' },
    { id: 'houston', name: 'Houston', airport: 'IAH', emoji: '🚀' },
    { id: 'dallas', name: 'Dallas', airport: 'DFW', emoji: '🏈' },
    { id: 'san-antonio', name: 'San Antonio', airport: 'SAT', emoji: '🌵' }
  ];

  const allDeals = [
    {
      id: 1,
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
      detectedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      status: 'active', // 'active' or 'expired'
      // ========== DEAL DETAILS ==========
      dealDetails: {
        baggage: '1 carry-on, 1 personal item included',
        stops: 'Nonstop available',
        duration: '9h 30m',
        bookingClass: 'Economy',
        alliance: 'Oneworld (British Airways)'
      },
      // ========== DESTINATION INFO ==========
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
      id: 2,
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
      detectedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
      status: 'active',
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
      detectedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      status: 'expired', // Example of expired deal
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
    {
      id: 4,
      city: 'austin',
      destination: 'Miami, FL',
      price: 91,
      originalPrice: 340,
      airline: 'AA',
      dates: 'Mar-Jun 2026',
      route: 'AUS → MIA',
      type: 'Domestic',
      image: 'https://plus.unsplash.com/premium_photo-1697730215093-baeae8060bfe?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Nonstop', 'Beach'],
      savings: 27,
      detectedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
      status: 'active',
      dealDetails: {
        baggage: '1 carry-on, 1 personal item',
        stops: 'Nonstop',
        duration: '2h 50m',
        bookingClass: 'Economy',
        alliance: 'Oneworld (American Airlines)'
      },
      destinationInfo: {
        visa: 'N/A (domestic)',
        currency: 'USD',
        bestTime: 'December-May (dry season, beach weather)',
        topTips: [
          'South Beach is touristy - try Mid-Beach for less crowds',
          'Rent a bike to cruise Ocean Drive',
          'Little Havana for authentic Cuban food',
          'Wynwood Walls has amazing street art (free entry)',
          'Book South Beach parking in advance - very limited'
        ]
      },
      verifiedDates: [
        { outbound: 'Mar 20', return: 'Mar 27', length: 7, dayOfWeek: 'Thu' },
        { outbound: 'Apr 03', return: 'Apr 10', length: 7, dayOfWeek: 'Thu' },
      ]
    },
    {
      id: 5,
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
      detectedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
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
      detectedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
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
      detectedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
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
      detectedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
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
      detectedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
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
      detectedAt: new Date(Date.now() - 7 * 60 * 60 * 1000).toISOString(),
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

  const categories = [
    { id: 'all', label: 'All Deals', icon: Plane },
    { id: 'International', label: 'International', icon: MapPin },
    { id: 'Domestic', label: 'Domestic', icon: MapPin },
    { id: 'Beach', label: 'Beach', icon: Calendar }
  ];

  const filteredDeals = allDeals.filter(deal => {
    const matchesCity = deal.city === selectedCity;
    const matchesFilter = selectedFilter === 'all' || deal.type === selectedFilter;
    const matchesSearch = deal.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         deal.route.toLowerCase().includes(searchTerm.toLowerCase());
    const isActive = deal.status === 'active'; // Only show active deals
    return matchesCity && matchesFilter && matchesSearch && isActive;
  });

  const expiredDeals = allDeals.filter(deal => {
    const matchesCity = deal.city === selectedCity;
    const isExpired = deal.status === 'expired';
    return matchesCity && isExpired;
  });

  const currentCity = cities.find(c => c.id === selectedCity);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-emerald-500/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Radar className="w-6 h-6 text-white animate-pulse" />
                <div className="absolute inset-0 bg-emerald-400 rounded-lg opacity-50 animate-ping"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight font-display">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-300">
                    CheapFlightRadar
                  </span>
                </h1>
                <p className="text-xs text-emerald-300 -mt-1 tracking-wider">ALWAYS SCANNING. ALWAYS SAVING.</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#deals" className="text-slate-300 hover:text-emerald-400 transition-colors font-medium">Detected Deals</a>
              <a href="#how" className="text-slate-300 hover:text-emerald-400 transition-colors font-medium">How It Works</a>
              <button className="bg-gradient-to-r from-emerald-500 to-cyan-400 text-slate-900 px-6 py-2.5 rounded-full font-bold hover:shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <Bell className="w-4 h-4" />
                <span>Get Alerts</span>
              </button>
            </div>

            <button 
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors text-emerald-400"
            >
              {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {showMobileMenu && (
            <div className="md:hidden py-4 border-t border-slate-700">
              <div className="flex flex-col space-y-3">
                <a href="#deals" className="text-slate-300 hover:text-emerald-400 transition-colors font-medium py-2">Detected Deals</a>
                <a href="#how" className="text-slate-300 hover:text-emerald-400 transition-colors font-medium py-2">How It Works</a>
                <button className="bg-gradient-to-r from-emerald-500 to-cyan-400 text-slate-900 px-6 py-2.5 rounded-full font-bold flex items-center justify-center space-x-2">
                  <Bell className="w-4 h-4" />
                  <span>Get Alerts</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at center, transparent 0%, transparent 20%, rgba(16, 185, 129, 0.1) 20%, rgba(16, 185, 129, 0.1) 21%, transparent 21%), 
                             radial-gradient(circle at center, transparent 0%, transparent 40%, rgba(16, 185, 129, 0.1) 40%, rgba(16, 185, 129, 0.1) 41%, transparent 41%), 
                             radial-gradient(circle at center, transparent 0%, transparent 60%, rgba(16, 185, 129, 0.1) 60%, rgba(16, 185, 129, 0.1) 61%, transparent 61%), 
                             radial-gradient(circle at center, transparent 0%, transparent 80%, rgba(16, 185, 129, 0.1) 80%, rgba(16, 185, 129, 0.1) 81%, transparent 81%)`,
            backgroundSize: '100% 100%'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 rounded-full text-sm font-bold backdrop-blur-sm animate-pulse">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
              <span>🎯 SCANNING ACTIVE • 1,247 ROUTES MONITORED</span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-display">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-300">
                Your Flight Deal
              </span>
              <br />
              <span className="text-white">Detection System</span>
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              We scan the skies 24/7, detecting price drops and alerting you the moment a deal appears. From Texas to anywhere, for a fraction of the cost.
            </p>

            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-emerald-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search detected deals... (Tokyo, London, Cancún)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-emerald-500/30 bg-slate-800/50 backdrop-blur-sm text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 transition-all text-lg shadow-xl"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {cities.map((city) => (
                <button
                  key={city.id}
                  onClick={() => setSelectedCity(city.id)}
                  className={`px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 font-display ${
                    selectedCity === city.id
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-400 text-slate-900 shadow-lg shadow-emerald-500/50'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border-2 border-slate-700'
                  }`}
                >
                  <span>{city.emoji}</span>
                  <span>{city.name}</span>
                  <span className="text-xs opacity-75">({city.airport})</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedFilter(category.id)}
                  className={`px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 font-display ${
                    selectedFilter === category.id
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-400 text-slate-900 shadow-lg shadow-emerald-500/50'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border-2 border-slate-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Deals Detected', value: filteredDeals.length.toString(), icon: TrendingDown, color: 'emerald' },
            { label: 'Avg Savings', value: '53%', icon: DollarSign, color: 'cyan' },
            { label: 'Active Scans', value: '1,247', icon: Radar, color: 'emerald' }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400 mb-1 font-bold tracking-wider font-display">{stat.label}</p>
                    <p className="text-3xl font-bold text-white font-display">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-br from-${stat.color}-500/20 to-${stat.color}-400/20 border border-${stat.color}-500/50 rounded-xl flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${stat.color}-400`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div id="deals" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Radar className="w-6 h-6 text-emerald-400 animate-pulse" />
            <h3 className="text-4xl font-bold text-white font-display">
              Recently Detected from {currentCity.name}
            </h3>
          </div>
          <p className="text-lg text-slate-300">
            🎯 {filteredDeals.length} deals on your radar • Updated in real-time
          </p>
        </div>

        {filteredDeals.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-slate-400">No deals detected. Try selecting a different city or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDeals.map((deal) => (
              <div
                key={deal.id}
                onClick={() => onDealClick(deal)}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={deal.image}
                    alt={deal.destination}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {deal.savings}% OFF
                  </div>
                  <div className="absolute top-4 left-4 flex items-center space-x-1 bg-emerald-500/90 text-white px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    <span>DETECTED {getRelativeTime(deal.detectedAt)}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-1 font-display">{deal.destination}</h4>
                      <p className="text-sm text-slate-400">{deal.route}</p>
                    </div>
                  </div>

                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-emerald-400 font-display">${deal.price}</span>
                    <span className="ml-2 text-lg text-slate-500 line-through">${deal.originalPrice}</span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-slate-300">
                      <Plane className="w-4 h-4 mr-2 text-emerald-400" />
                      {deal.airline}
                    </div>
                    <div className="flex items-center text-sm text-slate-300">
                      <Calendar className="w-4 h-4 mr-2 text-emerald-400" />
                      {deal.dates}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {deal.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 rounded-full text-xs font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-400 text-slate-900 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105 transition-all duration-300">
                    View Deal →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ARCHIVE SECTION - Expired Deals */}
      {expiredDeals.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Calendar className="w-6 h-6 text-slate-500" />
              <h3 className="text-4xl font-bold text-slate-400 font-display">
                Past Deals from {currentCity.name}
              </h3>
            </div>
            <p className="text-lg text-slate-500">
              🕒 See what you missed - {expiredDeals.length} expired {expiredDeals.length === 1 ? 'deal' : 'deals'}
            </p>
            <p className="text-sm text-slate-600 mt-2">
              💡 Click to search these dates - prices may still be good!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expiredDeals.map((deal) => (
              <div
                key={deal.id}
                onClick={() => onDealClick(deal)}
                className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 opacity-70 hover:opacity-95 transition-all duration-300 cursor-pointer hover:scale-[1.02]"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={deal.image}
                    alt={deal.destination}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-[50%] transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-900/50"></div>
                  <div className="absolute top-4 right-4 bg-red-500/90 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    EXPIRED
                  </div>
                  <div className="absolute top-4 left-4 flex items-center space-x-1 bg-slate-700/90 text-white px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm">
                    <Calendar className="w-3 h-3" />
                    <span>{getRelativeTime(deal.detectedAt)}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-2xl font-bold text-slate-300 mb-1 font-display">{deal.destination}</h4>
                      <p className="text-sm text-slate-500">{deal.route}</p>
                    </div>
                  </div>

                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-slate-400 font-display">${deal.price}</span>
                    <span className="ml-2 text-lg text-slate-600 line-through">${deal.originalPrice}</span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-slate-400">
                      <Plane className="w-4 h-4 mr-2 text-slate-500" />
                      {deal.airline}
                    </div>
                    <div className="flex items-center text-sm text-slate-400">
                      <Calendar className="w-4 h-4 mr-2 text-slate-500" />
                      {deal.dates}
                    </div>
                  </div>

                  <button className="w-full bg-slate-700/50 text-slate-300 py-3 rounded-xl font-bold hover:bg-slate-600/50 transition-all duration-300 border border-slate-600">
                    Search These Dates →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-400">
              <Bell className="w-5 h-5" />
              <span className="text-sm font-bold">Never miss deals like these - sign up for alerts above</span>
            </div>
          </div>
        </div>
      )}

      <div id="how" className="bg-slate-800/50 backdrop-blur-sm border-y border-slate-700 py-20 px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4 font-display">How Our Radar Works</h3>
            <p className="text-xl text-slate-300">Detection → Alert → Savings</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Continuous Scanning',
                description: 'Our radar scans 1,000+ routes every 6 hours, comparing prices against historical data to detect genuine deals.',
                icon: Radar
              },
              {
                step: '02',
                title: 'Instant Detection',
                description: 'When a price drops below our threshold (typically 40%+ off), our system immediately flags it as a deal.',
                icon: TrendingDown
              },
              {
                step: '03',
                title: 'Real-Time Alerts',
                description: 'You get notified instantly via email or SMS. Book fast—most deals disappear within 48 hours.',
                icon: Bell
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8 h-full hover:border-emerald-500/50 transition-all">
                    <div className="text-emerald-500/30 text-6xl font-bold mb-4 font-display">{item.step}</div>
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-cyan-400/20 border border-emerald-500/50 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3 font-display">{item.title}</h4>
                    <p className="text-slate-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-cyan-500 to-emerald-600"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)`,
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="relative inline-block mb-6">
            <Bell className="w-16 h-16 text-white mx-auto animate-pulse" />
            <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
          </div>
          <h3 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-display">Get On Our Radar</h3>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Join 10,000+ travelers who never miss a deal. Get instant alerts when we detect price drops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all font-bold font-display"
            />
            <button className="bg-slate-900 text-emerald-400 px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transform hover:scale-105 transition-all duration-300 shadow-xl whitespace-nowrap font-display">
              Start Scanning →
            </button>
          </div>
          <p className="text-sm text-emerald-100 mt-4">
            ✓ No spam, unsubscribe anytime  •  ✓ 100% free forever  •  ✓ Instant deal alerts
          </p>
        </div>
      </div>

      <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-400 rounded-lg flex items-center justify-center">
                  <Radar className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white font-display">CheapFlightRadar</span>
              </div>
              <p className="text-sm text-slate-400">
                Your 24/7 flight deal detection system. Always scanning. Always saving.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 font-display">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-emerald-400 transition-colors">About Our Radar</a></li>
                <li><a href="/" className="hover:text-emerald-400 transition-colors">How It Works</a></li>
                <li><a href="/" className="hover:text-emerald-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 font-display">Scanning From</h4>
              <ul className="space-y-2 text-sm">
                {cities.map(city => (
                  <li key={city.id}>
                    <button 
                      onClick={() => setSelectedCity(city.id)}
                      className="hover:text-emerald-400 transition-colors"
                    >
                      {city.emoji} {city.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 font-display">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="/" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
                <li><a href="/" className="hover:text-emerald-400 transition-colors">Affiliate Disclosure</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            <p>© 2026 CheapFlightRadar. All rights reserved. Prices detected in real-time, subject to availability.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');
        * { font-family: 'Inter', sans-serif; }
        .font-display { font-family: 'Rajdhani', sans-serif; }
      `}</style>
    </div>
  );
};

// ==================== DEAL DETAIL PAGE WITH 60+ DATES ====================
const DealDetailPage = ({ deal, onBack }) => {
  // ========== MANUALLY ADD YOUR AFFILIATE LINKS HERE ==========
  // Each link specifies which booking site and your affiliate ID
  // The dates from the clicked card will automatically be added to the URL
  
  const affiliateLinks = [
    { site: 'skyscanner', affiliateId: 'YOUR_SKYSCANNER_ID' },     // Link 1
    { site: 'kayak', affiliateId: 'YOUR_KAYAK_ID' },               // Link 2
    { site: 'expedia', affiliateId: 'YOUR_EXPEDIA_ID' },           // Link 3
    { site: 'priceline', affiliateId: 'YOUR_PRICELINE_ID' },       // Link 4
    { site: 'google', affiliateId: '' },                           // Link 5 (Google Flights doesn't use affiliate ID)
    { site: 'skyscanner', affiliateId: 'YOUR_SKYSCANNER_ID' },     // Link 6
    { site: 'kayak', affiliateId: 'YOUR_KAYAK_ID' },               // Link 7
    { site: 'expedia', affiliateId: 'YOUR_EXPEDIA_ID' },           // Link 8
    { site: 'priceline', affiliateId: 'YOUR_PRICELINE_ID' },       // Link 9
    { site: 'skyscanner', affiliateId: 'YOUR_SKYSCANNER_ID' },     // Link 10
    { site: 'kayak', affiliateId: 'YOUR_KAYAK_ID' },               // Link 11
    { site: 'expedia', affiliateId: 'YOUR_EXPEDIA_ID' },           // Link 12
    { site: 'skyscanner', affiliateId: 'YOUR_SKYSCANNER_ID' },     // Link 13
    { site: 'kayak', affiliateId: 'YOUR_KAYAK_ID' },               // Link 14
    { site: 'expedia', affiliateId: 'YOUR_EXPEDIA_ID' },           // Link 15
    { site: 'skyscanner', affiliateId: 'YOUR_SKYSCANNER_ID' },     // Link 16
    { site: 'kayak', affiliateId: 'YOUR_KAYAK_ID' },               // Link 17
    { site: 'expedia', affiliateId: 'YOUR_EXPEDIA_ID' },           // Link 18
    { site: 'skyscanner', affiliateId: 'YOUR_SKYSCANNER_ID' },     // Link 19
    { site: 'kayak', affiliateId: 'YOUR_KAYAK_ID' },               // Link 20
  ].filter(link => link.affiliateId !== '');

  // Supported booking sites:
  // - 'skyscanner' → Skyscanner.com
  // - 'kayak' → Kayak.com
  // - 'expedia' → Expedia.com
  // - 'priceline' → Priceline.com
  // - 'google' → Google Flights (no affiliate ID needed)
  
  // ========== HOTEL AFFILIATE LINKS ==========
  // Add your hotel booking affiliate links here
  const hotelLinks = [
    { name: 'Booking.com', url: 'https://www.booking.com' },
    { name: 'Hotels.com', url: 'https://www.hotels.com' },
    { name: 'Expedia Hotels', url: 'https://www.expedia.com/Hotels' },
    { name: 'Priceline Hotels', url: 'https://www.priceline.com/hotels' },
    { name: 'Agoda', url: 'https://www.agoda.com' },
    { name: 'Airbnb', url: 'https://www.airbnb.com' },
    // Add more hotel links as needed
  ].filter(hotel => hotel.url !== '');

  // ========== ESIM AFFILIATE LINKS ==========
  // Add your eSIM provider affiliate links here
  const esimLinks = [
    { name: 'Airalo', url: 'https://www.airalo.com' },
    { name: 'Holafly', url: 'https://esim.holafly.com' },
    { name: 'Nomad', url: 'https://www.getnomad.app' },
    { name: 'Ubigi', url: 'https://cellulardata.ubigi.com' },
    { name: 'SimOptions', url: 'https://www.simoptions.com' },
    { name: 'eSIM Go', url: 'https://esimgo.com' },
    // Add more eSIM links as needed
  ].filter(esim => esim.url !== '');
  // ============================================================

  // Function to calculate relative time from detection timestamp
  const getRelativeTime = (timestamp) => {
    const now = new Date();
    const detected = new Date(timestamp);
    const diffMs = now - detected;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 60) return `${diffMins} ${diffMins === 1 ? 'minute' : 'minutes'} ago`;
    if (diffHours < 24) return `${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ago`;
    if (diffDays < 30) return `${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago`;
    const diffMonths = Math.floor(diffDays / 30);
    return `${diffMonths} ${diffMonths === 1 ? 'month' : 'months'} ago`;
  };

  // Function to build dynamic URLs with dates for each booking site
  const buildFlightUrl = (link, date, deal) => {
    // Extract origin and destination airport codes from deal
    const [origin, destination] = deal.route.split(' → ');
    
    // Parse date strings (e.g., "Mar 07" → "2026-03-07")
    const parseDate = (dateStr) => {
      const months = { Mar: '03', Apr: '04', May: '05', Jun: '06', Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12' };
      const [month, day] = dateStr.split(' ');
      return `2026-${months[month]}-${day}`;
    };
    
    const departDate = parseDate(date.outbound);
    const returnDate = parseDate(date.return);
    
    // Format dates for different sites
    const formatSkyscannerDate = (dateStr) => dateStr.replace(/-/g, '').substring(2); // "2026-03-07" → "260307"
    const formatPricelineDate = (dateStr) => dateStr.replace(/-/g, ''); // "2026-03-07" → "20260307"
    
    // Build URL based on booking site
    switch (link.site) {
      case 'skyscanner':
        return `https://www.skyscanner.com/transport/flights/${origin}/${destination}/${formatSkyscannerDate(departDate)}/${formatSkyscannerDate(returnDate)}/?adultsv2=1&cabinclass=economy&rtn=1${link.affiliateId ? `&associateid=${link.affiliateId}` : ''}`;
      
      case 'kayak':
        return `https://www.kayak.com/flights/${origin}-${destination}/${departDate}/${returnDate}?sort=bestflight_a${link.affiliateId ? `&aid=${link.affiliateId}` : ''}`;
      
      case 'expedia':
        return `https://www.expedia.com/Flights-Search?trip=roundtrip&leg1=from:${origin},to:${destination},departure:${departDate}&leg2=from:${destination},to:${origin},departure:${returnDate}${link.affiliateId ? `&affid=${link.affiliateId}` : ''}`;
      
      case 'priceline':
        return `https://www.priceline.com/fly/search/${origin}-${destination}-${formatPricelineDate(departDate)}/${destination}-${origin}-${formatPricelineDate(returnDate)}/${link.affiliateId ? `?refid=${link.affiliateId}` : ''}`;
      
      case 'google':
        return `https://www.google.com/travel/flights?q=Flights%20to%20${destination}%20from%20${origin}%20on%20${departDate}%20through%20${returnDate}`;
      
      default:
        return '#';
    }
  };

  const [bookmarked, setBookmarked] = useState(false);
  const [lengthFilter, setLengthFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [showFilters, setShowFilters] = useState(false);

  // Generate 60+ date combinations (7+ day trips) - ALL SHOW SAME PRICE
  const generateDateCombinations = () => {
    const basePrice = deal.price;
    
    // Use the verified dates from this specific deal
    const verifiedDates = deal.verifiedDates || [];
    
    // Add IDs to the verified dates
    return verifiedDates.map((date, index) => ({
      id: index + 1,
      outbound: date.outbound,
      return: date.return,
      price: basePrice,
      length: date.length,
      type: date.length === 7 ? 'week' : date.length >= 10 && date.length <= 11 ? 'extended' : 'twoweeks',
      dayOfWeek: date.dayOfWeek
    }));
  };

  const allDateCombinations = generateDateCombinations();

  const filteredDates = allDateCombinations
    .filter(date => {
      if (lengthFilter === 'week' && date.length !== 7) return false;
      if (lengthFilter === 'extended' && (date.length < 10 || date.length > 10)) return false;
      if (lengthFilter === 'twoweeks' && date.length !== 14) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'length') return a.length - b.length;
      if (sortBy === 'date') return a.id - b.id;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      <div className="bg-slate-900 border-b border-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-slate-300 hover:text-emerald-400 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold font-display">Back to Radar</span>
          </button>
        </div>
      </div>

      <div className="relative h-96 overflow-hidden">
        <img src={deal.image} alt={deal.destination} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        <div className="absolute top-6 right-6 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-2xl">
          <div className="text-sm font-bold">SAVE {deal.savings}%</div>
        </div>
        <div className="absolute top-6 left-6 flex items-center space-x-2 bg-emerald-500 text-white px-4 py-2 rounded-full shadow-xl">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span className="text-sm font-bold">DETECTED {getRelativeTime(deal.detectedAt)}</span>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              {deal.tags.map((tag, i) => (
                <span key={i} className="px-4 py-1.5 bg-emerald-500 text-white text-sm font-bold rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl font-bold text-white mb-3 font-display">{deal.destination}</h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center space-x-2">
                <Plane className="w-5 h-5" />
                <span className="text-lg font-bold">{deal.route}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span className="text-lg font-bold">{deal.dates}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 shadow-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-baseline space-x-3 mb-2">
                    <span className="text-5xl font-bold text-emerald-400 font-display">${deal.price}</span>
                    <span className="text-2xl text-slate-500 line-through">${deal.originalPrice}</span>
                  </div>
                  <p className="text-slate-400 font-bold">Example round-trip price per person</p>
                </div>
                <button onClick={() => setBookmarked(!bookmarked)} className="p-3 rounded-full hover:bg-slate-700 transition-colors">
                  <Heart className={`w-6 h-6 ${bookmarked ? 'fill-red-500 text-red-500' : 'text-slate-400'}`} />
                </button>
              </div>

              <div className="bg-orange-500/10 border-2 border-orange-500/50 rounded-xl p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-orange-200">
                    <p className="font-bold mb-1">⚠️ Important</p>
                    <p>Deals are usually valid 24 to 72 hours after posting, but can expire at any time (see time-stamp). Book quickly when you find a good price!</p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-emerald-200">
                    <p className="font-bold mb-1">⚡ How This Works</p>
                    <p>Prices shown are examples from recent searches. Click any date combination below to search real-time pricing. Actual prices may vary based on availability and booking time.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 shadow-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2 font-display">
                    {filteredDates.length} Verified Travel Dates
                  </h2>
                  <p className="text-slate-300">
                    Click any date to search real-time pricing • All dates manually verified
                  </p>
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center space-x-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-all border border-slate-600"
                >
                  <SlidersHorizontal className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-bold text-white font-display">Filters</span>
                </button>
              </div>

              {showFilters && (
                <div className="mb-6 p-6 bg-slate-900/50 rounded-xl border border-slate-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-white mb-2 font-display">Trip Length</label>
                      <select
                        value={lengthFilter}
                        onChange={(e) => setLengthFilter(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-emerald-500 focus:outline-none"
                      >
                        <option value="all">All Lengths</option>
                        <option value="week">One Week (7 days)</option>
                        <option value="extended">Extended (10 days)</option>
                        <option value="twoweeks">Two Weeks (14 days)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-white mb-2 font-display">Sort By</label>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-emerald-500 focus:outline-none"
                      >
                        <option value="date">Date (Earliest)</option>
                        <option value="length">Trip Length</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
                {filteredDates.map((date, index) => {
                  // Cycle through affiliate links - each date gets a different link config
                  const linkIndex = index % affiliateLinks.length;
                  const linkConfig = affiliateLinks[linkIndex];
                  
                  // Build dynamic URL with dates
                  const dynamicUrl = buildFlightUrl(linkConfig, date, deal);
                  
                  return (
                    <a
                      key={date.id}
                      href={dynamicUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-4 rounded-xl transition-all transform hover:scale-[1.02] border-2 border-emerald-500/30 bg-slate-900/50 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20"
                    >
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-emerald-400" />
                        <div>
                          <div className="font-bold text-white font-display">
                            {date.outbound} → {date.return}
                          </div>
                          <div className="text-xs text-slate-400">
                            {date.length} days • {date.dayOfWeek}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-emerald-400 font-display">
                          ~${date.price}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-slate-400">
                  💡 Click any date to search live prices. Prices shown are examples and may vary.
                </p>
              </div>
            </div>

            {/* ESIM SECTION */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 shadow-xl p-8">
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-400/20 border border-purple-500/50 rounded-xl flex items-center justify-center">
                    <Radar className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white font-display">
                      Stay Connected with eSIM
                    </h2>
                    <p className="text-slate-300">Data plans for {deal.destination.split(',')[0]}</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-purple-200">
                    <p className="font-bold mb-1">📱 Why eSIM?</p>
                    <p>Skip expensive roaming charges! Install an eSIM before your trip for instant data when you land. No physical SIM card needed.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {esimLinks.map((esim, index) => (
                  <a
                    key={index}
                    href={esim.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 px-4 py-3 rounded-xl font-bold transition-all transform hover:scale-105 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 text-purple-300 hover:from-purple-500/30 hover:to-pink-500/30 hover:shadow-lg hover:shadow-purple-500/20 font-display"
                  >
                    <Radar className="w-4 h-4" />
                    <span>{esim.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                ))}
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-slate-400">
                  📡 Most eSIMs activate instantly and offer data-only plans perfect for travelers
                </p>
              </div>
            </div>

            {/* HOTELS SECTION */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 shadow-xl p-8">
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-400/20 border border-cyan-500/50 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white font-display">
                      Find Hotels in {deal.destination.split(',')[0]}
                    </h2>
                    <p className="text-slate-300">Book your stay and maximize savings</p>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-cyan-200">
                    <p className="font-bold mb-1">💡 Pro Tip</p>
                    <p>Book hotels close to your flight dates for the best availability. Many hotels offer free cancellation up to 24-48 hours before check-in.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {hotelLinks.map((hotel, index) => (
                  <a
                    key={index}
                    href={hotel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 px-4 py-3 rounded-xl font-bold transition-all transform hover:scale-105 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 text-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30 hover:shadow-lg hover:shadow-cyan-500/20 font-display"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>{hotel.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                ))}
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-slate-400">
                  🏨 Compare prices across multiple sites to find the best hotel deals
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* DEAL DETAILS SECTION */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 shadow-xl p-6">
              <h3 className="font-bold text-lg text-white mb-4 font-display flex items-center">
                <Plane className="w-5 h-5 mr-2 text-emerald-400" />
                Flight Details
              </h3>
              {deal.dealDetails && (
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                    <span className="text-sm text-slate-400">Baggage</span>
                    <span className="text-sm font-bold text-white">{deal.dealDetails.baggage}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                    <span className="text-sm text-slate-400">Stops</span>
                    <span className="text-sm font-bold text-white">{deal.dealDetails.stops}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                    <span className="text-sm text-slate-400">Duration</span>
                    <span className="text-sm font-bold text-white">{deal.dealDetails.duration}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                    <span className="text-sm text-slate-400">Class</span>
                    <span className="text-sm font-bold text-white">{deal.dealDetails.bookingClass}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-400">Alliance</span>
                    <span className="text-sm font-bold text-white">{deal.dealDetails.alliance}</span>
                  </div>
                </div>
              )}
            </div>

            {/* DESTINATION INFO SECTION */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-blue-500/30 shadow-xl p-6">
              <h3 className="font-bold text-lg text-blue-400 mb-4 font-display flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Know Before You Go
              </h3>
              {deal.destinationInfo && (
                <div className="space-y-4">
                  <div>
                    <div className="text-xs font-bold text-blue-300 mb-1">VISA REQUIREMENTS</div>
                    <div className="text-sm text-slate-300">{deal.destinationInfo.visa}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-blue-300 mb-1">CURRENCY</div>
                    <div className="text-sm text-slate-300">{deal.destinationInfo.currency}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-blue-300 mb-1">BEST TIME TO VISIT</div>
                    <div className="text-sm text-slate-300">{deal.destinationInfo.bestTime}</div>
                  </div>
                  {deal.destinationInfo.topTips && (
                    <div>
                      <div className="text-xs font-bold text-blue-300 mb-2">INSIDER TIPS</div>
                      <ul className="space-y-2">
                        {deal.destinationInfo.topTips.map((tip, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm text-slate-300">
                            <span className="text-blue-400 mt-0.5">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* DEAL INTEL SECTION */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 shadow-xl p-6 sticky top-6">
              <h3 className="font-bold text-lg text-white mb-4 font-display">Deal Intel</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-emerald-400 mt-1" />
                  <div>
                    <div className="font-bold text-white">Destination</div>
                    <div className="text-sm text-slate-400">{deal.destination}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Plane className="w-5 h-5 text-emerald-400 mt-1" />
                  <div>
                    <div className="font-bold text-white">Airline</div>
                    <div className="text-sm text-slate-400">{deal.airline}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Radar className="w-5 h-5 text-emerald-400 mt-1 animate-pulse" />
                  <div>
                    <div className="font-bold text-white">Detection Time</div>
                    <div className="text-sm text-slate-400">{getRelativeTime(deal.detectedAt)}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-emerald-400 mt-1" />
                  <div>
                    <div className="font-bold text-white">Verified Dates</div>
                    <div className="text-sm text-slate-400">{allDateCombinations.length} dates checked and confirmed</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-700">
                <button className="w-full flex items-center justify-center space-x-2 bg-slate-700/50 text-slate-300 px-4 py-3 rounded-xl hover:bg-slate-600/50 transition-colors border border-slate-600">
                  <Share2 className="w-4 h-4" />
                  <span className="font-bold font-display">Share Deal</span>
                </button>
              </div>

              {/* Quick Tips - now inside Deal Intel card */}
              <div className="mt-6 pt-6 border-t border-slate-700">
                <h3 className="font-bold text-lg text-emerald-400 mb-4 font-display flex items-center">
                  <Info className="w-5 h-5 mr-2" />
                  Quick Tips
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-400">✓</span>
                    <span>Flexible dates? Try multiple date options to find the best price</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-400">✓</span>
                    <span>All trips are 7+ days - perfect for a real getaway</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-400">✓</span>
                    <span>Book within 24 hours for best seat selection</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-400">✓</span>
                    <span>Compare prices across multiple booking sites</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-400">✓</span>
                    <span>Get an eSIM before departure - scroll down for options!</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Don't forget to book your hotel - scroll down for options!</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');
        * { font-family: 'Inter', sans-serif; }
        .font-display { font-family: 'Rajdhani', sans-serif; }
        
        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-thumb-slate-700::-webkit-scrollbar-thumb {
          background-color: rgb(51 65 85);
          border-radius: 4px;
        }
        .scrollbar-track-slate-900::-webkit-scrollbar-track {
          background-color: rgb(15 23 42);
        }
      `}</style>
    </div>
  );
};

// ==================== MAIN APP ====================
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedDeal, setSelectedDeal] = useState(null);

  const handleDealClick = (deal) => {
    setSelectedDeal(deal);
    setCurrentPage('detail');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {currentPage === 'home' && <HomePage onDealClick={handleDealClick} />}
      {currentPage === 'detail' && selectedDeal && (
        <DealDetailPage deal={selectedDeal} onBack={handleBackToHome} />
      )}
    </div>
  );
}

export default App;