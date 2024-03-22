import React from "react";
import styled from "styled-components";
import { Itemprice, itemprice } from "../components";
import { prices } from "../utils/link";
import { UseServiceContext } from "../contexts/service.Context";
import { Link } from "react-router-dom";

const Pricelist = () => {
  const { order } = UseServiceContext();
  return (
    <Wrapper className="section-center">
      <div className="section__container">
        <h3 className="heading">price list</h3>

        {order.map((item, index) => {
          return <Itemprice item={item} key={index} index={index} />;
        })}
      </div>
      <Link className="list__btn" to="/checkout">
        checkout
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* padding: 2rem; */
  /* border: 1px solid red; */

  .section__container {
    padding: 1rem;
    /* border: 1px solid blue; */
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    /* display: flex; */
    /* flex-wrap: wrap; */
  }

  /* .section__container > * {
    flex: 1;
  } */

  .list__btn {
    text-transform: capitalize;
    letter-spacing: 0.05rem;
    text-decoration: none;
    width: max-content;
    border: 2px solid black;
    border-radius: 3px;
    background-color: var(--clr--primary-six);
    color: black;
    cursor: pointer;
    padding: 0.3rem;
    display: block;
    margin-top: 0.5rem;
  }

  .heading {
    border-left: 5px solid red;
    margin: auto;
    width: 8rem;
    padding-left: 0.5rem;
    margin-bottom: 1rem;
  }

  .text {
    padding: 1rem;
    text-align: center;
  }
`;
export default Pricelist;
