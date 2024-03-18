import React from "react";
import styled from "styled-components";

const Plan = ({ item }) => {
  const { plan, amount, image } = item;
  return (
    <Wrapper>
      <div className="image__container">
        <img src={image} alt="plan image" />
        <p className="amount">N{amount}</p>
        <p className="plan">{plan}</p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  border-radius: 0.5rem;
  border: 1px solid red;
  padding: 1rem;
  /* color: white; */
  .image__container {
    /* height: 4rem; */
    display: grid;
    align-content: stretch;
    border: 1px solid white;
    min-height: 100%;
  }

  .image__container > * {
    border: 1px solid red;
    align-self: stretch;
    min-height: 100%;
  }

  .image__container img {
    display: block;
    height: 100%;
    width: 100%;
  }
`;
export default Plan;
