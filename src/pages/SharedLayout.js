import React from "react";
import { Nav } from "../components";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

function SharedLayout() {
  return (
    <Wrapper>
      <Nav />
      <Outlet />
    </Wrapper>
  );
}

const Wrapper = styled.section``;
export default SharedLayout;
