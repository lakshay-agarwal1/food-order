
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import { useEffect, useState } from "react";
import UserContext from "../Utils/UserContext";

function Layout() {

  const [userInfo, setUserInfo] = useState();

  useEffect(()=> {
    //api call --> send the userName and passsword and get the data
    const data = {
      name : "lakshay",
    }
    setUserInfo (data.name);
  }, [])
  return (
    <>
      <UserContext.Provider value={{loggedUser:userInfo}}>

      <UserContext.Provider value={{loggedUser: "yash"}}>
      <Header />
      </UserContext.Provider>

      <Outlet />
      </UserContext.Provider>
      
    </>
  );
}

export default Layout;

