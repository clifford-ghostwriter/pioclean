import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  REMOVE_ALERT_FLAG,
  SET_USER,
  ALERT_FLAG,
  RESET_USER,
} from "../utils/actions";

export const app_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }

  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }

  // if (action.type === SET_HERO_REF) {
  //   console.log(state.heroref);
  //   return { ...state, heroref: action.payload };
  // }

  if (action.type === SET_USER) {
    // const { name, value } = action.payload;
    // console.log(`${name}:${value}`);
    // console.log(action.payload);
    // addUserToLocalStorage("user", action.payload);
    return { ...state, user: action.payload };
    // console.log(state.user);
  }

  if (action.type === RESET_USER) {
    // removeUserFromLocalStorage("localData");
    return {
      ...state,
      user: "",
    };
  }

  if (action.type === ALERT_FLAG) {
    return { ...state, alert_flag: true, alert: action.payload };
  }
  if (action.type === REMOVE_ALERT_FLAG) {
    return { ...state, alert_flag: false };
  }
  // throw new Error(`No matching "${action.type}" - action type`);
};
