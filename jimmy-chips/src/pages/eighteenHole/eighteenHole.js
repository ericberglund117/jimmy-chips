
import './eighteenHole.css';

import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ScoreCard from '../../components/scoreCard/scoreCard';
import { useLocalStorage, getStorageValue} from '../../useLocalStorage';

const EighteenHole = () => {
    const [currentPlayers, setCurrentPlayers] = useState([])
    const navigate = useNavigate()
    console.log("18 start", currentPlayers)
    
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

    // const currentScoreKeeper = () => {
    //    return currentPlayers.map(player => {
    //         let scoreKeys = Object.keys(player.score)
    //         console.log(scoreKeys)
    //     })
    // }
    // console.log(currentScoreKeeper())

  return (
    <div className="eighteenHole">
        <h2>eighteen Holes</h2>
        {currentPlayers.map((player, index) => {
            return <div>
                    <p key={player.name}>{player.name}</p>
                    <p key={index}>{player.chips}</p>
                    {player.chips.length > 0 ? player.chips.map((chip, chipIndex) => {
                    return <button className='removeChip' key= {"chips"+ chipIndex} onClick={() => removeChipsButton(chip, player.name)}>Remove Chip</button>
                    }) : null }
                    {/* {Object.keys(player.score).length > 0 ? } */}
                    </div>
        })
        }
        <button onClick={navigateBack}>Back</button>
        <button className='allDoneButton' onClick={finishRound}>Finish Round</button>
        <ScoreCard 
            currentPlayers={currentPlayers}
        />
    </div>
  );
}

export default EighteenHole;
