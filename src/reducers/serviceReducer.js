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
    console.log("hello");
    const { totalitems, totalamount } = state.order.reduce(
      (total, cartItem) => {
        const { ordernumber, orderprice } = cartItem;
        console.log(ordernumber, orderprice);
        total.totalitems += Number(ordernumber);
        total.totalamount += Number(orderprice * ordernumber);
        return total;
      },
      { totalitems: 0, totalamount: 0 }
    );
    return { ...state, totalitems, totalamount };
  }

  if (action.type === UPDATE_TOTAL) {
    const item = state.order[action.payload];
    const { orderprice, ordernumber } = state.order[action.payload];
    // console.log(state.order, action.payload);
    return {
      ...state,
      ...(state.order[action.payload] = {
        ...state.order[action.payload],
        ordertotal: ordernumber * orderprice,
      }),
    };
  }

  throw new Error(`No matching "${action.type}" - action type`);
};
