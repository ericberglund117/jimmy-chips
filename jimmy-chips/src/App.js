import './App.css';
import { Routes, Route } from "react-router-dom"
import  Homepage  from './components/homepage/homepage'
import Setup from './pages/setup/setup';


function App() {
  return (
    <div className="App">
      <h1 className="title">Jimmy Chips</h1>
      <section className="navContainer">
        
      </section>
      <Routes>
          <Route path="/" element= { <Homepage /> } />
          <Route path="/setup" element= { <Setup /> } />
      </Routes>
    </div>
  );
}

export default App;
