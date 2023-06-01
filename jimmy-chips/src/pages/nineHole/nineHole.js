import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import './nineHole.css';
import ScoreCard from '../../components/scoreCard/scoreCard';

const NineHole = () => {
    const [currentPlayerNames, setCurrentPlayerNames] = useState(() => {
        const savedNames = localStorage.getItem('playerNames')
        const initialPlayerNamesValue = JSON.parse(savedNames)
        return initialPlayerNamesValue || ['']
    })
    const [currentPlayerChips, setCurrentPlayerChips] = useState([''])
    const [currentPlayerScore, setCurrentPlayerScore] = useState([''])
    const navigate = useNavigate()
    const nineHolesCount = [1,2,3,4,5,6,7,8,9]

   const playerChipsCallback = (playerchips) => {
        setCurrentPlayerChips(playerchips)
    }

    const navigateBack = () => {
        navigate('/setup')
    }

  return (
    <div className="NineHole">
        <p>Nine Holes</p>
        {currentPlayerNames.map((player, index) => <p key={index}>{player}</p>)}
        <button onClick={navigateBack}>Back</button>
        <ScoreCard 
            currentPlayers={currentPlayerNames}
            nineHolesCount={nineHolesCount}
            currentChips={() => playerChipsCallback(currentPlayerChips)}
            currentScore={currentPlayerScore}
        />
    </div>
  );
}

export default NineHole;
