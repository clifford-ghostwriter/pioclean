import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Order, Request, Pricelist, Hero } from "../components";
import dirtyclothe from "../assests/heroimages/washedclothes.jpg";

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
      <Hero bcg={dirtyclothe} text="easy to use services" />
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
  padding-bottom: 2rem;
  /* padding-top: 2rem; */
  .btn__container {
    /* padding-left: 2rem; */
    display: flex;
    gap: 0.3rem;
    /* width: 50%; */
    /* margin-inline: auto; */
    /* border: 1px solid red; */
  }

  .section {
    padding-top: 2rem;
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

  .request-btn:hover {
    background-color: var(--clr--primary-six);
  }

  .active {
    background-color: white;
  }

  @media (min-width: 1000px) {
    .btn__container {
      width: 80%;
      margin: auto;
      /* border: 1px solid red; */
      /* padding-left: 2rem; */
    }
  }
`;
export default OrderOnline;
