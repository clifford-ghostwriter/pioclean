import React from "react";
import styled from "styled-components";
import { UseServiceContext } from "../contexts/service.Context";

const Orderfooter = () => {
  const { totalitems, totalamount } = UseServiceContext();
  return (
    <Wrapper>
      <div className="order_footer__container">
        {/* <p className="order_footer"></p> */}
        <h3 className="order_footer">total</h3>
        <p className="order_footer"></p>
        <h3 className="order_footer">
          <span>{totalitems}</span>
        </h3>
        <h3 className="order_footer">
          <span>{` ${totalamount > 0 ? "N" : ""}${totalamount}`}</span>
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .order_footer__container {
    /* border: 1px solid blue; */
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    padding-top: 1rem;
    background-color: var(--clr--primary-six);
    margin-top: 0.4rem;
  }

  .order_footer__container > *:not(:first-child) {
    text-align: center;
    text-transform: capitalize;
    display: grid;
    /* flex-wrap: nowrap; */
    justify-items: center;
  }

  .order_footer__container > * {
    text-transform: uppercase;
  }
`;

export default Orderfooter;
