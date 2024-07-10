import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RoutesList from './RoutesList'
import NavBar from './NavBar'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
