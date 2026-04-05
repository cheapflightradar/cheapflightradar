import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FlightCTA, HotelCTA, EsimProvidersCTA } from '../components/Affiliates';
import { findDestinationBySlug } from '../data/destinationData';
import { SeoHead } from '../components/SeoHead';

export default function DestinationPage() {
  const { slug } = useParams();
  const dest = findDestinationBySlug(slug);
  const [activeDay, setActiveDay] = useState(0);

  if (!dest) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Destination Not Found</h1>
        <p className="text-gray-600 mb-6">We don't have a guide for that destination yet.</p>
        <Link to="/destinations" className="text-emerald-600 font-semibold hover:underline">← View all destinations</Link>
      </div>
    );
  }

  const budgetLevels = [
    { key: 'backpacker', label: 'Budget', color: 'emerald' },
    { key: 'midrange', label: 'Mid-Range', color: 'blue' },
    { key: 'comfort', label: 'Comfortable', color: 'purple' },
  ];

  return (
    <main id="main-content" className="bg-white">
      <SeoHead
        title={dest.metaTitle || `${dest.city} Travel Guide`}
        description={dest.metaDesc || `Plan your trip to ${dest.city}, ${dest.country}. Budget tips, where to stay, what to eat, and how to get there.`}
        image={dest.heroImage}
      />
      {/* Hero */}
      <div className="relative h-80 md:h-[450px] overflow-hidden">
        <img src={dest.heroImage} alt={dest.city} className="w-full h-full object-cover" fetchpriority="high" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-8 max-w-5xl mx-auto">
          <nav className="text-sm text-white/70 mb-3">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <Link to="/destinations" className="hover:text-white">Destinations</Link>
            <span className="mx-2">›</span>
            <span className="text-white">{dest.city}</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            {dest.flag} {dest.city}
          </h1>
          <p className="text-white/90 mt-2 text-lg">{dest.tagline}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Quick facts grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 p-5 bg-gray-50 rounded-2xl">
          <div>
            <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Nearest TX Airport</div>
            <div className="font-semibold text-gray-900 text-sm">{dest.nearestTxAirport}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Flight Time</div>
            <div className="font-semibold text-gray-900 text-sm">{dest.flightTime}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Currency</div>
            <div className="font-semibold text-gray-900 text-sm">{dest.currency.split(' (')[0]}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Visa Required</div>
            <div className={`font-semibold text-sm ${dest.visaRequired ? 'text-red-600' : 'text-emerald-600'}`}>
              {dest.visaRequired ? 'Yes' : 'No — US Citizens Free'}
            </div>
          </div>
        </div>

        {/* Budget overview */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Daily Budget Estimates</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {budgetLevels.map(({ key, label }) => (
              <div key={key} className="border border-gray-200 rounded-xl p-4">
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">{label}</div>
                <div className="text-3xl font-bold text-gray-900">${dest.budgetPerDay[key]}<span className="text-base font-normal text-gray-500">/day</span></div>
                <div className="mt-2 text-xs text-gray-500">
                  {key === 'backpacker' && `Hostel from $${dest.accommodation.hostel.min}/night`}
                  {key === 'midrange' && `Hotel from $${dest.accommodation.budget.min}/night`}
                  {key === 'comfort' && `Hotel from $${dest.accommodation.midrange.min}/night`}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flight CTA */}
        <FlightCTA dest={dest.bestTo} destLabel={dest.city} />

        {/* Best neighborhoods */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Neighborhoods to Stay</h2>
          <div className="space-y-3">
            {dest.neighborhoods.map((n) => (
              <div key={n.name} className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">{n.name}</span>
                    <span className="text-xs text-gray-400">{n.stay}</span>
                  </div>
                  <p className="text-sm text-gray-600">{n.vibe}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hotel CTA */}
        <HotelCTA city={dest.city} />

        {/* Must-see */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Must-See in {dest.city}</h2>
          <ul className="space-y-2 mb-5">
            {dest.mustSee.map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-700">
                <span className="text-emerald-500 font-bold shrink-0">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {/* Attractions → Expedia: find a hotel close to everything you want to see */}
          <HotelCTA city={dest.city} />
        </div>

        {/* Food */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Eat & What to Pay</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold text-gray-900 mb-2">🥙 Street Food & Casual</div>
              <div className="text-emerald-700 font-bold mb-1">{dest.food.streetFood.cost}</div>
              <div className="text-sm text-gray-600">{dest.food.streetFood.examples}</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold text-gray-900 mb-2">🍽️ Mid-Range Restaurant</div>
              <div className="text-emerald-700 font-bold mb-1">{dest.food.midrange.cost}</div>
              <div className="text-sm text-gray-600">{dest.food.midrange.examples}</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="font-semibold text-gray-900 mb-2">⭐ Top-End Dining</div>
              <div className="text-emerald-700 font-bold mb-1">{dest.food.topEnd.cost}</div>
              <div className="text-sm text-gray-600">{dest.food.topEnd.examples}</div>
            </div>
          </div>
        </div>

        {/* eSIM */}
        <EsimProvidersCTA country={dest.country} countrySlug={dest.airaloSlug} />

        {/* Getting Around */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Around</h2>
          <div className="space-y-3 bg-gray-50 rounded-xl p-5">
            <div>
              <span className="font-semibold text-gray-900">From the airport: </span>
              <span className="text-gray-700">{dest.transport.airport}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-900">Local transport: </span>
              <span className="text-gray-700">{dest.transport.local}</span>
            </div>
          </div>
        </div>

        {/* Day trips */}
        {dest.dayTrips && dest.dayTrips.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Day Trips from {dest.city}</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-5">
              {dest.dayTrips.map((trip) => (
                <div key={trip.dest} className="border border-gray-200 rounded-xl p-4">
                  <div className="font-bold text-gray-900 mb-1">{trip.dest}</div>
                  <div className="text-sm text-gray-500 mb-1">{trip.distance} · {trip.howLong}</div>
                  <div className="text-emerald-600 font-semibold text-sm">{trip.cost}</div>
                </div>
              ))}
            </div>
            {/* Day trips are destination recommendations → Kiwi for cheapest flights */}
            <FlightCTA dest={dest.bestTo} destLabel={`${dest.city} & surrounding areas`} />
          </div>
        )}

        {/* Best time to visit */}
        <div className="mb-10 bg-blue-50 rounded-xl p-5">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Best Time to Visit {dest.city}</h2>
          <div className="flex flex-wrap gap-2 mb-2">
            {dest.bestMonths.map((m) => (
              <span key={m} className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">{m}</span>
            ))}
          </div>
          {dest.avoidMonths.length > 0 && (
            <p className="text-sm text-gray-600 mt-2">
              <span className="font-semibold">Avoid:</span> {dest.avoidMonths.join(', ')} — {dest.avoidReason}
            </p>
          )}
        </div>

        {/* Safety */}
        <div className="mb-10 p-5 border-l-4 border-amber-400 bg-amber-50 rounded-r-xl">
          <h3 className="font-bold text-gray-900 mb-2">Safety Notes</h3>
          <p className="text-gray-700 text-sm">{dest.safetyNote}</p>
        </div>

        {/* Insider Tips */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Insider Tips</h2>
          <ul className="space-y-3">
            {dest.tips.map((tip, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">💡</span>
                <span className="text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sample itinerary */}
        {dest.itinerary && dest.itinerary.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sample {dest.itinerary.length}-Day Itinerary</h2>
            <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
              {dest.itinerary.map((day, i) => (
                <button
                  key={i}
                  onClick={() => setActiveDay(i)}
                  className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    activeDay === i
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Day {day.day}
                </button>
              ))}
            </div>
            {dest.itinerary[activeDay] && (
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 text-lg mb-3">
                  Day {dest.itinerary[activeDay].day}: {dest.itinerary[activeDay].title}
                </h3>
                <ul className="space-y-2">
                  {dest.itinerary[activeDay].activities.map((a, i) => (
                    <li key={i} className="flex gap-3 text-gray-700 text-sm">
                      <span className="text-emerald-500 font-bold shrink-0">→</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Final CTA row */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Plan Your {dest.city} Trip</h2>
          <div className="space-y-4">
            <FlightCTA dest={dest.bestTo} destLabel={dest.city} />
            <HotelCTA city={dest.city} />
            <EsimProvidersCTA country={dest.country} countrySlug={dest.airaloSlug} />
          </div>
        </div>

        {/* Back link */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-4">
          <Link to="/destinations" className="text-emerald-600 font-semibold hover:underline">
            ← All destinations
          </Link>
          {dest.countrySlug && (
            <Link to={`/esim/${dest.countrySlug}-esim`} className="text-emerald-600 font-semibold hover:underline">
              📱 {dest.country} eSIM guide
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
