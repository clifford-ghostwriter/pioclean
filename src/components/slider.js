import React, { useEffect, useRef, useState } from "react";
import { slides } from "../utils/link";
import styled from "styled-components";
import { Slide } from "../components";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { UseAppContext } from "../contexts/app.Context";

function Slider() {
  const [index, setIndex] = useState(0);

  // eslint-disable-next-line
  const [slidesData, setSlides] = useState(slides);

  useEffect(() => {
    const lastIndex = slidesData.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, slidesData]);

  useEffect(() => {
    // let slider = setInterval(() => {
    //   setIndex(index + 1);
    // }, 3000);
    // return () => clearInterval(slider);
  }, [index]);

  const setIndexBtn = function (index) {
    setIndex(index);
  };

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

          // console.log(position);
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

      <div className="small__btn-container">
        {slides.map((_, btnIndex) => {
          return (
            <button
              key={btnIndex}
              className={
                btnIndex === index ? "small-btn active-btn" : "small-btn"
              }
              onClick={() => {
                setIndexBtn(btnIndex);
              }}></button>
          );
        })}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  /* border: 1px solid red; */
  position: relative;
  padding-block: 2rem;
  /* margin: 1rem; */

  .slider__center {
    /* display: flex; */
    /* height: 100%; */
    border: 1px solid blue;
    height: 70vh;
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
    /* transition: var(--transition); */
  }

  .active {
    transform: translateX(0);
    opacity: 1;
    /* transition: var(--transition); */
    /* border: 20px solid pink; */
  }

  .next {
    transform: translateX(100%);
    /* transition: var(--transition); */
  }
  .hello {
    display: none;
  }

  .small__btn-container {
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 0.2rem;
  }
  .small-btn {
    color: black;
    width: 1rem;
    aspect-ratio: 1;
    border-radius: 500vw;
    background-color: transparent;
    border: 1px solid white;
    box-shadow: 2px 2px 3px black;
    cursor: pointer;
  }

  .active-btn {
    background-color: var(--clr--primary-six);
  }
`;
export default Slider;
