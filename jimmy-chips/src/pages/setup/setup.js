
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './setup.css';
import NineHole from '../nineHole/nineHole';

const Setup = () => {
    const [value, setValue] = useState('')
    const [playerObject, setPlayerObject] = useState({})
    const [allPlayers, setAllPlayers] = useState([])
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value === '') {
           return alert("Must Enter a Player Name")
        }
        const updatedPlayerName = {
                name: value,
                chips: [],
                score: {},
                full: false
        }
        if (Object.keys(playerObject).length === 0) {
            setPlayerObject(updatedPlayerName)
            setAllPlayers([updatedPlayerName])
        } else {
            const updatedPlayers = [ ...allPlayers, updatedPlayerName]
            setAllPlayers(updatedPlayers)
        }
    }

    useEffect(() => {
        if (allPlayers.length > 0) {
            localStorage.setItem("allPlayers", JSON.stringify(allPlayers))
        }
        console.log("use", allPlayers)
    }, [allPlayers])

    const displayPlayers = allPlayers.length > 0 ? allPlayers.map((player, index) => <p className='addedPlayer' key={index}>{player.name}</p>) : null

    const playNine = () => {
        navigate("/nine-holes")
    }

    const playEighteen = () => {
        allPlayers.map(player => player.full = true)
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
        <Link to="/nine-holes" className='link'>
            <button className='nineHole' onClick={playNine}>Play Nine Holes</button>
        </Link>
        <button className='eighteenHole' onClick={playEighteen}>Play Eighteen Holes</button>
     </div>
    </div>
  );
}

export default Setup;
