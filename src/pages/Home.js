import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PageHero, Steps, Slider, Testimonies } from "../components";
// import Slider from "../components/slider";
import { FaLongArrowAltDown } from "react-icons/fa";
import { orderSteps, testimonies } from "../utils/link";
import { Link } from "react-router-dom";
import { UseAppContext } from "../contexts/app.Context";

const Home = () => {
  const { setheroref, heroref } = UseAppContext();
  const [ref, setref] = useState();

  useEffect(() => {
    const element = document.querySelector(".hero__heading");
    setheroref(element);
  }, [ref]);
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
            <Link to="/order" className="cta-btn">
              order
            </Link>
            <a href="#learnmore" className="cta-btn">
              <span>learn more</span> <FaLongArrowAltDown />
            </a>
          </div>
        </div>
        <Slider />
      </section>
      <section className="section">
        <div className="steps__container section-center">
          <div className="steps__text">
            <p>How it works</p>
            {/* <div className="underline"></div> */}
          </div>
          <div className="steps">
            {orderSteps.map((step, index) => {
              return <Steps step={step} key={index} />;
            })}
          </div>
        </div>
        <div className="testimonials-section section-center">
          <div className="testimonial-header">
            <h3 className="testimonial__heading">testimonials</h3>
            <p className="testimonial__text">
              Once you try us, you can't go back
            </p>
          </div>
          <div className="testimonial-center">
            {testimonies.map((customer, index) => {
              return <Testimonies customer={customer} key={index} />;
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
    text-decoration: none;
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
    /* display: grid; */
    justify-content: center;

    /* border: 1px solid blue; */
  }

  .steps__text p {
    border-left: 5px solid red;
    margin: auto;
    width: 8rem;
    padding-left: 0.5rem;
  }
  .steps {
    padding-top: 2rem;
    /* border: 1px solid red; */
    /* width: 90%; */
    display: grid;
    /* grid-template-columns: 1fr 1fr; */
    justify-items: center;
  }
  .testimonials-section {
    padding-top: 2rem;
  }

  .testimonial-header {
    /* border: 1px solid red; */
    /* width: 50%; */
    /* margin-inline: auto; */
  }
  .testimonial__heading {
    text-transform: capitalize;
    /* border-left: 5px solid red; */
    margin: auto;
    width: 8rem;
    padding-left: 0.5rem;
  }
  .testimonial-center {
    /* border: 1px solid red; */
    width: 90%;
    margin-inline: auto;
    display: grid;
    /* grid-template-columns: 1fr 1fr; */
    padding-block: 2rem;
  }

  .testimonial__text {
    padding-top: 0.5rem;
    text-align: center;
  }
`;

export default Home;
