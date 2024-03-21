import React from "react";
import styled from "styled-components";

const Itemprice = ({ item }) => {
  const { image, price, name } = item;
  return (
    <Wrapper>
      <div className="container">
        <div className="image__container">
          <img src={image} alt="" />
        </div>
        <div className="text">
          <p>{name}</p>
          <p>{price}</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 15rem;
  border: 1px solid red;

  .container {
    display: flex;
    height: 100%;
    border: 1px solid yellow;
  }

  .image__container {
    border: 1px solid red;
    height: 70%;
    flex-shrink: 1;
    width: 70%;
  }

  .image__container img {
    height: 100%;
    display: block;
    border-radius: 600vw;
  }
`;
export default Itemprice;
