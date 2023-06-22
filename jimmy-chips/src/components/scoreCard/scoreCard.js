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
    console.log('holesCount', holesCount)
    const [eighteenCurrentPlayers, setEighteenCurrentPlayers] = useState([])

    // useEffect(() => {
    //  if(holesCount.length > 10) {
    //     const [...storedPlayers] = getStorageValue('allPlayers')
    //     const eighteenStoredPlayers = [...storedPlayers].map(player => {
    //         player.full = true
    //         return player
    //     })
    //     setEighteenCurrentPlayers([...eighteenStoredPlayers])
        
    //  }    
    // }, [holesCount.length])

    console.log(eighteenCurrentPlayers)
    const navigateToChips = (e) => {
        console.log(holesCount)
        // e.preventDefault()
        if (holesCount.length > 10) {
            setPlayersToEighteen()
        }
        navigate('/assign-chips/:id')
    }
    const setPlayersToEighteen = () => {
        console.log('set players', eighteenCurrentPlayers)
        localStorage.setItem('allPlayers', JSON.stringify(eighteenCurrentPlayers))
    }
// figure out way to display current score after navigating through chips and back to score card. Currently score input is blank after chip assignment
    const updateScore = (e, player) => {
        e.preventDefault()
        const correctPlayer = currentPlayers.find(currPlayer => currPlayer.name === player.name)
        correctPlayer.score = scoreValue
        localStorage.setItem('allPlayers', JSON.stringify(currentPlayers))
    }

    const navNextHole = () => {

    }

    // change display to onne hole at at time. HAve next hole button. Display each player and hole number on scorecard
    return (
    <div className="mainContainer">
        <h2>Scorecard</h2>
        <div className='scoreContainer'>
            {currentPlayers.map((player, playIndex) => {
                return holesCount.map((hole, index) => {
                    return(
                    <div className='scoreCardContainer'>
                        <div className='currentHole' key={"hole" + index}>{hole}</div>
                        <h3 className='playerName' key={player.name}>{player.name}</h3>
                        <form className='scoreForm'>
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
                            <Link to={`/assign-chips/${player.name}`}>
                                <button className='addChips' onClick={navigateToChips}>Chips</button>
                            </Link>
                        </form>
                    </div> 
                    )  
                })
            })}
        </div>
            <button className='nextHoleButton' onClick={navNextHole}>Next Hole</button>
    </div>
  );
}

export default ScoreCard;
