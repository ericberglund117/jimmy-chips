import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './scoreCard.css';

const ScoreCard = (props) => {
    console.log("cp score", props)
  return (
    <div className="scoreCardContainer">
        <p>Scorecard</p>
        {}
    </div>
  );
}

export default ScoreCard;
