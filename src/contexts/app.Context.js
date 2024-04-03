import React, { useReducer, useContext, useEffect, useState } from "react";
import { app_reducer } from "../reducers";
import { SIDEBAR_OPEN, SIDEBAR_CLOSE, SET_HERO_REF } from "../utils/actions";

const appContext = React.createContext();

const initialAppState = {
  isSidebarOpen: false,
  heroref: "",
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

  function setheroref(heroref) {
    dispatch({ type: SET_HERO_REF, payload: heroref });
  }

  return (
    <appContext.Provider
      value={{ ...state, openSidebar, closeSidebar, setheroref }}>
      {children}
    </appContext.Provider>
  );
};

export const UseAppContext = () => {
  return useContext(appContext);
};
