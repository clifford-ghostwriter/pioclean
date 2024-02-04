import React, { useReducer, useContext } from "react";
import { app_reducer } from "../reducers";

const appContext = React.createContext();

const initialAppState = {};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appContext, initialAppState);
  return (
    <appContext.Provider value={{ ...state }}>{children}</appContext.Provider>
  );
};

export const UseAppContext = () => {
  return useContext(appContext);
};
