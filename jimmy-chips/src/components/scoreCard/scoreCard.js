import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './scoreCard.css';
// import ChipsAssignment from '../../pages/chipsAssignment/chipsAssignment';

const ScoreCard = (props) => {
    let currentPlayers = props.currentPlayers
    let currentChipsCallback = props.currentChips
    let currentScore = props.currentScore
    let nineHolesCount = props.nineHolesCount
    const { state } = useLocation()
    const navigate = useNavigate()
    console.log("cp score", currentPlayers)
    console.log("cp holes", nineHolesCount)
    console.log(currentChipsCallback)
    console.log("state", state)
    const [displayCurrentPlayers, setDisplayCurrentPlayers] = useState([''])

    const navigateToChips = (e) => {
        e.preventDefault()
        navigate('/assign-chips/:id')
    }
    
   useEffect(() => {
        setDisplayCurrentPlayers(currentPlayers)
    },[currentPlayers])

    return (
    <div className="scoreCardContainer">
        <p>Scorecard</p>
        <form>
            {displayCurrentPlayers.map((player, playIndex) => {
                return nineHolesCount.map((hole, index) => {
                    return(
                    <div className='scoreContainer'>
                        <p className='playerName' key={playIndex + 20}>{player}</p>
                        <div className='currentHole' key={index}>{hole}</div>
                        <input type='text' className='scoreInput'></input>
                        <Link to={`/assign-chips/${player}`}
                             >
                            <button className='addChips' onMouseDown={(e) => navigateToChips}>Chips</button>
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
