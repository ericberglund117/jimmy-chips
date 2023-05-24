import { useLocation } from 'react-router-dom';
import './chipsAssignment.css';

const ChipsAssignment = (props) => { 
    const location = useLocation()
    const stateData = location.state
    const playerChips = stateData.playerChips
    const assignChips = () => {
        console.log(stateData.currentChips)
    }

  return (
    <div className="scoreCardContainer">
        <p>Chips</p>
        {playerChips.map((chip, index) => {
            return (
                <section>
                    <p key={index}>{chip}</p>
                    <button className='assignChip' onClick={assignChips} key={chip}>Assign Chip</button>
                </section>
            )
        })}
    </div>
  );
}

export default ChipsAssignment;
