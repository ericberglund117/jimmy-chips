import { Link, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocalStorage, getStorageValue} from '../../useLocalStorage';
import './chipsAssignment.css';

const ChipsAssignment = () => { 
    const { pathname } = useLocation()
    const allChips = [
        'Par',
        'Sandy Par',
        'Out of Bounds',
        'Water',
        'Tree',
        'Birdie',
        'Gravedigger',
        'One Putt',
        'Beer Chip',
        'Snowman'
    ]
    const [currentPlayers, setCurrentPlayers] = useState([])
    let pathCheck

    //change button or give some sort of visual confirmation that chip as been assigned

    const playerNameForChips = pathname.split("/")

    useEffect(() => {
        const [...currentStoredPlayers] = getStorageValue('allPlayers')
        setCurrentPlayers([...currentStoredPlayers])
    }, [])

    const setChipValue = (selectedChip) => {
       const check = allChips.filter(chip => chip === selectedChip)
       const correctPlayer = currentPlayers.find(player => player.name === playerNameForChips[2])
       if (correctPlayer.chips.length === 0) {
            correctPlayer.chips.push(check)
       } else {
            const updatedChips = flatten([...correctPlayer.chips, check])
            correctPlayer.chips = [...new Set(updatedChips)]
       }
       const updatedChipsCurrentPlayers = currentPlayers
       updatePlayersAfterChips(updatedChipsCurrentPlayers)
    }

    const updatePlayersAfterChips = (updatedPlayers) => {
        localStorage.setItem("allPlayers", JSON.stringify(updatedPlayers))
    }

    function flatten(arr) {
        return arr.reduce(function (flat, toFlatten) {
          return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
        }, []);
      } 


    const navigateBack = (e) => {
        e.preventDefault()
        currentPlayers.forEach(player => {
            player.full === true ? pathCheck = true : pathCheck = false;
        })
        pathCheck ?
        Navigate('/nine-holes') :
        Navigate('/eighteen-holes')
    }

  return (
    <div className="scoreCardContainer">
        <p>Chips</p>
        {allChips.map((chip, index) => {
            return (
                <section>
                    <p key={index}>{chip}</p>
                    <button className='assignChip' onClick={() => setChipValue(chip)} key={chip}>Assign Chip</button>
                </section>
            )
        })}
        <Link to={pathCheck ? '/nine-holes' : '/eighteen-holes'}
            >
            <button className='navBack' onMouseDown={(e) => navigateBack}>Back</button>
         </Link>
    </div>
  );
}

export default ChipsAssignment;
