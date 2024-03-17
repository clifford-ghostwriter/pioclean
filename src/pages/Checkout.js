import React from "react";
import { PageHero } from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <Wrapper>
      <PageHero text=" Back Home" />
      <Link className="list__btn" to="/order">
        Add more items
      </Link>
      <div>Checkout</div>;
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .list__btn {
    text-transform: capitalize;
    letter-spacing: 0.05rem;
    text-decoration: none;
    width: max-content;
    border: 1px solid black;
    border-radius: 3px;
    background-color: var(--clr--primary-six);
    color: black;
  }
`;
export default Checkout;
