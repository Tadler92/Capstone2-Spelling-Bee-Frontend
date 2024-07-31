import { useState } from "react";
import "./Hints.css"

const Hints = ({definition, etymology, partOfSpeach}) => {
  const [showDef, setShowDef] = useState(true);
  const [showEty, setShowEty] = useState(true);
  const [showPoS, setShowPoS] = useState(true);
  
  // let etymologyArray = etymology.split('{');

  // setEtArr(etymologyArray);

  return (
    <>
      <h2>Hints:</h2>

      <div className="Hints-p">
      <p hidden={showDef}><b>Definition:</b> {definition}</p>
      <p hidden={showEty}><b>Etymology:</b> {etymology}</p>
      <p hidden={showPoS}><b>Part of Speach:</b> {partOfSpeach}</p>
      </div>

      <button 
        className="btn-sm bg-primary text-light mx-2"
        onClick={() => setShowDef(!showDef)}
      >
        Definition
      </button>
      <button 
        className="btn-sm bg-primary text-light mx-2"
        onClick={() => setShowEty(!showEty)}
      >
        Etymology
      </button>
      <button 
        className="btn-sm bg-primary text-light mx-2"
        onClick={() => setShowPoS(!showPoS)}
      >
        Part of Speach
      </button>
    </>
  )
};


export default Hints;