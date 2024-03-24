import React from "react";
import { PageHero } from "../components";
import styled from "styled-components";
import calender from "../assests/aboutus images/calendar.png";
import smiley from "../assests/aboutus images/smiley.png";
const About = () => {
  return (
    <Wrapper>
      <PageHero path="/about" text="About" />
      <div className="section">
        <div className="section-center" r>
          <div className="about-us__container ">
            <h2 className="header">our history and facts</h2>
            <p className="history__text">
              PioClean Laundry Service was incorporated on 29th of March, 2006
              with the mission of providing customers wiyh high
              value,exceptional service and convenience for all garment care
              needs, carpets and upholstery, training, consulting for dry
              cleaning companies, corporate bodies, hotels, events managers etc.
              In the shortest time the PioClean laundry service has grown to one
              of the largest most respected and highly recognizable names in the
              dry cleaning industry.
            </p>
          </div>
        </div>
        <div className="section-center">
          <div className="mission__statement__container | ">
            <h2 className="header">mission statement</h2>
            <p className="statement">
              We strive to be the acknowledged Nigera leader in Dry cleaning and
              preferred parter by setting the highest standards in service,
              reliability and cost containment.
            </p>
          </div>
        </div>
        <div className="section-center">
          <div className="chooseus">
            <h3 className="header">why choose use</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              tenetur laudantium quas, quis atque impedit repellendus maxime id
              iusto doloribus obcaecati nostrum distinctio, aliquid veniam
              aspernatur! Provident, debitis in!
            </p>
          </div>
        </div>
        <div className="section-center">
          <div className="history__center">
            <div className="history__point">
              <img src={calender} alt="" />
              <p>2004</p>
              <p>we started dry cleaning</p>
            </div>
            <div className="history__point">
              <img src={smiley} alt="" />
              <p>
                100000<span>+</span>
              </p>
              <p>wsatisfied customers</p>
            </div>
            <div className="history__point">
              <img src={calender} alt="" />
              <p>
                100000<span>+</span>
              </p>
              <p>dry cleaned garments</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .about-us__container {
    padding-block: 1rem;
    text-align: center;
    /* width: 90%; */
    margin-inline: auto;
    /* border: 1px solid pink; */
  }

  .mission__statement__container {
    padding-block: 1rem;
    text-align: center;
    /* width: 70%; */
    margin-inline: auto;
    /* border: 1px solid pink; */
  }

  .history__center {
    display: grid;
    justify-content: center;
    align-content: center;
    padding: 2rem;
    background-color: var(--clr--primary-one);
    color: var(--clr--primary-four);
  }

  .history__center p {
    text-align: center;
    /* font-size: xx-large; */
  }
  .history__center img {
    /* border: 1px solid red; */
    /* display: block; */
    margin: auto;
  }

  .history__point {
    /* border: 1px solid red; */
    padding-top: 1rem;
  }

  span {
    font-size: 1.3rem;
    color: orange;
  }
  .chooseus,
  .history__text,
  .statement {
    padding: 1.5rem;
    text-align: center;
  }

  .header {
    text-transform: uppercase;
  }
`;

export default About;
