/* eslint-disable */

// import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

import { Header } from './Header';
import './styles/index.scss';
import { Main } from './Main';
import { Footer } from './Footer';

export const myId = 23;

const abc = 'Note that the values row and row-reverse are affected by the directionality of the flex container. If its dir attribute is ltr, row represents the horizontal axis oriented from the left to the right, and row-reverse from the right to the left; if the dir attribute is rtl, row represents the axis oriented from the right to the left, and row-reverse from the left to the right.';
const crowd_ico_url = 'https://vision.org.au/campaigns/wp-content/uploads/sites/13/2018/09/crowd-icon.png';
const batman_ico_url = 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-1024.png';
const sm_ico_url = 'https://cdn.iconscout.com/icon/free/png-256/free-superman-dc-superhero-hero-justice-league-earth-saver-28701.png';

const messages = [
  {author: {name: 'Vlad', id: 22}, time: '10:45', body: 'hih ih hi everyone',},
  {author: {name: 'Yaro', id: 23}, time: '10:46', body: abc,},
  {author: {name: 'Yaro', id: 23}, time: '10:47', body: 'hi5555 fgdfgdfge',},
  {author: {name: 'Vlad', id: 22}, time: '10:48', body: 'jenshini ne ludi',},
  {author: {name: 'Yaro', id: 23}, time: '10:49', body: 'hpatriarhat forevere',},
  {author: {name: 'Xilston petuh', id: 20}, time: '10:50', body: 'hfuck lgbt',},
];

const dialogs = [
  {title: 'GLOBAL ROOM', active: true, ico: crowd_ico_url},
  {title: 'Vlad', ico: batman_ico_url},
  {title: 'CUSTOM ROOM', ico: null},
  {title: 'FILIP', ico: null},
  {title: 'MARIA', ico: null},
  {title: 'Den', ico: null},
  {title: 'Yaro', ico: sm_ico_url},
];

export const App = () => {
  const [isDialogSelected, setDialogSelected] = useState(false);

  return (
    <>
      <Header />
      <Main
        messages={messages}
        dialogs={dialogs}
        myId={myId}
        isDialogSelected={isDialogSelected}
        handleDialog={setDialogSelected}
      />
      <Footer />
    </>
  );
};


