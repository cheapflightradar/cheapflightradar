import React from 'react';

export const AUTHOR = {
  name: 'Alvaro Cajina',
  handle: 'alvaro105',
  title: 'Developer & travel blogger',
  photo: null, // swap in a URL when ready, e.g. 'https://...'
  bio: [
    "I'm Alvaro — born in Costa Rica (the coffee capital of the world, and somehow the one Costa Rican who doesn't drink the stuff). I've been living in Austin for the past 7 years, working as a programmer and slowly losing track of how many airports I've been through.",
    "I travel as much as I can, and over the years I've picked up a lot about how to do it without going broke. The right time to book, the tools that actually work, the eSIM that won't die on you in the middle of nowhere, the neighborhoods worth staying in versus the ones that just look good in photos.",
    "When I'm not at a gate somewhere, I'm out walking with my wife and our 3 senior dogs — which, honestly, is its own kind of adventure.",
    "This blog is everything I've learned — shared the way I'd tell a friend: honest, direct, no fluff.",
  ],
};

export function AuthorBio({ compact = false }) {
  return (
    <div className={`flex gap-5 ${compact ? 'items-center p-5 bg-gray-50 rounded-2xl border border-gray-100' : 'items-start'}`}>
      {/* Avatar */}
      <div className="shrink-0">
        {AUTHOR.photo ? (
          <img
            src={AUTHOR.photo}
            alt={AUTHOR.name}
            className={`rounded-full object-cover ${compact ? 'w-14 h-14' : 'w-20 h-20'}`}
          />
        ) : (
          <div className={`rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center font-bold text-white ${compact ? 'w-14 h-14 text-xl' : 'w-20 h-20 text-3xl'}`}>
            A
          </div>
        )}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        {compact ? (
          <>
            <p className="font-bold text-gray-900 text-base leading-tight">
              {AUTHOR.name}{' '}
              <a href="https://alvaro105.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-normal hover:underline">
                · {AUTHOR.handle}
              </a>
            </p>
            <p className="text-xs text-gray-500 mt-0.5 mb-2">{AUTHOR.title}</p>
            <p className="text-sm text-gray-600 leading-relaxed">{AUTHOR.bio[0]}</p>
          </>
        ) : (
          <>
            <p className="font-bold text-gray-900 text-xl mb-0.5">
              {AUTHOR.name}{' '}
              <a href="https://alvaro105.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-normal text-base hover:underline">
                · {AUTHOR.handle}
              </a>
            </p>
            <p className="text-sm text-emerald-600 font-medium mb-4">{AUTHOR.title}</p>
            <div className="space-y-3">
              {AUTHOR.bio.map((p, i) => (
                <p key={i} className="text-gray-700 leading-relaxed">{p}</p>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AuthorBio;
