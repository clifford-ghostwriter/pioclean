import React, { useState } from "react";
import styled from "styled-components";
import { Order, PageHero, Request, Pricelist } from "../components";

const OrderOnline = () => {
  const [order, setOrder] = useState("pricelist");

  // request func
  const request = function (value) {
    setOrder(value);
  };
  return (
    <Wrapper>
      <PageHero path="/" text="Back Home" />
      <div className="btn__container section">
        <button className="request-btn" onClick={() => request("pricelist")}>
          price list
        </button>
        <button className=" request-btn" onClick={() => request("makeorder")}>
          make order
        </button>
        <button className="request-btn" onClick={() => request("pcikup")}>
          pick up order
        </button>
      </div>
      <div className="section">
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
    display: flex;
    gap: 0.5rem;
    border: 1px solid red;
  }

  .request-btn {
    text-transform: capitalize;
    background-color: var(--clr--primary-one);
    padding: 0.2rem;
    letter-spacing: 0.1rem;
    border-radius: 5px;
    cursor: pointer;
  }
`;
export default OrderOnline;
