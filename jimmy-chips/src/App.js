import './App.css';
import { Routes, Route } from "react-router-dom"
import Homepage from './components/homepage/homepage'
import FinishPage from './components/finishpage/finishpage';
import Setup from './pages/setup/setup';
import NineHole from './pages/nineHole/nineHole';
import EighteenHole from './pages/eighteenHole/eighteenHole';
import ChipsAssignment from './pages/chipsAssignment/chipsAssignment';
import ChipSelection from './pages/chipSelection/chipSelection';

function App() {

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer")
  }
  return (
    <div className="App">
      <div className='appOverlay'></div>
      <section className='titleContainer'>
        <h1 className="title">Jimmy Chips</h1>
        {/* <section className='westeeContainer'>
          <h3 className='tees'>Need Tees?</h3>
          <button className="westeeButton" role="link" onClick={() => openInNewTab("https://www.westeegolf.co/")} >
          </button>
        </section> */}
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
