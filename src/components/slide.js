import React from "react";
import styled from "styled-components";
import bck from "../assests/dirtyclothes.png";
const color = "blue";

const Slide = ({ slide, index }) => {
  const { text, image } = slide;
  console.log(index);

  return (
    <Wrapper image={image} color="yellow" index={index}>
      <div></div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-image: url(${(p) => p.image});
  /* background-image: url(${bck}); */
  /* background-color: ${(p) => p.color}; */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-origin: border-box;
  width: 100%;
  height: 100%;
  flex: 0 0 auto;
  transform: translateX(${(p) => p.index * 100}%);
  position: absolute;
  top: 0;
  left: 0;

  /* border: 2px solid yellow; */
  /* background-color: ${color}; */
`;
export default Slide;
