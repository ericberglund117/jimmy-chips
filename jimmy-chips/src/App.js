import './App.css';
import { Routes, Route } from "react-router-dom"
import Homepage from './components/homepage/homepage.js'
import FinishPage from './components/finishpage/finishpage.js';
import Setup from './pages/setup/setup.js';
import NineHole from './pages/nineHole/nineHole.js';
import EighteenHole from './pages/eighteenHole/eighteenHole.js';
import ChipsAssignment from './pages/chipsAssignment/chipsAssignment.js';
import ChipSelection from './pages/chipSelection/chipSelection.js';
import westeeLogo from './assets/westee-logo.png';

function App() {

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer")
  }
  return (
    <div className="App">
      <div className='appOverlay'></div>
        <section className='westeeContainer'>
          <h3 className='tees'>Need Tees?</h3>
          <div className='westee_tee_blue'></div>
          <div className='westee_tee_black'></div>
          <div className='westee_tee_wood'></div>
          <button className="westeeButton" role="link" onClick={() => openInNewTab("https://www.westeegolf.co/")} >
            <img className='westeeButtonLogo' src={westeeLogo} alt='westee_logo' />
          </button>
        </section>
      <section className='titleContainer'>
        <h1 className="title">Jimmy Chips</h1>
      </section>
      <div className='appContainer'>
      <Routes>
          <Route path="/" element= { <Homepage /> } />
          <Route path="/setup" element= { <Setup /> } />
          <Route path='/nine-holes' element= { <NineHole /> } />
          <Route path='/eighteen-holes' element= { <EighteenHole /> } />
          <Route path='/select-chips' element={ <ChipSelection /> } />
          <Route path='/assign-chips/:id' element={ <ChipsAssignment /> } />
          <Route path='/finished-round' element={ <FinishPage /> } />
      </Routes>
      </div>
    </div>
  );
}

export default App;
