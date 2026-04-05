import React from 'react';
import affiliates from '../config/affiliates';

// ─────────────────────────────────────────────
//  FlightCTA  — links to Kiwi.com
// ─────────────────────────────────────────────
export function FlightCTA({ origin, dest, originLabel, destLabel, variant = 'default' }) {
  const url = origin && dest
    ? affiliates.kiwi.search(origin, dest)
    : affiliates.kiwi.home;

  const label = originLabel && destLabel
    ? `Search ${originLabel} → ${destLabel} on Kiwi`
    : affiliates.kiwi.cta;

  if (variant === 'inline') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors"
      >
        ✈️ {label}
      </a>
    );
  }

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-6">
      <div className="flex items-start gap-4">
        <span className="text-3xl">✈️</span>
        <div className="flex-1">
          <p className="font-semibold text-blue-900 text-lg mb-1">
            Find the Cheapest Flights
          </p>
          <p className="text-blue-700 text-sm mb-3">
            {affiliates.kiwi.note}
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors"
          >
            {label} →
          </a>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
//  HotelCTA  — links to Expedia
// ─────────────────────────────────────────────
export function HotelCTA({ city, variant = 'default' }) {
  const url = affiliates.expedia.hotels;

  const label = city
    ? `Find Hotels in ${city} on Expedia`
    : affiliates.expedia.cta;

  if (variant === 'inline') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-amber-500 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-amber-600 transition-colors"
      >
        🏨 {label}
      </a>
    );
  }

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 my-6">
      <div className="flex items-start gap-4">
        <span className="text-3xl">🏨</span>
        <div className="flex-1">
          <p className="font-semibold text-amber-900 text-lg mb-1">
            Find Hotels{city ? ` in ${city}` : ''}
          </p>
          <p className="text-amber-700 text-sm mb-3">
            {affiliates.expedia.note}
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-amber-600 transition-colors"
          >
            {label} →
          </a>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
//  EsimCTA  — links to Airalo (main affiliate)
// ─────────────────────────────────────────────
export function EsimCTA({ country, countrySlug, variant = 'default' }) {
  const url = countrySlug
    ? affiliates.airalo.country(countrySlug)
    : affiliates.airalo.home;

  const label = country
    ? `Get Your ${country} eSIM on Airalo`
    : affiliates.airalo.cta;

  if (variant === 'inline') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-emerald-700 transition-colors"
      >
        📱 {label}
      </a>
    );
  }

  if (variant === 'hero') {
    return (
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 my-8 text-white">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">📱</span>
          <div>
            <p className="font-bold text-xl">Skip the Roaming Bill</p>
            <p className="text-emerald-100 text-sm">Buy an eSIM before you board. Activate when you land.</p>
          </div>
        </div>
        <p className="text-emerald-100 text-sm mb-4">
          {affiliates.airalo.note}. Plans from $4. Works in 200+ countries.
          No physical SIM swap, no locked phones.
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-emerald-700 font-bold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors"
        >
          {label} →
        </a>
      </div>
    );
  }

  // default card
  return (
    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6">
      <div className="flex items-start gap-4">
        <span className="text-3xl">📱</span>
        <div className="flex-1">
          <p className="font-semibold text-emerald-900 text-lg mb-1">
            {country ? `Get Connected in ${country} — No Roaming Fees` : 'Stay Connected Everywhere'}
          </p>
          <p className="text-emerald-700 text-sm mb-3">
            {affiliates.airalo.note}. Plans from $4. Works on any unlocked phone. No SIM swap needed.
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-emerald-700 transition-colors"
          >
            {label} →
          </a>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
//  SailyCTA  — links to Saily eSIM
// ─────────────────────────────────────────────
export function SailyCTA({ variant = 'default' }) {
  const url = affiliates.saily.home;

  if (variant === 'inline') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-violet-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-violet-700 transition-colors"
      >
        📱 {affiliates.saily.cta}
      </a>
    );
  }

  return (
    <div className="bg-violet-50 border border-violet-200 rounded-xl p-5 my-6">
      <div className="flex items-start gap-4">
        <span className="text-3xl">📱</span>
        <div className="flex-1">
          <p className="font-semibold text-violet-900 text-lg mb-1">
            Also Worth Checking: Saily by Nord
          </p>
          <p className="text-violet-700 text-sm mb-3">
            {affiliates.saily.note}. Plans are competitively priced and the app is well-designed.
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-violet-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-violet-700 transition-colors"
          >
            {affiliates.saily.cta} →
          </a>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
//  EsimProvidersCTA  — Airalo + Saily side by side
// ─────────────────────────────────────────────
export function EsimProvidersCTA({ country, countrySlug }) {
  const airaloUrl = countrySlug
    ? affiliates.airalo.country(countrySlug)
    : affiliates.airalo.home;
  const airaloLabel = country ? `Get ${country} eSIM on Airalo` : 'Get Your eSIM on Airalo';

  return (
    <div className="my-8">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
        Compare eSIM Providers
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
        {/* Airalo */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 flex flex-col">
          <div className="flex items-center justify-between mb-1">
            <p className="font-bold text-emerald-900 text-base">Airalo</p>
            <span className="text-xs bg-emerald-500 text-white px-2 py-0.5 rounded-full font-semibold">
              #1 Pick
            </span>
          </div>
          <p className="text-xs text-emerald-700 mb-1">200+ countries · Plans from $4</p>
          <p className="text-xs text-emerald-600 mb-4 flex-1">{affiliates.airalo.note}</p>
          <a
            href={airaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-emerald-600 text-white px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-emerald-700 transition-colors"
          >
            {airaloLabel} →
          </a>
        </div>

        {/* Saily */}
        <div className="bg-violet-50 border border-violet-200 rounded-xl p-5 flex flex-col">
          <div className="flex items-center justify-between mb-1">
            <p className="font-bold text-violet-900 text-base">Saily by Nord</p>
            <span className="text-xs bg-violet-100 text-violet-700 border border-violet-200 px-2 py-0.5 rounded-full font-semibold">
              Top Alternative
            </span>
          </div>
          <p className="text-xs text-violet-700 mb-1">No data caps on popular plans</p>
          <p className="text-xs text-violet-600 mb-4 flex-1">{affiliates.saily.note}</p>
          <a
            href={affiliates.saily.home}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-violet-600 text-white px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-violet-700 transition-colors"
          >
            {affiliates.saily.cta} →
          </a>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
//  TripCTA  — shows all 3 affiliate CTAs stacked
// ─────────────────────────────────────────────
export function TripCTA({ origin, dest, city, country, countrySlug, originLabel, destLabel }) {
  return (
    <div className="space-y-4 my-8">
      <h3 className="text-lg font-bold text-gray-900">Plan This Trip</h3>
      <FlightCTA origin={origin} dest={dest} originLabel={originLabel} destLabel={destLabel} />
      <HotelCTA city={city || country} />
      <EsimCTA country={country} countrySlug={countrySlug} />
    </div>
  );
}

// ─────────────────────────────────────────────
//  EsimComparisonTable  — Airalo vs Saily vs carrier
// ─────────────────────────────────────────────
export function EsimComparisonTable({ country, plans = [] }) {
  return (
    <div className="my-8 overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-3 border border-gray-200 font-semibold">Data</th>
            <th className="text-left p-3 border border-gray-200 font-semibold">Valid For</th>
            <th className="text-left p-3 border border-gray-200 font-semibold">Price</th>
            <th className="text-left p-3 border border-gray-200 font-semibold">Best For</th>
            <th className="text-left p-3 border border-gray-200 font-semibold">Get It</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="p-3 border border-gray-200 font-semibold text-emerald-700">{plan.data}</td>
              <td className="p-3 border border-gray-200">{plan.days} days</td>
              <td className="p-3 border border-gray-200 font-semibold">${plan.price.toFixed(2)}</td>
              <td className="p-3 border border-gray-200 text-gray-600 text-xs">{plan.priceNote}</td>
              <td className="p-3 border border-gray-200">
                <EsimCTA country={country} variant="inline" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-gray-500 mt-2">Prices from Airalo — verified April 2026. May vary slightly by plan availability.</p>
    </div>
  );
}

