import React, { forwardRef, useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../assests/logo2.png";
import { FaBars } from "react-icons/fa";
import { UseAppContext } from "../contexts/app.Context";
import { Link } from "react-router-dom";
import { links } from "../utils/link";
import { FaUserCheck } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line
// import { FaTimes } from "react-icons/fa";

const Nav = forwardRef(function (_, ref) {
  const { isSidebarOpen, openSidebar, user, resetUser } = UseAppContext();
  const [isIntersecting, setIsIntersecting] = useState();
  const navigate = useNavigate();
  // const ref = useRef(ref);

  useEffect(() => {
    setIsIntersecting(window.scrollY);
    // console.log(isIntersecting);
  }, [isIntersecting]);

  return (
    <Wrapper className="navbar" ref={ref}>
      <div className="nav__wrapper section-center">
        <div className="nav__center">
          <div className="nav__logo">
            <Link to="/" className="logo__link">
              <img src={logo} alt="logo" />
            </Link>
            <p className="nav__text">Pioclean</p>
          </div>

          {/* <div className="nav__text">
            <p>Pioclean</p>
          </div> */}
          <button
            className="btn nav__btn"
            onClick={() => {
              // isSidebarOpen ? closeSidebar() : openSidebar();
              openSidebar();
            }}>
            {isSidebarOpen ? null : <FaBars />}
            {/* <FaBars /> */}
          </button>

          <ul className="side-bar__links ">
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
            <button
              className="login__btn"
              onClick={() => {
                if (!user) {
                  navigate("/login");
                } else {
                  navigate("/");
                  resetUser();
                }
              }}>
              <span> {user ? <FaUserCheck /> : <FaUserMinus />}</span>
              <span>{user ? "logout" : "login"}</span>
            </button>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
});

const Wrapper = styled.nav`
  /* width: 95%; */
  /* margin: auto; */
  background-color: var(--clr--primary-one);
  /* border: 1px solid red; */
  /* min-width: 400px; */
  height: 10rem;
  overflow: hidden;
  min-width: 200px;
  /* position: relative !important; */
  /* position: sticky; */
  /* top: 0; */
  /* left: 0; */
  /* z-index: 990; */
  transition: var(--transition-slower);
  position: relative;
  border-bottom: 1px solid white;

  .nav__wrapper {
    padding-block: var(--fs-300);
    /* align-items: center; */
    /* min-width: min-content; */
    /* border: 1px solid pink; */
    /* width: 95%; */
    /* margin: auto; */
  }

  .login__btn {
    background-color: transparent;
    border: none;
    display: grid;
    align-items: center;
    grid-template-columns: auto auto;
    /* border: 1px solid red; */
    gap: 0.2rem;
    text-transform: capitalize;
    color: var(--clr--primary-four);
    cursor: pointer;
  }

  .login__btn > * {
    display: grid;
    align-items: center;
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
    gap: var(--size--50);
    /* border: 1px solid red; */
    width: 8rem;
    /* align-self: center; */
    /* height: 5rem; */
    /* background-color: white; */
  }
  .nav__logo > * {
    /* flex: 1; */
    flex-shrink: 0;
    /* flex-basis: 0; */
    height: 100%;
    width: 100%;
    align-items: center;
  }

  .logo__link {
    /* width: ; */
  }

  .nav__text {
    text-transform: uppercase;
    /* padding-top: var(--fs-700); */
    font-size: var(--fs-650);
    letter-spacing: 0.3rem;
    align-self: center;
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
    /* margin-top: -0.5rem; */
  }

  .side-bar__links {
    display: flex;
    gap: 0.5rem;
    margin-right: -1rem;
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

  @media (width < 400px) {
    /* font-size: var(--fs-600); */

    .nav__logo {
      gap: 0;
    }

    .nav__text {
      text-transform: uppercase;
      /* padding-top: var(--fs-700); */
      font-size: var(--fs-650);
      letter-spacing: 0.2rem;
    }
  }
  @media (width > 1200px) {
    .nav__btn {
      display: none;
    }
    .side-bar__links {
      display: flex;
    }
  }

  @media (width < 1300px) {
    .side-bar__links {
      margin-left: 5rem;
      /* border: 1px solid red; */
    }
  }
`;
export default Nav;
