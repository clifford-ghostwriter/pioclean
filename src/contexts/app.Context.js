import React, { useReducer, useContext, useEffect, useState } from "react";
import { app_reducer } from "../reducers";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  REMOVE_ALERT_FLAG,
  SET_USER,
  ALERT_FLAG,
  RESET_USER,
} from "../utils/actions";

const appContext = React.createContext();

const initialAppState = {
  isSidebarOpen: false,
  alert_flag: false,
  alert: "",
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

  // new functions

  const handleLoginSubmit = (user) => {
    // e.preventDefault();
    // console.log(user.password);
    if (user.name === "" || user.password === "") {
      dispatch({ type: ALERT_FLAG, payload: "Fill the required space!" });
      // setTimeout(dispatch({ type: REMOVE_ALERT_FLAG }), 3000);
      return;
    }

    if (!state.username.includes(user.name)) {
      dispatch({ type: ALERT_FLAG, payload: "incorrect credential!" });
      // setTimeout(dispatch({ type: REMOVE_ALERT_FLAG }), 3000);
      return;
    }
    if (user.password !== "xy1234") {
      dispatch({ type: ALERT_FLAG, payload: "Wrong password!" });
      // setTimeout(dispatch({ type: REMOVE_ALERT_FLAG }), 3000);
      return;
    }
    dispatch({ type: SET_USER, payload: user });
    // dispatch({ type: CLEAR_LOGIN_INPUT });
  };
  const removeAlert = () => {
    dispatch({ type: REMOVE_ALERT_FLAG });
  };

  return (
    <appContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        handleLoginSubmit,
        removeAlert,
      }}>
      {children}
    </appContext.Provider>
  );
};

export const UseAppContext = () => {
  return useContext(appContext);
};
