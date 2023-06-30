
import './eighteenHole.css';

import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ScoreCard from '../../components/scoreCard/scoreCard';
import { useLocalStorage, getStorageValue} from '../../useLocalStorage';

const EighteenHole = () => {
    const [currentPlayers, setCurrentPlayers] = useState([])
    const navigate = useNavigate()
    
        useEffect(() => {
            const [...currentStoredPlayers] = getStorageValue('allPlayers')
            setCurrentPlayers([...currentStoredPlayers])

        }, [])

    const navigateBack = () => {
        navigate('/setup')
    }

    const removeChipsButton = (chip, playerName) => {
        const correctPlayer = currentPlayers.find(player => player.name === playerName)
        const chipIndex = correctPlayer.chips.indexOf(chip)
        correctPlayer.chips.splice(chipIndex, 1)
        setCurrentPlayers([...currentPlayers])
        localStorage.setItem('allPlayers', JSON.stringify(currentPlayers))
    }

    const finishRound = () => {
        const endPlayers = getStorageValue('allPlayers')
        console.log(endPlayers)
        navigate("/finished-round")
    }

  return (
    <div className="eighteenHole">
        <h2>Eighteen Holes</h2>
        <div className='eighteenHoleContainer'>
        {currentPlayers.map((player, index) => {
            let holeScore = Object.values(player.score)
            const currentTotalScore = holeScore.reduce((acc, score) => {
                acc += Number(score)
                return acc
            }, 0)
            return <div className='holePlayerInformation'>
                        <p className='holePlayerName' key={player.name}>{player.name}</p>
                        {player.chips.length > 0 ? player.chips.map((chip) => {
                                    return (
                                    <div className='currentChipsContainer'> 
                                        <p className='holePlayerChips' key={"pc" + index}>{chip}</p>
                                        <button className='removeChip' key= {"chips" + chip} onClick={() => removeChipsButton(chip, player.name)}>Remove Chip</button>
                                    </div>
                                    )
                                }) : null }
                                <p className='currentTotalScore'>Current Score: {currentTotalScore}</p>
                    </div>
        })
        }
        <div className='holeButtonContainer'>
                <button className='back-button' onClick={navigateBack}>Back</button>
                <button className='allDoneButton' onClick={finishRound}>Finish Round</button>
            </div>
        </div>
        <ScoreCard 
            currentPlayers={currentPlayers}
            eighteenHolesCheck={true}
        />
    </div>
  );
}

export default EighteenHole;
