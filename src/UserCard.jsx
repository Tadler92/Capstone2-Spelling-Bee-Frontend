import { useContext, useState, useEffect } from "react";
import CurrUserContext from "./CurrUserContext";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import './UserCard.css'


const UserCard = ({username, points, place}) => {
  // const [userPlace, setUserPlace] = useState(1);
  // const {
  //   currentUser,
  //   totalPoints,
  //   solvedWords,
  //   playedWords
  // } = useContext(CurrUserContext);
  // let user;

  // if (currentUser) user = currentUser.user;

  
  return (
    <div className="UserCard my-3">
      <Card>
        {place > 3 ? 
          <div className="UserCard-placement UserCard-any-place">
            <p>{place}</p>
          </div> :
          (place === 3 ?
            <div className="UserCard-placement UserCard-third">
              <p>{place}</p>
            </div> :
            (place === 2 ? 
              <div className="UserCard-placement UserCard-second">
                <p>{place}</p>
              </div> :
              <div className="UserCard-placement UserCard-first">
                <p>{place}</p>
              </div>
            )
          )
        }
        {/* <div className="UserCard-placement"> */}
          {/* <p>{place}</p>
        </div> */}
        <CardBody>
          <CardTitle>
            <h5>{username}</h5>
          </CardTitle>
          <CardText>{points} points</CardText>
        </CardBody>
      </Card>
    </div>
  )
};


export default UserCard;


// Played - 0   ***
// Won - 0.0%
// Win rate - 0
// Current Streak - 0
// Max Streak - 0

// Solved - 0  ****
// Points - 0  ****
// graph showing correct guess # amount  **