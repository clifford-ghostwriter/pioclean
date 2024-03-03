import React from "react";
import { PageHero } from "../components";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <PageHero path="/" text="Back Home" />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default About;
