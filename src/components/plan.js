import React from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import { UseServiceContext } from "../contexts/service.Context";
import { useNavigate } from "react-router-dom";

const Plan = ({ item }) => {
  const { subscribe } = UseServiceContext();
  const navigate = useNavigate();
  const { plan, amount, image } = item;

  return (
    <Wrapper $image={image} className="plan__container">
      <div className="image__container">
        {/* <img src={image} alt="plan image" /> */}
      </div>
      <div className="plan__text">
        <p className="plan">{plan}</p>
        <p className="amount">N{amount}</p>
      </div>
      <div className="plan__features">
        <p>
          <FaCheckCircle className="icon" /> <span>pocket friendly</span>
        </p>
        <p>
          <FaCheckCircle className="icon" />
          <span>pocket friendly</span>
        </p>
        <p>
          <FaCheckCircle className="icon" />
          <span>pocket friendly</span>
        </p>
        <p>
          <FaCheckCircle className="icon" />
          <span>pocket friendly</span>
        </p>
        <p>
          <FaCheckCircle className="icon" />
          <span>pocket friendly</span>
        </p>
      </div>
      <button
        className="btn__subscribe"
        onClick={() => {
          subscribe(amount);
          console.log(amount);
          navigate("/payment");
        }}>
        subscribe
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  border-radius: 0.5rem;
  box-shadow: 2px 2px 3px black;
  /* border: 1px solid red; */

  /* overflow: hidden; */
  display: grid;
  /* padding: 1rem; */
  /* color: white; */
  .image__container {
    /* height: 4rem; */
    /* display: grid; */
    background: url(${(p) => p.$image});
    width: 15rem;
    height: 17rem;
    /* align-content: stretch; */
    /* border: 2px solid pink; */
    min-width: 100%;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    background-origin: border-box;
    border-bottom: 1px solid var(--clr--primary-six);
  }

  .image__container > * {
    border: 1px solid red;
    /* align-self: stretch; */
    /* min-height: 100%; */
  }

  .image__container img {
    display: block;
    height: 100%;
    width: 100%;
  }

  .amount {
    background-color: var(--clr--primary-two);
    color: var(--clr--primary-four);
    text-align: center;
    border-bottom: var(--clr--primary-four);
    padding-block: 0.5rem;
  }
  .plan {
    background-color: var(--clr--primary-two);
    color: var(--clr--primary-four);
    text-align: center;
    border-bottom: var(--clr--primary-four);
    font-style: italic;
    font-weight: bold;
    text-transform: capitalize;
  }

  .plan__features {
    text-align: center;
  }

  .icon {
    color: pink;
  }

  .btn__subscribe {
    background-color: var(--clr--primary-six);
    text-transform: capitalize;
  }
`;
export default Plan;
