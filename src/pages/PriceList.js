import React from "react";
import styled from "styled-components";
import {
  Monthlyplan,
  // PageHero,
  Pricelist,
  // Singleitemprice,
} from "../components";
import { Hero } from "../components";
import cleanclothes from "../assests/heroimages/cleanclothes.jpg";

const PriceList = () => {
  return (
    <Wrapper>
      {/* <PageHero path="pricelist" text="Price List" /> */}
      <Hero
        bcg={cleanclothes}
        text={`we make laundry accesible and affordable`}
      />
      <Monthlyplan />
      <Pricelist />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding-bottom: 2rem;
`;
export default PriceList;
