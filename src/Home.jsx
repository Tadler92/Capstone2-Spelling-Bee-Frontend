import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
import SpellWordForm from "./SpellWordForm";
import GuessedAnswer from "./GuessedAnswer";
import SpellingBeeApi from "./api";
import getDictWord from "./helpers";
import CurrUserContext from "./CurrUserContext";
import "./Home.css"

const Home = () => {
  const INITIAL_STATE = [
    {
      id: 1,
      guess: '',
      correctGuess: null
    }, 
    {
      id: 2,
      guess: '',
      correctGuess: null
    }, 
    {
      id: 3,
      guess: '',
      correctGuess: null
    }, 
    {
      id: 4,
      guess: '',
      correctGuess: null
    }, 
    {
      id: 5,
      guess: '',
      correctGuess: null
    }, 
    {
      id: 6,
      guess: '',
      correctGuess: null
    }, 
  ]

  const navigate = useNavigate();
  const {dailyWord, dailyWordObj} = useContext(CurrUserContext);
  // const [dailyWord, setDailyWord] = useState({});
  // const [dailyWordObj, setDailyWordObj] = useState({});
  const [guesses, setGuesses] = useState(INITIAL_STATE);
  const [guessCount, setGuessCount] = useState(0);

  // useEffect(() => {
  //   async function getWord() {
  //     let word = await SpellingBeeApi.getWord(1);
  //     setDailyWord(word);

  //     let todayObj = await getDictWord(dailyWord.word);
  //     setDailyWordObj(todayObj);
  //   }

  //   getWord();
  // }, []);

  console.log('The Daily Word', dailyWord)

  // let todayObj = getDictWord(dailyWord);
  console.log('Daily Word Object', dailyWordObj);

  const checkGuess = (guess) => {
    guesses[guessCount]['guess'] = guess;


    if (guess === dailyWord.word) {
      guesses[guessCount]['correctGuess'] = true;
      setGuessCount(guessCount + 1);
    }
    else {
      console.log('guessCount', guessCount);
      console.log('guesses guessCount', guesses[guessCount]);
      guesses[guessCount]['correctGuess'] = false;
      setGuessCount(guessCount + 1);
    }

    console.log('Correct/Incorrect guess: ', guesses);
  }

  return (
    <div className="Home">
      {/* <div>
        <p>NavBar thing</p>
      </div> */}

      <div>
        {/* <p>Click to go to the <Link to='/eat'>eat page</Link></p> */}
        {/* <h1>Insert "How to Play" card</h1> */}
        {/* <img
        src="https://i.giphy.com/pBj0EoGSYjGms.gif"
        alt="Audrey II wants to eat." 
        /> */}

        {/* <GuessedAnswer guess='Hello' />
        <GuessedAnswer guess={`${dailyWord.word}`} />
        <GuessedAnswer guess='' />
        <GuessedAnswer guess='' />
        <GuessedAnswer guess='' />
        <GuessedAnswer guess='' /> */}

        {guesses.map(guess => (
          <GuessedAnswer 
            key={guess.id}
            guess={guess.guess}
            correct={guess.correctGuess}
          />
        ))}

        {/* {companies.map(company => (
        <CompanyCard 
          key={company.handle}
          handle={company.handle}
          name={company.name}
          description={company.description}
        />
      ))} */}
      </div>

      <div>
        <audio id="audioElement" controls src={`${dailyWordObj.audio}`}>
          Your browser does not support the audio element.
        </audio>
      </div>

      {/* <div>
        <button onClick={() => console.log(1+1)}>Submit</button>
      </div> */}

      <SpellWordForm compareWords={checkGuess} />
      {/* <button onClick={() => navigate('order-summary', {replace: true})}>Place Order</button> */}
    </div>
  )
};


export default Home;