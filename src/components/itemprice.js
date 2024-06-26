import React from "react";
import styled from "styled-components";
import { UseServiceContext } from "../contexts/service.Context";

const Itemprice = ({ item, index }) => {
  const { handleChange, updateTotal } = UseServiceContext();
  const { image, orderitem, orderprice, ordernumber, ordertotal } = item;
  return (
    <Wrapper>
      <div className="container">
        <div className="image__container">
          <img src={image} alt="" />
        </div>
        <div className="text__container">
          <p>{orderitem}</p>
          <p>N{orderprice}</p>
          {/* <p>N{ordertotal}</p> */}

          <div className="input">
            <label htmlFor="quantity">quantity:</label> <br />
            <input
              type="number"
              // name={`ordernumber${index}`}
              name="ordernumber"
              value={ordernumber}
              min={0}
              id="quantity"
              // placeholder="add item"
              onChange={(e) => {
                handleChange(e, index);
                updateTotal(index);
              }}
            />
          </div>
          <p>
            <span>total:</span>
            {` ${ordertotal > 0 ? "N" : ""}${ordertotal}`}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* height: 100%; */
  /* border: 1px solid red; */
  width: 90%;
  box-shadow: 2px 2px 3px black;
  margin: auto;

  .container {
    display: flex;
    height: 100%;
    /* flex-direction: column; */
    gap: 1rem;
    padding: 1rem;
    /* width: 25rem; */
    /* border: 1px solid yellow; */
    margin: auto;
  }

  .container > * :nth-child(2) {
  }

  .image__container {
    /* border: 1px solid red; */
    width: 12rem;
    aspect-ratio: 1;
    flex-shrink: 1;
    overflow: hidden;
    border-radius: 100vw;

    background-color: var(--clr--primary-one);
    box-shadow: 1px 2px 2px black;
    /* width: 70%; */
  }

  .image__container img {
    height: 100%;
    display: block;
    border-radius: 100vw;
    width: 100%;
    margin-left: -0.1rem;
  }

  .text__container {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-block: 1rem;
  }
  .text__container > * {
    /* flex: 1; */
  }
  input {
    /* width: 7rem; */
    /* border: 1px solid red; */
    border-radius: 5px;
    min-width: 0;
    max-width: 5rem;
  }

  .text__container > *:nth-child(1) {
    word-break: keep-all;
    word-wrap: break-word;
  }
  .text__container > * {
    text-transform: capitalize;
  }
`;
export default Itemprice;
