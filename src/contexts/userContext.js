import React, { useContext, useReducer } from "react";
import { user_reducer } from "../reducers";

const userContext = React.createContext();

const initialUserState = {};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(user_reducer, initialUserState);

  const func = function () {
    dispatch();
  };

  return (
    <userContext.Provider value={{ ...state }}>{children}</userContext.Provider>
  );
};

export const UseUserContext = () => {
  return useContext(userContext);
};
