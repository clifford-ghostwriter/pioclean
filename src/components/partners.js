import React from "react";
import styled from "styled-components";
import { partners } from "../utils/link";

const Partners = () => {
  return (
    <Wrapper>
      <h3>our partners</h3>
      <div className="partners__container">
        {partners.map((partner) => {
          console.log(partner);
          return (
            <div className="img__container">
              <img src={partner} alt="partner" />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* border: 1px solid blue; */

  h3 {
    text-transform: capitalize;
    border-left: 5px solid red;
    margin: auto;
    width: 9rem;
    padding-left: 0.5rem;
  }

  .partners__container {
    display: flex;
    height: max-content;
    box-shadow: 1px 1px 1px black;
    margin-top: 2rem;
    gap: 1rem;
  }

  .img__container {
    flex: 1;
    /* border: 1px solid red; */
    height: 8rem;
  }

  .img__container:not(:first-child) {
    border-left: 1px solid black;
  }

  .img__container img {
    display: block;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;
export default Partners;
