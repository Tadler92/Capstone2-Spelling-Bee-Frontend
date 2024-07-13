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
  const start = moment('07-09-2024', 'MM-DD-YYYY');
  let today = moment();
  let todayWordID = today.diff(start, 'days');

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
    } catch (err) {
      console.log('LOGIN ERROR', err);
    };
  };

  async function signup(signupData) {
    try {
      let token = await SpellingBeeApi.userSignup(signupData);

      setToken(token);
      setStoredToken(token);
      SpellingBeeApi.token = token;
    } catch (err) {
      console.log('SIGNUP ERROR', err);
    };
  };

  function logout() {
    setCurrentUser(null);
    setToken(null);
    setStoredToken(null);
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
            todayWordID}}
        >
          <NavBar logout={logout} />
          <RoutesList login={login} signup={signup} />
        </CurrUserContext.Provider>
      </div>
    </>
  )
}

export default App
