// ==================== AFFILIATE LINKS CONFIG ====================
// Update AIRALO_REF_CODE with your actual Airalo referral code
// Update KIWI_PARTNER_ID with your Kiwi.com partner ID when available

const AIRALO_REF_CODE = 'CHEAPFLIGHTRADAR'; // TODO: Replace with real code from airalo.com/affiliate

export const affiliates = {
  // ── Airalo eSIM ─────────────────────────────────────────────
  airalo: {
    name: 'Airalo',
    tagline: 'Best eSIM marketplace. Works in 200+ countries.',
    home: `https://www.airalo.com/referral?code=${AIRALO_REF_CODE}`,
    country: (countrySlug) =>
      `https://www.airalo.com/${countrySlug}-esim?ref=${AIRALO_REF_CODE}`,
    cta: 'Get Your eSIM on Airalo',
    note: 'First-time users get 10% off with our link',
  },

  // ── Saily eSIM (backup / comparison) ────────────────────────
  saily: {
    name: 'Saily',
    tagline: 'Reliable eSIM by Nord. No data caps on popular plans.',
    home: 'https://saily.com',
    cta: 'Check Saily Plans',
    note: 'Good alternative to Airalo for some regions',
  },

  // ── Kiwi.com flights ────────────────────────────────────────
  kiwi: {
    name: 'Kiwi.com',
    tagline: 'Find the cheapest flights with flexible dates.',
    search: (origin, dest) =>
      `https://www.kiwi.com/en/search/results/${origin}/${dest}/anytime/anytime`,
    searchDates: (origin, dest, depart, ret) =>
      `https://www.kiwi.com/en/search/results/${origin}/${dest}/${depart}/${ret}`,
    home: 'https://www.kiwi.com',
    cta: 'Search Flights on Kiwi',
    note: 'Mix-and-match airlines for cheaper fares',
  },

  // ── Expedia hotels ──────────────────────────────────────────
  expedia: {
    name: 'Expedia',
    tagline: 'Hotels, vacation rentals, and packages.',
    search: (city) =>
      `https://www.expedia.com/Hotel-Search?destination=${encodeURIComponent(city)}`,
    home: 'https://www.expedia.com',
    cta: 'Find Hotels on Expedia',
    note: 'Bundle flights + hotel for extra savings',
  },

  // ── Booking.com hotels (fallback) ───────────────────────────
  booking: {
    name: 'Booking.com',
    tagline: 'Huge selection of hotels and apartments.',
    search: (city) =>
      `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(city)}`,
    home: 'https://www.booking.com',
    cta: 'Find Hotels on Booking.com',
    note: 'Free cancellation on most properties',
  },
};

export default affiliates;
