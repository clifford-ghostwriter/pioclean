import React, { useReducer, useContext } from "react";
import { app_reducer } from "../reducers";
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "../utils/actions";

const appContext = React.createContext();

const initialAppState = {
  isSidebarOpen: false,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(app_reducer, initialAppState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  function closeSidebar() {
    dispatch({ type: SIDEBAR_CLOSE });
  }

  return (
    <appContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </appContext.Provider>
  );
};

export const UseAppContext = () => {
  return useContext(appContext);
};
