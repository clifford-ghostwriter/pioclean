import React from "react";
import styled from "styled-components";

const Plan = ({ item }) => {
  const { plan, amount, image } = item;
  return (
    <Wrapper>
      <div>
        <img src={image} alt="plan image" />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
export default Plan;
