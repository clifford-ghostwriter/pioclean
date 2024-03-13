import React, { useReducer, useContext } from "react";
import { app_reducer } from "../reducers";
import { SIDEBAR_OPEN, SIDEBAR_CLOSE, SET_HERO_REF } from "../utils/actions";

const appContext = React.createContext();

const initialAppState = {
  isSidebarOpen: false,
  heroref: "",
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(app_reducer, initialAppState);

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
