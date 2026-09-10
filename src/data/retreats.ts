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
  {
    slug: 'bryce-canyon',
    name: 'Bryce Canyon National Park',
    location: 'Utah',
    dates: 'October 2–4 · Private villa',
    fullDates: 'October 2–4, 2026',
    startDate: '2026-10-02',
    totalFrom: '$500',
    groupSize: '16+ people',
    image: '/images/bryce-hoodoos-sunrise-header.jpg',
    imageAlt: 'Sunrise over the hoodoos of Bryce Canyon National Park',
    heroImage: '/images/bryce-hoodoos-sunrise-header.jpg',
    heroImageAlt: 'Sunrise over the hoodoos of Bryce Canyon National Park',
    summary:
      "Three days chasing epic hikes through Bryce Canyon's otherworldly hoodoos, from a luxury villa with a home theater, spa, and hot tub.",
    description:
      "Bryce Canyon National Park is home to the largest collection of hoodoos on Earth — otherworldly rock spires that glow fire-orange at sunrise. We stay in a luxury villa with a home theater, a huge private plot, a spa, and a hot tub, with plenty of room to relax between adventures.",
    included: [
      'Villa accommodation, 2 nights, home cinema, spa & hot tub',
      'Round-trip transportation from LA (gas not included)',
      'Professional massage session',
      'BBQ, a DJ party, & an evening sound healing session',
      'The full daily program — hikes, sightseeing, and more',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Check-in',
        description:
          'Arrive and settle into the villa. Activities on-site, hot tub, spa, a BBQ, a professional massage, and a party with a DJ to kick things off.',
      },
      {
        day: 'Day 2',
        title: 'Hike with epic views',
        description:
          "A hike through Bryce Canyon with some of the most epic views in the park. Back at the villa: hot tub, spa, more activities, a professional massage, and an evening sound healing session.",
      },
      {
        day: 'Day 3',
        title: 'Scenic Bryce Canyon & departure',
        description:
          "A professional massage session and a visit to some of Bryce Canyon's most scenic spots before we head home.",
      },
    ],
    gallery: [
      { image: '/images/bryce-hoodoos-aerial.jpg', alt: 'Wide aerial view of the hoodoos of Bryce Canyon' },
      { image: '/images/bryce-hoodoos-closeup.jpg', alt: 'Close-up of the fire-orange hoodoo spires' },
      { image: '/images/bryce-lake-fall-colors.jpg', alt: 'A scenic lake surrounded by fall colors near Bryce Canyon' },
      { image: '/images/bryce-villa-exterior.jpg', alt: 'Aerial view of the private villa with red rock mountains behind it' },
      { image: '/images/bryce-villa-deck-sunset.jpg', alt: 'Villa deck at sunset with mountain views' },
      { image: '/images/bryce-villa-living.jpg', alt: 'Villa kitchen, dining, and living area' },
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
