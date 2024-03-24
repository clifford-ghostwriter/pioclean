import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";

const Service = () => {
  return (
    <Wrapper>
      <PageHero path="/service" text="Services" />
      <div>
        <h3>our services</h3>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, vero?
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section``;
export default Service;
