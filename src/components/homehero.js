import React from "react";
import dirtyclothes from "../assests/dirty-clothes-01.jpeg";
import styled from "styled-components";

const Homehero = ({ bcg }) => {
  return (
    <Wrapper $bcgImage={bcg}>
      <div className=" hero__center">
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
  height: 50vh;

  .hero__center {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    justify-items: left;
    height: 100%;
    width: 95%;
    margin: auto;
  }

  .hero__center > *:nth-child(1) {
    width: max-content;
    justify-self: center;
  }

  .hero__img {
    transform: rotate(45deg);
    width: 11rem;

    border-radius: 10px;
    justify-self: center;
  }

  img {
    border-radius: 10px;
    width: 100%;
    height: 80%;
  }

  .hero__text {
    text-transform: capitalize;
    font-size: 1.4rem;
  }

  @media (min-width: 550px) {
    .hero__center {
      width: 95%;
      grid-template-columns: 1fr 1fr;
    }

    .hero__img {
      transform: rotate(45deg);
      width: 14rem;
      justify-self: center;
    }

    .hero__center > *:nth-child(2) {
      width: max-content;
      justify-self: left;
    }
  }

  @media (min-width: 1000px) {
    height: 60vh;
    .hero__center {
      width: 79%;
      margin: auto;
      gap: 1rem;
      grid-template-columns: 1fr 1fr;
    }

    img {
      width: 22rem;
    }

    .hero__center > *:nth-child(1) {
      justify-self: center;
      width: max-content;
    }
  }

  @media (min-width: 1500px) {
    height: 60vh;
    .hero__center {
      width: 60%;
      margin: auto;
      gap: 1.5rem;
      justify-items: center;
      grid-template-columns: 1fr 1fr;
    }

    img {
      width: 22rem;
    }

    .hero__center > *:nth-child(1) {
      justify-self: center;
      width: max-content;
    }
  }

  @media (min-width: 1600px) {
    height: 65vh;
    .hero__center {
      width: 60%;
      margin: auto;
      gap: 1.5rem;
      justify-items: center;
      grid-template-columns: 1fr 1fr;
    }

    img {
      width: 22rem;
    }

    .hero__center > *:nth-child(1) {
      justify-self: center;
      width: max-content;
    }
  }

  @media (min-width: 1800px) {
    height: 65vh;
    .hero__center {
      width: 60%;
      margin: auto;
      gap: 1.5rem;
      justify-items: center;
      grid-template-columns: 1fr 1fr;
    }

    img {
      width: 26rem;
    }

    .hero__center > *:nth-child(1) {
      justify-self: center;
      width: max-content;
    }
  }
`;
export default Homehero;
