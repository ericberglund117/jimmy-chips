import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import './nineHole.css';
import ScoreCard from '../../components/scoreCard/scoreCard';
import { useLocalStorage, getStorageValue} from '../../useLocalStorage';

const NineHole = () => {
    const [currentPlayers, setCurrentPlayers] = useState([])
    const navigate = useNavigate()
    const nineHolesCount = [1,2,3,4,5,6,7,8,9]
    
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
        

  return (
    <div className="NineHole">
        <p>Nine Holes</p>
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
        <ScoreCard 
            currentPlayers={currentPlayers}
            nineHolesCount={nineHolesCount}
        />
    </div>
  );
}

export default NineHole;
