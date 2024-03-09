import React from "react";
import styled from "styled-components";

const Ordercolumn = () => {
  return (
    <Wrapper>
      <div className="header__container">
        <h3 className="header">S/N</h3>
        <h3 className="header">item</h3>
        <h3 className="header">unit price</h3>
        <h3 className="header">numbers</h3>
        <h3 className="header">total</h3>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .header__container {
    display: flex;
    border: 1px solid red;
  }

  .header__container > * {
    flex: 1;
    width: max-content;
  }
`;
export default Ordercolumn;
