import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { HotelCTA, EsimCTA } from '../components/Affiliates';
import { findRouteBySlug } from '../data/routeData';
import affiliates from '../config/affiliates';

export default function RoutePage() {
  const { slug } = useParams();
  const route = findRouteBySlug(slug);

  if (!route) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Route Not Found</h1>
        <p className="text-gray-600 mb-6">We don't have data for that route yet.</p>
        <Link to="/flights" className="text-emerald-600 font-semibold hover:underline">← View all routes</Link>
      </div>
    );
  }

  const flightUrl = affiliates.kiwi.search(route.origin.iata, route.dest.iata);

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={route.image} alt={route.dest.city} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-8 max-w-4xl mx-auto">
          <nav className="text-sm text-white/70 mb-3">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <Link to="/flights" className="hover:text-white">Flight Routes</Link>
            <span className="mx-2">›</span>
            <span className="text-white">{route.origin.city} → {route.dest.city}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            ✈️ {route.origin.city} → {route.dest.city}
          </h1>
          <p className="text-white/90 mt-1 text-lg">
            {route.origin.iata} → {route.dest.iata} · {route.flightTime}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Price summary */}
        <div className="grid grid-cols-3 gap-4 mb-8 p-5 bg-gray-50 rounded-2xl">
          <div className="text-center">
            <div className="text-xs text-gray-500 mb-1">Low Price</div>
            <div className="text-3xl font-bold text-emerald-600">${route.avgPrice.low}</div>
          </div>
          <div className="text-center border-x border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Average Price</div>
            <div className="text-3xl font-bold text-gray-900">${route.avgPrice.avg}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500 mb-1">Flight Time</div>
            <div className="text-2xl font-bold text-gray-700">{route.flightTime}</div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-4 text-center">{route.avgPrice.note} · Round trip, economy</p>

        {/* Main flight search CTA */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">✈️</span>
            <div>
              <p className="font-bold text-blue-900 text-lg">Search {route.origin.city} → {route.dest.city}</p>
              <p className="text-blue-700 text-sm">Flexible dates • Compare all airlines</p>
            </div>
          </div>
          <a
            href={flightUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-base hover:bg-blue-700 transition-colors"
          >
            Search Flights on Kiwi →
          </a>
          <p className="text-center text-xs text-gray-500 mt-2">Opens Kiwi.com with flexible dates for best prices</p>
        </div>

        {/* Airlines */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Airlines That Fly This Route</h2>
          <div className="flex flex-wrap gap-2">
            {route.airlines.map((airline) => (
              <span key={airline} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium">
                {airline}
              </span>
            ))}
          </div>
          {!route.directAvailable && (
            <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-3 mt-3">
              ⚠️ No direct flights available on this route. Expect 1–2 stops.
            </p>
          )}
          {route.directAvailable && (
            <p className="text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg p-3 mt-3">
              ✅ Direct (non-stop) flights available on this route.
            </p>
          )}
        </div>

        {/* Best months */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Best Months to Book</h2>
          <div className="flex flex-wrap gap-2">
            {route.bestMonths.map((m) => (
              <span key={m} className="bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-full text-sm font-semibold">{m}</span>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-2">Prices and crowds tend to be most favorable in these months.</p>
        </div>

        {/* Tips */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Booking Tips for This Route</h2>
          <ul className="space-y-3">
            {route.tips.map((tip, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">💡</span>
                <span className="text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hotel + eSIM CTAs */}
        <HotelCTA city={route.dest.city} />
        <EsimCTA country={route.dest.country} />

        {/* Link to destination guide if available */}
        {route.destinationSlug && (
          <div className="mt-8 p-4 bg-gray-50 rounded-xl">
            <p className="text-gray-700 text-sm mb-2">Planning your trip to {route.dest.city}?</p>
            <Link
              to={`/destinations/${route.destinationSlug}`}
              className="text-emerald-600 font-bold hover:underline"
            >
              Read our full {route.dest.city} travel guide →
            </Link>
          </div>
        )}

        {/* Origin airport info */}
        <div className="mt-8 p-4 bg-blue-50 rounded-xl">
          <p className="text-gray-700 text-sm mb-2">Flying from {route.origin.city}?</p>
          <Link
            to={`/airports/${route.origin.iata.toLowerCase()}`}
            className="text-blue-600 font-bold hover:underline"
          >
            {route.origin.name} ({route.origin.iata}) airport guide →
          </Link>
        </div>

        {/* Back */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <Link to="/flights" className="text-emerald-600 font-semibold hover:underline">
            ← View all routes
          </Link>
        </div>
      </div>
    </div>
  );
}
