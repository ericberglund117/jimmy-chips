
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './setup.css';


const Setup = () => {
    const [value, setValue] = useState('')
    const [playerObject, setPlayerObject] = useState({})
    const [allPlayers, setAllPlayers] = useState([])
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        let updatedPlayerName
        e.preventDefault();
        if (value === '') {
           return alert("Must Enter a Player Name")
        }
        if (value === "Kyle" || value === "kyle") {
            updatedPlayerName = {
                name: "Mittens",
                chips: [],
                score: {},
                full: false
        }
        } else {
            updatedPlayerName = {
                    name: value,
                    chips: [],
                    score: {},
                    full: false
            }
        }
        if (Object.keys(playerObject).length === 0) {
            setPlayerObject(updatedPlayerName)
            setAllPlayers([updatedPlayerName])
        } else {
            const updatedPlayers = [ ...allPlayers, updatedPlayerName]
            setAllPlayers(updatedPlayers)
        }
        setValue('')
    }

    useEffect(() => {
        if (allPlayers.length > 0) {
            localStorage.setItem("allPlayers", JSON.stringify(allPlayers))
        }
        console.log("use", allPlayers)
    }, [allPlayers])

    const displayPlayers = allPlayers.length > 0 ? allPlayers.map((player, index) => 
        <div className='addedPlayer' key={index}>
         <p className='addedPlayerName'>{player.name}</p>
        </div>) : null

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
        <button className='nineHoleButton' onClick={playNine}>Play Nine Holes</button>
        <button className='eighteenHoleButton' onClick={playEighteen}>Play Eighteen Holes</button>
     </div>
     <section className='fillerContainer'>
            <div class="wrapper">
                <div class="ball"> 
                    <div class="texture"></div>  
                </div>
            </div>
    </section>
    </div>
  );
}

export default Setup;
