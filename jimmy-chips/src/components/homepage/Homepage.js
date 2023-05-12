import './homepage.css';

const Homepage = () => {
    const instructions = "Jimmy Chips!"
    const startPlay = () => {
        
    }

  return (
    <div className="App">
        <section className="instructionsContainer">
            <p className='instructions'>{instructions}</p>
        </section>
        <button className="playButton" onClick={startPlay()}>Play!</button>
    </div>
  );
}

export default Homepage;
