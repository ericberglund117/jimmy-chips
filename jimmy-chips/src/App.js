import './App.css';
import { Routes, Route } from "react-router-dom"
import  Homepage  from './components/homepage/homepage'
import Setup from './pages/setup/setup';
import NineHole from './pages/nineHole/nineHole';
import EighteenHole from './pages/eighteenHole/eighteenHole';
import ChipsAssignment from './pages/chipsAssignment/chipsAssignment';

function App() {
  return (
    <div className="App">
      <h1 className="title">Jimmy Chips</h1>
      <section className="navContainer">
        
      </section>
      <Routes>
          <Route path="/" element= { <Homepage /> } />
          <Route path="/setup" element= { <Setup /> } />
          <Route path='/nine-holes' element= { <NineHole /> } />
          <Route path='/eighteen-holes' element= { <EighteenHole /> } />
          <Route path='/assign-chips/:id' element={ <ChipsAssignment /> } />
      </Routes>
    </div>
  );
}

export default App;
