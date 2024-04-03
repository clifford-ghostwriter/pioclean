import React, { useEffect, useRef, useState } from "react";
import { Footer, HeroTwo, Nav } from "../components";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBar from "../components/sideBar";
// import { UseAppContext } from "../contexts/app.Context";

function SharedLayout() {
  // const { isSidebarOpen } = UseAppContext();
  const [isIntersecting, setIsIntersecting] = useState();
  const ref = useRef(null);
  console.log(ref);

  // useEffect(() => {
  //   const hero = document.querySelector(".hero");
  //   const nav = document.querySelector(".navbar");
  //   console.log(hero, nav);

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       console.log(entry);
  //       const target = entry.target;
  //       setIsIntersecting(entry.isIntersecting);
  //       setIsIntersecting(entry.isIntersecting);

  //       entries.forEach((entry) => {
  //       });
  //     },
  //     { rootMargin: "-50px", threshold: 0.5 }
  //   );

  //   console.log(isIntersecting);
  //   observer.observe(hero);
  //   return () => observer.unobserve(hero);
  // }, [isIntersecting]);

  // useEffect(() => {
  //   const hero = document.querySelector(".hero");
  //   const nav = document.querySelector(".navbar");
  //   if (!isIntersecting) {
  //     nav.classList.add("stickyNav");
  //   } else nav.classList.remove("stickyNav");
  // }, [isIntersecting]);

  // useEffect(() => {
  //   if (isIntersecting) {
  //     ref.current.querySelectorAll("div").forEach((el) => {
  //       el.classList.add("slide-in");
  //     });
  //   } else {
  //     ref.current.querySelectorAll("div").forEach((el) => {
  //       el.classList.remove("slide-in");
  //     });
  //   }
  // }, [isIntersecting]);

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
