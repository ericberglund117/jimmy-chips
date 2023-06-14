import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './homepage.css';

const Homepage = () => {
    const [showInstructions, setShowInstructions] = useState(false);
    const navigate = useNavigate()
    const instructions = "Each player begins the round with no chips.\nThe first player that hits a shot that corresponds to the designation on the chip is given that chip. He/she holds on to that chip until someone else hits the same shot.\nFor Example, if player number 1 goes into the sand he/she will hold that chip until another player goes into the sand. He/she then gives the chip to that player. The same holds true for the positive chips. The last one to get a one putt or a birdie is the one that gets that chip.\nAt the beginning of the round, each chip is given a designated dollar value. At the end of the round those players holding the negative chips will pay to each player the designated amount for each chip he or she is holding.\nThose holding the positive chips will receive the same amount from each of the other players."
    
    const startPlay = () => {
        navigate("/setup")
    }

  return (
    <div className="homepage">
        <section className="instructionsContainer">
            {showInstructions && <p className="instructions">{instructions}</p>}
        </section>
        <section className='homepageButtons'>
            <button className="howToPlayButton" onClick={() => setShowInstructions(!showInstructions)}>
                {showInstructions === true ? "Hide Instructions" : "How To Play"}
            </button>
            <button className="playButton" onClick={startPlay}> Play!</button>
        </section>
        <section className='fillerContainer'>
            <div class="wrapper">
                <div class="ball"> 
                    <div class="texture"></div>  
                </div>
                {/* <div class="tee">
                    <div class="top"></div>
                    <div class="stem"></div>
                </div> */}
            </div>
            {/* <img src='jimmy-chips/src/assets/4402.jpg' alt='golf-ball'/> */}
        </section>
    </div>
  );
}

export default Homepage;
