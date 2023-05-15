import './App.css';
import { Routes, Route } from "react-router-dom"
import  Homepage  from './components/homepage/homepage'


function App() {
  return (
    <div className="App">
      <h1 className="title">Jimmy Chips</h1>
      <section className="navContainer">
        
      </section>
      <Routes>
          <Route path="/" element= { <Homepage /> } />
      </Routes>
    </div>
  );
}

export default App;
