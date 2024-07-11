import { useState, useEffect, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RoutesList from './RoutesList'
import NavBar from './NavBar'
import moment from 'moment'
import SpellingBeeApi from './api'
import getDictWord from './helpers'
import CurrUserContext from './CurrUserContext'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [dailyWord, setDailyWord] = useState({});
  const [dailyWordObj, setDailyWordObj] = useState({});
  const start = moment('07-09-2024', 'MM-DD-YYYY');
  let today = moment();
  let todayWordID = today.diff(start, 'days');

  const begin = 1;
  let stop = 2;
  let wordID = stop - begin

  useEffect(() => {
    async function getWord() {
      try {
        // const word = await SpellingBeeApi.getWord(wordID);
        const word = await SpellingBeeApi.getWord(todayWordID);
        if (!ignore) setDailyWord(word);

        const todayObj = await getDictWord(dailyWord.word);
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


  // const start = moment('07-09-2024', 'MM-DD-YYYY');
  console.log('This is start day', start);

  // let today = moment();
  console.log('This is today', today);
  console.log('This is today date', today.get('date'));
  console.log('This is tomorrow date', (today.get('date') + 1));

  console.log('Moment Difference:', today.diff(start, 'days'));

  return (
    <>
      <div>
        <CurrUserContext.Provider value={{dailyWord, dailyWordObj}}>
          <NavBar />
          <RoutesList />
        </CurrUserContext.Provider>
      </div>
    </>
  )
}

export default App
