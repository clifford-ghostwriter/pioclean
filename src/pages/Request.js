import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Order, PageHero, Request, Pricelist } from "../components";

const OrderOnline = () => {
  const [order, setOrder] = useState("makeorder");

  // const [number, setnumber] = useState(0);
  // console.log(order);

  // const changeNumber = () => {
  //   setnumber(number + 1);
  //   console.log(number);
  // };

  const request = function (e) {
    const id = e.target.dataset.id;
    setOrder(id);
    // if (id === order) {
    //   e.target.classList.add("active");
    // }
    // console.log(order);
  };

  useEffect(() => {
    // request();
    // console.log(order);
  }, [order]);

  return (
    <Wrapper>
      <PageHero path="/order" text="order online" />
      <div className="section">
        <div className=" section-center">
          <div className="btn__container">
            <button
              // data-id="pricelist"
              className="request-btn"
              data-id="pricelist"
              onClick={request}>
              price list
            </button>
            <button
              className=" request-btn"
              data-id="makeorder"
              onClick={request}>
              make order
            </button>
            <button className="request-btn" data-id="pickup" onClick={request}>
              pick up order
            </button>
          </div>
        </div>
        {order === "pricelist" ? (
          <Pricelist />
        ) : order === "makeorder" ? (
          <Order />
        ) : (
          <Request />
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .btn__container {
    padding-top: 2rem;
    /* padding-left: 2rem; */
    display: flex;
    gap: 0.3rem;
    /* width: 50%; */
    /* margin-inline: auto; */
    /* border: 1px solid red; */
  }

  .request-btn {
    text-transform: capitalize;
    background-color: var(--clr--primary-one);
    padding: 0.3rem;
    letter-spacing: 0.1rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: smaller;
  }

  .active {
    background-color: white;
  }
`;
export default OrderOnline;
