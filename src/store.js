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
    '3': {
      id: 3,
      title: 'Tech\'s Diversity Problem',
      subtitle: 'Too many women?',
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
    '5': {
      id: 5,
      title: 'The Plight of The Rich',
      subtitle: '',
      author: 'Alex Peters',
      text:
`Okay guys, let's do this. Soylent and Coffee are literally two of my favorite things.
      `,
    },
    '6': {
      id: 6,
      title: '3 Days Without Wifi',
      subtitle: '',
      author: 'Ryan Lin',
      text:
`Okay guys, let's do this. Soylent and Coffee are literally two of my favorite things.
      `,
    },
    '7': {
      id: 7,
      title: 'Plump',
      subtitle: '',
      author: 'a heavyweight, font-agnostic build system',
      text:
`Okay guys, let's do this. Soylent and Coffee are literally two of my favorite things.
      `,
    },
    '8': {
      id: 8,
      title: 'AppletJS',
      subtitle: '',
      author: 'java applets in pure javascript',
      text:
`Okay guys, let's do this. Soylent and Coffee are literally two of my favorite things.
      `,
    },
    '9': {
      id: 9,
      title: 'TrackAll',
      subtitle: '',
      author: 'Track everything! Increase load times! ABCD Test!',
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
        '3', '5', '6',
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
      title: 'JavaScript Frameworks',
      subtitle: 'the bleeding, suffering edge',
      order: [
        '7', '8', '9',
      ],
    },
  },
};


export default store;

