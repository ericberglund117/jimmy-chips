import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useLocalStorage, getStorageValue} from '../../useLocalStorage';
import './scoreCard.css';

const ScoreCard = (props) => {
    let currentPlayers = props.currentPlayers
    let eighteenHolesCheck = props.eighteenHolesCheck
    const nineHolesCount = [1,2,3,4,5,6,7,8,9]
    const eighteenHolesCount = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
    const [scoreValue, setScoreValue] = useState({})
    // const [secondScoreValue, setSecondScoreValue] = useState({})
    // const [thirdScoreValue, setThirdScoreValue] = useState({})
    // const [fourthScoreValue, setFourthScoreValue] = useState({})
    // const [oneScoreInput, setOneScoreInput] = useState('')
    // const [twoScoreInput, setTwoScoreInput] = useState('')
    // const [threeScoreInput, setThreeScoreInput] = useState('')
    // const [fourScoreInput, setFourScoreInput] = useState('')
    let [count, setCount] = useState(0)
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const holesPath = pathname.split("/")
    let holesCount = holesPath[1].includes('eighteen') ? eighteenHolesCount : nineHolesCount
    const [eighteenCurrentPlayers, setEighteenCurrentPlayers] = useState([])
    let completedHoles = false
    const formRef = useRef();
    // useEffect(() => {
    //  if(holesCount.length > 10) {
    //     const [...storedPlayers] = getStorageValue('allPlayers')
    //     const eighteenStoredPlayers = [...storedPlayers].map(player => {
    //         player.full = true
    //         return player
    //     })
    //     setEighteenCurrentPlayers([...eighteenStoredPlayers])
        
    //  }    
    // }, [holesCount.length])

    console.log(currentPlayers)

    const navigateToChips = (e) => {
        // e.preventDefault()
        if (eighteenHolesCheck) {
            setPlayersToEighteen()
        }
        navigate('/assign-chips/:id')
    }

    const setPlayersToEighteen = () => {
        const eighteenUpdate = currentPlayers.map(player => {
            player.full = true
            return player
        })
        localStorage.setItem('allPlayers', JSON.stringify(eighteenUpdate))
        let check = getStorageValue('allPlayers')
        console.log(check)
    }
// figure out way to display current score after navigating through chips and back to score card. Currently score input is blank after chip assignment
    // const updateScore = (e, player, currentHole) => {
    //     e.preventDefault()
    //     console.log(currentPlayers)
    //     // // setPlayerScore(currentHole, player)
    //     const correctPlayer = currentPlayers.find(currPlayer => currPlayer.name === player.name)
    //     // // setScoreValue((prevState) => ({ ...prevState, [currentHole]: scoreInput }))
    //     correctPlayer.score = {...scoreValue}
    //     // console.log(correctPlayer)
    //     console.log(currentPlayers)
    //     formRef.current.reset();
    //     // localStorage.setItem('allPlayers', JSON.stringify(currentPlayers))
    //     // props.updateCurrentScore(scoreValue, player)
    // }

    // const displayCurrentHole = (player) => {
    //     let currentHole = holesCount[count]
    //     if (currentHole === holesCount.length) completedHoles = true
    //         return (
    //             <form className='scoreForm'>
    //                 <p className='holeNumber'>Hole: {currentHole}</p>
    //                 <label htmlFor='playerScore'>Score: </label>
    //                 <input 
    //                 type='number' 
    //                 className='scoreInput'
    //                 value={scoreInput}
    //                 onChange={(e) => {
    //                     // setPlayerScore(currentHole, player, e.target.value)
    //                     setScoreInput(e.target.value)
    //                 }}/>
    //                 <button className='enterScore' onClick={(e) => {
    //                     updateScore(e, player, currentHole)
    //                     setScoreInput()
    //                     }}>Submit Score</button>
    //              </form>
    //         )   
    // }

    // onChange={(e) => {
    //     setScoreInput(...scoreInput, [e.target.value])
    //     // setScoreValue((prevState) => ({ ...prevState, [currentHole]: e.target.value }))
    // }}/>

    // const determineScorecard = () => {
    //     const numberOfForms = currentPlayers.length
    //     if (numberOfForms === 1) return singleFormScorecard()
    //     if (numberOfForms === 2) return doubleFormScorecard()
    //     if (numberOfForms === 3) return tripleFormScorecard()
    //     if (numberOfForms > 4) return fullFormScorecard()
    // }

    // const scoreCardFormTemplate = (player, scoreInputValue) => {
        
    //     console.log(player)
    //     console.log(scoreInputValue)
    //     return (
    //         <div className='scoreCardContainer' key={player}>
    //                     <h3 className='playerName'>{player}</h3>
    //                     <form className='scoreForm'>
    //                         <p className='holeNumber'>Hole: {currentHole}</p>
    //                         <label htmlFor='playerScore'>Score: </label>
    //                         <input 
    //                             type='text' 
    //                             className='scoreInput'
    //                             value={}
    //                             key={player}
    //                             onChange={(e) => {
    //                                 handleChange(e, player, currentHole)
    //                             }}
    //                         />
    //                         <button className='enterScore' onClick={(e) => {
    //                             updateScore(e, player, currentHole)
    //                             }}>Submit Score</button>
    //                     </form> 
    //         </div>
    //     )
    // }

    // const handleChange = (value, player, currentHole) => {
    //     const score = Number(value)
    //     console.log(player)
    //     console.log(currentHole)
    //     if (player === currentPlayers[0].name) {
    //         console.log('first')
    //         setFirstScoreValue(value)
    //         setFirstScoreValue((prevState) => ({ ...prevState, [currentHole]: firstScoreValue }))
    //         console.log(firstScoreValue)
    //     }
    //     else if (player === currentPlayers[1].name) {
    //         setSecondScoreValue((prevState) => ({ ...prevState, [currentHole]: score }))
    //     }
    //     else if (player === currentPlayers[2].name){
    //         setThirdScoreValue((prevState) => ({ ...prevState, [currentHole]: score }))
    //     } 
    //     else if (player === currentPlayers[3].name) {
    //         setFourthScoreValue((prevState) => ({ ...prevState, [currentHole]: score }))
    //     } 
    // }

    // const handleChangeSingle = (value) => {
    //     console.log('first')
    //     console.log("change value", value)
    //     setFirstScoreValue(value)
    // }

    // const singleFormScorecard = () => {
    //     const singlePlayerName = currentPlayers[0].name
    //     let currentHole = holesCount[count]
    //     if (currentHole === holesCount.length) completedHoles = true
    //     console.log(singlePlayerName)
    //     // return scoreCardFormTemplate(singlePlayerName, oneScoreInput)
    //     return (
    //         <div className='scoreCardContainer'>
    //                     <h3 className='playerName' key={singlePlayerName}>{singlePlayerName}</h3>
    //                     <form className='scoreForm'>
    //                         <p className='holeNumber'>Hole: {currentHole}</p>
    //                         <label htmlFor='playerScore'>Score: </label>
    //                         <input 
    //                             type='text' 
    //                             className='scoreInput'
    //                             key={singlePlayerName}
    //                             onChange={(e) =>  handleChange(e.target.value, singlePlayerName, currentHole)
    //                             }
    //                         />
    //                         <button className='enterScore' onClick={(e) => {
    //                             updateScore(e, singlePlayerName, currentHole)
    //                             }}>Submit Score</button>
    //                     </form> 
    //         </div>
    //     )
    // }

    // const doubleFormScorecard = () => {

    //     let currentHole = holesCount[count]
    //     if (currentHole === holesCount.length) completedHoles = true
        
    // }

    // const tripleFormScorecard = () => {

    //     let currentHole = holesCount[count]
    //     if (currentHole === holesCount.length) completedHoles = true
        
    // }

    // const fullFormScorecard = () => {

    //     let currentHole = holesCount[count]
    //     if (currentHole === holesCount.length) completedHoles = true
        
    // }

    // const handleChange = (value, currentHole, player) => {
    //     // const numberOfPlayers = currentPlayers.length
    //     // console.log(numberOfPlayers)
    //     // console.log(currentPlayers)
    //     // console.log(currentHole)
    //     // const correctPlayer = currentPlayers.find(currPlayer => currPlayer.name === player.name)
    //     // if (correctPlayer) {
    //     //     console.log(correctPlayer)
    //     console.log(value)
    //         setScoreValue( prevState => ({...prevState, [currentHole]: value}))
    //         console.log(scoreValue)
    //         // correctPlayer.score = scoreValue
    //     // }
    // }

    return (
    <div className="mainContainer">
        <h2>Scorecard</h2>
        <div className='scoreContainer'>
            {/* {determineScorecard()} */}
            {currentPlayers.map((player, index) => {
                let currentHole = holesCount[count]
                if (currentHole === holesCount.length) completedHoles = true
                    return(
                    <div className='scoreCardContainer'>
                        <h3 className='playerName' key={player.name}>{player.name}</h3>
                        <p className='holeNumber'>Hole: {currentHole}</p>
                        {/* <form className='scoreForm' ref={formRef}>
                            <p className='holeNumber'>Hole: {currentHole}</p>
                            <label htmlFor='playerScore'>Score: </label>
                            <input 
                                type='number' 
                                className='scoreInput'
                                // value={}
                                key={index}
                                onChange={(e) => {
                                    // let inputValue = e.target.value
                                    // handleChange(inputValue, currentHole, player)
                                    setScoreValue(prevState => ({...prevState, [currentHole]: e.target.value}))
                                    console.log(scoreValue)
                                }}
                            />
                            <button className='enterScore' onClick={(e) => {
                                updateScore(e, player, currentHole)
                                }}>Submit Score</button>
                        </form>   */}
                        {/* {displayCurrentHole(player)} */}
                        {/* <button className='enterScore' onClick={(e) => updateScore(e, player)}>Submit Score</button> */}
                            <Link to={`/assign-chips/${player.name}`}>
                                <button className='addChips' onClick={navigateToChips}>Chips</button>
                            </Link>
                    </div> 
                    )  
            })}
        </div>
            <button className='nextHoleButton' onClick={() => setCount(count + 1)} disabled={completedHoles} >Next Hole</button>
    </div>
  );
}

export default ScoreCard;
