import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './nineHole.css';
import ScoreCard from '../../components/scoreCard/scoreCard';

const NineHole = () => {
    const [currentPlayerNames, setCurrentPlayerNames] = useState([''])
    const [currentPlayerChips, setCurrentPlayerChips] = useState([''])
    const [currentPlayerScore, setCurrentPlayerScore] = useState([''])
    const navigate = useNavigate()
    const location = useLocation()
    const playerData = location.state
    const nineHolesCount = [1,2,3,4,5,6,7,8,9]
    useEffect(() => {
        setCurrentPlayerNames(playerData)
    },[playerData])

   const consolePlayers = () => {
    
    }

    const navigateBack = () => {
        //need to useNavigate to send data back to set up
         //navigate("/setup", {state:})
        navigate('/setup')
    }

  return (
    <div className="NineHole">
        <p>Nine Holes</p>
        {currentPlayerNames.map((player, index) => <p key={index}>{player}</p>)}
        <button onClick={consolePlayers}>players</button>
        <button onClick={navigateBack}>Back</button>
        <ScoreCard 
            currentPlayers={currentPlayerNames}
            nineHolesCount={nineHolesCount}
            currentChips={currentPlayerChips}
            currentScore={currentPlayerScore}
        />
    </div>
  );
}

export default NineHole;
