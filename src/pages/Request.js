import React, { useState } from "react";
import styled from "styled-components";
import { Order, PageHero, Request } from "../components";

const OrderOnline = () => {
  const [order, setOrder] = useState(false);

  const request = function (value) {
    setOrder(value);
  };
  return (
    <Wrapper>
      <PageHero path="/" text="Back Home" />
      <div className="btn__container section-center">
        <button className=" request-btn" onClick={() => request(true)}>
          make order
        </button>
        <button className="request-btn" onClick={() => request(false)}>
          pick up order
        </button>
      </div>
      <div className="section-center">{order ? <Order /> : <Request />}</div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .btn__container {
    padding-top: 0.5rem;
    display: flex;
    gap: 0.5rem;
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
