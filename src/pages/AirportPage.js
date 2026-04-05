import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FlightCTA } from '../components/Affiliates';
import { findAirportBySlug } from '../data/airportData';

export default function AirportPage() {
  const { code } = useParams();
  const airport = findAirportBySlug(code);

  if (!airport) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Airport Guide Not Found</h1>
        <Link to="/airports" className="text-emerald-600 font-semibold hover:underline">← View all airports</Link>
      </div>
    );
  }

  const isTexas = airport.type === 'texas';

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-56 md:h-64 overflow-hidden">
        <img src={airport.heroImage} alt={airport.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-8 max-w-4xl mx-auto">
          <nav className="text-sm text-white/70 mb-3">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <Link to="/airports" className="hover:text-white">Airports</Link>
            <span className="mx-2">›</span>
            <span className="text-white">{airport.iata}</span>
          </nav>
          <div className="flex items-center gap-3">
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white font-mono font-bold text-xl">
              {airport.iata}
            </span>
            <h1 className="text-2xl md:text-3xl font-bold text-white">{airport.name}</h1>
          </div>
          <p className="text-white/90 mt-1">{airport.city}{airport.state ? `, ${airport.state}` : `, ${airport.country}`}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Texas airport: top routes */}
        {isTexas && airport.topRoutes && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Top International Routes from {airport.iata}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Destination</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Flight Time</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Avg. Price (RT)</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Direct?</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Search</th>
                  </tr>
                </thead>
                <tbody>
                  {airport.topRoutes.map((route, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-3 border border-gray-200 font-medium">{route.dest}</td>
                      <td className="p-3 border border-gray-200 text-gray-600">{route.flight}</td>
                      <td className="p-3 border border-gray-200 text-emerald-700 font-semibold">{route.avgPrice}</td>
                      <td className="p-3 border border-gray-200">
                        {route.direct ? (
                          <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-xs font-medium">Direct</span>
                        ) : (
                          <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full text-xs">1+ stop</span>
                        )}
                      </td>
                      <td className="p-3 border border-gray-200">
                        <a
                          href={`https://www.kiwi.com/en/search/results/${airport.iata}/anywhere/anytime/anytime`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 font-medium text-xs hover:underline"
                        >
                          Search →
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Flight search */}
        <FlightCTA originLabel={airport.city} />

        {/* Airlines */}
        {airport.airlines && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Airlines at {airport.iata}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {airport.airlines.primary && (
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2 text-sm uppercase">Primary Airlines</h3>
                  <div className="flex flex-wrap gap-2">
                    {airport.airlines.primary.map((a) => (
                      <span key={a} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm">{a}</span>
                    ))}
                  </div>
                </div>
              )}
              {airport.airlines.international && (
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2 text-sm uppercase">International Carriers</h3>
                  <div className="flex flex-wrap gap-2">
                    {airport.airlines.international.map((a) => (
                      <span key={a} className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-sm">{a}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Transport */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {isTexas ? 'Getting To/From the Airport' : 'Getting from the Airport to the City'}
          </h2>

          {isTexas && airport.transport ? (
            <div className="space-y-3">
              {Object.entries(airport.transport).map(([key, t]) => (
                <div key={key} className="border border-gray-100 rounded-xl p-4">
                  <div className="flex items-start justify-between mb-1">
                    <span className="font-semibold text-gray-900 capitalize">{key.replace('_', ' ')}</span>
                    {t.cost && <span className="text-emerald-700 font-bold">{t.cost}</span>}
                  </div>
                  <p className="text-gray-600 text-sm">{t.desc || t.tip}</p>
                  {t.time && <p className="text-gray-500 text-xs mt-1">⏱ {t.time}</p>}
                </div>
              ))}
            </div>
          ) : airport.transport ? (
            <div className="space-y-3">
              {airport.transport.map((t, i) => (
                <div key={i} className="border border-gray-100 rounded-xl p-4">
                  <div className="flex items-start justify-between mb-1">
                    <span className="font-semibold text-gray-900">{t.type}</span>
                    <span className="text-emerald-700 font-bold">{t.cost}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{t.dest} · {t.time}</p>
                  {t.note && <p className="text-gray-500 text-xs mt-1 italic">{t.note}</p>}
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {/* Terminals */}
        {airport.terminals && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Terminals</h2>
            <ul className="space-y-2">
              {airport.terminals.map((t, i) => (
                <li key={i} className="flex gap-3 text-gray-700 text-sm">
                  <span className="text-blue-500 shrink-0">•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            {airport.internationalTerminal && (
              <div className="mt-3 p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
                <span className="font-semibold">International: </span>{airport.internationalTerminal}
              </div>
            )}
          </div>
        )}

        {/* Lounges (Texas airports) */}
        {isTexas && airport.lounges && airport.lounges.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Airport Lounges</h2>
            <div className="space-y-3">
              {airport.lounges.map((lounge, i) => (
                <div key={i} className="border border-gray-100 rounded-xl p-4">
                  <div className="font-semibold text-gray-900 mb-1">{lounge.name}</div>
                  {lounge.terminal && <div className="text-xs text-gray-500 mb-1">Terminal {lounge.terminal}</div>}
                  {lounge.terminals && <div className="text-xs text-gray-500 mb-1">Terminals {lounge.terminals.join(', ')}</div>}
                  <div className="text-sm text-gray-600">{lounge.access}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Parking (Texas airports) */}
        {isTexas && airport.transport?.parking && (
          <div className="mb-8 bg-amber-50 border border-amber-100 rounded-xl p-5">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Parking at {airport.iata}</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700">Terminal/close parking</span>
                <span className="font-semibold text-gray-900">{airport.transport.parking.terminal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Remote / economy parking</span>
                <span className="font-semibold text-gray-900">{airport.transport.parking.remote}</span>
              </div>
            </div>
            <p className="text-sm text-amber-800 mt-3">
              <span className="font-semibold">Pro tip: </span>{airport.transport.parking.tip}
            </p>
          </div>
        )}

        {/* Customs (international) */}
        {!isTexas && airport.customs && (
          <div className="mb-8 p-4 bg-blue-50 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-2">Customs & Immigration</h3>
            <p className="text-gray-700 text-sm">{airport.customs}</p>
          </div>
        )}

        {/* Tips */}
        {airport.tips && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {isTexas ? `Tips for Flying from ${airport.iata}` : `Tips for Arriving at ${airport.iata}`}
            </h2>
            <ul className="space-y-3">
              {airport.tips.map((tip, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-emerald-500 font-bold mt-0.5 shrink-0">✓</span>
                  <span className="text-gray-700 text-sm">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Best for */}
        {airport.bestFor && (
          <div className="mb-8 p-4 bg-emerald-50 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-1">Best For</h3>
            <p className="text-gray-700 text-sm">{airport.bestFor}</p>
          </div>
        )}

        {/* Back */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <Link to="/airports" className="text-emerald-600 font-semibold hover:underline">
            ← All airport guides
          </Link>
        </div>
      </div>
    </div>
  );
}
