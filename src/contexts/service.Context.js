import React, { useContext, useEffect, useReducer } from "react";
import { service_reducer } from "../reducers";
import {
  HANDLE_CHANGE,
  SUM_ITEM,
  UPDATE_TOTAL,
  CLEAR_LIST,
  SUBSCRIBE,
} from "../utils/actions";
import suit from "../assests/priceimages/shirts/suits.jpg";
import agbada from "../assests/priceimages/shirts/agbada.jpg";
import denim from "../assests/priceimages/shirts/denim.jpg";
import hangingShirt from "../assests/priceimages/shirts/hanging shirt.webp";
import ironedShirt from "../assests/priceimages/shirts/ironedshirt.webp";
import trousers from "../assests/priceimages/shirts/plaintrousers.jpg";
import tshirt from "../assests/priceimages/shirts/tshirt.jpg";

// female
import dress from "../assests/priceimages/ladies/dress.jpg";
import bedsheet from "../assests/priceimages/duvet and towel/bedsheet.jpg";
import duvet from "../assests/priceimages/duvet and towel/duvet.jpg";
// import pyjamas from "../assests/priceimages/duvet and towel/pyjamas.webp";
// import towel from "../assests/priceimages/duvet and towel/towel.jpg";

import {
  addToLocalStorage,
  getFromLocalStorage,
  // removeFromLocalStorage,
} from "../utils/localstorage";

const serviceContext = React.createContext();

const initialServiceState = {
  name: "clifford",
  // order: [
  //   {
  //     orderitem0: "silk",
  //     orderprice0: 5,
  //     ordernumber0: null,
  //     ordertotal0: null,
  //   },
  //   {
  //     orderitem1: "silk",
  //     orderprice1: 5,
  //     ordernumber1: null,
  //     ordertotal1: null,
  //   },
  //   {
  //     orderitem2: "silk",
  //     orderprice2: 5,
  //     ordernumber2: null,
  //     ordertotal2: null,
  //   },
  //   {
  //     orderitem3: "silk",
  //     orderprice3: 5,
  //     ordernumber3: null,
  //     ordertotal3: null,
  //   },
  //   {
  //     orderitem4: "silk",
  //     orderprice4: 5,
  //     ordernumber4: null,
  //     ordertotal4: null,
  //   },
  //   {
  //     orderitem5: "silk",
  //     orderprice5: 5,
  //     ordernumber5: null,
  //     ordertotal5: null,
  //   },
  //   {
  //     orderitem6: "silk",
  //     orderprice6: 5,
  //     ordernumber6: null,
  //     ordertotal6: null,
  //   },
  //   {
  //     orderitem7: "silk",
  //     orderprice7: 5,
  //     ordernumber7: null,
  //     ordertotal7: null,
  //   },
  //   {
  //     orderitem8: "silk",
  //     orderprice8: 5,
  //     ordernumber8: null,
  //     ordertotal8: null,
  //   },
  //   {
  //     orderitem9: "silk",
  //     orderprice9: 5,
  //     ordernumber9: null,
  //     ordertotal9: null,
  //   },
  // ],

  order: getFromLocalStorage("Data")
    ? getFromLocalStorage("Data")[0]
    : [
        {
          orderitem: "denim",
          orderprice: 500,
          ordernumber: "",
          ordertotal: "",
          image: denim,
        },
        {
          orderitem: "suit",
          orderprice: 500,
          ordernumber: "",
          ordertotal: "",
          image: suit,
        },
        {
          orderitem: "agbada",
          orderprice: 500,
          ordernumber: "",
          ordertotal: "",
          image: agbada,
        },
        {
          orderitem: "hanging shirt",
          orderprice: 500,
          ordernumber: "",
          ordertotal: "",
          image: hangingShirt,
        },
        {
          orderitem: "ironed shirt",
          orderprice: 500,
          ordernumber: "",
          ordertotal: "",
          image: ironedShirt,
        },
        {
          orderitem: "tshirt",
          orderprice: 500,
          ordernumber: "",
          ordertotal: "",
          image: tshirt,
        },
        {
          orderitem: "trousers",
          orderprice: 500,
          ordernumber: "",
          ordertotal: "",
          image: trousers,
        },
        {
          orderitem: "dress",
          orderprice: 500,
          ordernumber: "",
          ordertotal: "",
          image: dress,
        },
        {
          orderitem: "bedsheet",
          orderprice: 500,
          ordernumber: "",
          ordertotal: "",
          image: bedsheet,
        },
        {
          orderitem: "duvet",
          orderprice: 500,
          ordernumber: "",
          ordertotal: "",
          image: duvet,
        },
      ],

  // totalitems: 0,
  // totalamount: 0,
  totalitems: getFromLocalStorage("Data") ? getFromLocalStorage("Data")[1] : 0,
  totalamount: getFromLocalStorage("Data") ? getFromLocalStorage("Data")[2] : 0,
};
export const ServiceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(service_reducer, initialServiceState);

  // console.log(state.totalitems, state.totalamount);

  useEffect(() => {
    let Data = [];

    // console.log(state.order);
    Data[0] = state.order;
    Data[1] = state.totalitems;
    Data[2] = state.totalamount;
    // Data[3] = state.user;
    addToLocalStorage("Data", Data);
    // eslint-disable-next-line
  }, [state.totalamount, state.totalitems, ...state.order, state.order]);

  useEffect(() => {}, [state.order]);

  const sumItem = () => {
    dispatch({ type: SUM_ITEM });
    // console.log("how far");
  };

  // const payment = function () {
  //   clearList();
  //   navigate("/payment");
  // };

  const updateTotal = function (index) {
    dispatch({ type: UPDATE_TOTAL, payload: index });
    // console.log("i am here", total, index);
  };

  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
    sumItem();
  };

  const subscribe = (price) => {
    dispatch({ type: SUBSCRIBE, payload: price });
  };

  const handleChange = function (e, index) {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: HANDLE_CHANGE, payload: { name, value, index } });
    // updateTotal(total, index);
    // console.log(`total is ${total}`);
    sumItem();
  };

  // new functions

  // console.log(state);
  return (
    <serviceContext.Provider
      value={{
        ...state,
        handleChange,
        updateTotal,
        clearList,
        subscribe,
      }}>
      {children}
    </serviceContext.Provider>
  );
};

export const UseServiceContext = () => {
  return useContext(serviceContext);
};
