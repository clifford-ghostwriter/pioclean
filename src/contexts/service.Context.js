import React, { useContext, useReducer } from "react";
import { service_reducer } from "../reducers";

const serviceContext = React.createContext();

const initialServiceState = {};
export const ServiceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(service_reducer, initialServiceState);

  const func = function () {
    dispatch();
  };

  return (
    <serviceContext.Provider value={{ ...state, func }}>
      {children}
    </serviceContext.Provider>
  );
};

export const UseServiceContext = () => {
  return useContext(serviceContext);
};
