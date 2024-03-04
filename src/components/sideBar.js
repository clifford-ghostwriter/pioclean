import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { links } from "../utils/link";
import { UseAppContext } from "../contexts/app.Context";
import { FaTimes } from "react-icons/fa";

const SideBar = () => {
  const { isSidebarOpen, closeSidebar } = UseAppContext();
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
  /* padding-top: 2rem; */

  .side-bar__center {
    /* display: none; */
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--clr--primary-two);
    /* height: calc(100vh - 10rem); */
    height: 100dvh;
    width: 100%;
    opacity: 0.7;
    transform: translate(-100%);
    transition: var(--transition);
    z-index: 999;
    padding-top: 1rem;
  }

  .side-bar__links {
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: var(--size--50);
    /* background-color: yellow; */
    align-items: flex-start;
    height: 100%;
    padding: 0 1rem;
  }

  .link {
    display: flex;
    /* flex: 1; */
    /* border: 1px solid red; */
    /* padding-left: 40%; */
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
    /* display: block; */
    opacity: 0.7;
    transform: translate(0);
    z-index: 999;
  }

  .side-bar__close-btn {
    position: absolute;
    display: block;
    right: 0;
    /* width: 100%; */
    /* text-align: right; */
    background-color: transparent;
    color: var(--clr--primary-three);
    font-size: var(--fs-700);
    /* border: 1px solid red; */
  }
  @media (width > 1100px) {
    .side-bar__center {
      transform: translate(-100%);
    }
  }
`;

export default SideBar;
