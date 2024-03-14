import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { UseServiceContext } from "../contexts/service.Context";

const Orderitem = ({ index }) => {
  const { handleChange, order, updateTotal } = UseServiceContext();
  const [totalAmount, setTotalAmount] = useState(0);
  const { [index]: orderitem } = order;
  const properties = Object.getOwnPropertyNames(orderitem);
  // console.log(properties);

  const item = orderitem[properties[0]];
  const price = orderitem[properties[1]];
  const number = orderitem[properties[2]];
  // const total = orderitem[properties[4]];
  // const item = properties[0];
  // console.log(orderitem[item]);
  const tot = number * price;
  useEffect(() => {
    setTotalAmount(tot);
  });
  console.log(tot, totalAmount);
  return (
    <Wrapper>
      <p>S/N</p>
      <select
        name={`orderitem${index}`}
        id=""
        onChange={(e) => {
          handleChange(e, index, totalAmount);
          // updateTotal(tot, index);
        }}>
        <option value={item}>{item}</option>
        {/* <option value="how far">how far</option> */}
      </select>
      <p>{price}</p>
      <input
        type="number"
        name={`ordernumber${index}`}
        min={0}
        onChange={(e) => {
          handleChange(e, index, totalAmount);
          // updateTotal(totalAmount, index);
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
