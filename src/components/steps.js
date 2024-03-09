import React from "react";
import styled from "styled-components";

const Steps = ({ step }) => {
  const { image } = step;

  return (
    <Wrapper className="section-center step" id="learnmore">
      <div className="image__container">
        <img src={image} alt="step__image" />
      </div>
      <p className="step__text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae iste
        sunt impedit, nulla quos placeat! Nulla accusamus ut commodi quidem!
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  padding: 2rem;
  gap: 1rem;
  /* border: 1px solid green; */

  .image__container {
    width: 20rem;
    aspect-ratio: 1;
    grid-column: 1/ -1;
    border: 1px solid red;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .step__text {
    width: 20rem;
    /* aspect-ratio: 1; */

    grid-row: 2/3;
    grid-column: 2/ -1;
    /* border: 1px solid red; */
    align-content: first baseline;
  }
`;
export default Steps;
