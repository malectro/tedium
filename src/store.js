/* @flow */

import type {Store} from './store-types';

const store: Store = {
  items: {
    '1': {
      id: 1,
      title: 'The Power of Maybe',
      subtitle: 'You don\'t always have to say "yes" or "no".',
      photo: '/images/1200px-Iridiumi_satelliidi_sähvatus.jpg',
      author: 'John Jackson',
      text:
`Imagine getting an invite to the party of the year.

But other times there are things you do.
      `,
    },
    '2': {
      id: 2,
      title: 'What Wake Boarding Taught Me About Running a Startup',
      subtitle: 'It\'s not what you expect.',
      photo: '/images/1200px-Falcon_9_first_stage_at_LZ-1(two).jpg',
      author: 'Peter Blue',
      text:
`It's early Friday morning and the glassy water of the lake ripples across my feet.
      `,
    },
    '4': {
      id: 4,
      title: 'Idea: Soylent + Coffee?',
      subtitle: 'How did I not think of this before?',
      photo: '/images/1200px-Municipal_Market_of_São_Paulo_city.jpg',
      author: 'Alex Peters',
      text:
`Okay guys, let's do this. Soylent and Coffee are literally two of my favorite things.
      `,
    },
  },
  feed: [
    '1',
    '2',
    '4',
  ],
  recs: {
    'picks': {
      slug: 'picks',
      title: 'Intern\'s Picks',
      subtitle: 'Probably interesting?',
      order: [
        '1', '2', '4',
      ],
    },
    'random': {
      slug: 'random',
      title: 'Random Stuff',
      subtitle: 'Curation is hard, guys.',
      order: [
        '1', '2', '4',
      ],
    },
    'event': {
      slug: 'event',
      title: 'Apple Announcement',
      subtitle: 'New things to buy.',
      order: [
        '1', '2', '4',
      ],
    },
  },
};


export default store;

