import React, { useReducer, useContext, useEffect, useState } from "react";
import { app_reducer } from "../reducers";
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "../utils/actions";

const appContext = React.createContext();

const initialAppState = {
  isSidebarOpen: false,
  heroref: "",
  username: ["user1", "user2", "officer1", "officer2"],
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(app_reducer, initialAppState);
  const [windowWidth, setWdith] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      setWdith(width);
      // console.log(width, windowWidth);
      // console.log(state.isSidebarOpen);
    });
  }, [windowWidth]);

  useEffect(() => {
    if (windowWidth >= 1200) closeSidebar();
  }, [windowWidth]);

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  return (
    <appContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </appContext.Provider>
  );
};

export const UseAppContext = () => {
  return useContext(appContext);
};
