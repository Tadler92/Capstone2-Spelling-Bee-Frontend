
import { useContext } from "react";
import CurrUserContext from "./CurrUserContext";
import { Navigate, Outlet } from "react-router-dom";


const PrivateRoutes = () => {
  const {currentUser} = useContext(CurrUserContext);

  return (
    <>
      {currentUser ? 
        <Outlet /> :
        <Navigate to='/signup' replace />
      }
    </>
  )
};


export default PrivateRoutes;