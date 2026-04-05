import React from 'react';
import { Link } from 'react-router-dom';
import esimData from '../data/esimData';
import destinationData from '../data/destinationData';
import routeData from '../data/routeData';
import costData from '../data/costData';
import bestTimeData from '../data/bestTimeData';
import { texasAirports, internationalAirports } from '../data/airportData';
import { EsimCTA, FlightCTA } from '../components/Affiliates';
import affiliates from '../config/affiliates';

// ─────────────────────────────────────────────────────────────
//  eSIM Index
// ─────────────────────────────────────────────────────────────
export function EsimIndexPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-emerald-200 font-semibold mb-2 text-sm uppercase tracking-wide">No More Roaming Bills</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">eSIM Country Guides</h1>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
            Everything you need to stay connected abroad without paying your carrier's outrageous roaming fees.
            Country-by-country eSIM guides with real pricing from Airalo.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* What is an eSIM box */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">What is an eSIM?</h2>
          <p className="text-gray-700 mb-4">
            An eSIM (embedded SIM) is a digital SIM card built into most modern phones. Instead of buying a physical SIM
            at the airport, you scan a QR code and get a local data plan from your couch — before you even pack.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white rounded-xl p-4">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-semibold text-gray-900 mb-1">Instant Setup</div>
              <div className="text-sm text-gray-600">Buy and activate in 2 minutes. No SIM card kiosk, no queues.</div>
            </div>
            <div className="bg-white rounded-xl p-4">
              <div className="text-3xl mb-2">💰</div>
              <div className="font-semibold text-gray-900 mb-1">Fraction of Carrier Cost</div>
              <div className="text-sm text-gray-600">Save $50–200+ per trip vs. carrier day passes.</div>
            </div>
            <div className="bg-white rounded-xl p-4">
              <div className="text-3xl mb-2">🌍</div>
              <div className="font-semibold text-gray-900 mb-1">200+ Countries</div>
              <div className="text-sm text-gray-600">Airalo covers virtually everywhere you'll want to go.</div>
            </div>
          </div>
        </div>

        {/* Country grid */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Country eSIM Guides</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {esimData.map((country) => (
            <Link
              key={country.id}
              to={`/esim/${country.slug}`}
              className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all"
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={country.heroImage}
                  alt={country.country}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-3 right-3">
                  <div className="text-white font-bold text-lg">{country.flag} {country.country}</div>
                </div>
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between">
                  <span className="text-emerald-700 font-bold">From ${country.plans[0]?.price.toFixed(2)}</span>
                  <span className="text-gray-400 text-xs">{country.plans[0]?.data} / {country.plans[0]?.days}d</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">{country.networks.slice(0, 2).join(' · ')}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <EsimCTA variant="hero" />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  Destination Index
// ─────────────────────────────────────────────────────────────
export function DestinationIndexPage() {
  const [filter, setFilter] = React.useState('all');

  const regions = [
    { key: 'all', label: 'All Destinations' },
    { key: 'latin', label: 'Latin America' },
    { key: 'europe', label: 'Europe' },
    { key: 'asia', label: 'Asia & Pacific' },
  ];

  const regionMap = {
    'Mexico': 'latin', 'Colombia': 'latin', 'Costa Rica': 'latin', 'Peru': 'latin', 'Indonesia': 'latin',
    'Portugal': 'europe', 'Spain': 'europe', 'Italy': 'europe', 'France': 'europe',
    'Japan': 'asia',
  };

  const filtered = filter === 'all'
    ? destinationData
    : destinationData.filter((d) => regionMap[d.country] === filter);

  return (
    <div className="bg-white">
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-200 font-semibold mb-2 text-sm uppercase tracking-wide">Explore the World</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Destination Guides</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            In-depth travel guides built for curious, budget-conscious travelers. Real costs, real neighborhoods, real tips.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Filter tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-1">
          {regions.map((r) => (
            <button
              key={r.key}
              onClick={() => setFilter(r.key)}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                filter === r.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        {/* Destination grid — recommending destinations → Kiwi search link on each card */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filtered.map((dest) => (
            <div
              key={dest.id}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all"
            >
              <Link to={`/destinations/${dest.slug}`} className="group block">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={dest.heroImage}
                    alt={dest.city}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-white font-bold text-xl">{dest.flag} {dest.city}</div>
                    <div className="text-white/80 text-sm">{dest.country}</div>
                  </div>
                </div>
                <div className="p-4 pb-3">
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">{dest.tagline}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>~${dest.avgFlightPrice.avg} avg RT</span>
                    <span className="text-emerald-600 font-semibold">From ${dest.budgetPerDay.backpacker}/day</span>
                  </div>
                </div>
              </Link>
              {/* Destination recommendation → Kiwi affiliate link */}
              <div className="px-4 pb-4">
                <a
                  href={affiliates.kiwi.search('texas', dest.bestTo || dest.city)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-blue-600 text-white text-sm font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  ✈️ Search Flights to {dest.city}
                </a>
              </div>
            </div>
          ))}
        </div>

        <FlightCTA />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  Flight Routes Index
// ─────────────────────────────────────────────────────────────
export function FlightsIndexPage() {
  const [originFilter, setOriginFilter] = React.useState('all');

  const origins = [
    { iata: 'all', city: 'All Routes' },
    { iata: 'JFK', city: 'New York (JFK)' },
    { iata: 'LAX', city: 'Los Angeles (LAX)' },
    { iata: 'MIA', city: 'Miami (MIA)' },
    { iata: 'ORD', city: 'Chicago (ORD)' },
    { iata: 'DFW', city: 'Dallas (DFW)' },
    { iata: 'IAH', city: 'Houston (IAH)' },
    { iata: 'AUS', city: 'Austin (AUS)' },
    { iata: 'SAT', city: 'San Antonio (SAT)' },
    { iata: 'HOU', city: 'Houston Hobby (HOU)' },
  ];

  const filteredRoutes = originFilter === 'all'
    ? routeData
    : routeData.filter((r) => r.origin.iata === originFilter);

  return (
    <div className="bg-white">
      <div className="bg-gradient-to-br from-sky-600 to-blue-700 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sky-200 font-semibold mb-2 text-sm uppercase tracking-wide">Budget Routes</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">International Flight Routes</h1>
          <p className="text-sky-100 text-lg max-w-2xl mx-auto">
            Flight prices, airlines, and booking tips for every major international route.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Filter by origin */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-1">
          {origins.map((o) => (
            <button
              key={o.iata}
              onClick={() => setOriginFilter(o.iata)}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                originFilter === o.iata
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {o.city}
            </button>
          ))}
        </div>

        {/* Routes list */}
        <div className="space-y-3 mb-12">
          {filteredRoutes.map((route) => (
            <Link
              key={route.slug}
              to={`/flights/${route.slug}`}
              className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all group"
            >
              <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                <img src={route.image} alt={route.dest.city} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 flex items-center justify-center text-xl">{route.dest.flag}</div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {route.origin.city} → {route.dest.city}
                </div>
                <div className="text-sm text-gray-500">{route.origin.iata} → {route.dest.iata} · {route.flightTime}</div>
                <div className="text-xs text-gray-400 mt-0.5">
                  {route.directAvailable ? '✈️ Direct available' : '🔄 1+ stop'} · {route.airlines.slice(0, 2).join(', ')}
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-emerald-600 font-bold text-xl">$
                  {route.avgPrice.low}</div>
                <div className="text-xs text-gray-400">from (RT)</div>
              </div>
            </Link>
          ))}
        </div>

        <FlightCTA />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  Trip Costs Index
// ─────────────────────────────────────────────────────────────
export function CostsIndexPage() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-br from-amber-500 to-orange-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-100 font-semibold mb-2 text-sm uppercase tracking-wide">Know Before You Go</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Trip Cost Calculators</h1>
          <p className="text-amber-100 text-lg max-w-2xl mx-auto">
            Real, honest cost breakdowns for popular destinations. No fluff — just actual prices from flights to street food.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {costData.map((item) => (
            <Link
              key={item.slug}
              to={`/trip-costs/${item.slug}`}
              className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={item.heroImage}
                  alt={item.destination}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <div className="text-white font-bold text-xl">{item.flag} {item.destination}</div>
                </div>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-3 gap-3 text-center">
                  {Object.entries(item.scenarios).map(([key, s]) => (
                    <div key={key}>
                      <div className="text-xs text-gray-400 mb-0.5">{s.label.split(' ')[0]}</div>
                      <div className="font-bold text-gray-900">${s.dailyTotal}<span className="text-xs font-normal text-gray-400">/day</span></div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500 text-center">
                  {item.duration} · Based on {item.currency.split(' (')[0]}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <FlightCTA />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  Best Time Index
// ─────────────────────────────────────────────────────────────
export function BestTimeIndexPage() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-br from-violet-600 to-purple-700 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-violet-200 font-semibold mb-2 text-sm uppercase tracking-wide">Timing is Everything</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Best Time to Visit</h1>
          <p className="text-violet-100 text-lg max-w-2xl mx-auto">
            Month-by-month guides showing flight prices, weather, and crowd levels. Go when it's smart, not when everyone else does.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {bestTimeData.map((item) => {
            const cheapestMonth = item.monthly.reduce((a, b) => a.flightPrice < b.flightPrice ? a : b);
            return (
              <Link
                key={item.slug}
                to={`/best-time/${item.slug}`}
                className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={item.heroImage}
                    alt={item.destination}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <div className="text-white font-bold text-xl">{item.flag} {item.destination}</div>
                    <div className="text-white/80 text-sm">{item.country}</div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between text-sm mb-2">
                    <div>
                      <span className="text-gray-500">Best: </span>
                      <span className="font-semibold text-emerald-700">{item.overall.bestMonths.slice(0, 2).join(', ')}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Cheapest: </span>
                      <span className="font-semibold text-blue-700">{cheapestMonth.month} (${cheapestMonth.flightPrice})</span>
                    </div>
                  </div>
                  <div className="flex gap-0.5 h-4">
                    {item.monthly.map((m) => (
                      <div
                        key={m.month}
                        className={`flex-1 rounded-sm ${
                          m.rating >= 5 ? 'bg-emerald-500' :
                          m.rating === 4 ? 'bg-emerald-300' :
                          m.rating === 3 ? 'bg-yellow-300' :
                          'bg-red-300'
                        }`}
                        title={`${m.month}: ${m.rating}/5`}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>Jan</span><span>Jun</span><span>Dec</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <FlightCTA />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  Airports Index
// ─────────────────────────────────────────────────────────────
export function AirportsIndexPage() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-br from-slate-700 to-gray-800 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-300 font-semibold mb-2 text-sm uppercase tracking-wide">Your Departure Points</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Airport Guides</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Complete guides for major airports around the world: routes, airlines, lounges, and transport tips.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Texas airports */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Airports</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {texasAirports.map((airport) => (
            <Link
              key={airport.iata}
              to={`/airports/${airport.slug}`}
              className="group flex gap-4 p-4 border border-gray-200 rounded-2xl hover:shadow-md transition-all"
            >
              <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                <img src={airport.heroImage} alt={airport.iata} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="font-mono font-bold text-white text-lg">{airport.iata}</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {airport.name}
                </div>
                <div className="text-sm text-gray-500">{airport.city}, {airport.state}</div>
                {airport.topRoutes && (
                  <div className="text-xs text-gray-400 mt-1">
                    {airport.topRoutes.slice(0, 3).map((r) => r.dest.split('(')[1]?.replace(')', '')).filter(Boolean).join(' · ')}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* International arrival airports */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Arrival Airports</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {internationalAirports.map((airport) => (
            <Link
              key={airport.iata}
              to={`/airports/${airport.slug}`}
              className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all"
            >
              <div className="relative h-28 overflow-hidden">
                <img src={airport.heroImage} alt={airport.name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-3">
                  <span className="font-mono font-bold text-white">{airport.iata}</span>
                  <span className="text-white/80 text-sm ml-1">· {airport.city}</span>
                </div>
              </div>
              <div className="p-3">
                <div className="text-xs text-gray-500">{airport.country}</div>
                <div className="text-xs text-gray-400 mt-0.5">
                  {airport.transport?.slice(0, 1).map((t) => `From airport: ${t.type} ${t.cost}`)}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <FlightCTA />
      </div>
    </div>
  );
}
