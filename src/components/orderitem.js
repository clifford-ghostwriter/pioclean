import React from "react";
import styled from "styled-components";
import { UseServiceContext } from "../contexts/service.Context";

const Orderitem = ({ index }) => {
  const { handleChange, order } = UseServiceContext();
  const { [index]: orderitem } = order;
  const properties = Object.getOwnPropertyNames(orderitem);
  console.log(properties);

  const item = orderitem[properties[0]];
  const price = orderitem[properties[1]];
  const number = orderitem[properties[2]];
  const total = orderitem[properties[4]];
  // const item = properties[0];
  // console.log(orderitem[item]);

  // console.log(item, price, number, total);
  return (
    <Wrapper>
      <p>S/N</p>
      <select
        name={`orderitem${index}`}
        id=""
        onChange={(e) => {
          handleChange(e, index);
        }}>
        <option value="hello">hello</option>
        <option value="how far">how far</option>
      </select>
      <p>{price}</p>
      <input
        type="number"
        name={`ordernumber${index}`}
        onChange={(e) => {
          handleChange(e, index);
        }}
      />
      <p>{price * number}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid blue;
  display: grid;
  grid-template-columns: auto repeat(4, 1fr);
  gap: 1rem;

  > *:not(:first-child) {
    text-align: center;
  }
`;
export default Orderitem;
