import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './homepage.scss';

const Homepage = () => {
    const [showInstructions, setShowInstructions] = useState(false);
    const navigate = useNavigate()
    const instructions = "Each player begins the round with no chips. The first player that hits a shot that corresponds to the designation on the chip is given that chip. He/she holds on to that chip until someone else hits the same shot. For Example, if player number 1 goes into the sand he/she will hold that chip until another player goes into the sand. He/she then gives the chip to that player. The same holds true for the positive chips. The last one to get a one putt or a birdie is the one that gets that chip. At the beginning of the round, each chip is given a designated dollar value. At the end of the round those players holding the negative chips will pay to each player the designated amount for each chip he or she is holding. Those holding the positive chips will receive the same amount from each of the other players."
    
    const startPlay = () => {
        navigate("/setup")
    }

  return (
    <div className="homepage">
        <section className="instructionsContainer">
            {showInstructions && <p className="instructions">{instructions}</p>}
        </section>
        <button className="howToPlayButton" onClick={() => setShowInstructions(!showInstructions)}>
            {showInstructions === true ? "Hide Instructions" : "How To Play"}
        </button>
        <button className="playButton" onClick={startPlay}> Play!</button>
    </div>
  );
}

export default Homepage;
