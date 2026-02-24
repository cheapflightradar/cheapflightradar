import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';
import { MapPin, Calendar, Plane, TrendingDown, Bell, Menu, X, ArrowLeft, Info, Share2, Heart, ExternalLink, Radar, SlidersHorizontal, Building, Package, ChevronLeft, ChevronRight } from 'lucide-react';
import activeDeals from './data/activeDeals';
import archivedDeals from './data/archivedDeals';

// ==================== MAILCHIMP SUBSCRIBE HOOK ====================
const useSubscribe = () => {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const subscribe = async (email) => {
    setStatus('loading');
    try {
      const res = await fetch('https://www.cheapflightradar.com/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      // Safely parse JSON — if response is not JSON, catch the parse error
      let data = {};
      try { data = await res.json(); } catch { data = {}; }

      if (res.ok && data.success) {
        setStatus('success');
        setMessage("You're in! Deals coming your way soon.");
      } else {
        setStatus('error');
        setMessage(data.error || `Error ${res.status}. Please try again.`);
      }
    } catch (err) {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  return { subscribe, status, message };
};

// ==================== DEALS DATA ====================
// Active deals live in src/data/activeDeals.js
// Archived/expired deals live in src/data/archivedDeals.js (newest first)
// allDeals is a combined read-only view used by DealDetailPage to look up any deal by slug
const allDeals = [...activeDeals, ...archivedDeals];

// ==================== STICKY EMAIL BAR COMPONENT ====================
const StickyEmailBar = ({ origin }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [email, setEmail] = useState('');
  const { subscribe, status, message } = useSubscribe();

  // Hide bar 3 seconds after successful subscription
  useEffect(() => {
    if (status === 'success') {
      const t = setTimeout(() => setIsVisible(false), 3000);
      return () => clearTimeout(t);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    subscribe(email);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 border-t-2 border-emerald-400 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-3">
          {status === 'success' ? (
            <div className="flex items-center justify-center space-x-2 text-white font-bold">
              <span className="text-2xl">✅</span>
              <span>Subscribed! You'll get the best deals first.</span>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              {/* Left side - Message */}
              <div className="flex items-center space-x-3">
                <Bell className="w-5 h-5 text-white animate-pulse flex-shrink-0" />
                <div>
                  <div className="text-white font-bold text-sm">
                    🔔 Get {origin} flight deals sent to your inbox
                  </div>
                  {status === 'error' ? (
                    <div className="text-red-200 text-xs">{message || 'Something went wrong. Try again.'}</div>
                  ) : (
                    <div className="text-emerald-100 text-xs hidden md:block">
                      ✓ Save $450-800 per ticket • ✓ Free forever
                    </div>
                  )}
                </div>
              </div>

              {/* Middle - Email form */}
              <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full md:w-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  disabled={status === 'loading'}
                  className="flex-1 md:w-64 px-4 py-2 rounded-lg bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white text-sm"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-2 bg-slate-900 text-emerald-400 rounded-lg font-bold hover:bg-slate-800 transition-all whitespace-nowrap text-sm disabled:opacity-60"
                >
                  {status === 'loading' ? '...' : 'Get Alerts'}
                </button>
              </form>

              {/* Right side - Close button */}
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-2 right-2 md:relative md:top-0 md:right-0 p-2 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ==================== EMAIL CAPTURE SECTION COMPONENT ====================
const EmailCaptureSection = ({ cityName }) => {
  const [email, setEmail] = useState('');
  const { subscribe, status } = useSubscribe();

  if (status === 'success') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-slate-800/40 border border-emerald-500/30 rounded-2xl p-6 text-center">
          <p className="text-emerald-400 font-bold">✅ You're on the radar! Deals from {cityName} coming your way.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6 sm:p-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-lg font-bold text-white mb-1">Get flight deals under $400 from {cityName}</p>
          <p className="text-sm text-slate-400 mb-5">No spam. Just cheap flights.</p>
          <form onSubmit={(e) => { e.preventDefault(); subscribe(email); }} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              disabled={status === 'loading'}
              className="flex-1 px-5 py-4 rounded-xl bg-slate-900 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-400 text-slate-900 rounded-xl font-bold hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 whitespace-nowrap font-display disabled:opacity-60"
            >
              {status === 'loading' ? 'Sending...' : 'Send Me Deals'}
            </button>
          </form>
          {status === 'error' && <p className="text-red-400 text-xs mt-2">Something went wrong. Please try again.</p>}
        </div>
      </div>
    </div>
  );
};

// ==================== HOMEPAGE COMPONENT ====================
const HomePage = () => {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState('austin');
  const [selectedFilter, setSelectedFilter] = useState('all');
  // eslint-disable-next-line no-unused-vars
  const [searchTerm, setSearchTerm] = useState(''); // temporarily disabled — re-enable with search UI when needed
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [ctaEmail, setCtaEmail] = useState('');
  const { subscribe: ctaSubscribe, status: ctaStatus } = useSubscribe();
  const [archivedPage, setArchivedPage] = useState(0); // 0-indexed page for expired deals

  // Reset archived page when city changes
  useEffect(() => { setArchivedPage(0); }, [selectedCity]);

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

  // Returns urgency badge label + color for a deal card based on savings %
  const getUrgencyBadge = (savings) => {
    if (savings > 40) return { text: `⚡ Major Price Drop · ${savings}% OFF`, className: 'bg-gradient-to-r from-red-500 to-orange-500 text-white' };
    if (savings > 25) return { text: `🔥 Limited Fare · ${savings}% OFF`, className: 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white' };
    return { text: `${savings}% OFF`, className: 'bg-gradient-to-r from-red-500 to-orange-500 text-white' };
  };

  const cities = [
    { id: 'austin', name: 'Austin', airport: 'AUS', emoji: '🌮' },
    { id: 'houston', name: 'Houston', airport: 'IAH', emoji: '🚀' },
    { id: 'dallas', name: 'Dallas', airport: 'DFW', emoji: '🏈' },
    { id: 'san-antonio', name: 'San Antonio', airport: 'SAT', emoji: '🌵' }
  ];


  const categories = [
    { id: 'all', label: 'All Deals', icon: Plane },
    { id: 'International', label: 'International', icon: MapPin },
    { id: 'Domestic', label: 'Domestic', icon: MapPin },
    { id: 'Beach', label: 'Beach', icon: Calendar }
  ];

  const filteredDeals = activeDeals.filter(deal => {
    const matchesCity = deal.city === selectedCity;
    const matchesFilter = selectedFilter === 'all' || deal.type === selectedFilter;
    // Search bar temporarily disabled — re-enable by uncommenting below and adding && matchesSearch to return
    // const matchesSearch = deal.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //                       deal.route.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCity && matchesFilter;
  });

  // Archived deals for current city, sorted newest first (archivedDeals.js is already newest-first)
  const ARCHIVED_PER_PAGE = 6;
  const cityArchivedDeals = archivedDeals.filter(deal => deal.city === selectedCity);
  const archivedTotalPages = Math.ceil(cityArchivedDeals.length / ARCHIVED_PER_PAGE);
  const pagedArchivedDeals = cityArchivedDeals.slice(
    archivedPage * ARCHIVED_PER_PAGE,
    archivedPage * ARCHIVED_PER_PAGE + ARCHIVED_PER_PAGE
  );

  const currentCity = cities.find(c => c.id === selectedCity);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled || showMobileMenu ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-emerald-500/10' : 'bg-transparent'
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
              <button
                onClick={() => document.getElementById('get-alerts').scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-emerald-500 to-cyan-400 text-slate-900 px-6 py-2.5 rounded-full font-bold hover:shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
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
            <div className="md:hidden py-4 border-t border-slate-700 bg-slate-900 shadow-xl shadow-black/50 rounded-b-2xl px-4">
              <div className="flex flex-col space-y-3">
                <a href="#deals" className="text-slate-300 hover:text-emerald-400 transition-colors font-medium py-2">Detected Deals</a>
                <a href="#how" className="text-slate-300 hover:text-emerald-400 transition-colors font-medium py-2">How It Works</a>
                <button
                  onClick={() => { setShowMobileMenu(false); document.getElementById('get-alerts').scrollIntoView({ behavior: 'smooth' }); }}
                  className="bg-gradient-to-r from-emerald-500 to-cyan-400 text-slate-900 px-6 py-2.5 rounded-full font-bold flex items-center justify-center space-x-2"
                >
                  <Bell className="w-4 h-4" />
                  <span>Get Alerts</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ==================== COMPACT ABOVE-FOLD HEADER ==================== */}
      <div className="pt-24 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Scanning badge + headline */}
          <div className="mb-6 text-center">
            <div className="inline-flex items-center space-x-2 mb-3 px-4 py-1.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 rounded-full text-xs font-bold">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></div>
              <span>SCANNING ACTIVE · {filteredDeals.length} DEALS FOUND</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display leading-tight">
              🔥 Today's Cheapest Flights From{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-300">
                {currentCity.name}
              </span>
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Updated continuously · Prices may change anytime · Book fast
            </p>
          </div>
          {/* City selector */}
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {cities.map((city) => (
              <button
                key={city.id}
                onClick={() => setSelectedCity(city.id)}
                className={`px-5 py-2.5 rounded-full font-bold transition-all duration-300 flex items-center space-x-2 font-display text-sm ${
                  selectedCity === city.id
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-400 text-slate-900 shadow-lg shadow-emerald-500/40'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700'
                }`}
              >
                <span>{city.emoji}</span>
                <span>{city.name}</span>
                <span className="text-xs opacity-75">({city.airport})</span>
              </button>
            ))}
          </div>
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedFilter(category.id)}
                  className={`px-5 py-2 rounded-full font-bold transition-all duration-300 flex items-center space-x-2 font-display text-sm ${
                    selectedFilter === category.id
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-400 text-slate-900 shadow-lg shadow-emerald-500/40'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div id="deals" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
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
            {filteredDeals.map((deal) => {
              const urgencyBadge = getUrgencyBadge(deal.savings);
              return (
              <div
                key={deal.id}
                onClick={() => navigate('/deals/' + deal.slug)}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={deal.image}
                    alt={deal.destination}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg ${urgencyBadge.className}`}>
                    {urgencyBadge.text}
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

                  <button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-400 text-slate-900 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105 transition-all duration-300">
                    Book Before It Changes →
                  </button>
                  <p className="text-xs text-slate-400 opacity-80 text-center mt-2">
                    Price verified recently · May increase anytime
                  </p>
                </div>
              </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ==================== LEGACY HERO — ABOVE EMAIL CAPTURE ==================== */}
      <div className="relative pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        {/* Radar rings — desktop only, hidden on mobile for performance */}
        <div className="absolute inset-0 opacity-10 hidden md:block" aria-hidden="true">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at center, transparent 0%, transparent 20%, rgba(16, 185, 129, 0.1) 20%, rgba(16, 185, 129, 0.1) 21%, transparent 21%),
                             radial-gradient(circle at center, transparent 0%, transparent 40%, rgba(16, 185, 129, 0.1) 40%, rgba(16, 185, 129, 0.1) 41%, transparent 41%),
                             radial-gradient(circle at center, transparent 0%, transparent 60%, rgba(16, 185, 129, 0.1) 60%, rgba(16, 185, 129, 0.1) 61%, transparent 61%),
                             radial-gradient(circle at center, transparent 0%, transparent 80%, rgba(16, 185, 129, 0.1) 80%, rgba(16, 185, 129, 0.1) 81%, transparent 81%)`,
            backgroundSize: '100% 100%'
          }}></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-display">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-300">
              Your Flight Deal
            </span>
            <br />
            <span className="text-white">Detection System</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We scan the skies 24/7, detecting price drops and alerting you the moment a deal appears. From Texas to anywhere, for a fraction of the cost.
          </p>
        </div>
      </div>

      {/* ==================== EMAIL CAPTURE — AFTER HERO ==================== */}
      <EmailCaptureSection cityName={currentCity.name} />

      {cityArchivedDeals.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Calendar className="w-6 h-6 text-slate-500" />
              <h3 className="text-4xl font-bold text-slate-400 font-display">
                Past Deals from {currentCity.name}
              </h3>
            </div>
            <p className="text-lg text-slate-500">
              🕒 See what you missed — {cityArchivedDeals.length} expired {cityArchivedDeals.length === 1 ? 'deal' : 'deals'}
            </p>
            <p className="text-sm text-slate-600 mt-2">
              💡 Click to search these dates - prices may still be good!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pagedArchivedDeals.map((deal) => (
              <div
                key={deal.id}
                onClick={() => navigate('/deals/' + deal.slug)}
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

          {/* Pagination controls — only shown when there are multiple pages */}
          {archivedTotalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                onClick={() => setArchivedPage(p => Math.max(0, p - 1))}
                disabled={archivedPage === 0}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 font-bold hover:border-slate-500 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              <span className="text-slate-500 text-sm font-bold">
                Page {archivedPage + 1} of {archivedTotalPages}
              </span>

              <button
                onClick={() => setArchivedPage(p => Math.min(archivedTotalPages - 1, p + 1))}
                disabled={archivedPage >= archivedTotalPages - 1}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 font-bold hover:border-slate-500 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          <div className="mt-10 text-center">
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

      <div id="get-alerts" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
          {ctaStatus === 'success' ? (
            <div className="text-white text-xl font-bold py-4">✅ You're on the radar! Deals incoming.</div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); ctaSubscribe(ctaEmail); }}
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            >
              <input
                type="email"
                value={ctaEmail}
                onChange={(e) => setCtaEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={ctaStatus === 'loading'}
                className="flex-1 px-6 py-4 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all font-bold font-display"
              />
              <button
                type="submit"
                disabled={ctaStatus === 'loading'}
                className="bg-slate-900 text-emerald-400 px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transform hover:scale-105 transition-all duration-300 shadow-xl whitespace-nowrap font-display disabled:opacity-60"
              >
                {ctaStatus === 'loading' ? 'Joining...' : 'Start Scanning →'}
              </button>
            </form>
          )}
          {ctaStatus === 'error' && (
            <p className="text-red-300 text-sm mt-2">Something went wrong. Please try again.</p>
          )}
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

      <StickyEmailBar origin={currentCity.airport} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');
        * { font-family: 'Inter', sans-serif; }
        .font-display { font-family: 'Rajdhani', sans-serif; }

        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

// ==================== DEAL DETAIL PAGE ====================
const DealDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const deal = allDeals.find(d => d.slug === slug);

  const [bookmarked, setBookmarked] = useState(false);
  const [lengthFilter, setLengthFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [bottomEmail, setBottomEmail] = useState('');
  const { subscribe: bottomSubscribe, status: bottomStatus } = useSubscribe();
  const [showFilters, setShowFilters] = useState(false);

  if (!deal) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-white mb-4">Deal not found.</p>
          <button onClick={() => navigate('/')} className="text-emerald-400 hover:underline">← Back to Radar</button>
        </div>
      </div>
    );
  }
  const KIWI_AFFILID = 'travelpayoutsdeeplink_cheapflightradar.com_1903a8e6c5814ff2bbad35a7c-703930';

  const hotelLinks = [
    { name: 'Expedia Hotels', url: 'https://www.kqzyfj.com/click-101689576-15488923' },
  ];

  const esimLinks = [
    { name: 'Saily', url: 'https://saily.tpx.gr/yOJg905y' },
    { name: 'Airalo', url: 'https://airalo.tpx.gr/OfM2Xs4n' },
    { name: 'Yesim', url: 'https://yesim.tpx.gr/nyV5W6J0' },
  ];

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

  const buildFlightUrl = (date, deal) => {
    const [origin, destination] = deal.route.split(' → ');

    const parseDate = (dateStr) => {
      const months = { Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06', Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12' };
      const [month, day] = dateStr.trim().split(' ');
      const paddedDay = day.padStart(2, '0');
      return `2026-${months[month]}-${paddedDay}`;
    };

    const departDate = parseDate(date.outbound);
    const returnDate = parseDate(date.return);

    return `https://www.kiwi.com/deep?affilid=${KIWI_AFFILID}&from=${origin}&to=${destination}&departure=${departDate}&return=${returnDate}&adults=1&cabinClass=economy`;
  };

  const buildHotelUrl = (platform, date, deal) => {
    const destination = deal.destination.split(',')[0];

    const parseDate = (dateStr) => {
      const months = { Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06', Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12' };
      const [month, day] = dateStr.split(' ');
      return `2026-${months[month]}-${day.padStart(2, '0')}`;
    };

    const checkIn = parseDate(date.outbound);
    const checkOut = parseDate(date.return);
    const expediaDeepLink = `https://www.expedia.com/Hotel-Search?destination=${encodeURIComponent(destination)}&startDate=${checkIn}&endDate=${checkOut}`;
    return `https://www.kqzyfj.com/click-101689576-15488923?url=${encodeURIComponent(expediaDeepLink)}`;
  };

  const generateDateCombinations = () => {
    const basePrice = deal.price;
    const verifiedDates = deal.verifiedDates || [];
    
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

  const origin = deal.route.split(' → ')[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      {/* STICKY EMAIL BAR */}
      <StickyEmailBar origin={origin} />

      <div className="bg-slate-900 border-b border-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/')}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            
            {/* PRICE SECTION WITH URGENCY & WHY THIS IS A DEAL */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 shadow-xl p-8">
              {/* Price + heart bookmark row */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="mb-2">
                    <span className="text-base font-bold text-slate-400 line-through decoration-red-400 decoration-2">Was ${deal.originalPrice}</span>
                  </div>
                  <div className="flex items-baseline space-x-3 mb-2">
                    <span className="text-6xl font-bold text-emerald-400 font-display">${deal.price}</span>
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full text-lg font-bold animate-pulse">
                      SAVE {deal.savings}%
                    </span>
                  </div>
                  <p className="text-slate-300 font-bold text-lg">Round-trip price per person</p>
                </div>
                <button onClick={() => setBookmarked(!bookmarked)} className="p-3 rounded-full hover:bg-slate-700 transition-colors flex-shrink-0">
                  <Heart className={`w-6 h-6 ${bookmarked ? 'fill-red-500 text-red-500' : 'text-slate-400'}`} />
                </button>
              </div>

              {/* Deal Alert — full width */}
              <div className="flex items-center space-x-2 bg-orange-500/20 border border-orange-500/50 rounded-lg px-4 py-3 mb-6">
                <svg className="w-5 h-5 animate-pulse text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div className="flex-1">
                  <div className="font-bold text-orange-300 text-sm">⚡ Deal Alert</div>
                  <div className="text-orange-200 text-xs">Typically lasts 24-72 hours • Book quickly!</div>
                </div>
              </div>

              {/* WHY THIS IS A DEAL */}
              <div className="bg-blue-500/10 border-2 border-blue-500/50 rounded-xl p-6 mb-6">
                {/* Header — icon + title centered */}
                <div className="flex items-center justify-center space-x-2 mb-5">
                  <TrendingDown className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <h3 className="font-bold text-blue-300 text-lg">📊 Why This Is a Deal</h3>
                </div>
                {/* Price comparison — constrained width so it looks tidy on desktop */}
                <div className="max-w-sm mx-auto space-y-2 text-sm text-blue-200">
                  <div className="flex justify-between items-center">
                    <span>Normal {deal.route.split(' → ')[0]} → {deal.destination.split(',')[0]}:</span>
                    <span className="font-bold">${deal.originalPrice}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Historical Average:</span>
                    <span className="font-bold">${Math.floor(deal.originalPrice * 0.85)}</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-blue-500/30 pt-2">
                    <span className="text-emerald-300 font-bold">Today's Price:</span>
                    <span className="text-emerald-300 font-bold text-lg">${deal.price}</span>
                  </div>
                  <div className="bg-emerald-500/20 border border-emerald-500/50 rounded-lg px-3 py-2 mt-3">
                    <div className="text-emerald-200 font-bold text-center">
                      ✨ {deal.savings}% below normal price
                    </div>
                    <div className="text-emerald-300 text-xs text-center mt-1">
                      This is in the top 5% of deals we've seen
                    </div>
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

            {/* DATE SELECTION - REMOVED MIDDLE EMAIL CAPTURE */}
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
                  const dynamicUrl = buildFlightUrl(date, deal);
                  
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

            {/* HOTELS SECTION WITH DATES */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 shadow-xl p-8">
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-400/20 border border-cyan-500/50 rounded-xl flex items-center justify-center">
                    <Building className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white font-display">
                      🏨 Hotels in {deal.destination.split(',')[0]}
                    </h2>
                    <p className="text-slate-300">Compare prices and find the best deals</p>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-cyan-200">
                    <p className="font-bold mb-1">💰 Save More with a Package</p>
                    <p>Book flights + hotels together and save 15-25%. Many hotels offer free cancellation!</p>
                  </div>
                </div>
              </div>

              {/* HOTEL DATES - MATCHING FLIGHT DATES */}
              <div className="mb-6">
                <h3 className="text-white font-bold mb-3">Hotels for your travel dates:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
                  {deal.verifiedDates.slice(0, 8).map((date, idx) => {
                    const hotelPlatform = hotelLinks[idx % hotelLinks.length];
                    const hotelUrl = buildHotelUrl(hotelPlatform, date, deal);
                    
                    return (
                      <a
                        key={idx}
                        href={hotelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 border border-cyan-500/30 transition-all group"
                      >
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-cyan-400" />
                          <div>
                            <div className="text-white text-sm font-bold">
                              {date.outbound} → {date.return}
                            </div>
                            <div className="text-xs text-slate-400">
                              {date.length} nights • {hotelPlatform.name}
                            </div>
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* GENERAL HOTEL LINKS */}
              {/* Commented out - only Expedia affiliate for now, may re-enable later
              <div className="pt-6 border-t border-slate-700">
                <h3 className="text-white font-bold mb-3">Or browse all hotels:</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {hotelLinks.map((hotel, index) => (
                    <a
                      key={index}
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 px-4 py-3 rounded-xl font-bold transition-all transform hover:scale-105 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 text-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30 hover:shadow-lg hover:shadow-cyan-500/20 font-display"
                    >
                      <Building className="w-4 h-4" />
                      <span>{hotel.name}</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  ))}
                </div>
              </div>
              */}

              <div className="mt-6 text-center">
                <p className="text-xs text-slate-400">
                  🎯 Pro tip: Book hotels with free cancellation for maximum flexibility
                </p>
              </div>
            </div>

            {/* PACKAGE DEALS SECTION */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl border-2 border-purple-500/50 shadow-xl p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/30 rounded-full mb-4">
                  <Package className="w-8 h-8 text-purple-300" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2 font-display">
                  🎯 Flight + Hotel Packages
                </h2>
                <p className="text-purple-200 text-lg mb-2">
                  Save an extra 15-25% by bundling
                </p>
                <div className="inline-block bg-yellow-500/20 border border-yellow-500/50 rounded-lg px-4 py-2">
                  <span className="text-yellow-300 font-bold">💰 Highest Savings Here!</span>
                </div>
              </div>

              <div className="flex justify-center">
                <a
                  href="https://www.dpbolvw.net/click-101689576-13364951"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700/50 hover:bg-slate-600/50 border border-purple-500/50 rounded-xl p-6 transition-all transform hover:scale-105 text-center max-w-sm w-full"
                >
                  <div className="font-bold text-white text-lg mb-2">Expedia Packages</div>
                  <div className="text-purple-300 text-sm mb-3">Flight + Hotel bundles</div>
                  <div className="bg-purple-500/20 text-purple-200 text-xs font-bold py-2 rounded-lg">
                    Up to 25% off
                  </div>
                </a>
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-slate-400">
                  ✨ Packages often include perks like free breakfast, airport transfers, or upgrades
                </p>
              </div>
            </div>

            {/* ESIM SECTION */}
            <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl border-2 border-teal-500/50 shadow-xl p-8">
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-500/20 to-cyan-400/20 border border-teal-500/50 rounded-xl flex items-center justify-center">
                    <Radar className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white font-display">
                      Stay Connected with eSIM
                    </h2>
                    <p className="text-slate-300">Data plans for {deal.destination.split(',')[0]}</p>
                  </div>
                </div>
              </div>

              <div className="bg-teal-500/10 border border-teal-500/30 rounded-xl p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-teal-200">
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
                    className="flex items-center justify-center space-x-2 px-4 py-3 rounded-xl font-bold transition-all transform hover:scale-105 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/50 text-teal-300 hover:from-teal-500/30 hover:to-cyan-500/30 hover:shadow-lg hover:shadow-teal-500/20 font-display"
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

            {/* BOTTOM EMAIL CAPTURE - KEPT */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl border border-emerald-500/50 shadow-xl p-12 text-center">
              <h3 className="text-4xl font-bold text-white mb-3 font-display">
                Found a deal you like?
              </h3>
              <p className="text-xl text-slate-300 mb-8">
                Get similar {deal.route.split(' → ')[0]} deals delivered to your inbox
              </p>
              
              {bottomStatus === 'success' ? (
                <div className="text-emerald-400 text-xl font-bold py-4">✅ You're in! Deals incoming.</div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); bottomSubscribe(bottomEmail); }}
                  className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-4"
                >
                  <input
                    type="email"
                    value={bottomEmail}
                    onChange={(e) => setBottomEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    disabled={bottomStatus === 'loading'}
                    className="flex-1 px-6 py-4 rounded-xl bg-slate-800 border-2 border-slate-600 text-white text-lg placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                  />
                  <button
                    type="submit"
                    disabled={bottomStatus === 'loading'}
                    className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg disabled:opacity-60"
                  >
                    {bottomStatus === 'loading' ? 'Joining...' : 'Get Deal Alerts →'}
                  </button>
                </form>
              )}
              {bottomStatus === 'error' && (
                <p className="text-red-400 text-sm mb-4">Something went wrong. Please try again.</p>
              )}
              <div className="flex items-center justify-center space-x-6 text-sm text-slate-400">
                <span>✓ Free forever</span>
                <span>✓ Unsubscribe anytime</span>
                <span>✓ 2-3 deals per week</span>
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
                <button
                  onClick={() => navigator.clipboard.writeText(window.location.href)}
                  className="w-full flex items-center justify-center space-x-2 bg-slate-700/50 text-slate-300 px-4 py-3 rounded-xl hover:bg-slate-600/50 transition-colors border border-slate-600"
                >
                  <Share2 className="w-4 h-4" />
                  <span className="font-bold font-display">Share Deal</span>
                </button>
              </div>

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
                    <span>Get an eSIM before departure - scroll up for options!</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Hotels + Packages save 15-25% - scroll up to book!</span>
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
        
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
        
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

// ==================== SCROLL TO TOP ====================
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// ==================== MAIN APP ====================
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/deals/:slug" element={<DealDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;