import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Ordercolumn, Orderitem } from "../components";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Order = () => {
  const [length, setLength] = useState(2);
  const [requestArray, setRequestArray] = useState([]);
  const [number, setnumber] = useState([1, 2, 3, 4, 5]);

  const index = 2;

  const { [index]: value } = number;

  console.log(value);

  useEffect(() => {});

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
      <div className="order__container">
        <Ordercolumn />

        <div className="orderitems">
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
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* position: relative; */
  border: 2px solid red;
  min-height: 40dvh;

  .btn__container {
    /* border: 1px solid red; */
    position: absolute;

    width: 5rem;
    right: 0;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
  }

  .btn__container button {
    border: none;
    background-color: transparent;
  }

  .order__container {
    /* border: 1px solid green; */
    position: relative;
    height: max-content;
  }

  .orderitems {
    display: grid;
    gap: 0.5rem;
  }
`;

export default Order;
