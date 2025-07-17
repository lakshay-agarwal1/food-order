import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import { useEffect, useState } from "react";
import UserContext from "../Utils/UserContext";
import {Provider} from "react-redux";
import appStore from "../Utils/appStore";


function Layout() {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    //api call --> send the userName and passsword and get the data

    const data = {
      name: "lakshay",
    };
    setUserInfo(data.name);
  }, []);
  return (
    <>
     <Provider store= {appStore}>

        <UserContext.Provider value={{ loggedUser: userInfo, setUserInfo }}>
          <Header />

          <Outlet />
        </UserContext.Provider>
     
     </Provider>
    </>
  );
}

export default Layout;
