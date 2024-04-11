import React from "react";
// import dirtyclothes from "../assests/dirty-clothes-01.jpeg";
import styled from "styled-components";

const Hero = ({ bcg, text, white }) => {
  return (
    <Wrapper $bcgImage={bcg}>
      <div className="hero__center">
        <p className={white ? "hero__text white__font " : "hero__text"}>
          {text ? text : null}
        </p>
        {/* <div className="hero__img">
          <img src={dirtyclothes} alt="" />
        </div> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;

  align-items: center;

  background-image: url(${(p) => p.$bcgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 20%;
  height: 50vh;

  .hero__center {
    padding-left: 1rem;
    /* border: 1px solid red; */
  }

  img {
    border-radius: 10px;
    width: 100%;
    aspect-ratio: 1;
  }

  .hero__text {
    text-transform: capitalize;
    font-size: 2.5rem;
  }

  .white__font {
    color: white;
  }

  @media (min-width: 1000px) {
    height: 60vh;
    .hero__center {
      padding-left: 5rem;
    }

    .hero__text {
      font-size: 3rem;
    }
  }
`;
export default Hero;
