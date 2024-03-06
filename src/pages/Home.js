import React from "react";
import styled from "styled-components";
import { PageHero, Steps, Slider } from "../components";
// import Slider from "../components/slider";
import { FaLongArrowAltDown } from "react-icons/fa";
import { orderSteps } from "../utils/link";

const Home = () => {
  return (
    <Wrapper>
      <PageHero path="/about" text="About us" />
      <section className="section">
        <div className="hero__text | section-center">
          <h3 className="hero__heading">
            You wear, <br /> We wash
          </h3>
          <p className="hero__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum rem
            quo non, ea voluptatibus architecto a placeat tenetur quos inventore
            veritatis aspernatur delectus qui. Ipsam, distinctio provident
            atque, necessitatibus cum, at exercitationem illum neque quasi
            laborum iste delectus doloribus? Voluptate tempora dolores, beatae
            iusto minus cupiditate nostrum alias. Obcaecati, autem?
          </p>
          <div className="cta__container">
            <button className="cta-btn">order</button>
            <a href="#learnmore" className="cta-btn">
              <span>learn more</span> <FaLongArrowAltDown />
            </a>
          </div>
        </div>
        <Slider />
      </section>
      <section className="section ">
        <div className="steps__container section-center">
          <div className="steps__text">
            <p>How it works</p>
            {/* <div className="underline"></div> */}
          </div>
          <div className="steps">
            {orderSteps.map((step, index) => {
              return <Steps step={step} />;
            })}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* background-color: yellow; */
  /* height: 500px; */

  counter-reset: count;

  .step::before {
    counter-increment: count;
    content: " " counter(count) " ";
    color: white;
    width: 3rem;
    aspect-ratio: 1;
    background-color: red;
    /* background-color: var(--clr--primary-eight); */
    border-radius: 599vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }

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
    text-align: center;
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
    color: black;
  }

  .cta-btn:last-child {
    background-color: transparent;
    display: flex;
    align-items: center;
    border: 1px solid var(--clr--primary-one);
    text-decoration: none;
    /* color: var(--clr--primary-one); */
  }

  .cta-btn:hover {
    background-color: var(--clr--primary-six);
  }

  a:visited {
  }

  .steps__container {
    /* border: 1px solid red; */
    display: grid;
    justify-content: center;
  }

  .steps__text p {
    border-left: 5px solid red;
    margin: auto;
    width: 8rem;
    padding-left: 0.5rem;
  }
  .steps {
    padding-top: 2rem;
  }
`;

export default Home;
