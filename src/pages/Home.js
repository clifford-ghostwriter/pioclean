import React from "react";
import styled from "styled-components";
import { PageHero, Steps, Slider } from "../components";
// import Slider from "../components/slider";
import { FaLongArrowAltDown } from "react-icons/fa";

const Home = () => {
  return (
    <Wrapper>
      <PageHero path="/about" text="About us" />
      <div className="hero__text | section-center">
        <h3 className="hero__heading">
          You wear, <br /> We wash
        </h3>
        <p className="hero__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam illum
          ad saepe maxime. Consectetur, id! Dolorem voluptatibus cum assumenda
          tempore.
        </p>
        <div className="cta__container">
          <button className="cta-btn">order</button>
          <a href="#learnmore" className="cta-btn">
            learn more <FaLongArrowAltDown />
          </a>
        </div>
      </div>
      <Slider />
      <Steps />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* background-color: yellow; */
  /* height: 500px; */

  .hero__text {
    /* border: 1px solid blue; */
    padding-top: 2rem;
  }

  .hero__heading {
    border-left: 5px solid red;
    margin: auto;
    width: 8rem;
    padding-left: 0.5rem;
  }

  .hero__paragraph {
    padding-top: 2rem;
  }

  .cta__container {
    /* border: 1px solid red; */
    max-width: max-content;
    margin-inline: auto;
    padding: 1rem;
    display: flex;
    gap: 1.5rem;
  }

  .cta-btn {
    text-transform: capitalize;
    /* width: 5rem; */
    padding: 0.35rem;
    background-color: var(--clr--primary-one);
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .cta-btn:last-child {
    background-color: transparent;
    border: 1px solid red;
    text-decoration: none;
  }

  .cta-btn:hover {
    background-color: var(--clr--primary-five);
  }
`;

export default Home;
