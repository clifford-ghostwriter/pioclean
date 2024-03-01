import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";

const Home = () => {
  return (
    <Wrapper>
      <PageHero path="/about" text="About us" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* background-color: yellow; */
  /* height: 500px; */
`;

export default Home;
