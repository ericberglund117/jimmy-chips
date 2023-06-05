import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import './nineHole.css';
import ScoreCard from '../../components/scoreCard/scoreCard';
import { useLocalStorage, getStorageValue} from '../../useLocalStorage';

const NineHole = () => {
    const [currentPlayers, setCurrentPlayers] = useState([])
    // const [currentPlayerChips, setCurrentPlayerChips] = useState([''])
    // const [currentPlayerScore, setCurrentPlayerScore] = useState([''])
    const navigate = useNavigate()
    const nineHolesCount = [1,2,3,4,5,6,7,8,9]
    console.log('nine hole')
    console.log(currentPlayers)
    
        useEffect(() => {
            const [...currentStoredPlayers] = getStorageValue('allPlayers')
            setCurrentPlayers([...currentStoredPlayers])
        }, [])

    const navigateBack = () => {
        navigate('/setup')
    }

        

  return (
    <div className="NineHole">
        <p>Nine Holes</p>
        {currentPlayers.map((player, index) => {
            return <div>
                    <p key={index}>{player.name}</p>
                    <p key={index + 10}>{player.chips}</p>
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
