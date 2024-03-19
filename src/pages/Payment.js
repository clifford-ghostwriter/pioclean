import React, { useState } from "react";
import styled from "styled-components";
import { Loading } from "../components";

function Payment() {
  const [isLoading, setIsloading] = useState(true);

  if (isLoading) {
    return (
      <Wrapper className="section-center">
        <div>
          <div className="container">
            <Loading />
          </div>
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  border: 1px solid red;
  min-height: 50dvh;

  .container {
    border: 1px solid black;
    width: 15rem;
    height: 8rem;
    margin: auto;
  }
`;
export default Payment;
