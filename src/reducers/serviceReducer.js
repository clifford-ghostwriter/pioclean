import { HANDLE_CHANGE } from "../utils/actions";

export const service_reducer = (state, action) => {
  if (action.type === HANDLE_CHANGE) {
    const { name, value, index } = action.payload;
    // console.log(name, value, index);
    return {
      ...state,
      ...(state.order[index] = { ...state.order[index], [name]: value }),
      // order: [
      //   ...state.order,
      //   (state.order[index] = { ...state.order[index], [name]: value }),
      // ],
    };
  }

  // throw new Error(`No matching "${action.type}" - action type`);
};
