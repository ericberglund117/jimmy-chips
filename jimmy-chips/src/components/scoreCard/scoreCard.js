import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './scoreCard.css';
// import ChipsAssignment from '../../pages/chipsAssignment/chipsAssignment';

const ScoreCard = (props) => {
    let currentPlayers = props.currentPlayers
    let currentChips = props.currentChips
    let currentScore = props.currentScore
    let nineHolesCount = props.nineHolesCount
    const playerChips = [
        'Par',
        'Sandy Par',
        'Out of Bounds',
        'Water',
        'Tree',
        'Birdie',
        'Gravedigger',
        'One Putt',
        'Beer Chip',
        'Snowman'
    ]
    const navigate = useNavigate()
    console.log("cp score", currentPlayers)
    console.log("cp holes", nineHolesCount)

    const assignChips = () => {
        navigate('/assign-chips/:id')
        // return (
        //     <ChipsAssignment 
        //         currentChips={currentChips}
        //         allChips={playerChips}
        //     />
        // )
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
                        <Link to={{ 
                             pathname: `/assign-chips/${player}`,
                             state: { playerChips, currentChips }
                             }}>
                            <button className='addChips' onClick={assignChips}>Assign Chips</button>
                        </Link>
                    </div> 
                    )  
            })
            })}
        </form>
    </div>
  );
}

export default ScoreCard;
