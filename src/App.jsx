/* eslint-disable */
import { useState } from 'react';

import cn from 'classnames';
import './App.scss';
import './styles/index.scss';

import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';

import users from './API/users.json';
import { dialogs } from './API/miniBase';

console.log(dialogs)

export const myId = 1;

export const App = () => {
  const [selectedDialog, setSelectedDialog ] = useState(null);

  function handleDialog(currentDialog = null) {
    setSelectedDialog(currentDialog);
  }

  return (
    <>
      <Header />
      <Main
        selectedDialog={selectedDialog}
        handleDialog={handleDialog}
        //messages={messages}
        dialogs={dialogs}
        myId={myId}
      />
      <Footer />
    </>
  );
};


