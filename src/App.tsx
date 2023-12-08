import AppData from './js/AppData';

import './App.css';
import 'react-tooltip/dist/react-tooltip.css';

import { Tooltip } from 'react-tooltip';
import MonsterMakerMenu from './components/MonsterMakerMenu';

function App() {
  var appData = new AppData();

  return (
    <div>
      <MonsterMakerMenu appData={ appData } />
      <Tooltip id="tooltip" />
    </div>
  );
}

export default App;
