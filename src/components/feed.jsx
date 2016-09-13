/* @flow */

import type {Store, Item} from 'src/store-types';

import React from 'react';
import {Link} from 'react-router';
import {bgImage} from 'src/services/utils';
import withStore from 'src/flux/with-store.jsx';

import css from './feed.css';

import Sidebar from 'src/components/sidebar.jsx';


type Props = {
  store: Store,
};

const Feed = ({store}: Props) => (
  <div className={css.bg}>
    <div className={css.scroll}>
      <div className={css.feed}>
        { store.feed.map(id => (
          <ArticleSummary key={id} item={store.items[id]} />
        )) }
      </div>
      <Sidebar className={css.sidebar} store={store} />
    </div>
  </div>
);

export default withStore()(Feed);


const ArticleSummary = ({item}: {item: Item}) => (
  <div className={css.article}>
    <div className={css.header}>
      <div className={css.avatar}></div>
      <div className={css.headerText}>
        <div className={css.byLine}>
          Kyle Warren
        </div>
        <div className={css.info}>
          Aug 26 &middot; 2 min read
        </div>
      </div>
    </div>
    <Link className={css.text} to={`/${item.id}`}>
      { item.photo &&
        <div className={css.photo} style={bgImage(item.photo)}></div>
      }
      <h3 className={css.title}>{item.title}</h3>
      <h4 className={css.subtitle}>{item.subtitle}</h4>
      <p className={css.hint}>{item.text.split('\n')[0]}</p>
      <span className={css.more}>Read more...</span>
    </Link>
  </div>
);

