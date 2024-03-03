import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";

const Contact = () => {
  return (
    <Wrapper>
      <PageHero path="/" text="Back Home" />
      <div>Contact</div>
    </Wrapper>
  );
};
const Wrapper = styled.section``;
export default Contact;
