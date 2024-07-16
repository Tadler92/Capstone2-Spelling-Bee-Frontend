
import { useContext } from "react";
import CurrUserContext from "./CurrUserContext";
import { Navigate, Outlet } from "react-router-dom";


const PrivateRoutes = () => {
  const {currentUser} = useContext(CurrUserContext);

  return (
    <>
      {currentUser && currentUser.user.isAdmin ? 
        <Outlet /> :
        <Navigate to='/' replace />
      }
    </>
  )
};


export default PrivateRoutes;