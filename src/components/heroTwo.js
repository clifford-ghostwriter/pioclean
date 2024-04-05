import React from "react";
import dirtyclothes from "../assests/dirty-clothes-01.jpeg";
import styled from "styled-components";

const HeroTwo = () => {
  return (
    <Wrapper>
      <div className="section-center hero__center">
        <h2 className="hero__text">
          you wear, <br />
          we wash
        </h2>
        <div className="hero__img">
          <img src={dirtyclothes} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--clr--primary-one);
  /* margin-top: 5rem; */
  /* border: 1px solid red; */
  .hero__center {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    padding-block: 8rem;
    /* border: 1px solid red; */
    padding-inline: 2rem;
    gap: 1.5rem;
  }

  > * {
    margin: auto;
    /* border: 1px solid red; */
  }

  .hero__img {
    /* flex-basis: 1; */
    /* flex-grow: 1; */
    transform: rotate(45deg);
    /* width: 80%; */
    /* border: 1px solid red; */
    /* margin-top: -2rem; */
    border-radius: 50px;
  }

  img {
    border-radius: 10px;
  }

  .hero__text {
    text-transform: capitalize;
    /* font-size: var(--fs-650); */
    font-size: 1.4rem;
  }

  @media (min-width: 1000px) {
    .hero__center {
      width: 80%;
      margin: auto;
      /* border: 1px solid red; */
    }
  }
`;
export default HeroTwo;
