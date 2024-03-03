import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";

const PriceList = () => {
  return (
    <Wrapper>
      <PageHero path="/" text="Back Home" />
      <div>pricelist</div>
    </Wrapper>
  );
};
const Wrapper = styled.section``;
export default PriceList;
