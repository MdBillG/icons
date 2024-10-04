import logo from './logo.svg';
import './App.css';
import ArrowcircleOutLeft from './icons/circle-arrow-out-down-left';
import ArrowCircleOutRight from './icons/circle-arrow-out-down-right';
import Heart from './icons/heart';
import Stethoscope from './icons/stethoscope';
import HeartPulse from './icons/heart-pulse';
import HeartOff from './icons/heart-off';
import HandHeart from './icons/hand-heart';
import Hospital from './icons/hospital';
import Activity from './icons/activity';
import House from './icons/house';
import HousePlus from './icons/house-plus';
import Wifi from './icons/wifi';
import Citrus from './icons/citrus';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ArrowcircleOutLeft size='40' />
      <ArrowCircleOutRight color="#5e6e0c" />
      <Heart />
      <Stethoscope />
      <HeartPulse />
      <HeartOff />
      <HandHeart />
      <Hospital />
      <Activity />
      <House />
      <HousePlus />
      <Wifi />
      <Citrus />
    </div>
  );
}

export default App;
