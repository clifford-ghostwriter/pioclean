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
  removeFromLocalStorage,
} from "../utils/localstorage";

export const app_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }

  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }

  if (action.type === SET_USER) {
    addToLocalStorage("user", action.payload);
    return { ...state, user: action.payload };
  }

  if (action.type === RESET_USER) {
    removeFromLocalStorage("user");
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
