import React from "react";
import dirtyclothes from "../assests/dirtyclothes.png";
import styled from "styled-components";

const HeroTwo = () => {
  return (
    <Wrapper>
      <div className="section-center hero__center">
        <h2 className="hero__text">dirty has never been a problem</h2>
        <div className="hero__img">
          <img src={dirtyclothes} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--clr--primary-one);
  margin-top: 5rem;
  border: 1px solid red;
  .hero__center {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    padding-block: 10rem;
    border: 1px solid red;
    padding-inline: 2rem;
  }

  > * {
    margin: auto;
    /* border: 1px solid red; */
  }

  .hero__img {
    /* flex-basis: 1; */
    /* flex-grow: 1; */
    transform: rotate(40deg);
    /* width: 60%; */
  }
`;
export default HeroTwo;
