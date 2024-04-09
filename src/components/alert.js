import React from "react";
import styled from "styled-components";
import { UseAppContext } from "../contexts/app.Context";

const Alert = () => {
  const { alert, alert_flag } = UseAppContext();

  return (
    <Wrapper>
      <p className={!alert_flag ? "text " : "text show-text"}>{alert}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* border: 1px solid blue; */
  /* height: 1.5rem; */
  .text {
    color: red;
    text-align: left;
    font-size: small;
    /* border: 1px solid red; */
    height: 1.5rem;
    opacity: 0;
  }

  .show-text {
    /* color: red;
    text-align: left;
    border: 1px solid red; */
    opacity: 1;
  }
`;

export default Alert;
