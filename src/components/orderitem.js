import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { UseServiceContext } from "../contexts/service.Context";

const Orderitem = ({ index }) => {
  const { handleChange, order, updateTotal } = UseServiceContext();
  const [totalAmount, setTotalAmount] = useState(0);
  const { [index]: orderitemm } = order;
  const properties = Object.getOwnPropertyNames(orderitemm);
  // console.log(orderitem);

  const { orderitem, orderprice, ordernumber, ordertotal } = orderitemm;

  console.log(orderitem, orderprice, ordernumber, ordertotal);
  // const item = orderitem[properties[0]];
  // const price = orderitem[properties[1]];
  // const number = orderitem[properties[2]];
  // const total = orderitem[properties[4]];
  // const item = properties[0];
  // console.log(orderitem[item]);
  // const tot = number * price;
  useEffect(() => {
    // setTotalAmount(tot);
  });
  // console.log(tot, totalAmount);
  return (
    <Wrapper>
      {/* <p>{index + 1}</p> */}
      <select
        // name={`orderitem${index}`}
        name="orderitem"
        value={orderitem}
        id=""
        onChange={(e) => {
          handleChange(e, index);
          updateTotal(index);
        }}>
        <option value={orderitem}>{orderitem}</option>
        {/* <option value="how far">how far</option> */}
      </select>
      <p>{orderprice}</p>
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
      <p>{ordertotal}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  > *:not(:first-child) {
    text-align: center;
  }

  > * {
    min-width: 0;
    /* width: minmax(0, ); */
    border: 1px solid var(--clr--primary-one);
  }
`;
export default Orderitem;
