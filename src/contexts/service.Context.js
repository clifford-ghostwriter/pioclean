import React, { useContext, useEffect, useReducer } from "react";
import { service_reducer } from "../reducers";
import { HANDLE_CHANGE, SUM_ITEM, UPDATE_TOTAL } from "../utils/actions";

const serviceContext = React.createContext();

const initialServiceState = {
  name: "clifford",
  order: [
    {
      orderitem0: "silk",
      orderprice0: 5,
      ordernumber0: null,
      ordertotal0: null,
    },
    {
      orderitem1: "silk",
      orderprice1: 5,
      ordernumber1: null,
      ordertotal1: null,
    },
    {
      orderitem2: "silk",
      orderprice2: 5,
      ordernumber2: null,
      ordertotal2: null,
    },
    {
      orderitem3: "silk",
      orderprice3: 5,
      ordernumber3: null,
      ordertotal3: null,
    },
    {
      orderitem4: "silk",
      orderprice4: 5,
      ordernumber4: null,
      ordertotal4: null,
    },
    {
      orderitem5: "silk",
      orderprice5: 5,
      ordernumber5: null,
      ordertotal5: null,
    },
    {
      orderitem6: "silk",
      orderprice6: 5,
      ordernumber6: null,
      ordertotal6: null,
    },
    {
      orderitem7: "silk",
      orderprice7: 5,
      ordernumber7: null,
      ordertotal7: null,
    },
    {
      orderitem8: "silk",
      orderprice8: 5,
      ordernumber8: null,
      ordertotal8: null,
    },
    {
      orderitem9: "silk",
      orderprice9: 5,
      ordernumber9: null,
      ordertotal9: null,
    },
  ],

  // order: [
  //   {
  //     orderitem: "silk",
  //     orderprice: 5,
  //     ordernumber: null,
  //     ordertotal: null,
  //   },
  //   {
  //     orderitem: "silk",
  //     orderprice: 5,
  //     ordernumber: null,
  //     ordertotal: null,
  //   },
  //   {
  //     orderitem: "silk",
  //     orderprice: 5,
  //     ordernumbe2: null,
  //     ordertotal: null,
  //   },
  //   {
  //     orderitem: "silk",
  //     orderprice: 5,
  //     ordernumber: null,
  //     ordertotal: null,
  //   },
  //   {
  //     orderitem: "silk",
  //     orderprice: 5,
  //     ordernumber: null,
  //     ordertotal: null,
  //   },
  //   {
  //     orderitem: "silk",
  //     orderprice: 5,
  //     ordernumber: null,
  //     ordertotal: null,
  //   },
  //   {
  //     orderitem: "silk",
  //     orderprice: 5,
  //     ordernumber: null,
  //     ordertotal: null,
  //   },
  //   {
  //     orderitem: "silk",
  //     orderprice: 5,
  //     ordernumber: null,
  //     ordertotal: null,
  //   },
  //   {
  //     orderitem: "silk",
  //     orderprice: 5,
  //     ordernumber: null,
  //     ordertotal: null,
  //   },
  //   {
  //     orderitem: "silk",
  //     orderprice: 5,
  //     ordernumber: null,
  //     ordertotal: null,
  //   },
  // ],
  totalitems: "",
  totalamount: "",
};
export const ServiceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(service_reducer, initialServiceState);
  console.log(state.order);

  useEffect(() => {
    sumItem();
  }, [state.order]);

  const sumItem = () => dispatch({ type: SUM_ITEM });

  const updateTotal = function (total, index) {
    dispatch({ type: UPDATE_TOTAL, payload: { total, index } });
    // console.log("i am here", total, index);
  };

  const handleChange = function (e, index, total) {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: HANDLE_CHANGE, payload: { name, value, index } });
    updateTotal(total, index);
    console.log(`total is ${total}`);
  };

  // console.log(state);
  return (
    <serviceContext.Provider value={{ ...state, handleChange, updateTotal }}>
      {children}
    </serviceContext.Provider>
  );
};

export const UseServiceContext = () => {
  return useContext(serviceContext);
};
