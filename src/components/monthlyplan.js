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

  .monthly__plans {
    /* border: 1px solid red; */
    display: flex;
    gap: 2rem;
    /* height: max-content; */
    flex-wrap: wrap;
    padding: 1rem;
    flex-direction: column;
    /* background-color: black; */
    /* width: 80%; */
    /* margin-inline: auto; */
  }

  .monthly__plans > * {
    /* flex: 1; */
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
    width: 8rem;
    padding-left: 0.5rem;
    margin-bottom: 1rem;
  }

  .text {
    padding: 1rem;
    text-align: center;
  }
`;
export default Monthlyplan;
