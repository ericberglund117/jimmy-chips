import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import './finishpage.css';
import { useLocalStorage, getStorageValue} from '../../useLocalStorage';

const FinishPage = () => {
    const [currentPlayers, setCurrentPlayers] = useState([])
    const navigate = useNavigate()
    
        useEffect(() => {
            const [...currentStoredPlayers] = getStorageValue('allPlayers')
            setCurrentPlayers([...currentStoredPlayers])

        }, [])

        const removeChipsButton = (chip, playerName) => {
          const correctPlayer = currentPlayers.find(player => player.name === playerName)
          const chipIndex = correctPlayer.chips.indexOf(chip)
          correctPlayer.chips.splice(chipIndex, 1)
          setCurrentPlayers([...currentPlayers])
          localStorage.setItem('allPlayers', JSON.stringify(currentPlayers))
        }

        const endRound = () => {
          navigate('/')
        }

  return (
    <div className='finishContainer'>
      <div className='nineHoleContainer'>
                {currentPlayers.map((player, index) => {
                    let holeScore = Object.values(player.score)
                    const currentTotalScore = holeScore.reduce((acc, score) => {
                        acc += Number(score)
                        return acc
                        }, 0)
                    return <div className='holePlayerInformation'>
                              <p className='holePlayerName' key={player.name}>{player.name}</p>
                              {player.chips.length > 0 ? player.chips.map((chip) => {
                              return (
                                <div className='currentChipsContainer'> 
                                  <p className='holePlayerChips' key={"pc" + index}>{chip}</p>
                                  <button className='removeChip' key= {"chips" + chip} onClick={() => removeChipsButton(chip, player.name)}>Remove Chip</button>
                                </div>
                              )
                            }) : null }
                            <p className='currentTotalScore'>Total Score: {currentTotalScore}</p>
                          </div>
                })
                }
            </div>
            <button className='endRound' onClick={endRound}>End Round</button>
    </div>    
  );
}

export default FinishPage;
