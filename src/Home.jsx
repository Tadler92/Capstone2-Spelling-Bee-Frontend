import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>NavBar thing</p>
      </div>

      <div>
        <p>Click to go to the <Link to='/eat'>eat page</Link></p>
        <h1>Insert "How to Play" card</h1>
        {/* <img
        src="https://i.giphy.com/pBj0EoGSYjGms.gif"
        alt="Audrey II wants to eat." 
        /> */}
      </div>

      <div>
        <audio id="audioElement" controls>
          Your browser does not support the audio element.
        </audio>
      </div>

      <div>
        <button onClick={() => console.log(1+1)}>Submit</button>
      </div>
      {/* <button onClick={() => navigate('order-summary', {replace: true})}>Place Order</button> */}
    </>
  )
};


export default Home;