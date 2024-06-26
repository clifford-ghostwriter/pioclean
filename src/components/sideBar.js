import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { links } from "../utils/link";
import { UseAppContext } from "../contexts/app.Context";
import { FaTimes } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { UseServiceContext } from "../contexts/service.Context";

const SideBar = () => {
  const { isSidebarOpen, closeSidebar, user, resetUser } = UseAppContext();

  const navigate = useNavigate();
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "side-bar__center show-sidebar" : "side-bar__center"
        }>
        <button className="side-bar__close-btn btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <ul className="side-bar__links">
          {links.map((link) => {
            const { id, text, url, icon } = link;
            return (
              <li className="link" key={id}>
                {icon}
                <Link className="url" to={url} onClick={closeSidebar}>
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
              closeSidebar();
            }}>
            <span> {user ? <FaUserCheck /> : <FaUserMinus />}</span>
            <span>{user ? "logout" : "login"}</span>
          </button>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  position: relative;

  .login__btn {
    background-color: transparent;
    border: none;
    display: grid;
    align-items: center;
    grid-template-columns: auto auto;
    gap: 0.4rem;
    color: red;
    text-transform: capitalize;
    cursor: pointer;
  }

  .login__btn > * {
    display: grid;
    align-items: center;
  }
  .login__btn > *:nth-child(1) {
    color: white;
  }

  .side-bar__center {
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--clr--primary-two);
    height: 100dvh;
    width: 100%;
    opacity: 0.7;
    transform: translateX(-100%);
    transition: var(--transition);
    z-index: 999;
  }

  .side-bar__links {
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: var(--size--50);
    align-items: flex-start;
    height: 100%;
    padding: 0 1rem;
    padding-top: 3.4rem;
  }

  .url:hover {
    color: white;
  }
  .link {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    gap: 0.25rem;
    margin-left: 0;
    color: white;
    list-style: none;
  }

  .url {
    list-style: none;
    text-decoration: none;
    text-transform: capitalize;
    color: var(--clr--primary-three);
    letter-spacing: 0.1rem;
  }

  .show-sidebar {
    opacity: 0.7;
    transform: translate(0);
    z-index: 999;
  }

  .side-bar__close-btn {
    position: absolute;
    display: block;
    right: 1.8rem;
    top: 4rem;
    background-color: transparent;
    color: var(--clr--primary-three);
    font-size: var(--fs-700);
    display: flex;
    align-items: center;
  }
  @media (width > 1200px) {
    .side-bar__center {
      transform: translate(-100%);
    }
  }
`;

export default SideBar;
