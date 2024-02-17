import React from "react";
import styled from "styled-components";
import heroImage from "../assests/hero-img.png";
import polygon1 from "../assests/Polygon1.png";
import polygon2 from "../assests/Polygon2.png";

const PageHero = () => {
  return (
    <Wrapper>
      <div className="hero__center">
        <div className="img__container">
          <img src={polygon1} alt="polygon1" />
        </div>
        <div className="img__container">
          <img src={heroImage} alt="heroImage" />
        </div>
        <div className="img__container">
          <img src={polygon2} alt="polygon2" />
        </div>
      </div>
      <p>hell world two</p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--clr--primary-five);
  /* padding: 0; */
  /* border: none; */
  /* max-height: 5rem; */

  .hero__center {
    display: flex;
    /* border: 2px solid blue; */
    /* max-height: 10rem; */
  }
  .img__container {
    display: flex;
    flex-grow: 1;
    flex-basis: 1;
    /* border: 2px solid black; */
  }

  .img__container > * {
    flex-basis: 1;
    align-items: stretch;
    flex: 1;
    /* border: 2px solid red; */
    /* width: 100%; */
    height: 100%;
    text-align: center;
  }

  .hero__center > *:nth-child(2) {
    padding-left: 1.5rem;
    /* border: 1px solid red; */
  }
`;

export default PageHero;
