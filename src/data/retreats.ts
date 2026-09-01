export interface ItineraryDay {
  day: string;
  title: string;
  description: string;
}

export interface Retreat {
  slug: string;
  name: string;
  location: string;
  dates: string;
  fullDates: string;
  startDate: string; // ISO date (YYYY-MM-DD), used to close payments 3 days before departure
  totalFrom: string;
  groupSize: string;
  image: string;
  imageAlt: string;
  heroImage: string;
  heroImageAlt: string;
  summary: string;
  description: string;
  included: string[];
  itinerary: ItineraryDay[];
  gallery: { image: string; alt: string }[];
}

export const refundPolicy = {
  summary: 'Full balance due at booking.',
  tiers: [
    { window: '20+ days before departure', amount: '100% refund' },
    { window: '10\u201319 days before departure', amount: '50% refund' },
    { window: 'Less than 10 days before departure', amount: 'No refund' },
  ],
  bookingCutoff:
    'Bookings close 3 days before departure and payments can no longer be accepted after that point.',
  companyCancellation:
    "If LA Activity Club cancels a retreat for a reason within our control, guests will receive a 100% refund of all amounts paid for that retreat, regardless of the refund schedule above. This guarantee does not extend to cancellations caused by events outside our reasonable control (including severe weather, natural disasters, government restrictions, or other force majeure events); in those cases we will work with guests in good faith on rescheduling or a partial refund where possible.",
};

export const retreats: Retreat[] = [
  {
    slug: 'zion',
    name: 'Zion National Park',
    location: 'Utah',
    dates: 'September 4–6 · Private villa',
    fullDates: 'September 4–6, 2026',
    startDate: '2026-09-04',
    totalFrom: '$500',
    groupSize: '14+ people',
    image: '/images/zion-canyon.png',
    imageAlt: 'Sunset over the canyon walls of Zion National Park',
    heroImage: '/images/zion-canyon.png',
    heroImageAlt: 'Sunset over the canyon walls of Zion National Park',
    summary:
      "A weekend chasing one of the country's most iconic hikes — The Narrows — from a private villa with a rooftop, game rooms, and a jacuzzi.",
    description:
      "Zion National Park is home to The Narrows, one of the most iconic hikes in the country, where the trail becomes the river itself as it winds between towering canyon walls. We stay at a private villa built for the group, with a rooftop, game rooms, a jacuzzi, and plenty of shared space to relax between adventures.",
    included: [
      'Villa accommodation, 2 nights, jacuzzi, rooftop & game rooms',
      'Round-trip transportation from LA',
      'Professional massage session',
      'BBQ & an evening Sound Healing session',
      'The full daily program — The Narrows hike, swimming, and more',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Check-in',
        description:
          'Arrive and settle into the villa. Activities on the grounds and by the pool, jacuzzi, a BBQ, a professional massage session, and a party to kick things off.',
      },
      {
        day: 'Day 2',
        title: 'The Narrows',
        description:
          'A hike through the picturesque canyon along the Narrows river. Back at the villa: activities on the grounds and by the pool, jacuzzi, a professional massage session, BBQ, and an evening Sound Healing session.',
      },
      {
        day: 'Day 3',
        title: 'Lake day & departure',
        description:
          "A professional massage session, swimming and water activities at the lake, and a stop at some of the area's most significant sites before we head home.",
      },
    ],
    gallery: [
      { image: '/images/zion-narrows-sunset.jpg', alt: 'Sunset light over the canyon at Observation Point, Zion' },
      { image: '/images/zion-narrows-glow.jpg', alt: 'Golden canyon light inside The Narrows' },
      { image: '/images/zion-narrows-water.jpg', alt: 'Wading through the river inside The Narrows' },
      { image: '/images/zion-lake-day.jpg', alt: 'Cliff jumping and swimming on lake day' },
      { image: '/images/zion-villa-living.jpg', alt: 'Villa living room and game area with desert views' },
    ],
  },
  {
    slug: 'redwood',
    name: 'Redwood National Park',
    location: 'California',
    dates: 'September 18–20 · Private villa',
    fullDates: 'September 18–20, 2026',
    startDate: '2026-09-18',
    totalFrom: '$500',
    groupSize: '16+ people',
    image: '/images/redwood-fern-canyon-header.jpg',
    imageAlt: 'Sunlit walls of ferns towering over the trail through Fern Canyon',
    heroImage: '/images/redwood-fern-canyon-header.jpg',
    heroImageAlt: 'Sunlit walls of ferns towering over the trail through Fern Canyon',
    summary: 'Three days under the tallest trees on Earth, with a stop in the otherworldly Fern Canyon and the Northern California coast.',
    description:
      "Redwood National Park is genuinely otherworldly: giant, ancient trees along the Pacific coast, the moss-draped walls of Fern Canyon, and some of the most dramatic coastline in Northern California. We stay in a huge private villa deep in the conifer forest, with a hot tub, a big private plot, and plenty of room to spread out.",
    included: [
      'Villa accommodation, 2 nights, hot tub & large private grounds',
      'Round-trip transportation from LA (gas not included)',
      'Professional massage session',
      'BBQ, a DJ party, & an evening sound healing session',
      'The full daily program \u2014 hikes, sightseeing, and more',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Check-in',
        description:
          'Arrive and settle into the villa. Activities on-site, a BBQ, hot tub, a professional massage, and a party with a DJ to kick things off.',
      },
      {
        day: 'Day 2',
        title: 'Redwoods & Fern Canyon',
        description:
          'A hike through Redwood National Park and the otherworldly Fern Canyon. Back at the villa: BBQ, hot tub, more activities, a professional massage, and an evening sound healing session.',
      },
      {
        day: 'Day 3',
        title: 'The Northern California coast',
        description:
          'A relaxed day visiting the most significant spots in the redwoods and the dramatic Northern California coastline before heading home.',
      },
    ],
    gallery: [
      { image: '/images/redwood-fern-canyon.jpg', alt: 'The moss-and-fern-draped walls of Fern Canyon' },
      { image: '/images/redwood-fern-walkway.jpg', alt: 'Boardwalk crossing the creek through Fern Canyon' },
      { image: '/images/redwood-forest-rays.jpg', alt: 'Sunlight streaming through the old-growth redwoods' },
      { image: '/images/redwood-coastal-cove.jpg', alt: 'A quiet cove along the Northern California coast' },
      { image: '/images/redwood-villa-living.jpg', alt: 'Villa living room and dining area' },
      { image: '/images/redwood-coastal-view.jpg', alt: 'Elevated view of the coastline and lagoon near Redwood National Park' },
    ],
  },
];

export const igPhotos = [
  {
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Maui,_Hawaii_(Unsplash).jpg?width=500',
    alt: 'Maui, Hawaii coastline',
  },
  {
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Tunnel_View,_Yosemite_Valley,_Yosemite_NP_-_Diliff.jpg?width=500',
    alt: 'Tunnel View, Yosemite Valley',
  },
  {
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/General_Sherman_Sequoia_Tree.jpg?width=500',
    alt: 'General Sherman giant sequoia tree',
  },
  {
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Creek_in_old_growth_redwood_forest.jpg?width=500',
    alt: 'Creek in an old-growth redwood forest',
  },
  {
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Wide_View_of_Sedona_Red_Rock_Country.jpg?width=500',
    alt: 'Sedona red rock country',
  },
  {
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Colors_of_the_Grand_Canyon_(30569973160).jpg?width=500',
    alt: 'Grand Canyon',
  },
];

export interface PastTripsYear {
  year: string;
  trips: string[];
}

export const pastTripsHistory: PastTripsYear[] = [
  {
    year: '2026',
    trips: [
      'Yosemite National Park',
      'Sequoia National Park',
      'Grand Canyon',
      'Bryce Canyon',
      'Zion & The Narrows',
      'Mt. Shasta',
      'Hawaii \u2014 Maui',
      'Lake Tahoe & Eastern Sierra',
    ],
  },
  {
    year: '2025',
    trips: [
      'Joshua Tree',
      'Hawaii \u2014 Maui',
      'Zion National Park',
      'Yosemite National Park',
      'Sedona',
      'Sequoia National Park',
      'Grand Canyon & Flagstaff',
      'Hawaii \u2014 Kauai',
      'Zion & The Narrows',
      'Mt. Shasta',
      'Lake Tahoe',
      'Sequoia National Park',
      'Hawaii \u2014 Maui',
      'Redwood National Park',
      'Bryce Canyon National Park',
      'Grand Canyon & Flagstaff',
      'Yosemite (Halloween)',
      'Sedona',
      'Horseshoe Bend & Antelope Canyon',
      'Zion National Park',
      'Mammoth Lakes (New Year)',
    ],
  },
];
