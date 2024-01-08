/* eslint-disable */

// import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

import { Header } from './Header';
import './styles/index.scss';
import { Main } from './Main';
import { Footer } from './Footer';

const messages = [
  {author: 'Vlad', body: 'hih ih hi everyone',},
  {author: 'Mari', body: 'hih ih hi everyone',},
  {author: 'Yaro', body: 'hi5555 fgdfgdfge',},
  {author: 'Vlad', body: 'jenshini ne ludi',},
  {author: 'Den', body: 'hpatriarhat forevere',},
  {author: 'Xilston petuh', body: 'hfuck lgbt',},
];

const dialogs = [
  {title: 'GLOBAL ROOM', active: true},
  {title: 'JOHN'},
  {title: 'CUSTOM ROOM'},
  {title: 'FILIP'},
  {title: 'MARIA'},
  {title: 'Den'},
  {title: 'Yaro'},
];

export const App = () => {
  const ulala = 11;

  return (
    <>
      <Header />
      <Main messages={messages} dialogs={dialogs} />
      <Footer />
    </>
  );
};


