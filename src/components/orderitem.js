import React, { useEffect } from "react";
import styled from "styled-components";
import { UseServiceContext } from "../contexts/service.Context";

const Orderitem = ({ index }) => {
  const { handleChange, order, updateTotal } = UseServiceContext();
  // const [totalAmount, setTotalAmount] = useState(0);
  const { [index]: orderitemm } = order;
  // const properties = Object.getOwnPropertyNames(orderitemm);
  // console.log(orderitem);

  const { orderitem, orderprice, ordernumber, ordertotal } = orderitemm;

  useEffect(() => {
    // setTotalAmount(tot);
  });

  return (
    <Wrapper>
      {/* <p>{index + 1}</p> */}
      <p>{orderitem}</p>

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
    word-break: keep-all;
    word-wrap: normal;
  }
  p {
    text-transform: capitalize;
  }
`;
export default Orderitem;
