import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocalStorage, getStorageValue} from '../../useLocalStorage';
import './scoreCard.css';

const ScoreCard = (props) => {
    let currentPlayers = props.currentPlayers
    let nineHolesCount = props.nineHolesCount
    const [scoreValue, setScoreValue] = useState({})
    const navigate = useNavigate()

    const navigateToChips = (e) => {
        e.preventDefault()
        navigate('/assign-chips/:id')
    }
    

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
                return nineHolesCount.map((hole, index) => {
                    return(
                    <div className='scoreContainer'>
                        <p className='playerName' key={playIndex + 10}>{player.name}</p>
                        <div className='currentHole' key={index}>{hole}</div>
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
