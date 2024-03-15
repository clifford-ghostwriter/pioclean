import React from "react";
import { PageHero } from "../components";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <PageHero path="/" text="Back Home" />
      <div className="about-us">
        <h2>OUR HISTORY & FACTS</h2>
        <p>
          PioClean Laundry Service was incorporated on 29th of March, 2006 with
          the mission pf providing customers wiyh high value,exceptional service
          and convenience for all garment care needs, carpets and upholstery,
          training, consulting for dry cleaning companies, corporate bodies,
          hotels, events managers etc. In the shortest time the PioClean laundry
          service has grown to one of the largest most respected and highly
          recognizable names in the dry cleaning industry.
        </p>
      </div>

      <div className="mission__statement">
        <h2 className="header">mission statement</h2>
        <p className="statement">
          We strive to be the acknowledged Nigera leader in Dry cleaning and
          preferred parter by setting the highest standards in service,
          reliability and cost containment.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default About;
