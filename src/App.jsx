import { useState, useEffect, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RoutesList from './RoutesList'
import NavBar from './NavBar'
import moment from 'moment'
import SpellingBeeApi from './api'
import {getDictWord} from './helpers'
import CurrUserContext from './CurrUserContext'
import useLocalStorage from './useLocalStorage'
import { jwtDecode } from 'jwt-decode'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [storedToken, setStoredToken] = useLocalStorage('user-token', null);
  const [dailyWord, setDailyWord] = useState({});
  const [dailyWordObj, setDailyWordObj] = useState({});
  const [wordAlreadyComplete, setWordAlreadyComplete] = useState(false);
  const [signupGuess, setSignupGuess] = useState({})

  const [totalPoints, setTotalPoints] = useState(0);
  const [playedWords, setPlayedWords] = useState(0);
  const [solvedWords, setSolvedWords] = useState(0);

  const start = moment('07-09-2024', 'MM-DD-YYYY');
  let today = moment();
  let todayWordID = today.diff(start, 'days');

  // let totalPoints = 0;
  // let solvedWords = 0;
  // let playedWords = 0;

  // if (currentUser) {
  //   totalPoints = currentUser.user.points.reduce(
  //     (accumulator, currentValue) => accumulator + currentValue,
  //     0,
  //   );

  //   playedWords = currentUser.user.playedWords.length;

  //   currentUser.user.playedWords.map(wordObj => (
  //     wordObj.solved ? 
  //     (solvedWords += 1) :
  //     (solvedWords + 0)
  //   ));
  // };

  const updateStats = (complete=true, solved=false, pts=0) => {
    solved ? (
      setTotalPoints(totalPoints + pts),
      setSolvedWords(solvedWords + 1),
      setPlayedWords(playedWords + 1)
    ) :
    setPlayedWords(playedWords + 1)

    console.log('updated stats', totalPoints, solvedWords, playedWords);
  };

  // const begin = 1;
  // let stop = 2;
  // let wordID = stop - begin

  useEffect(() => {
    async function getCurrUserInfo() {
      try {
        let {username} = jwtDecode(token);

        let currUserInfo = await SpellingBeeApi.getCurrUser(username);
        console.log('currUserInfo in App.jsx', currUserInfo);
        setCurrentUser(currUserInfo);

        let checkWordStatus = await SpellingBeeApi.getWordCompletion(currUserInfo.user.username, todayWordID);
        console.log('checking Word Status in APP.JSX', checkWordStatus);
        setWordAlreadyComplete(checkWordStatus.wordCompletion.completed);

        if (currUserInfo) {
          setTotalPoints(currUserInfo.user.points.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0,
          ));
          // console.log('*********user points APP.JSX', currUserInfo.user.points, totalPoints)
      
          setPlayedWords(currUserInfo.user.playedWords.length);
      
          currUserInfo.user.playedWords.map(wordObj => (
            wordObj.solved ? 
            setSolvedWords(solvedWords + 1) :
            setSolvedWords(solvedWords + 0)
          ));
        };

      } catch (err) {
        console.log('Error getting user information', err);
      };
    };

    getCurrUserInfo();
  }, [token]);

  useEffect(() => {
    async function getWord() {
      try {
        // const word = await SpellingBeeApi.getWord(wordID);
        const word = await SpellingBeeApi.getWord(todayWordID);
        word['complete'] = false;
        if (!ignore) setDailyWord(word);
        

        const todayObj = await getDictWord(dailyWord.word);
        console.log('todayObj in App.jsx', todayObj)
        if (!ignore) setDailyWordObj(todayObj);
      } catch (err) {
        console.log("Error getting word information", err)
      }
    }

    let ignore = false;
    getWord();
    return () => ignore = true;

  // }, [dailyWord, dailyWordObj]);
  // }, [dailyWord]);
  // }, [wordID, dailyWord.word]);
  }, [todayWordID, dailyWord.word]);
  // }, []);

  console.log('Daily Word in App.jsx', dailyWord);

  async function login(loginData) {
    try {
      let token = await SpellingBeeApi.userLogin(loginData);

      setToken(token);
      setStoredToken(token);
      SpellingBeeApi.token = token;

      return {logIn: 'Success'};

    } catch (err) {
      console.log('LOGIN ERROR', err);
      return {loginError: err};
    };
  };

  async function signup(signupData) {
    try {
      let token = await SpellingBeeApi.userSignup(signupData);

      setToken(token);
      setStoredToken(token);
      SpellingBeeApi.token = token;

      if (dailyWord.complete) {
        console.log('currentUser in signup func', currentUser);
        console.log('signupData.username in signup func', signupData.username);
        console.log('signupGuess in signup func', signupGuess);

        (signupGuess.solved ? 
        (
          await SpellingBeeApi.addWordToUser(signupData.username, todayWordID, {
          completed: true,
          solved: true
          }),
          await SpellingBeeApi.addGuessToUser(signupData.username, signupGuess.guessID),
          await SpellingBeeApi.addPointsToUser(signupData.username, 5)
        ) :
        await SpellingBeeApi.addWordToUser(signupData.username, todayWordID, {
          completed: true,
          solved: false
        }));

        // await SpellingBeeApi.addPointsToUser(currentUser.user.username, 5)

        // await SpellingBeeApi.addGuessToUser(currentUser.user.username, signupGuess.guessID)

        // return {signUP: 'Success'};
      }

      return {signUP: 'Success'};

    } catch (err) {
      console.log('SIGNUP ERROR', err);
      return {signupError: err};
    };
  };

  function logout() {
    setCurrentUser(null);
    setToken(null);
    setStoredToken(null);
  }

  async function addWord(wordData) {
    try {
      let newWord = await SpellingBeeApi.addWord(wordData);

      console.log('newWord in APP.JSX', newWord);

      return {wordAdded: 'Success'}
      
    } catch (err) {
      console.log('ERROR ADDING WORD', err);

      return {addingError: err}
    }
  }


  // const start = moment('07-09-2024', 'MM-DD-YYYY');
  console.log('This is start day', start);

  // let today = moment();
  // console.log('This is today', today);
  // console.log('This is today date', today.get('date'));
  // console.log('This is today Full', today.format("dddd, MMMM Do YYYY, h:mm:ss a"));
  // console.log('This is tomorrow date', (today.get('date') + 1));

  let tomorrow = today.clone();
  tomorrow.add(1, 'day').startOf('day');
  console.log('This is tomorrow Full', tomorrow.format("dddd, MMMM Do YYYY, h:mm:ss a"));
  console.log('This is alt tomorrow Full', tomorrow.format("ddd MMM D YYYY h:mm:ss"));

  console.log('Moment Difference:', today.diff(start, 'days'));

  let duration = moment.duration(tomorrow.diff(today));
  // console.log('Testing what duration is:', duration);
  // console.log('Duration milliseconds', duration.asMilliseconds())
  // console.log('Duration milliseconds', duration.milliseconds())
  // console.log('Duration seconds', duration.seconds())
  // console.log('Duration minutes', duration.minutes())
  // console.log('Duration hours', duration.hours())

  return (
    <>
      <div>
        <CurrUserContext.Provider 
          value={{
            dailyWord, 
            dailyWordObj, 
            duration, 
            tomorrow,
            currentUser,
            todayWordID,
            wordAlreadyComplete,
            totalPoints,
            solvedWords,
            playedWords,
            updateStats,
            setSignupGuess}}
        >
          <NavBar logout={logout} />
          <RoutesList login={login} signup={signup} addWord={addWord} />
        </CurrUserContext.Provider>
      </div>
    </>
  )
}

export default App
