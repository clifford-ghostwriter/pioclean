import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";

const Service = () => {
  return (
    <Wrapper>
      <PageHero path="/service" text="Services" />
      <div>
        <h3>our services</h3>
        <p>
          A list of our well tailored services aimed at providing the best
          experience for every of our customers. These services include
          household and organization laundry, garment repairs, pick up and
          delivery, as well as other cleaning services.
        </p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section``;
export default Service;
