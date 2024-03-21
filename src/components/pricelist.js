import React from "react";
import styled from "styled-components";
import { Itemprice, itemprice } from "../components";
import { prices } from "../utils/link";

const Pricelist = () => {
  return (
    <Wrapper className="section-center">
      <div className="section__container">
        {prices.map((item, index) => {
          return <Itemprice item={item} key={index} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem;

  .section__container {
    border: 1px solid blue;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* display: flex; */
    /* flex-wrap: wrap; */
  }

  /* .section__container > * {
    flex: 1;
  } */
`;
export default Pricelist;
