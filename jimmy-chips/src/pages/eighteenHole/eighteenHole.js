
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
    }
        

  return (
    <div className="eighteenHole">
        <p>eighteen Holes</p>
        {currentPlayers.map((player, index) => {
            return <div>
                    <p key={index}>{player.name}</p>
                    <p key={index + 10}>{player.chips}</p>
                    {player.chips.length > 0 ? player.chips.map((chip, chipIndex) => {
                    return <button className='removeChip' key= {chipIndex} onClick={() => removeChipsButton(chip, player.name)}>Remove Chip</button>
                    }) : null }
                    </div>
        })
        }
        <button onClick={navigateBack}>Back</button>
        <button className='allDoneButton' onClick={finishRound}>Finish Round</button>
        <ScoreCard 
            currentPlayers={currentPlayers}
            eighteenHolesCount={eighteenHolesCount}
        />
    </div>
  );
}

export default EighteenHole;
