import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocalStorage, getStorageValue} from '../../useLocalStorage';
import './scoreCard.css';

const ScoreCard = (props) => {
    let currentPlayers = props.currentPlayers
    let nineHolesCount = props.nineHolesCount
    const navigate = useNavigate()

    const navigateToChips = (e) => {
        e.preventDefault()
        navigate('/assign-chips/:id')
    }
    
console.log(currentPlayers)
    // const savedChips = localStorage.getItem('playerChips')
    //     const initialPlayerChipsValue = JSON.parse(savedChips)
    //     return initialPlayerChipsValue || ['']


    return (
    <div className="scoreCardContainer">
        <p>Scorecard</p>
        <form>
            {currentPlayers.map((player, playIndex) => {
                return nineHolesCount.map((hole, index) => {
                    return(
                    <div className='scoreContainer'>
                        <p className='playerName' key={playIndex + 10}>{player.name}</p>
                        <div className='currentHole' key={index}>{hole}</div>
                        <input type='text' className='scoreInput'></input>
                        <Link to={`/assign-chips/${player.name}`}
                             >
                            <button className='addChips' onMouseDown={(e) => navigateToChips}>Chips</button>
                        </Link>
                    </div> 
                    )  
            })
            })}
        </form>
    </div>
  );
}

export default ScoreCard;
