import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      {/* <div>
        <p>hello world</p>
      </div> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: pink;
  border: 1px solid black;
  /* min-width: max-content; */
  /* width: 700px; */

  div {
    background-color: black;
    color: white;
    width: 90%;
    /* word-break: keep-all; */
    margin-inline: auto;
  }
`;

export default Home;
