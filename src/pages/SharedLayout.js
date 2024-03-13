import React, { useRef } from "react";
import { Footer, Nav } from "../components";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBar from "../components/sideBar";
// import { UseAppContext } from "../contexts/app.Context";

function SharedLayout() {
  // const { isSidebarOpen } = UseAppContext();

  return (
    <Wrapper>
      <Nav />
      <SideBar />
      {/* {isSidebarOpen && <SideBar />} */}
      <Outlet />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.section``;
export default SharedLayout;
