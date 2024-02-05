import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocalStorage, getStorageValue} from '../../useLocalStorage';
import { flatten, allChips, negChips, posChips } from '../../utils';
import './chipSelection.css';

const ChipSelection = () => { 
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const [selectedChips, setSelectedChips] = useState([])

    useEffect(() => {
        console.log(selectedChips)
        updateSelectedChips()
    }, [selectedChips])


    const selectChipValue = (chosenChip, e) => {
        // let target = e.target;
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

    const navigateBack = () => {
        navigate('/setup')
    }

    const checkChips = () => {
        const positiveChips = posChips.map((chip, index) => {
            return (
                <section className='chipContainer'>
                    <p className="specificPosChip" key={index}>{chip}</p>
                    <button className='assignPosChip' onClick={(e) => selectChipValue(chip, e)} key={chip}>Select Chip</button>
                </section>
            )
        })
        const negativeChips = negChips.map((chip, index) => {
            return (
                <section className='chipContainer'>
                    <p className="specificNegChip" key={index}>{chip}</p>
                    <button className='assignNegChip' onClick={(e) => selectChipValue(chip, e)} key={chip}>Select Chip</button>
                </section>
            )
        })
        return (
            <section className='allChipContainer'>
                {[positiveChips, negativeChips]}
            </section>
        )
    }

  return (
    <div className="selectAllChipsContainer">
        <section className='navBackContainer'>
            <button className='navBack' onClick={navigateBack}>Back</button>
        </section>
        <h2>Chips</h2>
        <section className='chipOptions'>
            {checkChips()}
        </section>
        {/* <Link to={pathCheck ? '/nine-holes' : '/eighteen-holes'}> */}
            
         {/* </Link> */}
    </div>
  );
}

export default ChipSelection;
