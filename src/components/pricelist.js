import React from "react";
import styled from "styled-components";

const Pricelist = () => {
  return (
    <Wrapper className="section-center">
      <div className="section__container">
        <p>pricelist</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem;

  .section__container {
    border: 1px solid blue;
  }
`;
export default Pricelist;
