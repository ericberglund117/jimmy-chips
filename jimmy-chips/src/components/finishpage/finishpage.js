import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import './finishpage.css';
import { useLocalStorage, getStorageValue} from '../../useLocalStorage';
import { negChips, posChips, flatten } from '../../utils';

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

        const determineFinishedMessage = () => {
          console.log("winnings", currentPlayers)
          let message = ''
           return currentPlayers.map(player => {
            if (player.chipsScore < 0)  {
              message = `${player.name} owes everyone ${Math.abs(player.chipsScore)}!`
            } else if (player.chipsScore > 0) {
              message = `${player.name} recieves ${Math.abs(player.chipsScore)} from everyone!`
            } else {
              message = `${player.name} is washed up!`
            }
            return (
              <div className='winningsContainer'>
                <p className='indMessage'>{message}</p>
              </div>
            )
           })
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
                    let endChips = flatten(player.chips)
                    if (endChips.length === 0) {
                      player.chipsScore = 0
                    } else {
                      endChips.forEach(chip => {
                        console.log(chip)
                        if(posChips.includes(chip)) {
                          console.log('pos')
                          endCount += 1
                        } else {
                          (console.log('neg'))
                          endCount -= 1
                        }
                      })
                      player.chipsScore = endCount
                    }   
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
                            <p className='currentTotalScore'>Chip Score: {player.chipsScore}</p>
                          </div>
                })
                }
            </div>
            {determineFinishedMessage()}
            <button className='endRound' onClick={endRound}>Return Home</button>
    </div>    
  );
}

export default FinishPage;
