import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './scoreCard.css';

const ScoreCard = (props) => {
    let currentPlayers = props.currentPlayers
    let currentChips = props.currentChips
    let currentScore = props.currentScore
    let nineHolesCount = props.nineHolesCount
    console.log("cp score", currentPlayers)
    console.log("cp holes", nineHolesCount)

    const assignChips = () => {

    }

  return (
    <div className="scoreCardContainer">
        <p>Scorecard</p>
        <form>
            {currentPlayers.map((player, playIndex) => {
                return nineHolesCount.map((hole, index) => {
                    return(
                    <div className='scoreContainer'>
                        <p className='playerName' key={playIndex + 20}>{player}</p>
                        <div className='currentHole' key={index}>{hole}</div>
                        <input type='text' className='scoreInput'></input>
                        <button className='addChips' onClick={assignChips}>Assign Chips</button>
                    </div> 
                    )  
            })
            })}
        </form>
    </div>
  );
}

export default ScoreCard;
