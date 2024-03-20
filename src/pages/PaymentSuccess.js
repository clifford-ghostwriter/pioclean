import React, { useEffect, useState } from "react";
import { Loading } from "../components";
import styled from "styled-components";
import { FaRegCheckCircle } from "react-icons/fa";

const PaymentSuccess = () => {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsloading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  });

  if (isLoading) {
    return (
      <Wrapper className="section secton-center">
        <Loading />
      </Wrapper>
    );
  }

  return (
    <Wrapper className="section secton-center">
      <div className="payment__checked">
        <FaRegCheckCircle className="icon" />
        <p className="text">payment successful</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid red;
  min-height: 50dvh;
  position: relative;
  display: grid;
  justify-content: center;
  align-content: center;

  .payment__checked {
    /* border: 1px solid red; */
    display: grid;
    justify-items: center;
    align-items: center;
    min-width: max-content;
    padding: 1rem;
  }

  .icon {
    color: green;
    font-size: 8rem;
  }

  .text {
    text-transform: capitalize;
    font-style: italic;
    /* border: 1px solid red; */
    font-size: 1;
  }
`;
export default PaymentSuccess;
