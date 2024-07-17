import { useState } from "react";
import './GuessedAnswer.css'


const GuessedAnswer = ({guess, correct}) => {
  const [correctClass, setCorrectClass] = useState({
    trueText: "GuessedAnswer my-3 bg-success",
    falseText: "GuessedAnswer my-3 bg-danger",
  });

  if (correct === null) {
    correctClass['falseText'] = "GuessedAnswer my-3"
  } else {
    correctClass['falseText'] = "GuessedAnswer my-3 bg-danger"
  };

  return (
    // <div className="GuessedAnswer border border-danger my-3">
    // <div className="GuessedAnswer my-3">
    <div title="GuessBox" className={correct ?
      correctClass['trueText'] :
      correctClass['falseText']
    }>
      {/* <p className={correct ? "GuessedAnswer-correct" : "GuessedAnswer-incorrect"}> */}
      {/* <p className={correct ? 
        "text-success pt-1" : 
        "text-danger pt-1"
      }> */}
      <p className='pt-1'>
        {guess}
      </p>
    </div>
  )
};


export default GuessedAnswer;