import { Link, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
    const playerNameForChips = pathname.split("/")
    let playerAssignedChips = { [playerNameForChips[2]]: []}

    const setChipValue = (selectedChip) => {
        //console.log(currentChipsCallback)
        console.log(selectedChip)
       const check = allChips.filter(chip => chip === selectedChip)
       const playerAssignedChipsArr = playerAssignedChips[playerNameForChips[2]]
       playerAssignedChipsArr.push(check)
       const flattenedplayerAssignedChips = flatten(playerAssignedChipsArr) 
       const uniqueplayerAssignedChips = [...new Set(flattenedplayerAssignedChips)]   
       playerAssignedChips[playerNameForChips[2]] = uniqueplayerAssignedChips
       console.log(playerAssignedChips)
       return playerAssignedChips
    }

    function flatten(arr) {
        return arr.reduce(function (flat, toFlatten) {
          return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
        }, []);
      } 


    const navigateBack = (e) => {
        e.preventDefault()
        Navigate('/nine-holes')
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
        <Link to={{
            pathname:`/nine-holes`
            }}
            state= {{ playerChips: playerAssignedChips }} 
            >
            <button className='navBack' onMouseDown={(e) => navigateBack}>Back</button>
         </Link>
    </div>
  );
}

export default ChipsAssignment;
