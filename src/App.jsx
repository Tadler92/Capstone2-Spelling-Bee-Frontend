import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RoutesList from './RoutesList'
import NavBar from './NavBar'
import moment from 'moment'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const start = moment('07-01-2024', 'MM-DD-YYYY');
  console.log('This is start day', start);

  let today = moment();
  console.log('This is today', today);
  console.log('This is today date', today.get('date'));
  console.log('This is tomorrow date', (today.get('date') + 1));

  return (
    <>
      <div>
        <NavBar />
        <RoutesList />
      </div>
    </>
  )
}

export default App
