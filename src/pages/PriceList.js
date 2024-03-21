import React from "react";
import styled from "styled-components";
import {
  Monthlyplan,
  PageHero,
  Pricelist,
  Singleitemprice,
} from "../components";

const PriceList = () => {
  return (
    <Wrapper>
      <PageHero path="/" text="Back Home" />
      <Monthlyplan />
      {/* <Singleitemprice /> */}
      <Pricelist />
    </Wrapper>
  );
};
const Wrapper = styled.section``;
export default PriceList;
