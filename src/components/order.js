// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Ordercolumn, Orderitem, Orderfooter } from "../components";
// eslint-disable-next-line
import { FaPlus } from "react-icons/fa";
// eslint-disable-next-line
import { FaMinus } from "react-icons/fa";
// eslint-disable-next-line
import { UseServiceContext } from "../contexts/service.Context";
// eslint-disable-next-line
import { UseAppContext } from "../contexts/app.Context";
// eslint-disable-next-line
import Test from "./test";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Order = () => {
  // eslint-disable-next-line
  const { handleChange, totalamount, order, clearList } = UseServiceContext();
  // const { order } = UseServiceContext();

  // console.log(order);

  // const [length, setLength] = useState(2);
  // const [requestArray, setRequestArray] = useState(Array.from({ length }));
  // const [requestArray, setRequestArray] = useState(order);
  // const [number, setnumber] = useState([1, 2, 3, 4, 5]);

  // const index = 2;

  // const { [index]: value } = number;

  // console.log(value);

  // const setVal = function (value) {
  //   const maxLength = 10;
  //   const minLength = 0;
  //   if (value === "inc") {
  //     setLength((initialvalue) => {
  //       let newvalue = initialvalue + 1;
  //       if (newvalue >= maxLength) {
  //         newvalue = maxLength;
  //       }
  //       return newvalue;
  //     });
  //   }

  //   if (value === "dec") {
  //     setLength((initialvalue) => {
  //       let newvalue = initialvalue - 1;
  //       if (newvalue <= minLength) {
  //         newvalue = minLength;
  //       }
  //       return newvalue;
  //     });
  //   }
  // };

  useEffect(() => {
    // setRequestArray(Array.from({ length }));
  }, []);

  return (
    <Wrapper className="section-center">
      <h3>make order</h3>
      <div className="order__container">
        <Ordercolumn />

        <div className="orderitems">
          {order.map((item, index) => {
            // return <p key={index}>hello</p>;
            // console.log(item);
            return <Orderitem key={index} index={index} />;
            // return <Test />;
          })}
        </div>
        {/* <div className="btn__container">
          <button onClick={() => setVal("dec")}>
            <FaMinus />
          </button>
          <button onClick={() => setVal("inc")}>
            <FaPlus />
          </button>
        </div> */}
        <Orderfooter />
      </div>
      <div className="listbuttons">
        <button className="list__btn" onClick={clearList}>
          clear list
        </button>
        {totalamount > 0 && (
          <Link className="list__btn" to="/checkout">
            checkout
          </Link>
        )}
      </div>
      <div className="iformation">
        <h3>information:</h3>
        <p>
          Kindly note that <span> two(2)</span> piece clothing that are
          considered as
          <span> two(2)</span> items
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* position: relative; */
  /* border: 2px solid red; */
  /* min-height: 40dvh; */
  padding-top: 2rem;
  border: 3px solid pink;

  h3 {
    padding-bottom: 0.5rem;
    text-transform: capitalize;
  }

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
    border: 2px solid green;
    position: relative;
    height: max-content;
    /* padding-top: 2rem; */
  }

  .orderitems {
    display: grid;
    /* border: 2px solid pink; */
    gap: 0.5rem;
  }
  .listbuttons {
    /* border: 1px solid red; */
    width: max-content;
    padding-block: 0.3rem;
    display: flex;
    gap: 0.3rem;
  }

  .list__btn {
    text-transform: capitalize;
    letter-spacing: 0.05rem;
    text-decoration: none;
    width: max-content;
    border: 2px solid black;
    border-radius: 3px;
    background-color: var(--clr--primary-six);
    color: black;
    cursor: pointer;
    padding: 0.3rem;
    font-size: smaller;
  }

  .iformation {
    padding-top: 1rem;
  }

  .iformation span {
    color: red;
  }

  @media (min-width: 1200px) {
    padding: 0 10rem;
    .orderitems {
      border: 2px solid red;
    }
  }
`;

export default Order;
