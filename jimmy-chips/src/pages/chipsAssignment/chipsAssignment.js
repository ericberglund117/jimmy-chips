import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocalStorage, getStorageValue} from '../../useLocalStorage';
import './chipsAssignment.css';

const ChipsAssignment = () => { 
    const { pathname } = useLocation()
    const navigate = useNavigate()
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
    const positiveChips = [
        'Par',
        'Sandy Par',
        'Birdie',
        'One Putt',
    ]
    const negativeChips = [
        'Out of Bounds',
        'Water',
        'Tree',
        'Gravedigger',
        'Beer Chip',
        'Snowman'
    ]
    const [currentPlayers, setCurrentPlayers] = useState([])
    let pathCheck 

    //change button or give some sort of visual confirmation that chip as been assigned

    const playerNameForChips = pathname.split("/")
    console.log("chips start", currentPlayers)
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
    //    let eighteenUpdatedPlayers = updatedChipsCurrentPlayers.map(player => {
    //     player.full = true
    //     return player
       updatePlayersAfterChips(updatedChipsCurrentPlayers)
    }

    const updatePlayersAfterChips = (updatedPlayers) => {
        console.log("upChips", updatedPlayers)
        localStorage.setItem("allPlayers", JSON.stringify(updatedPlayers))
    }

    function flatten(arr) {
        return arr.reduce(function (flat, toFlatten) {
          return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
        }, []);
      } 


    const navigateBack = () => {
        console.log("nav", currentPlayers)
        let result = currentPlayers.map(player => {
            player.full === true ? pathCheck = true : pathCheck = false;
            return pathCheck
        })
        !result[0] ?
        navigate('/nine-holes') :
        navigate('/eighteen-holes')
    }

  return (
    <div className="scoreCardContainer">
        <section className='navBackContainer'>
            <button className='navBack' onClick={navigateBack}>Back</button>
        </section>
        <h2>Chips</h2>
        {positiveChips.map((chip, index) => {
            return (
                <section className='chipContainer'>
                    <p className="specificPosChip" key={index}>{chip}</p>
                    <button className='assignChip' onClick={() => setChipValue(chip)} key={chip}>Assign Chip</button>
                </section>
            )
        })}
        {negativeChips.map((chip, index) => {
            return (
                <section className='chipContainer'>
                    <p className="specificNegChip" key={index}>{chip}</p>
                    <button className='assignChip' onClick={() => setChipValue(chip)} key={chip}>Assign Chip</button>
                </section>
            )
        })}
        {/* <Link to={pathCheck ? '/nine-holes' : '/eighteen-holes'}> */}
            
         {/* </Link> */}
    </div>
  );
}

export default ChipsAssignment;
