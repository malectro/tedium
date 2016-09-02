/* @flow */

import type {Store} from './store-types';

const store: Store = {
  items: {
    '1': {
      id: 1,
      title: 'The Power of Maybe',
      subtitle: 'You don\'t always have to say "yes" or "no".',
      text:
`Imagine getting an invite to the party of the year.

But other times there are things you do.
      `,
    },
    '2': {
      id: 2,
      title: 'What Wake Boaring Taught Me About Running a Startup',
      subtitle: 'It\'s not what you expect.',
      text:
`It's early Friday morning and the glassy water of the lake ripples across my feet.
      `,
    },
    '4': {
      id: 4,
      title: 'Idea: Soylent + Coffee?',
      subtitle: 'How did I not think of this before?',
      text:
`Okay guys, let's do this. Soylent and Coffee are literally two of my favorite things.
      `,
    },
  },
};


export default store;

