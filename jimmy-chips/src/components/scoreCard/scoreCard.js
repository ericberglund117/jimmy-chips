import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocalStorage, getStorageValue} from '../../useLocalStorage';
import './scoreCard.css';

const ScoreCard = (props) => {
    let currentPlayers = props.currentPlayers
    const nineHolesCount = [1,2,3,4,5,6,7,8,9]
    const eighteenHolesCount = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
    const [scoreValue, setScoreValue] = useState({})
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const holesPath = pathname.split("/")
    let holesCount = holesPath[1].includes('eighteen') ? eighteenHolesCount : nineHolesCount

    const navigateToChips = (e) => {
        e.preventDefault()
        navigate('/assign-chips/:id')
    }
    
// figure out way to display current score after navigating through chips and back to score card. Currently score input is blank after chip assignment
    const updateScore = (e, player) => {
        e.preventDefault()
        const correctPlayer = currentPlayers.find(currPlayer => currPlayer.name === player.name)
        correctPlayer.score = scoreValue
        localStorage.setItem('allPlayers', JSON.stringify(currentPlayers))
    }

    return (
    <div className="scoreCardContainer">
        <p>Scorecard</p>
        <div>
            {currentPlayers.map((player, playIndex) => {
                return holesCount.map((hole, index) => {
                    return(
                    <div className='scoreContainer'>
                        <p className='playerName' key={player.name}>{player.name}</p>
                        <div className='currentHole' key={"hole" + index}>{hole}</div>
                        <form>
                            <label htmlFor='playerScore'>Score: </label>
                            <input 
                            type='number' 
                            className='scoreInput'
                            onChange={(e) => {
                                setScoreValue((prev) => {
                                    return {...prev, [hole]: e.target.value}
                                })
                            }} />
                            <button className='enterScore' onClick={(e) => updateScore(e, player)}>Submit Score</button>
                        </form>
                        <Link to={`/assign-chips/${player.name}`}
                             >
                            <button className='addChips' onMouseDown={(e) => navigateToChips}>Chips</button>
                        </Link>
                    </div> 
                    )  
            })
            })}
        </div>
    </div>
  );
}

export default ScoreCard;
