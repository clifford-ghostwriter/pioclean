import { HANDLE_CHANGE, SUM_ITEM, UPDATE_TOTAL } from "../utils/actions";

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

  if (action.type === SUM_ITEM) {
    // console.log(name, value, index);
    return {
      ...state,
    };
  }

  if (action.type === UPDATE_TOTAL) {
    const { total, index } = action.payload;
    console.log(index, total);
    return {
      ...state,
      ...(state.order[index] = {
        ...state.order[index],
        ordertotal: Number(total + 5),
      }),
      // order: [
      //   ...state.order,
      //   (state.order[index] = { ...state.order[index], [name]: value }),
      // ],
    };
  }

  // if (action.type === SUM_ITEM) {
  //   const { totalitems, totalamount, index } = state.order.reduce(
  //     (total, cartItem) => {
  //       // const { [`ordernumber${index}`], [`ordertotal${index}`] } = cartItem;
  //       total.total_items += amount;
  //       total.total_amount += price * amount;
  //       return total;
  //     },
  //     { total_items: 0, total_amount: 0 }
  //   );
  //   return { ...state, total_items, total_amount };
  // }
  throw new Error(`No matching "${action.type}" - action type`);
};
