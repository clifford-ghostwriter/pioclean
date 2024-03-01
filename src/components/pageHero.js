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

      {/* <div className="grid">
        <p>hekk</p>
        <p>hello</p>
        <p>hello</p>
      </div> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--clr--primary-five);

  .hero__center {
    /* border: 2px solid red; */
    display: flex;
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr 1fr; */
    gap: 0;
    height: 10rem;
  }
  .img__container {
    /* border: 3px solid yellow; */

    flex: 1;
    max-height: 100%;
    display: flex;
  }

  .img__container img {
    /* text-align: center; */
    min-width: 100%;
    min-height: 100%;
    /* display: block; */
    object-fit: fill;
    align-items: stretch;
    /* border: 1px solid red; */
  }

  .img__container:nth-child(2) img {
    object-fit: contain;
    /* border: 1px solid red; */
    /* padding-left: 3rem; */
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default PageHero;
