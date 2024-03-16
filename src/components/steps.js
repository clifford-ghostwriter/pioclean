import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Steps = ({ step }) => {
  const [scroll, setScroll] = useState(null);
  const { image } = step;

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      const scrollValue = window.scrollY;
      setScroll(scrollValue);
    });
  });

  useEffect(() => {
    const step = document.querySelector(".step");
    // console.log(scroll);

    if (scroll >= 400) {
      step.style.Color = "blue";
    }
  }, [scroll]);

  return (
    <Wrapper className="step" id="learnmore">
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
  /* transform: translateY(20%); */
  /* transition: var(--transition); */
  /* border: 1px solid green; */
  max-width: 100%;

  .image__container {
    width: 15rem;
    aspect-ratio: 1;
    grid-column: 2/ -1;
    /* border: 1px solid red; */
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }

  .step__text {
    /* border: 1px solid red; */
    max-width: 20rem;
    /* aspect-ratio: 1; */

    grid-row: 2/3;
    grid-column: 1/ -1;
    /* border: 1px solid red; */
    align-content: first baseline;
  }
`;
export default Steps;
