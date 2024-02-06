import React from "react";
import styled from "styled-components";
import logo from "../assests/logo.png";
import { FaBars } from "react-icons/fa";
import { UseAppContext } from "../contexts/app.Context";

const Nav = () => {
  const { openSidebar } = UseAppContext();
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
          <button className="btn nav__btn" onClick={openSidebar}>
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
  /* min-width: 400px; */
  height: 10rem;

  .nav__wrapper {
    padding: var(--fs-300);
    align-items: center;
    min-width: min-content;
    /* border: 1px solid pink; */
  }

  .nav__center {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    align-content: stretch;
    /* border: 1px solid red; */
  }

  .nav__center > * {
    flex-shrink: 0;
  }

  .nav__logo {
    display: flex;
    gap: var(--fs-400);
  }
  .nav__logo > * {
    flex-shrink: 0;
    height: 100%;
  }

  .nav__text {
    text-transform: uppercase;
    padding-top: var(--fs-700);
    font-size: var(--fs-650);
  }

  .nav__btn {
    background-color: transparent;
    /* border: 1px solid red; */
    size: 4rem;
    height: 100%;
    font-size: var(--fs-700);
  }
`;
export default Nav;
