import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <p>
        hello home Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ratione ab deleniti voluptatibus quas ex quos a iure iusto facilis
        repellendus incidunt, nihil dignissimos animi itaque modi at blanditiis.
        Odio, a?
      </p>
      <p>hello home Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* background-color: pink; */
  /* border: 1px solid black; */
  /* min-width: max-content; */
  /* width: 700px; */
  display: flex;

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

  p:last-child {
    /* min-width: 0; */
    background-color: white;
  }

  p {
    border: 1px solid red;
    /* min-width: 0px; */
    /* height: 200px; */
    /* aspect-ratio: 1; */
    /* flex-grow: 1; */
    background-color: yellow;
    word-wrap: break-word;
    /* word-break: break-all; */
  }
`;

export default Home;
