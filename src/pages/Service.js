import React from "react";
import styled from "styled-components";
// import { PageHero } from "../components";
import { services } from "../utils/link";
import { Hero } from "../components";
import servicesimage from "../assests/heroimages/laundryservices.jpg";
// import callcenteragent from "../assests/heroimages/call-centre-agent.jpg";

const Service = () => {
  return (
    <Wrapper>
      <Hero bcg={servicesimage} text="what we do" white={true} />
      {/* <PageHero path="/service" text="Services" /> */}
      <div className="section-center text__center">
        <h3 className="heading">our services</h3>
        <p className="services__text">
          A list of our well tailored services aimed at providing the best
          experience for every of our customers. These services include
          household and organization laundry, garment repairs, pick up and
          delivery, as well as other cleaning services.
        </p>
      </div>
      <div className="section-center">
        <div className="service__center">
          {services.map((item, index) => {
            const { icon, text } = item;
            return (
              <div className="service__item" key={index}>
                <div className="icon">{icon}</div>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding-bottom: 2rem;
  .text__center {
    text-align: center;
    padding-block: 2rem;
  }
  .service__center {
    background-color: var(--clr--primary-one);
    display: grid;
    flex-direction: column;
    justify-items: center;
    align-content: center;
    /* border: 1px solid red; */
  }

  .heading {
    text-transform: uppercase;
  }

  .service__item {
    width: 12rem;
    margin: auto;
    /* border: 1px solid red; */
    padding: 1rem;
  }
  .service__item p {
    text-align: center;
    text-transform: capitalize;
  }

  .icon {
    /* border: 1px solid blue; */
    width: max-content;
    margin: auto;
  }

  .icon > * {
    /* border: 1px solid red; */
    display: block;
    font-size: 8rem;
    color: white;
  }

  @media (min-width: 1000px) {
    .service__center {
      grid-template-columns: 1fr 1fr;
    }

    .services__text {
      padding-inline: 5rem;
      /* border: 1px solid red; */
      width: 90%;
      margin: auto;
    }
  }
`;
export default Service;
