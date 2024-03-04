import React, { useState } from "react";
import { slides } from "../utils/link";
import styled from "styled-components";
import Slide from "./slide";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function Slider() {
  const [index, setIndex] = useState(0);

  const increment = function () {
    setIndex((initialvalue) => {
      let newvalue;
      newvalue = initialvalue + 1;
      if (newvalue > slides.length - 1) {
        newvalue = 0;
      }
      return newvalue;
    });
  };

  const decrement = function () {
    setIndex((initialvalue) => {
      let newvalue;
      newvalue = initialvalue - 1;
      if (newvalue < 0) {
        newvalue = slides.length - 1;
      }
      return newvalue;
    });
  };

  return (
    <Wrapper>
      <div className="slider__center">
        {slides.map((slide, slideIndex) => {
          // const { text, image } = slide;
          let position;
          if (slideIndex === index) {
            position = "active";
          }
          if (slideIndex < index) {
            position = "previous";
          }

          if (slideIndex > index) {
            position = "next";
          }

          console.log(position);
          return (
            <Slide
              slide={slide}
              key={slideIndex}
              index={slideIndex}
              type={position}
              className="hello"
            />
          );
        })}
      </div>

      <div className="btn__container">
        <button className="btn prev-btn" onClick={decrement}>
          <FaChevronLeft />
        </button>
        <button className="btn next-btn" onClick={increment}>
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
  /* padding: 1rem; */
  margin: 1rem;

  .slider__center {
    /* display: flex; */
    /* height: 100%; */
    /* border: 1px solid blue; */
    height: 30rem;
    overflow-x: hidden;
    /* padding: 1rem; */
    position: relative;
  }

  .btn__container {
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
    /* padding-inline: var(--size--100); */
    position: absolute;
    top: 50%;
    width: 100%;
    /* left: 0; */
    /* margin-inline: auto; */
  }

  .hero__text {
    position: absolute;
    top: 10%;
    padding-left: 5rem;
    font-size: var(--fs-700);
    color: beige;
    width: 100%;
  }
  .prev-btn,
  .next-btn {
    font-size: var(--fs-700);
    background-color: transparent;
    /* border: 1px solid red; */
    color: white;
  }

  .previous {
    transform: translateX(-100%);
    /* border: 20px solid pink; */
    transition: var(--transition);
  }

  .active {
    transform: translateX(0);
    transition: var(--transition);
    /* border: 20px solid pink; */
  }

  .next {
    transform: translateX(100%);
    transition: var(--transition);
  }
  .hello {
    display: none;
  }
`;
export default Slider;
