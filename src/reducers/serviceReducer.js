import {
  HANDLE_CHANGE,
  SUM_ITEM,
  UPDATE_TOTAL,
  CLEAR_LIST,
  SUBSCRIBE,
} from "../utils/actions";

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
    // console.log("hello");
    const { totalitems, totalamount } = state.order.reduce(
      (total, cartItem) => {
        const { ordernumber, orderprice } = cartItem;
        // console.log(ordernumber, orderprice);
        total.totalitems += Number(ordernumber);
        total.totalamount += Number(orderprice * ordernumber);
        return total;
      },
      { totalitems: 0, totalamount: 0 }
    );
    return { ...state, totalitems, totalamount };
  }

  if (action.type === UPDATE_TOTAL) {
    // const item = state.order[action.payload];
    const { orderprice, ordernumber } = state.order[action.payload];
    // console.log(state.order, action.payload);
    return {
      ...state,
      ...(state.order[action.payload] = {
        ...state.order[action.payload],
        ordertotal: Number(ordernumber * orderprice),
      }),
    };
  }

  if (action.type === CLEAR_LIST) {
    const { order } = state;

    const resetOrder = order.map((item) => {
      // const { ordernumber } = item;

      const { orderitem, orderprice, ordernumber, ordertotal, image } = item;
      return { image, orderitem, orderprice, ordernumber: 0, ordertotal: 0 };
    });

    // console.log(resetOrder);
    return {
      ...state,
      order: [...resetOrder],
      totalitems: 0,
      totalamount: 0,
    };
  }

  if (action.type === SUBSCRIBE) {
    // const { amount } = action.payload;
    // console.log(act);
    console.log(action.payload);
    return { ...state, totalamount: action.payload };
  }

  throw new Error(`No matching "${action.type}" - action type`);
};
