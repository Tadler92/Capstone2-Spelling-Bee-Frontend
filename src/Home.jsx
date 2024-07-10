import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SpellWordForm from "./SpellWordForm";
import GuessedAnswer from "./GuessedAnswer";
import "./Home.css"

const Home = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0)

  return (
    <div className="Home">
      {/* <div>
        <p>NavBar thing</p>
      </div> */}

      <div>
        <p>Click to go to the <Link to='/eat'>eat page</Link></p>
        <h1>Insert "How to Play" card</h1>
        {/* <img
        src="https://i.giphy.com/pBj0EoGSYjGms.gif"
        alt="Audrey II wants to eat." 
        /> */}

        <GuessedAnswer guess='Hello' />
        <GuessedAnswer guess='' />
        <GuessedAnswer guess='' />
        <GuessedAnswer guess='' />
        <GuessedAnswer guess='' />
        <GuessedAnswer guess='' />
      </div>

      <div>
        <audio id="audioElement" controls>
          Your browser does not support the audio element.
        </audio>
      </div>

      {/* <div>
        <button onClick={() => console.log(1+1)}>Submit</button>
      </div> */}

      <SpellWordForm />
      {/* <button onClick={() => navigate('order-summary', {replace: true})}>Place Order</button> */}
    </div>
  )
};


export default Home;