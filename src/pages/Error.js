import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdOutlineError } from "react-icons/md";

const Error = () => {
  return (
    <Wrapper className="section">
      <div className="section-center error-center">
        <p className="icon">
          <MdOutlineError />
        </p>
        <p>Oops! you encountered an error.</p>
        <Link to="/">go back home.</Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--clr--primary-two);
  color: var(--clr--primary-four);
  .icon {
    font-size: var(--fs-900);
    color: var(--clr--primary-three);
  }

  .error-center {
    /* color: white; */
    display: grid;
    justify-items: center;
    align-content: center;
    height: 90dvh;
    font-size: var(--fs-600);
    font-weight: bold;
    gap: 1rem;
  }

  a {
    color: var(--clr--primary-three);
  }
`;

export default Error;
