import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import {
  Radar,
  Menu,
  X,
  Clock,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  MapPin,
  TrendingDown,
  ChevronRight,
  Mail,
  Wifi,
  DollarSign,
  Calendar,
  PlaneTakeoff,
} from 'lucide-react';
import blogPosts from './data/blogPosts';

// ── New section page imports ──────────────────────────────────
import EsimPage from './pages/EsimPage';
import DestinationPage from './pages/DestinationPage';
import RoutePage from './pages/RoutePage';
import CostPage from './pages/CostPage';
import BestTimePage from './pages/BestTimePage';
import AirportPage from './pages/AirportPage';
import {
  EsimIndexPage,
  DestinationIndexPage,
  FlightsIndexPage,
  CostsIndexPage,
  BestTimeIndexPage,
  AirportsIndexPage,
} from './pages/SectionIndexes';

// ==================== SUBSCRIBE HOOK ====================
const useSubscribe = () => {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const subscribe = async (email) => {
    setStatus('loading');
    try {
      const res = await fetch('https://www.cheapflightradar.com/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      let data = {};
      try { data = await res.json(); } catch {}
      if (res.ok && data.success) {
        setStatus('success');
        setMessage("You're in! Travel tips coming your way.");
      } else {
        setStatus('error');
        setMessage(data.error || 'Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  return { subscribe, status, message };
};

// ==================== HELPERS ====================
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

// ==================== UI COMPONENTS ====================
const CategoryBadge = ({ category, categoryLabel }) => {
  const colors = {
    'budget-tips': 'text-emerald-700',
    'destination-guide': 'text-blue-600',
  };
  return (
    <span className={`text-xs font-semibold uppercase tracking-widest ${colors[category] || 'text-gray-500'}`}>
      {categoryLabel}
    </span>
  );
};

const BlogCard = ({ post }) => (
  <Link
    to={`/blog/${post.slug}`}
    className="group block"
  >
    <div className="aspect-[16/9] overflow-hidden rounded-xl bg-gray-100 mb-4">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <CategoryBadge category={post.category} categoryLabel={post.categoryLabel} />
    <h3 className="mt-2 text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors leading-snug">
      {post.title}
    </h3>
    <p className="mt-2 text-gray-500 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
    <div className="mt-3 flex items-center gap-4 text-xs text-gray-400">
      <span className="flex items-center gap-1">
        <Clock size={11} />
        {post.readTime}
      </span>
      <span>{formatDate(post.publishedAt)}</span>
    </div>
  </Link>
);

// ==================== NEWSLETTER ====================
const NewsletterSection = ({ variant = 'dark' }) => {
  const [email, setEmail] = useState('');
  const { subscribe, status, message } = useSubscribe();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    await subscribe(email);
  };

  const isLight = variant === 'light';

  return (
    <div
      className={`rounded-2xl p-8 ${
        isLight
          ? 'bg-emerald-50 border border-emerald-100'
          : 'bg-gray-900'
      }`}
    >
      <div className="flex items-center gap-2 mb-2">
        <Mail
          size={18}
          className={isLight ? 'text-emerald-600' : 'text-emerald-400'}
        />
        <span
          className={`text-sm font-semibold ${
            isLight ? 'text-emerald-700' : 'text-emerald-400'
          }`}
        >
          Travel Tips Newsletter
        </span>
      </div>
      <h3
        className={`text-xl font-bold mb-2 ${
          isLight ? 'text-gray-900' : 'text-white'
        }`}
      >
        Get weekly travel tips in your inbox
      </h3>
      <p
        className={`text-sm mb-5 leading-relaxed ${
          isLight ? 'text-gray-600' : 'text-gray-300'
        }`}
      >
        Budget hacks, destination guides, and flight deal alerts. No spam, unsubscribe anytime.
      </p>

      {status === 'success' ? (
        <div className="flex items-center gap-2 text-emerald-500 font-semibold">
          <span>✅</span>
          <span>{message}</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className={`flex-1 rounded-lg px-4 py-2.5 text-sm border focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
              isLight
                ? 'border-gray-200 bg-white text-gray-900'
                : 'border-gray-700 bg-gray-800 text-white placeholder-gray-400'
            }`}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors disabled:opacity-60 whitespace-nowrap"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe Free'}
          </button>
        </form>
      )}
      {status === 'error' && (
        <p className="mt-2 text-red-400 text-sm">{message}</p>
      )}
    </div>
  );
};

// ==================== STICKY BAR ====================
// eslint-disable-next-line no-unused-vars
const StickyEmailBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [email, setEmail] = useState('');
  const { subscribe, status, message } = useSubscribe();

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
      <div className="bg-gray-900 border-t border-gray-700 shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 py-3">
          {status === 'success' ? (
            <div className="flex items-center justify-center gap-2 text-white font-semibold">
              <span>✅</span>
              <span>{message}</span>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-white text-sm">
                <span className="font-semibold">Weekly travel tips</span>
                <span className="text-gray-400 ml-2 hidden sm:inline">
                  — budget hacks &amp; destination guides for curious travelers
                </span>
              </div>
              <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 sm:w-48 bg-gray-800 border border-gray-600 text-white placeholder-gray-400 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors disabled:opacity-60 whitespace-nowrap"
                >
                  {status === 'loading' ? '...' : 'Subscribe'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsVisible(false)}
                  className="text-gray-400 hover:text-white p-1.5 flex-shrink-0"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </form>
              {status === 'error' && (
                <p className="text-red-400 text-xs">{message}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ==================== CONTENT RENDERER ====================
const ContentRenderer = ({ content }) => (
  <div>
    {content.map((block, i) => {
      switch (block.type) {
        case 'lead':
          return (
            <p key={i} className="text-xl text-gray-500 leading-relaxed mb-8 font-light">
              {block.text}
            </p>
          );
        case 'h2':
          return (
            <h2
              key={i}
              className="text-2xl font-bold text-gray-900 mt-12 mb-4 pb-3 border-b border-gray-100"
            >
              {block.text}
            </h2>
          );
        case 'h3':
          return (
            <h3 key={i} className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              {block.text}
            </h3>
          );
        case 'p':
          return (
            <p key={i} className="text-gray-700 leading-relaxed mb-5 text-[1.05rem]">
              {block.text}
            </p>
          );
        case 'callout':
          return (
            <div
              key={i}
              className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-5 my-6"
            >
              {block.title && (
                <div className="font-bold text-emerald-800 mb-1 text-sm uppercase tracking-wide">
                  {block.title}
                </div>
              )}
              <p className="text-emerald-900 leading-relaxed">{block.text}</p>
            </div>
          );
        case 'ul':
          return (
            <ul key={i} className="space-y-3 mb-6">
              {block.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-gray-700 text-[1.05rem]">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          );
        case 'ol':
          return (
            <ol key={i} className="space-y-3 mb-6">
              {block.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-gray-700 text-[1.05rem]">
                  <span className="font-bold text-emerald-600 text-sm min-w-[1.5rem] mt-0.5">
                    {j + 1}.
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ol>
          );
        default:
          return null;
      }
    })}
  </div>
);

// ==================== HEADER ====================
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/flights', label: 'Flights' },
    { to: '/destinations', label: 'Destinations' },
    { to: '/esim', label: 'eSIM' },
    { to: '/trip-costs', label: 'Trip Costs' },
    { to: '/airports', label: 'Airports' },
    { to: '/blog', label: 'Blog' },
    { to: '/about', label: 'About' },
  ];

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center shadow-sm">
              <Radar size={17} className="text-white" />
            </div>
            <div className="font-bold text-gray-900 text-sm">
              CheapFlightRadar
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'text-emerald-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-gray-500 hover:text-gray-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 space-y-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block py-2.5 px-1 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.to)
                    ? 'text-emerald-600'
                    : 'text-gray-700 hover:text-emerald-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

// ==================== FOOTER ====================
const Footer = () => (
  <footer className="bg-gray-900 text-gray-400">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 bg-emerald-600 rounded-lg flex items-center justify-center">
              <Radar size={14} className="text-white" />
            </div>
            <span className="font-bold text-white text-sm">CheapFlightRadar</span>
          </div>
          <p className="text-sm font-medium text-gray-300">Travel Smart. Spend Less.</p>
          <p className="text-xs mt-2 leading-relaxed">
            Helping travelers explore the world — budget tips, destination guides, and flight
            deal alerts.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/flights" className="hover:text-white transition-colors">Flight Routes</Link></li>
            <li><Link to="/destinations" className="hover:text-white transition-colors">Destination Guides</Link></li>
            <li><Link to="/esim" className="hover:text-white transition-colors">eSIM Guides</Link></li>
            <li><Link to="/trip-costs" className="hover:text-white transition-colors">Trip Cost Calculator</Link></li>
            <li><Link to="/best-time" className="hover:text-white transition-colors">Best Time to Visit</Link></li>
            <li><Link to="/airports" className="hover:text-white transition-colors">Airport Guides</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Popular Airports</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: 'Dallas / Fort Worth (DFW)', slug: 'dfw' },
              { label: 'Houston Intercontinental (IAH)', slug: 'iah' },
              { label: 'Houston Hobby (HOU)', slug: 'hou' },
              { label: 'Austin (AUS)', slug: 'aus' },
              { label: 'San Antonio (SAT)', slug: 'sat' },
            ].map((a) => (
              <li key={a.label}>
                <Link to={`/airports/${a.slug}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <MapPin size={11} className="text-emerald-500 flex-shrink-0" />
                  {a.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-10 pt-6 text-xs text-center">
        © {new Date().getFullYear()} CheapFlightRadar. All rights reserved. Travel prices and
        availability are subject to change.
      </div>
    </div>
  </footer>
);

// ==================== HOME PAGE ====================
const HomePage = () => {
  const navigate = useNavigate();
  const featuredPosts = blogPosts.filter((p) => p.featured).slice(0, 3);
  const [featuredPost, ...secondaryPosts] = featuredPosts;

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2070&auto=format&fit=crop"
            alt="Airport terminal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/85 via-gray-900/65 to-gray-900/20" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-44">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-5">Travel Blog</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight">
              Travel Smart.
              <br />
              Spend Less.
            </h1>
            <p className="mt-5 text-lg text-gray-300 leading-relaxed max-w-sm">
              Budget travel tips, destination guides, and flight deal alerts — for curious travelers, wherever you're headed.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <button
                onClick={() => navigate('/blog')}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors flex items-center gap-2 shadow-lg"
              >
                Browse All Posts <ArrowRight size={15} />
              </button>
              <button
                onClick={() => navigate('/blog?category=destination-guide')}
                className="text-white/80 hover:text-white font-medium text-sm flex items-center gap-1.5 transition-colors"
              >
                Destination Guides <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts — editorial layout */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest Posts</h2>
          <Link
            to="/blog"
            className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center gap-1 transition-colors"
          >
            View all <ChevronRight size={15} />
          </Link>
        </div>

        {/* Hero post — large horizontal */}
        {featuredPost && (
          <Link
            to={`/blog/${featuredPost.slug}`}
            className="group block mb-10"
          >
            <div className="md:grid md:grid-cols-5 md:gap-8 md:items-center">
              <div className="md:col-span-3 aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 mb-5 md:mb-0">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="md:col-span-2">
                <CategoryBadge category={featuredPost.category} categoryLabel={featuredPost.categoryLabel} />
                <h3 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors leading-snug">
                  {featuredPost.title}
                </h3>
                <p className="mt-3 text-gray-500 leading-relaxed line-clamp-3">{featuredPost.excerpt}</p>
                <div className="mt-5 flex items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1.5"><Clock size={11} />{featuredPost.readTime}</span>
                  <span>{formatDate(featuredPost.publishedAt)}</span>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Secondary posts — 2-col grid */}
        {secondaryPosts.length > 0 && (
          <>
            <div className="border-t border-gray-100 mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {secondaryPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </>
        )}
      </section>

      {/* Explore sections — clean link list, no icon boxes */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Explore the guides</h2>
          <p className="text-gray-400 text-sm mb-6">Destinations, tools, and tips — all in one place</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
            {[
              { to: '/flights', icon: PlaneTakeoff, label: 'Flight Routes', desc: 'Price data and booking tips for popular international routes.' },
              { to: '/destinations', icon: MapPin, label: 'Destination Guides', desc: 'In-depth guides with real costs, neighborhoods, and itineraries.' },
              { to: '/esim', icon: Wifi, label: 'eSIM Guides', desc: 'Skip roaming fees. Get a local data plan from $4 before you board.' },
              { to: '/trip-costs', icon: DollarSign, label: 'Trip Cost Calculator', desc: 'Honest daily budgets: backpacker, mid-range, and comfortable travel.' },
              { to: '/best-time', icon: Calendar, label: 'Best Time to Visit', desc: 'Month-by-month flight prices, weather, and crowd data.' },
              { to: '/blog?category=budget-tips', icon: TrendingDown, label: 'Budget Tips', desc: 'Flight strategies, credit card hacks, and timing tactics.' },
            ].map(({ to, icon: Icon, label, desc }) => (
              <Link
                key={to}
                to={to}
                className="group flex items-start gap-4 py-4 border-b border-gray-200 transition-colors"
              >
                <Icon size={15} className="text-gray-400 mt-0.5 flex-shrink-0 group-hover:text-emerald-600 transition-colors" />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 text-sm group-hover:text-emerald-600 transition-colors">{label}</div>
                  <div className="text-gray-400 text-xs mt-0.5 leading-relaxed">{desc}</div>
                </div>
                <ArrowRight size={13} className="text-gray-300 mt-0.5 flex-shrink-0 group-hover:text-emerald-500 group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <NewsletterSection />
      </section>
    </main>
  );
};

// ==================== BLOG LIST PAGE ====================
const BlogListPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('category');
    setActiveCategory(cat || 'all');
  }, [location.search]);

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'budget-tips', label: 'Budget Tips' },
    { id: 'destination-guide', label: 'Destination Guides' },
  ];

  const handleCategoryClick = (catId) => {
    if (catId === 'all') navigate('/blog');
    else navigate(`/blog?category=${catId}`);
  };

  const filteredPosts =
    activeCategory === 'all'
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
      {/* Page header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">All Posts</h1>
        <p className="mt-2 text-gray-500">
          Travel tips, destination guides, and stories for curious travelers
        </p>
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryClick(cat.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat.id
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Posts grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-300">
          <BookOpen size={44} className="mx-auto mb-4 opacity-40" />
          <p className="text-gray-500">No posts in this category yet. Check back soon!</p>
        </div>
      )}
    </main>
  );
};

// ==================== BLOG POST PAGE ====================
const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
        <button
          onClick={() => navigate('/blog')}
          className="text-emerald-600 hover:underline"
        >
          ← Back to blog
        </button>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <main className="pb-24">
      {/* Article header */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-sm text-gray-400 mb-6 flex-wrap">
            <Link to="/" className="hover:text-gray-600 transition-colors">
              Home
            </Link>
            <ChevronRight size={13} />
            <Link to="/blog" className="hover:text-gray-600 transition-colors">
              Blog
            </Link>
            <ChevronRight size={13} />
            <span className="text-gray-500">{post.categoryLabel}</span>
          </div>

          <CategoryBadge
            category={post.category}
            categoryLabel={post.categoryLabel}
            size="md"
          />
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            {post.title}
          </h1>
          <p className="mt-3 text-lg text-gray-500 leading-relaxed">{post.excerpt}</p>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {post.readTime}
            </span>
            <span>{formatDate(post.publishedAt)}</span>
            <div className="flex gap-2 flex-wrap">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-500 px-2.5 py-0.5 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="aspect-[21/9] overflow-hidden rounded-2xl mt-8 shadow-lg bg-gray-100">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ContentRenderer content={post.content} />

        {/* Newsletter CTA */}
        <div className="mt-16">
          <NewsletterSection variant="light" />
        </div>

        {/* Back link */}
        <div className="mt-10">
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-600 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to all posts
          </button>
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-12 mt-4">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              More {post.categoryLabel}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((p) => (
                <BlogCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

// ==================== ABOUT PAGE ====================
const AboutPage = () => (
  <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24">
    <h1 className="text-3xl font-bold text-gray-900 mb-8">About CheapFlightRadar</h1>

    <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
      <p>
        CheapFlightRadar was built by a Texas traveler who was tired of overpaying for flights.
        We scan hundreds of routes out of Austin, Houston, Dallas, and San Antonio around the
        clock, and publish deals the moment we find them.
      </p>
      <p>
        Right now, global airfares are at historically high levels — fuel costs, geopolitical
        disruption, and sustained demand have pushed prices up across most major routes. Rather
        than go quiet and wait it out, we're pivoting to content that actually helps Texas
        travelers get the most out of every trip.
      </p>
      <p>
        While the deals come back — and they will — we're publishing the stuff that matters:
        budget strategies, credit card guides, destination breakdowns, and honest travel tips from
        real experience.
      </p>
      <p>
        When prices drop, CheapFlightRadar will be back in full deal-hunting mode. Until then,
        we'll be here helping you plan smarter.
      </p>
    </div>

    <div className="mt-12 p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
      <h3 className="font-bold text-gray-900 mb-1">Texas Airports We Cover</h3>
      <p className="text-gray-500 text-sm mb-5">
        We track deals from all four major Texas cities.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          'Austin (AUS)',
          'Houston Intercontinental (IAH)',
          'Houston Hobby (HOU)',
          'Dallas / Fort Worth (DFW)',
          'San Antonio (SAT)',
        ].map((airport) => (
          <div key={airport} className="flex items-center gap-2 text-sm text-gray-700">
            <MapPin size={14} className="text-emerald-600 flex-shrink-0" />
            {airport}
          </div>
        ))}
      </div>
    </div>

    <div className="mt-12">
      <NewsletterSection variant="light" />
    </div>
  </main>
);

// ==================== APP ====================
const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1">
        <Routes>
          {/* Core pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/about" element={<AboutPage />} />

          {/* eSIM section */}
          <Route path="/esim" element={<EsimIndexPage />} />
          <Route path="/esim/:slug" element={<EsimPage />} />

          {/* Destinations section */}
          <Route path="/destinations" element={<DestinationIndexPage />} />
          <Route path="/destinations/:slug" element={<DestinationPage />} />

          {/* Flight routes section */}
          <Route path="/flights" element={<FlightsIndexPage />} />
          <Route path="/flights/:slug" element={<RoutePage />} />

          {/* Trip costs section */}
          <Route path="/trip-costs" element={<CostsIndexPage />} />
          <Route path="/trip-costs/:slug" element={<CostPage />} />

          {/* Best time section */}
          <Route path="/best-time" element={<BestTimeIndexPage />} />
          <Route path="/best-time/:slug" element={<BestTimePage />} />

          {/* Airport guides section */}
          <Route path="/airports" element={<AirportsIndexPage />} />
          <Route path="/airports/:code" element={<AirportPage />} />

          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
