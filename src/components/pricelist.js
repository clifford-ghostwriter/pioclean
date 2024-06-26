import React from "react";
import styled from "styled-components";
import { Itemprice } from "../components";
// import { prices } from "../utils/link";
import { UseServiceContext } from "../contexts/service.Context";
import { Link } from "react-router-dom";

const Pricelist = () => {
  const { order, totalamount } = UseServiceContext();
  return (
    <Wrapper className="section-center">
      <div className="section__container">
        <h3 className="heading">price list</h3>
        <div className="itemprice__container">
          {order.map((item, index) => {
            return <Itemprice item={item} key={index} index={index} />;
          })}
          {totalamount ? (
            <Link className="list__btn" to="/checkout">
              checkout
            </Link>
          ) : null}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* padding: 2rem; */
  /* border: 1px solid red; */
  padding-block: 2rem;

  .section__container {
    padding-top: 2rem;
    /* border: 1px solid blue; */
    display: grid;
    /* grid-template-columns: 1fr; */
    gap: 1rem;
    /* display: flex; */
    /* flex-wrap: wrap; */
  }

  /* .section__container > * {
    flex: 1;
  } */
  .itemprice__container {
    display: grid;
    gap: 0.5rem;
    /* border: 1px solid black; */
    width: 100%;
    margin: auto;
    gap: 2rem;
  }

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
    margin-left: 1.3rem;
    font-size: medium;
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

  @media (min-width: 500px) {
    .itemprice__container {
      width: 60%;
    }
  }

  @media (min-width: 980px) {
    .itemprice__container {
      grid-template-columns: 1fr 1fr;
      width: 80%;
    }
  }

  @media (min-width: 1000px) {
    .itemprice__container {
      width: 70%;
    }

    @media (min-width: 1500px) {
      .itemprice__container {
        width: 60%;
      }
    }
  }
`;
export default Pricelist;
