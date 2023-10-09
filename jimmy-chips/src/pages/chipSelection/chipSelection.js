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
    
    const [selectedChips, setSelectedChips] = useState([])

    useEffect(() => {
        console.log(selectedChips)
        updateSelectedChips()
    }, [selectedChips])


    const selectChipValue = (chosenChip, e) => {
        let target = e.target;
        let status = e.target.classList.contains('active')
        e.target.classList.add(status ? 'inactive' : 'active')
        e.target.classList.remove(status ? 'active' : 'inactive')
        const chosenChips = [...selectedChips]
       const check = allChips.filter(chip => chip === chosenChip)
       if (chosenChips.length === 0) {
        chosenChips.push(check)
        setSelectedChips(chosenChips)
        setChipColor(e)
       } else {
           const updatedSelectedChips = flatten([...selectedChips, check])
           setSelectedChips(updatedSelectedChips)
       }
    }

    const setChipColor = (e) => {
        
    }

    const updateSelectedChips = () => {
        localStorage.setItem('selectedChips', JSON.stringify(selectedChips))
        const check = getStorageValue('selectedChips')
        console.log(check)
    }

    function flatten(arr) {
        return arr.reduce(function (flat, toFlatten) {
          return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
        }, []);
      } 


    const navigateBack = () => {
        navigate('/setup')
    }

    const checkChips = () => {
        return allChips.map((chip, index) => {
            return (
                <section className='chipContainer'>
                    <p className="specificPosChip" key={index}>{chip}</p>
                    <button className='assignChip' onClick={(e) => selectChipValue(chip, e)} key={chip}>Select Chip</button>
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
        <section className='selectedChips'>
            {checkChips()}
        </section>
        {/* <Link to={pathCheck ? '/nine-holes' : '/eighteen-holes'}> */}
            
         {/* </Link> */}
    </div>
  );
}

export default ChipSelection;
