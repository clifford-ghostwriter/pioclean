import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";

const OrderOnline = () => {
  return (
    <Wrapper>
      <PageHero path="/" text="Home" />
      <div>Request</div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;
export default OrderOnline;
