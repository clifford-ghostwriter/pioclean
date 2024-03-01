import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";

const PasswordReset = () => {
  return (
    <Wrapper>
      <PageHero path="/" text="Home" />
      <div>passwordReset</div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default PasswordReset;
