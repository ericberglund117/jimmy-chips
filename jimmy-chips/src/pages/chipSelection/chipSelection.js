import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocalStorage, getStorageValue} from '../../useLocalStorage';
import './chipSelection.css';

const ChipSelection = () => { 
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const allChips = [
        'Par',
        'Sandy Par',
        'Birdie',
        'One Putt',
        'Eagle',
        'Chip In',
        'Longest Drive', 
        'Closest To The Pin',
        'Out of Bounds',
        'Water',
        'Tree',
        'Sand',
        'Gravedigger',
        'Beer Chip',
        'Snowman',
        'Lost Ball',
        'Club Toss',
        'Three Putt', 
        'Front Tees'
    ]
    const negChips = [
        'Out of Bounds',
        'Water',
        'Tree',
        'Sand',
        'Gravedigger',
        'Beer Chip',
        'Snowman',
        'Lost Ball',
        'Club Toss',
        'Three Putt', 
        'Front Tees'
    ]
    const posChips = [
        'Par',
        'Sandy Par',
        'Birdie',
        'One Putt',
        'Eagle',
        'Chip In',
        'Longest Drive', 
        'Closest To The Pin'
    ]
    
    const [currentPlayers, setCurrentPlayers] = useState([])
    const [selectedChips, setSelectedChips] = useState([])
    let pathCheck 
    const playerNameForChips = pathname.split("/")

    useEffect(() => {
        console.log(selectedChips)
    }, [selectedChips])


    const setChipValue = (chosenChip) => {
        const chosenChips = [...selectedChips]
        console.log('chosen', chosenChip)
       const check = allChips.filter(chip => chip === chosenChip)
       if (chosenChips.length === 0) {
        chosenChips.push(check)
        setSelectedChips(chosenChips)
        console.log("1", selectedChips)
       } else {
           const updatedSelectedChips = flatten([...selectedChips, check])
           console.log('updated', updatedSelectedChips)
           setSelectedChips(updatedSelectedChips)
           console.log(updatedSelectedChips)
       }
    }

    // const updatePlayersAfterChips = (updatedPlayers) => {
    //     console.log("upChips", updatedPlayers)
    //     console.log(updatedPlayers)
    //     localStorage.setItem("selectedChips", JSON.stringify(selectedChips))
    // }

    function flatten(arr) {
        return arr.reduce(function (flat, toFlatten) {
          return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
        }, []);
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
        return allChips.map((chip, index) => {
            return (
                <section className='chipContainer'>
                    <p className="specificPosChip" key={index}>{chip}</p>
                    <button className='assignChip' onClick={() => setChipValue(chip)} key={chip}>Select Chip</button>
                </section>
            )
        })
    }

  return (
    <div className="selectChipsContainer">
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

export default ChipSelection;
