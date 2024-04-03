import React, { useEffect, useRef, useState } from "react";
import { Footer, HeroTwo, Nav } from "../components";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBar from "../components/sideBar";
// import { UseAppContext } from "../contexts/app.Context";

function SharedLayout() {
  // const { isSidebarOpen } = UseAppContext();
  const [scroll, setscroll] = useState();
  const ref = useRef(null);
  // console.log(ref);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      console.log(window.scrollY);

      setscroll(window.scrollY);
    });
  }, [scroll]);

  useEffect(() => {
    if (scroll >= 100) {
      ref.current.classList.add("stickyNav");
    } else {
      ref.current.classList.remove("stickyNav");
    }
  });

  return (
    <Wrapper>
      <Nav ref={ref} />
      <HeroTwo />
      <SideBar />
      {/* {isSidebarOpen && <SideBar />} */}
      <Outlet />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.section``;
export default SharedLayout;
