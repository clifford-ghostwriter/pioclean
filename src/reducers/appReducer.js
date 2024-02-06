import { SIDEBAR_OPEN } from "../utils/actions";

export const app_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  // throw new Error(`No matching "${action.type}" - action type`);
};
