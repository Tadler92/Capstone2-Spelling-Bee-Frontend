import { useContext, useState, useEffect, useRef } from "react";
import CurrUserContext from "./CurrUserContext";
import SpellingBeeApi from "./api";
import UserCard from "./UserCard";
import './RankedUsers.css'


const RankedUsers = () => {
  const [usersRanked, setUsersRanked] = useState([]);
  // const [userPlace, setUserPlace] = useState(1);
  let userPlace = 1;
  const {
    currentUser,
    totalPoints,
    solvedWords,
    playedWords
  } = useContext(CurrUserContext);
  let user;

  if (currentUser) user = currentUser.user;

  useEffect(() => {
    async function getRankedUsers() {
      try {
        let allUsers = await SpellingBeeApi.getRankedUsers();

        // allUsers.users.map(user => {
        //   user['place'] = userPlace;
        //   setUserPlace(userPlace + 1);
        //   // userPlace += 1;
        // })
        // console.log('ALL USERS IN RankedUsers', allUsers);
        // console.log('ALL USERS IN RankedUsers', allUsers.users);
        setUsersRanked(allUsers.users);
      } catch (err) {
        console.log('Error getting user information', err);
      };
    };

    getRankedUsers();
  }, []);

  usersRanked.map(user => {
    user['place'] = userPlace;
    userPlace += 1;
  });

  console.log('UsersRanked', usersRanked);
  console.log('userplace', userPlace)
  
  return (
    <div className="RankedUsers">
      <h1>Top Spellers:</h1>

      {usersRanked.map(user => (
        <UserCard
          key={user.id}
          username={user.username}
          points={user.totalPoints}
          place={user.place} 
        />
      ))}
    </div>
  )
};


export default RankedUsers;