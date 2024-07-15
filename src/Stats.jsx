import { useContext, useState } from "react";
import CurrUserContext from "./CurrUserContext";


const Stats = () => {
  // const [totalPoints, setTotalPoints] = useState(0);
  // const [playedWords, setPlayedWords] = useState(0);
  // const [solvedWords, setSolvedWords] = useState(0);
  const {
    currentUser,
    totalPoints,
    solvedWords,
    playedWords
  } = useContext(CurrUserContext);
  let user;

  if (currentUser) user = currentUser.user;

  console.log('Total points after reduce Stats.jsx', totalPoints);
  
  console.log('Total playedWords Stats.jsx', playedWords);

  console.log('Total solvedWords after map Stats.jsx', solvedWords);

  return (
    <div>
      <div>
        <p>{playedWords}</p>
        <p>Played</p>
      </div>
      <div>
        <p>{solvedWords}</p>
        <p>Solved</p>
      </div>
      <div>
        <p>{totalPoints}</p>
        <p>Points</p>
      </div>
    </div>
  )
};


export default Stats;


// Played - 0   ***
// Won - 0.0%
// Win rate - 0
// Current Streak - 0
// Max Streak - 0

// Solved - 0  ****
// Points - 0  ****
// graph showing correct guess # amount  **