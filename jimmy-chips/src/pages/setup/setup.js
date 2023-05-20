
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './setup.css';
import NineHole from '../nineHole/nineHole';

const Setup = () => {
    const allChips = [""]
    const [value, setValue] = useState('')
    const [playerNames, setPlayerNames] = useState([''])
    const [playerChips, setPlayerChips] = useState([''])
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (playerNames.length === 0) {
            setPlayerNames(value)
        } else {
            setPlayerNames([...playerNames, value])
        }
    }

    const displayPlayers = playerNames.length > 0 ? playerNames.map((player, index) => <p className='addedPlayer' key={index}>{player}</p>) : null

    const playNine = () => {
        navigate("/nine-holes")
    }

    const playEighteen = () => {
        navigate("/eighteen-holes")
    }

  return (
    <div className="setup">
        <p className='playersInput'>Add players here:</p>
     <form className='playerForm'>
        <div className='form-control'>
            <label htmlFor='playerName'>Name: </label>
            <input 
                type='text'
                id='playerName'
                name='playerName'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                />
        </div>
        <button className='submit' type='submit' onClick={handleSubmit}>Submit</button>
     </form>
     <div className='playersContainer'>
        {displayPlayers}
     </div>
     <div className='buttonsContainer'>
        <Link to="/nine-holes" state={ playerNames } className='link'>
            <button className='nineHole' onClick={playNine}>Play Nine Holes</button>
        </Link>
        <button className='eighteenHole' onClick={playEighteen}>Play Eighteen Holes</button>
     </div>
    </div>
  );
}

export default Setup;
