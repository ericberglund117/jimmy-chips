import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import './nineHole.css';
import ScoreCard from '../../components/scoreCard/scoreCard';
import { useLocalStorage, getStorageValue} from '../../useLocalStorage';

const NineHole = () => {
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
    <div>
        <div className="nineHole">
            <h2>Nine Holes</h2>
            <div className='nineHoleContainer'>
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
            </div>
            <div className='holeButtonContainer'>
                <button className='back-button' onClick={navigateBack}>Back</button>
                <button className='allDoneButton' onClick={finishRound}>Finish Round</button>
            </div>
        </div>
        <ScoreCard 
            currentPlayers={currentPlayers}
        />
    </div>    
  );
}

export default NineHole;
