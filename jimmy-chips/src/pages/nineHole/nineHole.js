import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './nineHole.css';
import ScoreCard from '../../components/scoreCard/scoreCard';

const NineHole = () => {
    const [currentPlayerNames, setCurrentPlayerNames] = useState([''])
    const navigate = useNavigate()
    const location = useLocation()
    const playerData = location.state
    
    useEffect(() => {
        playerData.shift()
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
        />
    </div>
  );
}

export default NineHole;
