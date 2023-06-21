import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import './finishpage.css';
import { useLocalStorage, getStorageValue} from '../../useLocalStorage';

const FinishPage = () => {
    const [currentPlayers, setCurrentPlayers] = useState([])
    const navigate = useNavigate()
    
        useEffect(() => {
            const [...currentStoredPlayers] = getStorageValue('allPlayers')
            setCurrentPlayers([...currentStoredPlayers])

        }, [])

    const finishRound = () => {
        const endPlayers = getStorageValue('allPlayers')
        console.log(endPlayers)
    }
        

  return (
    <div>

    </div>    
  );
}

export default FinishPage;
