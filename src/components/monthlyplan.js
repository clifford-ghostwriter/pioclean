import React from "react";
import styled from "styled-components";
import { monthlyplan } from "../utils/link";
import { Plan } from "../components";

const Monthlyplan = () => {
  // console.log(monthlyplan);
  return (
    <Wrapper className="section">
      <div className="section-center ">
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
  border: 1px solid red;

  .monthly__plans {
    /* border: 1px solid red; */
    display: flex;
    column-gap: 1rem;
    height: max-content;
    flex-wrap: wrap;
    /* flex-direction: column; */
    /* background-color: black; */
    /* width: 80%; */
    /* margin-inline: auto; */
  }

  .monthly__plans > * {
    flex: 1;
  }

  .plan__container:nth-child(2) {
    /* margin-top: 3rem; */
  }
`;
export default Monthlyplan;
