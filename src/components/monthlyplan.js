import React from "react";
import styled from "styled-components";
import { monthlyplan } from "../utils/link";
import { Plan } from "../components";

const Monthlyplan = () => {
  // console.log(monthlyplan);
  return (
    <Wrapper className="section">
      <div className="section-center ">
        <h3 className="heading">Monthly plan</h3>
        <p className="text">
          our monthly plans have been carefully designed to cover your various
          dry cleaning needs, as an individual, family or organization
        </p>
        <div className="monthly__plans">
          {monthlyplan.map((plan, index) => {
            return <Plan key={index} item={plan} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* border: 1px solid red; */
  /* padding: 2rem; */
  /* margin-top: -1; */
  padding-top: 2rem;

  .monthly__plans {
    /* border: 1px solid red; */
    display: grid;
    gap: 2rem;
    /* height: max-content; */
    /* flex-wrap: wrap; */
    padding-bottom: 1rem;
    /* flex-direction: column; */
    /* background-color: black; */
    /* width: 90%; */
    margin-inline: auto;
  }

  .monthly__plans > * {
    /* flex: 1; */
    /* border: 1px solid red; */
  }

  .plan__container:hover {
    transform: translateY(-0.2rem);
    transition: var(--transition-two);
  }

  .plan__container:nth-child(2) {
    /* margin-top: 3rem; */
  }

  .heading {
    border-left: 5px solid red;
    /* margin: auto; */
    width: 10rem;
    padding-left: 0.5rem;
    margin: auto;
    margin-bottom: 1rem;
  }

  .text {
    padding: 0 1rem 1rem;
    text-align: center;
  }

  @media (min-width: 500px) {
    .monthly__plans {
      width: 70%;
    }
  }

  @media (min-width: 800px) {
    .monthly__plans {
      width: 60%;
    }
  }

  @media (min-width: 980px) {
    .monthly__plans {
      grid-template-columns: 1fr 1fr;
      width: 80%;
    }
  }

  @media (min-width: 1000px) {
    .monthly__plans {
      width: 70%;
    }

    .monthly__plans > *:nth-child(3) {
      background-position: top left;

      background-size: fill;
    }
  }

  @media (min-width: 1500px) {
    .monthly__plans {
      width: 60%;
    }

    .monthly__plans > *:nth-child(3) {
      background-position: top left;

      background-size: fill;
    }
  }
`;
export default Monthlyplan;
