export interface Retreat {
  slug: string;
  name: string;
  location: string;
  mile: string;
  dates: string;
  depositFrom: string;
  image: string;
  imageAlt: string;
}

export const retreats: Retreat[] = [
  {
    slug: 'zion',
    name: 'Zion & The Narrows',
    location: 'Utah',
    mile: 'MI 1.6',
    dates: 'June 5–7 · Private villa',
    depositFrom: '$150',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Landscape_in_Zion_National_Park_(3443199093).jpg?width=700',
    imageAlt: 'Zion National Park landscape',
  },
  {
    slug: 'shasta',
    name: 'Mt. Shasta',
    location: 'California',
    mile: 'MI 1.7',
    dates: 'June 19–21 · Villa & hot springs',
    depositFrom: '$150',
    image: 'https://picsum.photos/seed/shasta/700/600',
    imageAlt: 'Mount Shasta alpine meadow',
  },
  {
    slug: 'maui',
    name: 'Maui, Hawaii',
    location: 'Hawaii',
    mile: 'MI 1.8',
    dates: 'July 12–17 · Oceanview villa',
    depositFrom: '$250',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Riding_the_waves_on_Maui,_Hawaii_(45689855972).jpg?width=700',
    imageAlt: 'Maui, Hawaii coastline',
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
