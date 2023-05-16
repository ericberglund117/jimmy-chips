
import { useState } from 'react';
import './setup.css';

const Setup = () => {
    const [value, setValue] = useState('')
    const [playerNames, setPlayerNames] = useState([''])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (playerNames.length === 0) {
            setPlayerNames(value)
        } else {
            setPlayerNames([...playerNames, value])
        }
    }

    const displayPlayers = playerNames.length > 0 ? playerNames.map((player, index) => <p className='addedPlayer' key={index}>{player}</p>) : null

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
    </div>
  );
}

export default Setup;
