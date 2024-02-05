import React from "react";
import styled from "styled-components";
import logo from "../assests/logo.png";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  return (
    <Wrapper>
      <div className="nav__center">
        <div className="nav__logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="nav__text">
          <p>Pioclean</p>
        </div>
      </div>
      <button className="btn nav__btn">
        <FaBars />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background-color: var(--clr--primary);
  font-size: var(--fs--small);
  display: flex;
  justify-content: space-between;
  height: 7rem;
  align-items: center;
  min-width: max-content;
  border: 1px solid pink;
  /* justify-content: center; */

  .nav__center {
    height: 100%;
    display: flex;
    /* align-items: center; */
    gap: 1rem;
    border: 1px solid red;
    flex-shrink: 0;
    align-content: stretch;
    border: 1px solid red;
  }

  .nav__logo > * {
    border: 1px solid red;
    flex-shrink: 0;
    /* align-content: stretch; */
    height: 100%;
  }

  .nav__text {
    border: 1px solid red;
    align-self: stretch;
    text-transform: uppercase;
    margin-top: 0.7rem;
  }

  .nav__btn {
    background-color: transparent;
    height: max-content;
    align-self: center;
    border: none;
  }
`;
export default Nav;
