import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FlightCTA, HotelCTA, EsimCTA, EsimProvidersCTA } from '../components/Affiliates';
import { findBestTimeBySlug } from '../data/bestTimeData';
import { SeoHead } from '../components/SeoHead';

const ratingColors = {
  5: 'bg-emerald-500',
  4: 'bg-emerald-300',
  3: 'bg-yellow-300',
  2: 'bg-orange-300',
  1: 'bg-red-400',
};
const ratingLabels = { 5: 'Excellent', 4: 'Good', 3: 'OK', 2: 'Avoid', 1: 'Worst' };

export default function BestTimePage() {
  const { slug } = useParams();
  const data = findBestTimeBySlug(slug);

  if (!data) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Guide Not Found</h1>
        <Link to="/best-time" className="text-emerald-600 font-semibold hover:underline">← View all timing guides</Link>
      </div>
    );
  }

  const minPrice = Math.min(...data.monthly.map((m) => m.flightPrice));
  const maxPrice = Math.max(...data.monthly.map((m) => m.flightPrice));
  const priceRange = maxPrice - minPrice;

  return (
    <main id="main-content" className="bg-white">
      <SeoHead
        title={`Best Time to Visit ${data.destination}`}
        description={`Month-by-month guide to visiting ${data.destination}. Flight prices, weather ratings, crowd levels, and the cheapest months to fly. Plan smarter.`}
        image={data.heroImage}
      />
      {/* Hero */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <img src={data.heroImage} alt={data.destination} className="w-full h-full object-cover" fetchpriority="high" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-8 max-w-4xl mx-auto">
          <nav className="text-sm text-white/70 mb-3">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <Link to="/best-time" className="hover:text-white">Best Time to Visit</Link>
            <span className="mx-2">›</span>
            <span className="text-white">{data.destination}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {data.flag} Best Time to Visit {data.destination}
          </h1>
          <p className="text-white/90 mt-1">Month-by-month flight prices, weather & crowds</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* TL;DR summary */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 mb-8">
          <h2 className="font-bold text-gray-900 text-lg mb-3">Quick Summary</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <span className="text-sm font-semibold text-gray-500 uppercase">Best Months</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {data.overall.bestMonths.map((m) => (
                  <span key={m} className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">{m}</span>
                ))}
              </div>
            </div>
            <div>
              <span className="text-sm font-semibold text-gray-500 uppercase">Months to Avoid</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {data.overall.avoidMonths.map((m) => (
                  <span key={m} className="bg-red-400 text-white px-3 py-1 rounded-full text-sm font-medium">{m}</span>
                ))}
              </div>
            </div>
          </div>
          {data.overall.sweetSpot && (
            <p className="mt-3 text-sm text-emerald-800">
              <span className="font-semibold">Sweet spot: </span>{data.overall.sweetSpot}
            </p>
          )}
        </div>

        {/* Flight search */}
        <FlightCTA destLabel={data.destination} />

        {/* Month by month table */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Month-by-Month Breakdown</h2>

          {/* Price chart (simplified visual) */}
          <div className="bg-gray-50 rounded-xl p-4 mb-4">
            <p className="text-xs text-gray-500 mb-3 font-semibold uppercase">Flight Price Trend (avg round trip)</p>
            <div className="flex items-end gap-1 h-16">
              {data.monthly.map((m) => {
                const height = priceRange > 0
                  ? Math.max(15, Math.round(((m.flightPrice - minPrice) / priceRange) * 100))
                  : 50;
                return (
                  <div key={m.month} className="flex flex-col items-center flex-1">
                    <div
                      className={`w-full rounded-t-sm ${m.rating >= 4 ? 'bg-emerald-400' : m.rating === 3 ? 'bg-yellow-400' : 'bg-red-400'}`}
                      style={{ height: `${height}%` }}
                    />
                    <span className="text-xs text-gray-500 mt-1">{m.month}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-4 mt-2 text-xs text-gray-500">
              <span className="flex items-center gap-1"><span className="w-3 h-3 bg-emerald-400 rounded-sm inline-block" /> Great time</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 bg-yellow-400 rounded-sm inline-block" /> OK time</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 bg-red-400 rounded-sm inline-block" /> Avoid</span>
            </div>
          </div>

          {/* Month cards */}
          <div className="space-y-3">
            {data.monthly.map((m) => (
              <div key={m.month} className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl hover:border-gray-200 transition-colors">
                <div className="w-12 text-center shrink-0">
                  <div className="font-bold text-gray-900">{m.month}</div>
                  <div className={`mt-1 w-full h-1.5 rounded-full ${ratingColors[m.rating]}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-emerald-700">${m.flightPrice} RT</span>
                    <span className="text-gray-400">·</span>
                    <span className="text-gray-600 text-sm">{m.weather}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      m.rating >= 4 ? 'bg-emerald-100 text-emerald-700' :
                      m.rating === 3 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>{ratingLabels[m.rating]}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{m.note}</p>
                  <p className="text-xs text-gray-400 mt-0.5">Crowds: {m.crowds}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Planning Tips</h2>
          <ul className="space-y-3">
            {data.tips.map((tip, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">💡</span>
                <span className="text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hotel recommendation → Expedia */}
        <HotelCTA city={data.destination} />

        {/* eSIM — both providers */}
        <EsimProvidersCTA country={data.country} />

        {data.destinationSlug && (
          <div className="mt-6 p-4 bg-gray-50 rounded-xl">
            <Link
              to={`/destinations/${data.destinationSlug}`}
              className="text-emerald-600 font-bold hover:underline"
            >
              Read our full {data.destination} travel guide →
            </Link>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-gray-100">
          <Link to="/best-time" className="text-emerald-600 font-semibold hover:underline">
            ← All timing guides
          </Link>
        </div>
      </div>
    </main>
  );
}
