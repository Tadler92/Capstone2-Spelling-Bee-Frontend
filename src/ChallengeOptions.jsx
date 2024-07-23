import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CurrUserContext from "./CurrUserContext";
import OptionCard from "./OptionCard";


const ChallengeOptions = () => {
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

  return (
    <div>
      <h2 className="mt-5">Challenge Modes:</h2>
      <div title="easyChallenges">
      <Link to='/challenges/easy' className="btn btn-md px-5 my-3 btn-success">
        {/* Easy */}
        <OptionCard 
          mode='Easy'
          timeLimit='3 minutes'
          description='Try to spell 10 random words within the given time limit.'
          bgColor='success'
        />
      </Link>
        {/* <p>{playedWords}</p>
        <p>Played</p> */}
      </div>
      <div title="intermediateChallenges">
      <Link to='/challenges/medium' className="btn btn-md px-5 my-3 btn-warning">
        {/* Medium */}
        <OptionCard 
          mode='Medium'
          timeLimit='3.5 minutes'
          description='Try to spell 20 random words within the given time limit.'
          bgColor='warning'
        />
      </Link>
        {/* <p>{solvedWords}</p>
        <p>Solved</p> */}
      </div>
      <div title="hardChallenges">
      <Link to='/challenges/hard' className="btn btn-md px-5 my-3 btn-danger">
        {/* Hard */}
        <OptionCard 
          mode='Hard'
          timeLimit='3.5 minutes'
          description='Try to spell 30 random words within the given time limit.'
          bgColor='danger'
        />
      </Link>
        {/* <p>{totalPoints}</p>
        <p>Points</p> */}
      </div>
    </div>
  )
};


export default ChallengeOptions;


// Played - 0   ***
// Won - 0.0%
// Win rate - 0
// Current Streak - 0
// Max Streak - 0

// Solved - 0  ****
// Points - 0  ****
// graph showing correct guess # amount  **