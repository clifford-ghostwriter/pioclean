import React from "react";
import styled from "styled-components";
import { Monthlyplan, PageHero, Singleitemprice } from "../components";

const PriceList = () => {
  return (
    <Wrapper>
      <PageHero path="/" text="Back Home" />
      <Monthlyplan />
      <Singleitemprice />
    </Wrapper>
  );
};
const Wrapper = styled.section``;
export default PriceList;
