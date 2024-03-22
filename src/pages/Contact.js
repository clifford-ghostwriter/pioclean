import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";

const Contact = () => {
  return (
    <Wrapper>
      <PageHero path="/" text="Back Home" />
      <div>
        <h3>Contact us</h3>
        <h4>our address</h4>
        <p>address no</p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section``;
export default Contact;
