import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './nineHole.css';

const NineHole = () => {
    // const [playerNames, setPlayerNames] = useState([''])

    const location = useLocation()
    const data = location.state
    console.log(data)

   const consolePlayers = () => {
    }

  return (
    <div className="NineHole">
        <p>NineHole</p>
        <button onClick={consolePlayers}>players</button>
        {}
    </div>
  );
}

export default NineHole;
