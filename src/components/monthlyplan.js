import React from "react";
import styled from "styled-components";

const Monthlyplan = () => {
  return (
    <Wrapper className="section">
      <div className="section-center monthly__plan">
        <div>Monthlyplan</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid red;

  .monthly__plan {
    border: 1px solid red;
  }
`;
export default Monthlyplan;
