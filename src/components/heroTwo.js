import React from "react";
// import dirtyclothes from "../assests/dirty-clothes-01.jpeg";
import styled from "styled-components";

const Hero = ({ bcg, text, white }) => {
  return (
    <Wrapper $bcgImage={bcg}>
      <div className=" hero__center">
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
  /* background-color: var(--clr--primary-one); */
  /* margin-top: 5rem; */
  /* border: 1px solid red; */

  /* display: grid; */
  /* grid-template-columns: 1fr 1fr; */
  align-content: center;
  /* justify-items: center; */
  /* padding-block: 8rem; */
  /* border: 1px solid red; */

  background-image: url(${(p) => p.$bcgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 20%;
  height: 60dvh;
  /* background-attachment: scroll; */
  /* background-position: center; */

  /* .hero__center {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    padding-block: 8rem;
    border: 1px solid red;
    padding-inline: 2rem;
    gap: 1rem;
  } */

  .hero__center {
    /* border: 1px solid red; */
    padding-left: 1rem;
  }

  .hero__img {
    /* flex-basis: 1; */
    /* flex-grow: 1; */
    /* transform: rotate(45deg); */

    /* border: 1px solid red; */
    /* margin-top: -2rem; */
    border-radius: 50px;
  }

  img {
    border-radius: 10px;
    width: 100%;
    aspect-ratio: 1;
  }

  .hero__text {
    text-transform: capitalize;

    font-size: 3rem;
    /* color: var(--clr--primary-three); */
    /* border: 1px solid red; */
    /* color: white; */
  }

  .white__font {
    color: white;
  }

  @media (min-width: 1000px) {
    .hero__center {
      /* width: 80%; */
      margin: auto;
      padding-left: 5rem;
      /* border: 1px solid red; */
    }
  }

  @media (min-width: 550px) {
    .hero__center > * {
      /* width: 60%; */
    }
  }
`;
export default Hero;
