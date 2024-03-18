import React from "react";
import styled from "styled-components";
import { monthlyplan } from "../utils/link";
import { Plan } from "../components";

const Monthlyplan = () => {
  // console.log(monthlyplan);
  return (
    <Wrapper className="section">
      <div className="section-center monthly__plans">
        {monthlyplan.map((plan, index) => {
          return <Plan key={index} item={plan} />;
        })}
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
    /* background-color: black; */
  }
`;
export default Monthlyplan;
