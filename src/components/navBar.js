import React from "react";
import styled from "styled-components";
import logo from "../assests/logo.png";
import { FaBars } from "react-icons/fa";
import { UseAppContext } from "../contexts/app.Context";
import { Link } from "react-router-dom";
import { links } from "../utils/link";
import { FaTimes } from "react-icons/fa";

const Nav = () => {
  const { openSidebar, isSidebarOpen, closeSidebar } = UseAppContext();
  console.log(isSidebarOpen);
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
          <button
            className="btn nav__btn"
            onClick={() => {
              isSidebarOpen ? closeSidebar() : openSidebar();
            }}>
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul className="side-bar__links">
            {links.map((link) => {
              const { id, text, url, icon } = link;
              return (
                <li className="link" key={id}>
                  {icon}
                  <Link className="url" to={url}>
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background-color: var(--clr--primary-one);
  /* border: 1px solid red; */
  /* min-width: 400px; */
  height: 10rem;
  overflow: hidden;
  min-width: 200px;

  .nav__wrapper {
    padding-block: var(--fs-300);
    /* align-items: center; */
    /* min-width: min-content; */
    /* border: 1px solid pink; */
  }

  .nav__center {
    padding-block: 1rem;
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
    letter-spacing: 0.3rem;
  }

  .nav__btn {
    background-color: transparent;
    /* border: 1px solid red; */
    /* size: 4rem; */
    height: 100%;
    font-size: var(--fs-700);
    color: var(--clr--primary-three);
    /* color: red; */
    /* padding-right: 0; */
    /* margin-right: -1rem; */
    margin-top: -0.5rem;
  }

  .side-bar__links {
    display: flex;
    gap: 1rem;
    margin-left: -2rem;
    /* border: 1px solid red; */
    flex-grow: 0.3;
    display: none;
  }
  .link {
    display: flex;
    gap: 0.2rem;
    flex-grow: 1;
    list-style: none;
    align-items: center;
  }
  .url {
    text-decoration: none;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
  }

  @media (width > 1100px) {
    .nav__btn {
      display: none;
    }
    .side-bar__links {
      display: flex;
    }
  }

  @media (width < 1000px) {
    .side-bar__links {
      margin-left: 3rem;
      /* border: 1px solid red; */
    }
  }
`;
export default Nav;
