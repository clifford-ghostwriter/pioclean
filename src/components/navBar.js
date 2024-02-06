import React from "react";
import styled from "styled-components";
import logo from "../assests/logo.png";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  return (
    <Wrapper>
      <div className="nav__wrapper section-center">
        <div className="nav__center">
          <div className="nav__logo">
            <img src={logo} alt="logo" />
            <p className="nav__text">Pioclean</p>
          </div>

          {/* <div className="nav__text">
            <p>Pioclean</p>
          </div> */}
          <button className="btn nav__btn">
            <FaBars />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background-color: var(--clr--primary);
  /* border: 1px solid red; */

  .nav__wrapper {
    padding: var(--fs-300);

    align-items: center;
    min-width: min-content;
    border: 1px solid pink;
  }

  .nav__center {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* min-width: min-content; */
    border: 1px solid pink;
    width: 100%;
    display: flex;
    /* align-items: center; */
    /* gap: 1rem; */
    flex-shrink: 0;
    align-content: stretch;
    border: 1px solid red;
  }

  .nav__logo {
    display: flex;
  }
  .nav__logo > * {
    /* border: 1px solid red; */
    flex-shrink: 0;
    /* align-content: stretch; */
    height: 100%;
  }

  .nav__text {
    /* border: 1px solid red; */
    /* align-self: center; */
    text-transform: uppercase;
    /* margin-top: 0.7rem; */
    padding-top: var(--fs-700);
    font-size: var(--fs-650);
  }

  .nav__btn {
    background-color: transparent;
    /* height: max-content; */
    /* border: 1px solid red; */
    size: 4rem;
    height: 100%;
    font-size: var(--fs-700);
  }
`;
export default Nav;
