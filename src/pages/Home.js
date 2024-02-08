import React from "react";
import styled from "styled-components";

const Home = () => {
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.section`
  /* background-color: pink; */
  /* border: 1px solid black; */
  /* min-width: max-content; */
  /* width: 700px; */

  div {
    /* background-color: black; */
    color: white;
    /* width: 90%; */
    /* word-break: keep-all; */
    /* margin-inline: auto; */
  }

  .flex {
    display: grid;
    grid-template-columns: 1fr [content-start] 1fr [content-end] 1fr;
    /* gap: 2rem; */
    /* padding-inline: 2rem; */
    /* width: 600px; */
    /* flex-wrap: wrap; */
    border: 1px solid red;
    /* background-color: red; */
  }

  .flex > :last-child {
  }

  p {
    border: 1px solid red;
    width: 100%;
    height: 200px;
    /* aspect-ratio: 1; */
    /* flex-grow: 1; */
    background-color: yellow;
  }
`;

export default Home;
