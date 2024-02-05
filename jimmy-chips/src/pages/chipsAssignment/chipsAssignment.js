import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocalStorage, getStorageValue} from '../../useLocalStorage';
import { flatten, allChips, activateChipColor } from '../../utils';
import './chipsAssignment.css';

const ChipsAssignment = () => { 
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const [currentPlayers, setCurrentPlayers] = useState([])
    const [selectedGameChips, setSelectedGameChips] = useState([])
    let pathCheck 
    const playerNameForChips = pathname.split("/")

    useEffect(() => {
        const [...currentStoredPlayers] = getStorageValue('allPlayers')
        setCurrentPlayers([...currentStoredPlayers])
        const [...selectedGameChips] = getStorageValue('selectedChips')
        setSelectedGameChips([...selectedGameChips])
        console.log('chips', selectedGameChips)
        console.log("chip ass", currentStoredPlayers)
    }, [])


    const setChipValue = (selectedChip, e) => {
        activateChipColor(e)
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
        console.log(updatedPlayers)
        localStorage.setItem("allPlayers", JSON.stringify(updatedPlayers))
    }

    const navigateBack = () => {
        let result = currentPlayers.map(player => {
            player.full === true ? pathCheck = true : pathCheck = false;
            return pathCheck
        })
        !result[0] ?
        navigate('/nine-holes') :
        navigate('/eighteen-holes')
    }

    const checkChips = () => {
        let currentChips = flatten(currentPlayers.map(player => player.chips))
        const updatedChipsArr = selectedGameChips.filter(chip => !currentChips.includes(chip))
        return updatedChipsArr.map((chip, index) => {
            return (
                <section className='chipContainer'>
                    <p className="specificChip" key={index}>{chip}</p>
                    <button className='assignChip' onClick={(e) => setChipValue(chip, e)} key={chip}>Assign Chip</button>
                </section>
            )
        })
    }

  return (
    <div className="assignIndChipsContainer">
        <section className='navBackContainer'>
            <button className='navBack' onClick={navigateBack}>Back</button>
        </section>
        <h2>Chips</h2>
        {checkChips()}
        {/* <Link to={pathCheck ? '/nine-holes' : '/eighteen-holes'}> */}
            
         {/* </Link> */}
    </div>
  );
}

export default ChipsAssignment;
