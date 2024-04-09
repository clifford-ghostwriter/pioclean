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

import {
  addToLocalStorage,
  getFromLocalStorage,
  // removeFromLocalStorage,
} from "../utils/localstorage";

const appContext = React.createContext();

const initialAppState = {
  isSidebarOpen: false,
  alert_flag: false,
  alert: "",
  username: ["user1", "user2"],
  user: getFromLocalStorage("user") ? getFromLocalStorage("user") : "",
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(app_reducer, initialAppState);
  const [windowWidth, setWdith] = useState(0);

  useEffect(() => {
    console.log(state.user);
    let user = state.user;
    addToLocalStorage("user", user);
  }, [state.user]);

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

  const resetUser = () => {
    dispatch({ type: RESET_USER });
  };

  const handleLoginSubmit = (user) => {
    // e.preventDefault();
    // console.log(user.password);

    // closeSidebar();
    if (user.name === "" || user.password === "") {
      dispatch({ type: ALERT_FLAG, payload: "Fill the required space!" });
      // setTimeout(dispatch({ type: REMOVE_ALERT_FLAG }), 3000);
      return;
    }

    if (!state.username.includes(user.name)) {
      dispatch({ type: ALERT_FLAG, payload: "incorrect credentials!" });
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

  const loginAlert = (alert) => {
    dispatch({ type: ALERT_FLAG, payload: alert });
  };

  return (
    <appContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        handleLoginSubmit,
        removeAlert,
        resetUser,
        loginAlert,
      }}>
      {children}
    </appContext.Provider>
  );
};

export const UseAppContext = () => {
  return useContext(appContext);
};
