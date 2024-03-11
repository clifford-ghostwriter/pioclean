import { HANDLE_CHANGE } from "../utils/actions";

export const service_reducer = (state, action) => {
  if (action.type === HANDLE_CHANGE) {
    const { name, value, index } = action.payload;
    console.log(name, value, index);
    return {
      ...state,
      order: [
        ...state.order,
        (state.order[index] = { ...state.order[index], [name]: value }),
      ],
    };
  }

  return { ...state };
  // throw new Error(`No matching "${action.type}" - action type`);
};
