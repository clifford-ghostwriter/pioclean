import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";

const Service = () => {
  return (
    <Wrapper>
      <PageHero path="/" text="Home" />
      <div>services</div>
    </Wrapper>
  );
};
const Wrapper = styled.section``;
export default Service;
