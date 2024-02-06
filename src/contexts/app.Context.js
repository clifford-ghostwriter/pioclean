import React, { useReducer, useContext } from "react";
import { app_reducer } from "../reducers";
import { SIDEBAR_OPEN } from "../utils/actions";

const appContext = React.createContext();

const initialAppState = {
  isSidebarOpen: false,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(app_reducer, initialAppState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  // function openSidebar() {
  //   dispatch({ type: SIDEBAR_OPEN });
  // }

  return (
    <appContext.Provider value={{ ...state, openSidebar }}>
      {children}
    </appContext.Provider>
  );
};

export const UseAppContext = () => {
  return useContext(appContext);
};
