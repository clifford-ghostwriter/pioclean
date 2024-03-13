import { SIDEBAR_OPEN, SIDEBAR_CLOSE, SET_HERO_REF } from "../utils/actions";

export const app_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }

  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }

  if (action.type === SET_HERO_REF) {
    // console.log(state.heroref);
    return { ...state, heroref: action.payload };
  }
  // throw new Error(`No matching "${action.type}" - action type`);
};
