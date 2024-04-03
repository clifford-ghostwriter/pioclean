import React from "react";
import styled from "styled-components";
// import bck from "../assests/dirtyclothes.png";
// const color = "blue";

const Slide = ({ slide, index, type }) => {
  const { image } = slide;
  // console.log(index);

  return (
    <Wrapper
      // warning
      $image={image}
      $index={index}
      className={type}></Wrapper>
  );
};
const Wrapper = styled.div`
  background-image: url(${(p) => p.$image});

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  /* background-origin: border-box; */
  width: 100%;
  height: 100%;
  /* opacity: 0; */
  /* transform: translateX(${(p) => p.$index * 100}%); */
  /* transform: translateX(); */
  position: absolute;
  top: 0;
  left: 0;

  transition: var(--transition-slow);
`;
export default Slide;
