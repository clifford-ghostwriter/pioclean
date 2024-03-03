import React, { useState } from "react";
import { slides } from "../utils/link";
import styled from "styled-components";
import Slide from "./slide";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function Slider() {
  const [index, setIndex] = useState(0);

  return (
    <Wrapper>
      <div className="slider__center">
        {slides.map((slide, slideIndex) => {
          // const { text, image } = slide;
          return <Slide slide={slide} key={slideIndex} index={slideIndex} />;
        })}
      </div>

      <div className="btn__container">
        <button className="btn prev-btn">
          <FaChevronLeft />
        </button>
        <button className="btn next-btn">
          <FaChevronRight />
        </button>
      </div>

      <div className="hero__text">
        <p>
          you wear..... <br /> we wash.
        </p>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  /* border: 1px solid red; */
  position: relative;

  .slider__center {
    /* display: flex; */
    height: 100%;
    /* border: 1px solid blue; */
    height: 30rem;
    /* overflow-x: hidden; */
    padding: 0.3rem;
    position: relative;
  }

  .btn__container {
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
    padding-inline: var(--size--100);
    position: absolute;
    top: 50%;
    width: 100%;
  }

  .hero__text {
    position: absolute;
    top: 10%;
    padding-left: 5rem;
    font-size: var(--fs-700);
    color: beige;
  }
  .prev-btn,
  .next-btn {
    font-size: var(--fs-700);
    background-color: transparent;
    /* border: 1px solid red; */
    color: white;
  }
`;
export default Slider;
