import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import './finishpage.css';
import { useLocalStorage, getStorageValue} from '../../useLocalStorage';

const FinishPage = () => {
    const [currentPlayers, setCurrentPlayers] = useState([])
    const navigate = useNavigate()
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

        const displayWinnings = () => {
          
        }

  return (
    <div className='finishContainer'>
      <div className='nineHoleContainer'>
                {currentPlayers.map((player, index) => {
                    // let holeScore = Object.values(player.score)
                    // const currentTotalScore = holeScore.reduce((acc, score) => {
                    //     acc += Number(score)
                    //     return acc
                    //     }, 0)
                        let endCount = 0
                        let endChips = player.chips
                        if (endChips.length === 0) {
                          return player
                        }
                        endChips.forEach(chip => {
                          positiveChips.includes(chip) ? endCount += 1 : endCount -= 1;
                        })
                        player.endEarnings = endCount
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
                            <p className='currentTotalScore'>Total Score: {player.endEarnings}</p>
                          </div>
                })
                }
            </div>
            <button className='endRound' onClick={endRound}>Return Home</button>
    </div>    
  );
}

export default FinishPage;
