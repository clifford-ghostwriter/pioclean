import React, { useContext, useReducer } from "react";
import { service_reducer } from "../reducers";

const serviceContext = React.createContext();

const initialServiceState = {};
export const ServiceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(service_reducer, initialServiceState);

  return (
    <serviceContext.Provider value="service">
      {children}
    </serviceContext.Provider>
  );
};

export const UseServiceContext = () => {
  return useContext(serviceContext);
};
