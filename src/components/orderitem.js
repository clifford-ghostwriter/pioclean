import React from "react";
import styled from "styled-components";
import { UseServiceContext } from "../contexts/service.Context";

const Orderitem = ({ index }) => {
  const { handleChange } = UseServiceContext();
  return (
    <Wrapper>
      <p>S/N</p>
      <select
        name={`orderitem${index}`}
        id=""
        onChange={(e) => {
          handleChange(e, index);
          console.log(index);
        }}>
        <option value="hello">hello</option>
        <option value="how far">how far</option>
      </select>
      <p>$5</p>
      <input
        type="number"
        name={`orderitem${index}`}
        onChange={(e) => {
          handleChange(e, index);
          console.log(index);
        }}
      />
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
