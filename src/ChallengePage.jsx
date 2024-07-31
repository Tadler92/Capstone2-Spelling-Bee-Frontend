import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
import SpellWordForm from "./SpellWordForm";
import GuessedAnswer from "./GuessedAnswer";
import SpellingBeeApi from "./api";
import {getDictWord, randomIntArray} from "./helpers";
import CurrUserContext from "./CurrUserContext";
import CountdonwClock from "./CountdownClock";
import Countdown from "react-countdown";
import Hints from "./Hints";
import "./Home.css"
import './ChallengePage.css'

const ChallengePage = ({mode}) => {

  const navigate = useNavigate();
  const {
    currentUser, 
    updateStats,
  } = useContext(CurrUserContext);
  const [challengeWord, setChallengeWord] = useState({});
  const [challengeWordObj, setChallengeWordObj] = useState({});
  const [challengeStarted, setChallengeStarted] = useState(false);
  const [challengeComplete, setChallengeComplete] = useState(false);
  const [guesses, setGuesses] = useState([{id: 1, correctGuess: null}]);
  const [challengeGuess, setChallengeGuess] = useState('');
  // const [idxArray, setIdxArray] = useState(randomIntArray(1, 11, 10));
  const [idxArray, setIdxArray] = useState(randomIntArray(mode));
  const [guessCount, setGuessCount] = useState(0);
  const [wordIdx, setWordIdx] = useState(idxArray[guessCount]);
  const [clockAtZero, setClockAtZero] = useState(false);
  const [incorrectGuess, setIncorrectGuess] = useState(false);
  const [stopTimer, setStopTimer] = useState(false);
  const [userSolved, setUserSolved] = useState(false);
  // let challengeCount = 0;
  console.log('guessCount in ChallengePage', guessCount);
  // console.log('challengeCount in ChallengePage', challengeCount);
  // const [wordIdx, setWordIdx] = useState(idxArray[challengeCount]);


  let user;

  if (currentUser) user = currentUser.user;

  console.log('idxArray in ChallengePage', idxArray);
  // console.log('iterator in ChallengePage', iterator);
  console.log('wordIdx in ChallengePage', wordIdx);

  useEffect(() => {
    async function getWord() {
      let word = await SpellingBeeApi.getWord(wordIdx);
      setChallengeWord(word);

      // let todayObj = await getDictWord(challengeWord.word);
      // setChallengeWordObj(todayObj);
    }

    getWord();
  }, [wordIdx]);

  useEffect(() => {
    async function getWordObj() {
      // let word = await SpellingBeeApi.getWord(wordIdx);
      // setChallengeWord(word);

      if (challengeWord.word) {
        console.log('*********The Challenge Word in the OBJ useEffect', challengeWord);
        let todayObj = await getDictWord(challengeWord.word);
        setChallengeWordObj(todayObj);
        console.log('********Challenge Word Object in the useEffect', challengeWordObj);
      }
    }

    getWordObj();
  }, [challengeWord.word]);

  console.log('The Challenge Word in ChallengePage.jsx', challengeWord)

  // let todayObj = getDictWord(dailyWord);
  console.log('Challenge Word Object in ChallengePage.jsx', challengeWordObj);

  const checkGuess = async (guess) => {
    guesses[guessCount] = {
      id: (guessCount + 1),
      guess
    };


    if (guess.toLowerCase() === challengeWord.word) {
      guesses[guessCount]['correctGuess'] = true;

      // if ((guessCount + 1) === 10) {
      if ((guessCount + 1) === idxArray.length) {
        setChallengeComplete(true);
        setStopTimer(true);
      }
      else {
        // guesses.push({id: (guessCount + 2), correctGuess: null})
        setGuesses(guesses => ([...guesses, {id: (guessCount + 2), correctGuess: null}]))
        // console.log('!!!!!!guesses when adding a new guessBOX', guesses);
      // console.log('current guessCount in Home.jsx', guessCount);

      // if (user) {
      //   const userPoints = await SpellingBeeApi.addPointsToUser(user.username, (guessCount + 1));
      //   console.log('checking userPoints in Home.jsx', userPoints);

      //   const userGuess = await SpellingBeeApi.addGuessToUser(user.username, (guessCount + 1));
      //   console.log('checking userGuess in Home.jsx', userGuess);

      //   updateStats(true, true, userPoints.addedPoints.awardedPoints);
      // } else {
      //   updateStats(true, true, 10);
      //   setSignupGuess({
      //     solved: true,
      //     guessID: (guessCount + 1)
      //   });
      // };

      setGuessCount(guessCount + 1);
      // challengeCount += 1;
      console.log('***guessCount before wordIdx', guessCount)
      setWordIdx(idxArray[guessCount+1]);
      // setWordIdx(idxArray[challengeCount]);
      }
    }
    else {
      console.log('guessCount', guessCount);
      console.log('guesses guessCount', guesses[guessCount]);
      guesses[guessCount]['correctGuess'] = false;
      setIncorrectGuess(true);
      setStopTimer(true);
    }

    console.log('Correct/Incorrect guess: ', guesses);

    // if (guessCount >= 11 || guesses[guessCount]['correctGuess']) {
    // if (guessCount >= 11) {
    if (guessCount >= (idxArray.length + 1)) {
      setChallengeComplete(true);
      // dailyWord['complete'] = true;

      // guesses[guessCount]['correctGuess'] ? 
      // if (currentUser) {
      //   if (guesses[guessCount]['correctGuess']) {
      //     const userWord = await SpellingBeeApi.addWordToUser(user.username, todayWordID, {
      //       completed: true,
      //       solved: true
      //     });
      //     console.log('checking CORRECT userWord in Home.jsx', userWord);
      //     setUserSolved(userWord.wordCompletion.solved)
      //   }
      //   else {
      //     const userWord = await SpellingBeeApi.addWordToUser(user.username, todayWordID, {
      //       completed: true,
      //       solved: false
      //     });
      //     updateStats(true, false, 0);
      //     console.log('checking INCORRECT userWord in Home.jsx', userWord);
      //   }
      
      // // const userWord = (guesses[guessCount]['correctGuess'] ? (
      // //   await SpellingBeeApi.addWordToUser(user.username, todayWordID, {
      // //     completed: true,
      // //     solved: true
      // //   })
      // //   // updateStats(true, true, (user.points || 10))) : (
      // //   ) : (
      // //   await SpellingBeeApi.addWordToUser(user.username, todayWordID, {
      // //     completed: true,
      // //     solved: false
      // //   })),
      // //   updateStats(true, false, 0));

      // //   console.log('checking userWord in Home.jsx', userWord);
      // } else {
      //   if (!guesses[guessCount]['correctGuess']) updateStats(true, false, 0);
      // }

    };

    // console.log('Daily word in checkGuess', dailyWord);
    // console.log('guessCount in checkGuess', guessCount);
  }

  const startChallenge = () => {
    setChallengeStarted(true);
  }

  const checkClock = (timer) => {
    let timerEx = `00:00`
    // let timerEx = `00:
    //     00`
    // if (timer === '00: 00') setClockAtZero(true);
    if (timer === timerEx) setClockAtZero(true);
  }

  const stopClock = (clockId) => {
    // if (incorrectGuess || challengeComplete) clearInterval(clockId);
    clearInterval(clockId);
  }

  return (
    <div className="Home">

      <div>

        {guesses.map(guess => (
          <GuessedAnswer 
            key={guess.id}
            guess={guess.guess}
            correct={guess.correctGuess}
          />
        ))}
      </div>

      {!challengeStarted ?
        <div className="ChallengePage-startDiv my-4">
          <p>To begin the challenge, click the button below.  When you do so, you'll be given your first word to spell, and your timer will start.</p>
          <button className="btn btn-primary" onClick={startChallenge}>
            Start Challenge
          </button>
        </div> : 
        <>
          <div title="clockDiv" className="ChallengePage-clock my-4">
            <CountdonwClock 
              checkClock={checkClock} 
              modeTimer={mode}
              stopCountdown={stopClock}
              checkStopCountdown={stopTimer}
            />
          </div>

          <div title="guessingDiv" hidden={incorrectGuess || clockAtZero || challengeComplete}>
            <h3>Word #{guessCount + 1}</h3>
            <div>
              <audio id="audioElement" controls src={`${challengeWordObj.audio}`}>
                Your browser does not support the audio element.
              </audio>
            </div>

            <div>
              <Hints 
                definition={challengeWordObj.definition} 
                partOfSpeach={challengeWordObj.partOfSpeech}
                etymology={challengeWordObj.etymology}
              />
            </div>

            <SpellWordForm compareWords={checkGuess} />
          </div>
        </>}

      {/* <div title="clockDiv" className="ChallengePage-clock my-4">
        <CountdonwClock 
          checkClock={checkClock} 
          modeTimer={mode}
          stopCountdown={stopClock}
          checkStopCountdown={stopTimer}
        />
      </div>

      <div title="guessingDiv" hidden={incorrectGuess || clockAtZero || challengeComplete}>
        <h3>Word #{guessCount + 1}</h3>
        <div>
          <audio id="audioElement" controls src={`${challengeWordObj.audio}`}>
            Your browser does not support the audio element.
          </audio>
        </div>

        <div>
          <Hints 
            definition={challengeWordObj.definition} 
            partOfSpeach={challengeWordObj.partOfSpeech}
            etymology={challengeWordObj.etymology}
          />
        </div>

        <SpellWordForm compareWords={checkGuess} />
      </div> */}

      <div className="ChallengePage-failPass my-5" hidden={!(incorrectGuess || clockAtZero || challengeComplete)}>
        {challengeComplete ? 
          <h5 className="text-success">
            Congrats!! You completed the Spelling Bee Challenge on {mode} mode! Try your hand at our other modes, or give this mode another go.
          </h5> :
          // null
          <h5 className="text-danger">
            Oh, no! You only got {guessCount} out of {idxArray.length} guesses correct. You've failed the Spelling Bee Challenge; the correct spelling was 
            <span className="d-block display-4">"{challengeWord.word}"</span>
            That's okay though, you can try this mode again, or try one of our other modes.
          </h5>
        }
        {/* {incorrectGuess || clockAtZero ? 
          <h1>
            Oh, no! You've failed the spelling bee challenge... That's okay though, you can try this mode again, or try one of our other modes.
          </h1> :
          null
        } */}
      </div>

      <div title="returnDiv">
        <h5 className="mt-5 mb-3">
          Click below to select a different challenge mode!
        </h5>
        <Link to='/challenges' className="btn btn-md px-5 mx-3 btn-warning">Spelling Challenges</Link>
      </div>
    </div>
  )
};


export default ChallengePage;