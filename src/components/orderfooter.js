import React from "react";
import styled from "styled-components";

const Orderfooter = () => {
  return (
    <Wrapper>
      <div className="order_footer__container">
        <p className="order_footer"></p>
        <p className="order_footer"></p>
        <p className="order_footer"></p>
        <h3 className="order_footer">
          total item: <span>items</span>
        </h3>
        <h3 className="order_footer">
          Total: <span>total</span>
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .order_footer__container {
    border: 1px solid blue;
    display: grid;
    grid-template-columns: auto repeat(4, 1fr);
    gap: 1rem;
  }

  .order_footer__container > *:not(:first-child) {
    text-align: center;
    text-transform: capitalize;
  }
`;

export default Orderfooter;
