import React from "react";
import styled from "styled-components";

const Checkoutitem = ({ item }) => {
  const { orderitem, orderprice, ordernumber, ordertotal } = item;
  return (
    <Wrapper className="item">
      <p>{orderitem}</p>
      <p>{orderprice}</p>
      <p>{ordernumber}</p>
      <p>{ordertotal}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid blue;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding-top: 1rem;
  background-color: var(--clr--primary-six);
  margin-top: 0.4rem;

  > *:not(:first-child) {
    text-align: center;
  }
  p {
    text-transform: capitalize;
  }
`;

export default Checkoutitem;
