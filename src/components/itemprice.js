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
        <div className="text">
          <p>{orderitem}</p>
          <p>N{orderprice}</p>
          <p>{ordertotal}</p>
        </div>
        <input
          type="number"
          // name={`ordernumber${index}`}
          name="ordernumber"
          value={ordernumber}
          min={0}
          onChange={(e) => {
            handleChange(e, index);
            updateTotal(index);
          }}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 20rem;
  border: 1px solid red;

  .container {
    /* display: flex; */
    height: 100%;
    /* border: 1px solid yellow; */
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
