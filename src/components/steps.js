import React from "react";
import styled from "styled-components";

const Steps = ({ step }) => {
  const { image } = step;

  return (
    <Wrapper className="section-center step" id="learnmore">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae iste
        sunt impedit, nulla quos placeat! Nulla accusamus ut commodi quidem!
      </p>
      <div className="image__container">
        <img src={image} alt="step__image" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 1fr, 1fr;
  padding: 2rem;
  gap: 2rem;

  .image__container {
    width: 20rem;
    aspect-ratio: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default Steps;
