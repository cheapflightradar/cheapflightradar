import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { EsimCTA, EsimComparisonTable, FlightCTA, HotelCTA } from '../components/Affiliates';
import { findEsimBySlug } from '../data/esimData';

export default function EsimPage() {
  const { slug } = useParams();
  const country = findEsimBySlug(slug);

  if (!country) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">eSIM Guide Not Found</h1>
        <p className="text-gray-600 mb-6">We don't have an eSIM guide for that country yet.</p>
        <Link to="/esim" className="text-emerald-600 font-semibold hover:underline">← View all eSIM guides</Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img src={country.heroImage} alt={country.country} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-8 max-w-4xl mx-auto">
          <nav className="text-sm text-white/70 mb-3">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <Link to="/esim" className="hover:text-white">eSIM Guides</Link>
            <span className="mx-2">›</span>
            <span className="text-white">{country.country}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {country.flag} Best eSIM for {country.country}
          </h1>
          <p className="text-white/90 mt-2 text-lg">Stay connected without roaming fees</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Quick stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-4 bg-gray-50 rounded-xl">
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600">${country.plans[0]?.price.toFixed(0)}</div>
            <div className="text-xs text-gray-500">Starting price</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600">{country.plans.length}</div>
            <div className="text-xs text-gray-500">Plan options</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600">{country.networks.length}</div>
            <div className="text-xs text-gray-500">Networks</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600 text-sm leading-tight">{country.vsCarrier.savings}</div>
            <div className="text-xs text-gray-500">Avg. savings vs. carrier</div>
          </div>
        </div>

        {/* Intro */}
        <div className="prose prose-gray max-w-none mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">{country.intro}</p>
        </div>

        {/* Main Airalo CTA */}
        <EsimCTA country={country.country} countrySlug={country.airaloSlug} variant="hero" />

        {/* Networks & Coverage */}
        <div className="my-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Networks & Coverage</h2>
          <div className="bg-gray-50 rounded-xl p-5">
            <p className="font-semibold text-gray-700 mb-2">Available networks:</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {country.networks.map((n) => (
                <span key={n} className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {n}
                </span>
              ))}
            </div>
            <p className="text-gray-600 text-sm">{country.coverage}</p>
          </div>
        </div>

        {/* Plan comparison table */}
        <div className="my-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Airalo Plans for {country.country}</h2>
          <p className="text-gray-600 mb-4 text-sm">Prices verified April 2026. Available on Airalo.</p>
          <EsimComparisonTable country={country.country} plans={country.plans} />
        </div>

        {/* eSIM vs. Carrier comparison */}
        <div className="my-8 bg-red-50 border border-red-100 rounded-xl p-5">
          <h2 className="text-xl font-bold text-gray-900 mb-3">eSIM vs. Carrier Roaming</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-red-500 font-bold text-lg mb-1">Carrier Roaming</div>
              <div className="text-2xl font-bold text-gray-900">{country.vsCarrier.carrierCost}</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-emerald-600 font-bold text-2xl">→</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-emerald-500 font-bold text-lg mb-1">Airalo eSIM</div>
              <div className="text-2xl font-bold text-gray-900">{country.vsCarrier.esimCost}</div>
            </div>
          </div>
          <p className="text-center mt-3 font-bold text-emerald-700 text-lg">{country.vsCarrier.savings} 💰</p>
        </div>

        {/* Tips */}
        <div className="my-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for Using an eSIM in {country.country}</h2>
          <ul className="space-y-3">
            {country.tips.map((tip, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                <span className="text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Flight info */}
        <div className="my-8 p-5 bg-blue-50 rounded-xl">
          <h3 className="font-bold text-gray-900 mb-2">Traveling to {country.country}?</h3>
          <p className="text-sm text-gray-600 mb-3">
            Popular US departure airports: {country.popularFrom.join(', ')}. Flight time is approximately {country.flightTime}.
          </p>
          <FlightCTA dest={country.airaloSlug.toUpperCase()} destLabel={country.country} />
        </div>

        {/* Top destinations in country — destination recommendations → Kiwi */}
        <div className="my-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Destinations in {country.country}</h2>
          <div className="flex flex-wrap gap-2 mb-5">
            {country.topDestinations.map((dest) => (
              <span key={dest} className="bg-gray-100 px-3 py-1.5 rounded-full text-sm text-gray-700">{dest}</span>
            ))}
          </div>
          {/* Recommending destinations → Kiwi for flights */}
          <FlightCTA destLabel={country.country} />
        </div>

        {/* FAQs */}
        <div className="my-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {country.faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-gray-900 mb-2">Q: {faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="my-8">
          <EsimCTA country={country.country} countrySlug={country.airaloSlug} variant="hero" />
        </div>

        {/* Hotels at the destination → Expedia */}
        <HotelCTA city={country.topDestinations[0] || country.country} />

        {/* Back link */}
        <div className="mt-10 pt-6 border-t border-gray-100">
          <Link to="/esim" className="text-emerald-600 font-semibold hover:underline">
            ← View all eSIM country guides
          </Link>
        </div>
      </div>
    </div>
  );
}
