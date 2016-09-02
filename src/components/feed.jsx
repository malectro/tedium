/* @flow */

import type {Store, Item} from 'src/store-types';

import React from 'react';
import map from 'lodash/map';
import {Link} from 'react-router';
import withStore from 'src/flux/with-store.jsx';

import css from './feed.css';


type Props = {
  store: Store,
};

const Feed = ({store}: Props) => (
  <div className={css.bg}>
    <ol className={css.feed}>
      { map(store.items, item => (
        <ArticleSummary key={item.id} item={item} />
      )) }
    </ol>
  </div>
);

export default withStore()(Feed);


const ArticleSummary = ({item}: {item: Item}) => (
  <li className={css.article}>
    <Link className={css.text} to={`/${item.id}`}>
      <h3 className={css.title}>{item.title}</h3>
      <h4 className={css.subtitle}>{item.subtitle}</h4>
      <p className={css.hint}>{item.text.split('\n')[0]}</p>
      <span className={css.more}>Read more...</span>
    </Link>
  </li>
);

