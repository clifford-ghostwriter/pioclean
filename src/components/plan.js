import React from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import { UseServiceContext } from "../contexts/service.Context";
import { useNavigate } from "react-router-dom";

const Plan = ({ item }) => {
  const { subscribe } = UseServiceContext();
  const navigate = useNavigate();
  const { plan, amount, image, features } = item;

  return (
    <Wrapper $image={image} className="plan__container">
      <div className="image__container">
        <img src={image} alt="planpicture" />
      </div>
      <div className="plan__text">
        <p className="plan">{plan}</p>
        <p className="amount">N{amount}</p>
      </div>
      <div className="plan__features">
        {features.map((item, index) => {
          return (
            <p className="features">
              <FaCheckCircle className="icon" key={index} /> <span>{item}</span>
            </p>
          );
        })}
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
  border-radius: 1rem;
  box-shadow: 2px 2px 3px black;
  overflow: hidden;
  /* border: 1px solid red; */
  width: 90%;
  margin-inline: auto;

  /* overflow: hidden; */
  display: grid;
  /* padding: 1rem; */
  /* color: white; */
  .image__container {
    /* height: 4rem; */
    /* display: grid; */
    /* background: url(${(p) => p.$image}); */
    width: 10rem;
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
    /* border: 1px solid red; */
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
    /* text-align: center; */
    display: grid;
    justify-content: center;
    padding-block: 1rem;
  }

  .icon {
    color: pink;
  }

  .btn__subscribe {
    background-color: var(--clr--primary-six);
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }

  .features {
    display: flex;
    /* color: yellow; */
    align-items: center;
  }

  /* .features > :nth-child(1) {
    align-self: ;
  } */

  @media (min-width: 550px) {
    /* width: 70%; */
  }

  @media (min-width: 800px) {
    /* width: 60%; */
  }

  @media (min-width: 950px) {
    /* width: 50%; */
  }
  @media (min-width: 1000px) {
    /* width: 100%; */
  }
`;
export default Plan;
