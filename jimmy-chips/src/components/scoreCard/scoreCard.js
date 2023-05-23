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

    // const displayScorecard = () => {
    // return currentPlayers.map((player, index) => {
    //     <p className='currentPlayer' key={index}>{player}</p>
    //     nineHolesCount.map((hole, index) => {
    //         <div className='hole' key={index}>{hole}</div>
    //     })
    //     })
    // }
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
                    </div> 
                    )  
            })
            })}
        </form>
        {/* <button className='chipsAssignment' onClick={assignChips}>Assign Chips</button> */}
    </div>
  );
}

export default ScoreCard;
