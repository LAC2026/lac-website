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
  summary: 'Full balance due at booking \u2014 no deposit option.',
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
    slug: 'tahoe',
    name: 'Lake Tahoe & Eastern Sierra',
    location: 'California',
    dates: 'August 7–9 · Private villa',
    fullDates: 'August 7–9, 2026',
    startDate: '2026-08-07',
    totalFrom: '$500',
    groupSize: '14+ people',
    image: '/images/tahoe-lake.png',
    imageAlt: 'Lake Tahoe\u2019s turquoise water and the Eastern Sierra',
    heroImage: '/images/tahoe-lake.png',
    heroImageAlt: 'Lake Tahoe\u2019s turquoise water and the Eastern Sierra',
    summary: 'Alpine lakes, waterfalls, and hot springs in the Eastern Sierra, with Lake Tahoe\u2019s famously clear water as the grand finale.',
    description:
      "Some of the most beautiful scenery in California, packed into three days: a hike through the Eastern Sierra past alpine lakes and waterfalls, a soak in a natural hot spring, and a swim in Lake Tahoe's impossibly clear water. Home base is a luxury villa with a hot tub and sauna, and views gorgeous enough that you may not want to leave the porch.",
    included: [
      'Villa accommodation, 2 nights, hot tub & sauna',
      'Round-trip transportation from LA',
      'Professional massage session',
      'BBQ party & an evening sound healing session',
      'The full daily program \u2014 hikes, hot springs, swimming, and more',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Check-in',
        description:
          'Arrive and settle into the villa. Activities on-site, hot tub, sauna, a professional massage session, BBQ and a party to kick things off.',
      },
      {
        day: 'Day 2',
        title: 'Eastern Sierra hike',
        description:
          'A hike through some of the most picturesque mountains in the Eastern Sierra, past alpine lakes. Back at the villa: a professional massage session, hot tub, sauna, BBQ, and an evening sound healing session.',
      },
      {
        day: 'Day 3',
        title: 'Lake Tahoe & hot springs',
        description:
          'Swimming and water activities on Lake Tahoe, a stop at a geological hot spring site, then we head home.',
      },
    ],
    gallery: [
      { image: '/images/tahoe-lake.png', alt: 'Lake Tahoe\u2019s turquoise water and the Eastern Sierra' },
      { image: '/images/tahoe-villa-deck.png', alt: 'Villa deck at sunset, Eastern Sierra' },
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
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Creek_in_old_growth_redwood_forest.jpg?width=700',
    imageAlt: 'Creek in an old-growth redwood forest',
    heroImage:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Creek_in_old_growth_redwood_forest.jpg?width=1800',
    heroImageAlt: 'Creek in an old-growth redwood forest',
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
      {
        image:
          'https://commons.wikimedia.org/wiki/Special:FilePath/Fern_Canyon_in_Redwood_National_Park,_California_with_tree_upside_down..jpg?width=900',
        alt: 'Fern Canyon in Redwood National Park',
      },
      {
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hidden_Beach_in_Redwood_National_Park,_California.jpg?width=900',
        alt: 'Hidden Beach in Redwood National Park',
      },
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
