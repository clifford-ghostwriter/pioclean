import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Loading } from "../components";
import { UseServiceContext } from "../contexts/service.Context";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [isLoading, setIsloading] = useState(true);
  const { totalamount, clearList } = UseServiceContext();

  // console.log(totalamount);

  const navigate = useNavigate();
  const payment = function () {
    clearList();
    navigate("/paymentsuccess");
  };

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
      <div className="container">
        <p className="amount">{` ${
          totalamount > 0 ? "N" : ""
        }${totalamount}`}</p>
        <ul className="payment__options">
          <li className="payment__channel">payment with card</li>
          <li className="payment__channel">payment via bank</li>
          <li className="payment__channel">payment via transfer</li>
        </ul>
      </div>
      <button className="payment__btn" onClick={payment}>
        pay
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* border: 1px solid red; */
  min-height: 50dvh;
  position: relative;
  display: grid;
  justify-content: center;
  align-content: center;

  .container {
    border: 1px solid black;
    width: 20rem;
    height: 15rem;
    margin: auto;
    /* margin: 0; */
    /* position: absolute; */
    /* top: 50%; */
    /* left: 50%; */
    /* transform: translateX(-50%); */
    /* transform: translateY(-50%); */
    /* display: grid; */
    /* justify-items: center; */
    /* align-items: center; */
  }
  .payment__options {
    display: grid;
    justify-content: center;
    align-content: center;
    row-gap: 0.5rem;
    padding-top: 0.5rem;
  }

  .payment__channel {
    list-style: none;
    font-style: italic;
    opacity: 0.6;
  }

  .amount {
    height: 50%;
    text-align: center;
    display: grid;
    justify-content: center;
    align-content: center;
    border-bottom: 1px solid black;
    font-weight: bolder;
    font-size: xx-large;
  }

  .payment__btn {
    text-transform: capitalize;
    letter-spacing: 0.05rem;
    text-decoration: none;
    /* width: max-content; */
    border: 2px solid black;
    border-radius: 3px;
    background-color: var(--clr--primary-six);
    color: black;
    cursor: pointer;
    padding: 0.3rem;
    display: block;
  }
`;
export default Payment;
