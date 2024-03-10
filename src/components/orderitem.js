import React from "react";
import styled from "styled-components";

const Orderitem = () => {
  const func = function (e) {
    //  dispatch({ type: HANDLE_CHANGE });
    console.log(e);
  };
  return (
    <Wrapper>
      <p>S/N</p>
      <select name="orderitem0" id="">
        <option value="hello">hello</option>
        <option value="how far">how far</option>
      </select>
      <p>$5</p>
      <input type="number" name="ordernumber0" />
      <p>$5</p>
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
