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
  depositFrom: string;
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

export const retreats: Retreat[] = [
  {
    slug: 'zion',
    name: 'Zion & The Narrows',
    location: 'Utah',
    dates: 'June 5–7 · Private villa',
    fullDates: 'June 5–7, 2026',
    depositFrom: '$150',
    totalFrom: '$650',
    groupSize: '12–16 people',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Landscape_in_Zion_National_Park_(3443199093).jpg?width=700',
    imageAlt: 'Zion National Park landscape',
    heroImage:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Zion_angels_landing_view.jpg?width=1800',
    heroImageAlt: 'Zion Canyon at sunset, viewed from Angels Landing',
    summary: 'Three days chasing red rock and river canyons, based out of a private villa in Springdale.',
    description:
      "Zion is the retreat that started it all for a lot of LAC regulars — a mix of exposed ridgeline hiking (Angels Landing) and cool river-canyon wading (The Narrows), bookended by group dinners on the villa deck. We keep the group small enough that everyone actually hikes together, at a pace that works for the group.",
    included: [
      'Private villa, 2 nights, shared rooms',
      'Angels Landing + Narrows permits handled for you',
      'Group dinners on Friday & Saturday night',
      'Round-trip shuttle from the LA meeting point',
      'A trip lead with you on every hike',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrive & acclimate',
        description:
          'Shuttle out from LA Friday morning, check into the villa by early afternoon, then an easy warm-up hike (Watchman Trail) to catch sunset over the canyon.',
      },
      {
        day: 'Day 2',
        title: 'Angels Landing',
        description:
          "Early start for the main event — the chained switchbacks up to Angels Landing. Not required for everyone; there's a turnaround point with just as good a view if the exposure isn't your thing. Afternoon free to nap, swim, or explore Springdale.",
      },
      {
        day: 'Day 3',
        title: 'The Narrows & departure',
        description:
          'Morning wading through the Virgin River into The Narrows — bring shoes you don\u2019t mind getting wet. Lunch in town, then shuttle back to LA by early evening.',
      },
    ],
    gallery: [
      {
        image:
          'https://commons.wikimedia.org/wiki/Special:FilePath/Landscape_in_Zion_National_Park_(3443199093).jpg?width=900',
        alt: 'Zion National Park landscape',
      },
      {
        image: 'https://picsum.photos/seed/zion-narrows/900/700',
        alt: 'Hikers wading through The Narrows',
      },
      {
        image: 'https://picsum.photos/seed/zion-villa/900/700',
        alt: 'Villa deck at sunset',
      },
    ],
  },
  {
    slug: 'shasta',
    name: 'Mt. Shasta',
    location: 'California',
    dates: 'June 19–21 · Villa & hot springs',
    fullDates: 'June 19–21, 2026',
    depositFrom: '$150',
    totalFrom: '$600',
    groupSize: '12–16 people',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mount_Shasta,_California.jpg?width=700',
    imageAlt: 'Mount Shasta, California',
    heroImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/MtShastaFromMtShastaCity.JPG?width=1800',
    heroImageAlt: 'Mount Shasta viewed from Mount Shasta City',
    summary: 'A slower-paced mountain weekend — alpine meadow hikes by day, natural hot springs by night.',
    description:
      "Shasta is the reset-button retreat. Less mileage than our other trips, more time to actually breathe. We hike through alpine meadows and old-growth forest during the day, then soak at a nearby natural hot spring in the evening.",
    included: [
      'Villa, 2 nights, shared rooms',
      'Guided hikes both days',
      'Hot springs entry, Saturday evening',
      'Group dinners on Friday & Saturday night',
      'Round-trip shuttle from the LA meeting point',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrive & settle in',
        description:
          'Drive up Friday afternoon, check into the villa, easy evening with a group dinner — no hiking on arrival day.',
      },
      {
        day: 'Day 2',
        title: 'Meadow hike & hot springs',
        description:
          'A moderate 6-mile loop through alpine meadow with Shasta views the whole way. Evening at the hot springs to recover.',
      },
      {
        day: 'Day 3',
        title: 'Forest walk & departure',
        description:
          'A shorter, easy forest trail before breakfast, then pack up and head back to LA by afternoon.',
      },
    ],
    gallery: [
      { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mount_Shasta,_California,_USA_-_panoramio.jpg?width=900', alt: 'Mount Shasta, California' },
      { image: 'https://picsum.photos/seed/shasta-springs/900/700', alt: 'Natural hot springs at dusk' },
      { image: 'https://picsum.photos/seed/shasta-group/900/700', alt: 'Group dinner on the villa deck' },
    ],
  },
  {
    slug: 'maui',
    name: 'Maui, Hawaii',
    location: 'Hawaii',
    dates: 'July 12–17 · Oceanview villa',
    fullDates: 'July 12–17, 2026',
    depositFrom: '$250',
    totalFrom: '$1,450',
    groupSize: '10–14 people',
    image: '/images/maui-coastline.png',
    imageAlt: 'Maui coastline at sunset',
    heroImage: '/images/maui-coastline.png',
    heroImageAlt: 'Maui coastline at sunset',
    summary: 'Six days on Maui, alternating scenic hikes and beach days, based out of a hillside villa with ocean views and a jacuzzi.',
    description:
      "Our longest and most requested retreat. Six days based out of a hillside villa overlooking the ocean, with a jacuzzi, tropical forest, and a huge balcony. The days alternate between scenic hikes with incredible views (plus red sand and black sand beaches) and full beach days spent road-tripping around the island to its most iconic spots. Massage and sound healing are worked in throughout, with a couple of DJ nights along the way. Spots are limited.",
    included: [
      'Villa accommodation, 5 nights, ocean-view with jacuzzi',
      'Transportation around the island for the full trip',
      'The full daily program (hikes, beach days, activities)',
      'Professional massage on hike days',
      'Two evening sound healing sessions',
      'Two DJ parties',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Check-in & beach day',
        description: 'Arrive and settle into the villa, then head to the beach for the afternoon. Villa activities and a BBQ in the evening.',
      },
      {
        day: 'Day 2',
        title: 'Hike day',
        description: 'Road trip out to a scenic hike with incredible views, plus a stop at both a red sand and a black sand beach. Villa activities and massage in the evening, followed by a sound healing session.',
      },
      {
        day: 'Day 3',
        title: 'Beach day',
        description: 'Island exploration and a road trip to some of Maui\u2019s most significant spots and beaches. Free time for extra activities, massage, and a DJ party in the evening.',
      },
      {
        day: 'Day 4',
        title: 'Hike day',
        description: 'Another scenic hike with incredible views, plus beach time. Villa activities, massage, and a sound healing session in the evening.',
      },
      {
        day: 'Day 5',
        title: 'Beach day',
        description: 'More island exploration and a road trip to standout spots and beaches. Free time for extra activities, massage, and a second DJ party.',
      },
      {
        day: 'Day 6',
        title: 'Beach day & departure',
        description: 'A relaxed final day with free time and a last visit to a few standout spots and beaches before departing the villa.',
      },
    ],
    gallery: [
      { image: '/images/maui-coastline.png', alt: 'Maui coastline at sunset' },
      { image: '/images/maui-villa.png', alt: 'The hillside villa at sunset' },
    ],
  },
  {
    slug: 'tahoe',
    name: 'Lake Tahoe & Eastern Sierra',
    location: 'California',
    dates: 'August 7–9 · Private villa',
    fullDates: 'August 7–9, 2026',
    depositFrom: '$150',
    totalFrom: '$750',
    groupSize: '12–16 people',
    image: '/images/tahoe-lake.png',
    imageAlt: 'Lake Tahoe\u2019s turquoise water and the Eastern Sierra',
    heroImage: '/images/tahoe-lake.png',
    heroImageAlt: 'Lake Tahoe\u2019s turquoise water and the Eastern Sierra',
    summary: 'Alpine lakes, waterfalls, and hot springs in the Eastern Sierra, with Lake Tahoe itself as the grand finale.',
    description:
      "Three days based out of a villa with a sauna and jacuzzi, mixing a guided hike through some of the most scenic mountains in the Eastern Sierra with real rest: professional massages, a sound healing session, and a soak in a natural hot spring. We close it out with a swim in Lake Tahoe's famously clear water.",
    included: [
      'Private villa, 2 nights, sauna & jacuzzi on-site',
      'Guided hike through the Eastern Sierra',
      'Professional massage, both days',
      'BBQ dinners on the villa deck',
      'Evening sound healing session',
      'Hot springs & Lake Tahoe swimming',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival & check-in',
        description:
          'Settle into the villa, then ease in with jacuzzi and sauna time, a professional massage, and a BBQ dinner together.',
      },
      {
        day: 'Day 2',
        title: 'Eastern Sierra hike',
        description:
          'A guided hike through the Eastern Sierra past alpine lakes and waterfalls. Back at the villa: another massage, jacuzzi and sauna, BBQ dinner, and an evening sound healing session.',
      },
      {
        day: 'Day 3',
        title: 'Lake Tahoe & hot springs',
        description:
          "Swimming and water activities on Lake Tahoe, a visit to a natural hot spring at a geologically active spot, then departure.",
      },
    ],
    gallery: [
      { image: '/images/tahoe-lake.png', alt: 'Lake Tahoe\u2019s turquoise water and the Eastern Sierra' },
      { image: '/images/tahoe-villa-deck.png', alt: 'Villa deck at sunset, Eastern Sierra' },
    ],
  },
  {
    slug: 'kings-canyon',
    name: 'Kings Canyon',
    location: 'California',
    dates: 'July 24–26 · Private villa',
    fullDates: 'July 24–26, 2026',
    depositFrom: '$150',
    totalFrom: '$800',
    groupSize: '12–16 people',
    image: '/images/kings-canyon-river.png',
    imageAlt: 'Kings Canyon granite peaks and river',
    heroImage: '/images/kings-canyon-river.png',
    heroImageAlt: 'Kings Canyon granite peaks and river',
    summary: 'Granite walls, a rushing river, and a forest of giant sequoias &mdash; with a villa that has its own pool, movie theater, and private golf course.',
    description:
      "Kings Canyon combines some of the biggest granite walls in the state, dense conifer forest, and the Kings River running through all of it. We hike one of the most scenic canyons in the country, then head to the giant sequoia grove to stand under the General Grant Tree. Home base is a villa with a pool, movie theater, and private golf course for the downtime in between.",
    included: [
      'Private villa, 2 nights, pool, movie theater & private golf course',
      'Guided hike through Kings Canyon',
      'Professional massage, all three days',
      'BBQ parties',
      'Evening sound healing session',
      'Giant sequoia forest visit, including the General Grant Tree',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival & check-in',
        description:
          'Settle into the villa, then ease in with the game room, pool, a professional massage, and a BBQ party.',
      },
      {
        day: 'Day 2',
        title: 'Kings Canyon hike',
        description:
          'A guided hike through Kings Canyon with dramatic granite views. Back at the villa: pool and game room time, another massage, a BBQ, and an evening sound healing session.',
      },
      {
        day: 'Day 3',
        title: 'Giant sequoias & departure',
        description:
          'A relaxed morning at the villa, then a visit to the giant sequoia forest and the General Grant Tree before heading back.',
      },
    ],
    gallery: [
      { image: '/images/kings-canyon-river.png', alt: 'Kings Canyon granite peaks and river' },
      { image: '/images/kings-canyon-villa-gate.png', alt: 'Villa entrance at dusk' },
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
