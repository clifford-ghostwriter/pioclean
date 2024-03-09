import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Ordercolumn, Orderitem } from "../components";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Order = () => {
  const [length, setLength] = useState(0);
  const [requestArray, setRequestArray] = useState([]);

  const setVal = function (value) {
    const maxLength = 10;
    const minLength = 0;
    if (value === "inc") {
      setLength((initialvalue) => {
        let newvalue = initialvalue + 1;
        if (newvalue >= maxLength) {
          newvalue = maxLength;
        }
        return newvalue;
      });
    }

    if (value === "dec") {
      setLength((initialvalue) => {
        let newvalue = initialvalue - 1;
        if (newvalue <= minLength) {
          newvalue = minLength;
        }
        return newvalue;
      });
    }
  };

  useEffect(() => {
    setRequestArray(Array.from({ length }));
  }, [length]);

  return (
    <Wrapper>
      <div>Order</div>
      <div className="div">
        <Ordercolumn />
        {requestArray.map((_, index) => {
          return <Orderitem key={index} />;
        })}
      </div>
      <div className="btn__container">
        <button onClick={() => setVal("dec")}>
          <FaMinus />
        </button>
        <button onClick={() => setVal("inc")}>
          <FaPlus />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: 40dvh;
  .btn__container {
    position: absolute;
    width: max-content;
    right: 0;
    border: 1px solid red;
    font-size: 2rem;
    bottom: 0;
  }
`;

export default Order;
