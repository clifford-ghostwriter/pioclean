import React, { useContext, useReducer } from "react";
import { service_reducer } from "../reducers";
import { HANDLE_CHANGE } from "../utils/actions";

const serviceContext = React.createContext();

const initialServiceState = {
  length: 10,

  order: [
    {
      orderitem0: null,
      orderprice0: null,
      ordernumber0: null,
      ordertotal0: null,
    },
    {
      orderitem1: null,
      orderprice1: null,
      ordernumber1: null,
      ordertotal1: null,
    },
    {
      orderitem2: null,
      orderprice2: null,
      ordernumber2: null,
      ordertotal2: null,
    },
    {
      orderitem3: null,
      orderprice3: null,
      ordernumber3: null,
      ordertotal3: null,
    },
    {
      orderitem4: null,
      orderprice4: null,
      ordernumber4: null,
      ordertotal4: null,
    },
    {
      orderitem5: null,
      orderprice5: null,
      ordernumber5: null,
      ordertotal5: null,
    },
    {
      orderitem6: null,
      orderprice6: null,
      ordernumber6: null,
      ordertotal6: null,
    },
    {
      orderitem7: null,
      orderprice7: null,
      ordernumber7: null,
      ordertotal7: null,
    },
    {
      orderitem8: null,
      orderprice8: null,
      ordernumber8: null,
      ordertotal8: null,
    },
    {
      orderitem9: null,
      orderprice9: null,
      ordernumber9: null,
      ordertotal9: null,
    },
  ],
};
export const ServiceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(service_reducer, initialServiceState);

  const handleChange = function (e, index) {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);
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
