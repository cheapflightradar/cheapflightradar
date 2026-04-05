import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FlightCTA, HotelCTA, EsimCTA } from '../components/Affiliates';
import { findCostBySlug } from '../data/costData';

export default function CostPage() {
  const { slug } = useParams();
  const data = findCostBySlug(slug);
  const [activeScenario, setActiveScenario] = useState('midrange');

  if (!data) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Cost Guide Not Found</h1>
        <Link to="/trip-costs" className="text-emerald-600 font-semibold hover:underline">← View all cost guides</Link>
      </div>
    );
  }

  const scenarios = ['budget', 'midrange', 'comfort'];
  const scenarioLabels = { budget: 'Budget', midrange: 'Mid-Range', comfort: 'Comfortable' };

  const activeData = data.scenarios[activeScenario];

  const expenseItems = [
    { key: 'accommodation', label: 'Accommodation', icon: '🏨' },
    { key: 'food', label: 'Food & Drink', icon: '🍽️' },
    { key: 'transport', label: 'Local Transport', icon: '🚌' },
    { key: 'activities', label: 'Activities & Sights', icon: '🎭' },
    { key: 'misc', label: 'Misc / Buffer', icon: '💳' },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <img src={data.heroImage} alt={data.destination} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-8 max-w-4xl mx-auto">
          <nav className="text-sm text-white/70 mb-3">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <Link to="/trip-costs" className="hover:text-white">Trip Costs</Link>
            <span className="mx-2">›</span>
            <span className="text-white">{data.destination}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {data.flag} How Much Does {data.destination} Cost?
          </h1>
          <p className="text-white/80 mt-1">{data.duration} · {data.currency}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Scenario toggle */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Choose Your Travel Style</h2>
          <div className="grid grid-cols-3 gap-3">
            {scenarios.map((s) => (
              <button
                key={s}
                onClick={() => setActiveScenario(s)}
                className={`p-4 rounded-xl border-2 text-center transition-all ${
                  activeScenario === s
                    ? 'border-emerald-500 bg-emerald-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-2xl font-bold text-gray-900">${data.scenarios[s].dailyTotal}</div>
                <div className="text-xs text-gray-500">per day</div>
                <div className={`text-sm font-semibold mt-1 ${activeScenario === s ? 'text-emerald-700' : 'text-gray-600'}`}>
                  {scenarioLabels[s]}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active scenario detail */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
          <h3 className="font-bold text-gray-900 text-lg mb-1">{activeData.label}</h3>
          <p className="text-sm text-gray-600 mb-4">{activeData.notes}</p>

          <div className="space-y-3">
            {expenseItems.map(({ key, label, icon }) => (
              activeData[key] ? (
                <div key={key} className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-700">
                    <span>{icon}</span>
                    <span className="text-sm">{label}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold text-gray-900">${activeData[key]}/day</span>
                  </div>
                </div>
              ) : null
            ))}
            <div className="border-t border-gray-200 pt-3 flex items-center justify-between">
              <span className="font-bold text-gray-900">Total (per day)</span>
              <span className="font-bold text-emerald-600 text-xl">${activeData.dailyTotal}</span>
            </div>
          </div>

          <div className="mt-4 p-3 bg-white rounded-lg">
            <div className="text-sm text-gray-600">
              <span className="font-semibold">Flight cost (round trip): </span>
              <span className="text-emerald-700 font-bold">${activeData.flight}</span>
            </div>
            <div className="text-sm font-semibold text-gray-900 mt-2">
              Total {data.duration}: {data.totalTrip[activeScenario]?.range}
            </div>
            <div className="text-xs text-gray-500">{data.totalTrip[activeScenario]?.includes}</div>
          </div>
        </div>

        {/* Flight CTA */}
        <FlightCTA destLabel={data.destination} />

        {/* Detailed cost breakdowns */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Cost Breakdown</h2>
          <div className="space-y-6">
            {data.costBreakdowns.map((section) => (
              <div key={section.category}>
                <h3 className="font-bold text-gray-800 mb-3 text-lg">{section.category}</h3>
                <div className="space-y-2">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex items-start justify-between gap-4 py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-700 text-sm flex-1">{item.name}</span>
                      <span className="text-emerald-700 font-semibold text-sm shrink-0">{item.cost}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hotel CTA */}
        <HotelCTA city={data.destination} />

        {/* Money tips */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Money-Saving Tips for {data.destination}</h2>
          <ul className="space-y-3">
            {data.moneyTips.map((tip, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">💰</span>
                <span className="text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* eSIM reminder */}
        {data.destinationSlug && (
          <EsimCTA country={data.country} />
        )}

        {/* Link to destination guide */}
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

        {/* Back */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <Link to="/trip-costs" className="text-emerald-600 font-semibold hover:underline">
            ← View all trip cost guides
          </Link>
        </div>
      </div>
    </div>
  );
}
