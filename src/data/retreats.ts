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
    slug: 'yosemite-halloween',
    name: 'Yosemite National Park',
    location: 'California',
    dates: 'October 30–November 1 · Halloween party',
    fullDates: 'October 30 – November 1, 2026',
    startDate: '2026-10-30',
    totalFrom: '$500',
    groupSize: '16+ people',
    image: '/images/yosemite-tunnel-view-header.jpg',
    imageAlt: 'Misty Yosemite Valley with fall colors, seen from Tunnel View',
    heroImage: '/images/yosemite-tunnel-view-header.jpg',
    heroImageAlt: 'Misty Yosemite Valley with fall colors, seen from Tunnel View',
    summary:
      'Three days of Halloween fun in Yosemite — an unforgettable valley hike, a costume party, and a luxury villa with gaming rooms, a spa, and a hot tub.',
    description:
      "Join our Active Retreat in Yosemite National Park for a Halloween celebration and costume party. We're staying in a luxury villa with all amenities, gaming rooms, a spa, and a hot tub, with an unforgettable hike through Yosemite Valley in the middle of fall color season.",
    included: [
      'Villa accommodation, 2 nights, gaming rooms, spa & hot tub',
      'Round-trip transportation from LA (gas not included)',
      'Professional massage sessions',
      'BBQ, a Halloween costume party, & a sound healing session',
      'The full daily program \u2014 hike, sightseeing, and more',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Check-in & Halloween party',
        description:
          'Arrive and settle into the villa. Activities in the game room and on-site, spa, hot tub, a professional massage, a barbecue, and a Halloween costume party.',
      },
      {
        day: 'Day 2',
        title: 'Unforgettable hike in Yosemite Valley',
        description:
          'An unforgettable hike in Yosemite Valley. Back at the villa: activities in the game room and on-site, spa, hot tub, a professional massage, a barbecue, and a sound healing session.',
      },
      {
        day: 'Day 3',
        title: 'Scenic Yosemite & departure',
        description:
          'Activities in the game room and on-site, hot tub, and a visit to scenic places in Yosemite National Park before we leave the park.',
      },
    ],
    gallery: [
      { image: '/images/yosemite-half-dome-river.jpg', alt: 'Half Dome reflected in the Merced River among fall colors' },
      { image: '/images/yosemite-falls-fall-colors.jpg', alt: 'Yosemite Falls above golden and orange fall foliage' },
      { image: '/images/yosemite-half-dome-closeup.jpg', alt: 'Close-up of Half Dome with a dusting of snow' },
      { image: '/images/yosemite-villa-living.jpg', alt: 'Spacious villa living room with sectional sofas' },
      { image: '/images/yosemite-villa-game-room.jpg', alt: 'Villa game room with a pool table' },
      { image: '/images/yosemite-villa-hot-tub.jpg', alt: 'Villa hot tub and deck lit up in the evening' },
    ],
  },
  {
    slug: 'flagstaff-grand-canyon',
    name: 'The Grand Canyon & Flagstaff',
    location: 'Arizona',
    dates: 'October 16–18 · Private villa',
    fullDates: 'October 16–18, 2026',
    startDate: '2026-10-16',
    totalFrom: '$500',
    groupSize: '16+ people',
    image: '/images/flagstaff-watchtower-sunset-header.jpg',
    imageAlt: 'Desert View Watchtower overlooking the Grand Canyon at sunset',
    heroImage: '/images/flagstaff-watchtower-sunset-header.jpg',
    heroImageAlt: 'Desert View Watchtower overlooking the Grand Canyon at sunset',
    summary:
      'Three days between a private-rooftop villa in Flagstaff and the rim of the Grand Canyon — hikes through golden aspen forest, hot tub soaks, and a sound healing session under the stars.',
    description:
      "We're staying in a luxury villa with a private rooftop, tennis, and a hot tub, based in Flagstaff for easy access to the Grand Canyon and the golden aspen forests of northern Arizona. Expect scenic hikes, professional massage sessions, a BBQ and DJ party, and an evening sound healing session, with plenty of downtime on the rooftop between it all.",
    included: [
      'Villa accommodation, 2 nights, private rooftop, tennis & hot tub',
      'Round-trip transportation from LA (gas not included)',
      'Professional massage sessions',
      'BBQ, a DJ party, & an evening sound healing session',
      'The full daily program — hikes, sightseeing, and more',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Check-in',
        description:
          'Arrive and settle into the villa. Activities on-site and in the game room, hot tub, a professional massage session, a BBQ, and a party with a DJ.',
      },
      {
        day: 'Day 2',
        title: 'A scenic hike in the Grand Canyon',
        description:
          'A scenic hike in the Grand Canyon. Back at the villa: activities on-site and in the game room, hot tub, a professional massage session, a BBQ, and an evening sound healing session.',
      },
      {
        day: 'Day 3',
        title: 'Flagstaff autumn forest & scenic locations',
        description:
          "Hot tub and activities on-site and in the game room, then a scenic hike through the autumn forest and other scenic spots in Arizona on our way home.",
      },
    ],
    gallery: [
      { image: '/images/flagstaff-canyon-spire.jpg', alt: 'Layered canyon walls and a rock spire in the Grand Canyon' },
      { image: '/images/flagstaff-peaks-autumn.jpg', alt: 'Snow-capped San Francisco Peaks above a golden aspen forest' },
      { image: '/images/flagstaff-aspen-path.jpg', alt: 'A path through a golden aspen forest near Flagstaff' },
      { image: '/images/flagstaff-villa-rooftop-aerial.jpg', alt: 'Aerial view of the villa and its private rooftop deck' },
      { image: '/images/flagstaff-villa-rooftop-lounge.jpg', alt: 'The private rooftop with a hot tub, fire pit, and lounge seating' },
      { image: '/images/flagstaff-villa-kitchen.jpg', alt: 'Villa kitchen and dining area' },
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
      'Redwood National Park',
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
