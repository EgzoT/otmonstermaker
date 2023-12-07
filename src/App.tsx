import React from 'react';

import AppData from './js/AppData.js';

import './App.css';

import MonsterMakerMenu from './components/MonsterMakerMenu.js';

function App() {
  var appData = new AppData();

  return (
    <MonsterMakerMenu appData={appData} />
  );
}

export default App;
