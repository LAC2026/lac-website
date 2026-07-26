export interface ItineraryDay {
  day: string;
  title: string;
  description: string;
}

export interface Retreat {
  slug: string;
  name: string;
  location: string;
  mile: string;
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
    mile: 'MI 1.6',
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
    mile: 'MI 1.7',
    dates: 'June 19–21 · Villa & hot springs',
    fullDates: 'June 19–21, 2026',
    depositFrom: '$150',
    totalFrom: '$600',
    groupSize: '12–16 people',
    image: 'https://picsum.photos/seed/shasta/700/600',
    imageAlt: 'Mount Shasta alpine meadow',
    heroImage: 'https://picsum.photos/seed/shasta-hero/1800/1000',
    heroImageAlt: 'Mount Shasta at golden hour',
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
      { image: 'https://picsum.photos/seed/shasta-meadow/900/700', alt: 'Alpine meadow with Shasta in the background' },
      { image: 'https://picsum.photos/seed/shasta-springs/900/700', alt: 'Natural hot springs at dusk' },
      { image: 'https://picsum.photos/seed/shasta-group/900/700', alt: 'Group dinner on the villa deck' },
    ],
  },
  {
    slug: 'maui',
    name: 'Maui, Hawaii',
    location: 'Hawaii',
    mile: 'MI 1.8',
    dates: 'July 12–17 · Oceanview villa',
    fullDates: 'July 12–17, 2026',
    depositFrom: '$250',
    totalFrom: '$1,450',
    groupSize: '10–14 people',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Riding_the_waves_on_Maui,_Hawaii_(45689855972).jpg?width=700',
    imageAlt: 'Maui, Hawaii coastline',
    heroImage:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Na_Pali_Coast,_Kauai,_Hawaii.jpg?width=1800',
    heroImageAlt: 'Dramatic Hawaiian coastline',
    summary: 'Five days on Maui — waterfall hikes, snorkeling, and an oceanview villa to come home to every night.',
    description:
      "Our longest and most requested retreat. Five days based out of an oceanview villa, mixing bigger hiking days (Haleakalā crater, the Pipiwai Trail to Waimoku Falls) with true rest days — snorkeling, beach time, and nothing on the schedule at all.",
    included: [
      'Oceanview villa, 5 nights, shared rooms',
      'Haleakalā entry permit',
      'One guided snorkel excursion',
      'Group dinners on 3 of the 5 nights',
      'Airport pickup/drop-off on Maui (flights not included)',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrive on Maui',
        description: 'Fly in, group pickup at the airport, check into the villa, easy welcome dinner.',
      },
      {
        day: 'Day 2',
        title: 'Haleakalā sunrise',
        description: 'Very early start to catch sunrise above the clouds at the crater rim, then a relaxed rest of the day back at the villa.',
      },
      {
        day: 'Day 3',
        title: 'Pipiwai Trail & Waimoku Falls',
        description: 'A bamboo-forest hike out to a 400-foot waterfall along the Road to Hana.',
      },
      {
        day: 'Day 4',
        title: 'Snorkel day',
        description: 'Guided snorkel excursion in the morning, free beach afternoon.',
      },
      {
        day: 'Day 5',
        title: 'Departure',
        description: 'Slow morning at the villa, airport drop-off in the afternoon.',
      },
    ],
    gallery: [
      { image: 'https://picsum.photos/seed/maui-falls/900/700', alt: 'Waimoku Falls' },
      { image: 'https://picsum.photos/seed/maui-snorkel/900/700', alt: 'Snorkeling off the Maui coast' },
      { image: 'https://picsum.photos/seed/maui-villa/900/700', alt: 'Oceanview villa terrace' },
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

export const waypoints = [
  { target: 'hero', mile: 'MI 0.0', top: '2%' },
  { target: 'intro', mile: 'MI 0.4', top: '19%' },
  { target: 'split', mile: 'MI 0.9', top: '34%' },
  { target: 'retreats', mile: 'MI 1.6', top: '53%' },
  { target: 'testimonial', mile: 'MI 2.1', top: '68%' },
  { target: 'instagram', mile: 'MI 2.6', top: '82%' },
  { target: 'newsletter', mile: 'MI 3.0', top: '96%' },
];
