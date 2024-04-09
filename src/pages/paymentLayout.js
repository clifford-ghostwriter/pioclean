import React from "react";

import { Outlet } from "react-router-dom";
import styled from "styled-components";

const PaymentLayout = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.section``;
export default PaymentLayout;
