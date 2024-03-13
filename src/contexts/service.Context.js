import React, { useContext, useReducer } from "react";
import { service_reducer } from "../reducers";
import { HANDLE_CHANGE } from "../utils/actions";

const serviceContext = React.createContext();

const initialServiceState = {
  name: "clifford",
  order: [
    {
      orderitem0: null,
      orderprice0: 5,
      ordernumber0: null,
      ordertotal0: null,
    },
    {
      orderitem1: null,
      orderprice1: 5,
      ordernumber1: null,
      ordertotal1: null,
    },
    {
      orderitem2: null,
      orderprice2: 5,
      ordernumber2: null,
      ordertotal2: null,
    },
    {
      orderitem3: null,
      orderprice3: 5,
      ordernumber3: null,
      ordertotal3: null,
    },
    {
      orderitem4: null,
      orderprice4: 5,
      ordernumber4: null,
      ordertotal4: null,
    },
    {
      orderitem5: null,
      orderprice5: 5,
      ordernumber5: null,
      ordertotal5: null,
    },
    {
      orderitem6: null,
      orderprice6: 5,
      ordernumber6: null,
      ordertotal6: null,
    },
    {
      orderitem7: null,
      orderprice7: 5,
      ordernumber7: null,
      ordertotal7: null,
    },
    {
      orderitem8: null,
      orderprice8: 5,
      ordernumber8: null,
      ordertotal8: null,
    },
    {
      orderitem9: null,
      orderprice9: 5,
      ordernumber9: null,
      ordertotal9: null,
    },
  ],
  totalitems: "",
  totalamount: "",
};
export const ServiceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(service_reducer, initialServiceState);
  // console.log(state);
  const handleChange = function (e, index) {
    const name = e.target.name;
    const value = e.target.value;

    // if (name ==)

    // console.log(name, value);
    dispatch({ type: HANDLE_CHANGE, payload: { name, value, index } });
  };

  // console.log(state);
  return (
    <serviceContext.Provider value={{ ...state, handleChange }}>
      {children}
    </serviceContext.Provider>
  );
};

export const UseServiceContext = () => {
  return useContext(serviceContext);
};
