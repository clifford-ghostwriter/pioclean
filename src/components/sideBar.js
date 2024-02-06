import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { links } from "../utils/link";

const SideBar = () => {
  return (
    <Wrapper>
      <div className="side-bar__center">
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;

  .side-bar__center {
    position: fixed;
    top: 10rem;
    left: 0;
    background-color: yellow;
    height: calc(100vh - 10rem);
    width: 400px;
    text-align: center;
  }

  .side-bar__links {
    display: flex;
    flex-direction: column;
  }

  .link {
    display: flex;
    flex: 1;
    border: 1px solid red;
    padding-left: 40%;
    align-items: center;
    flex-shrink: 0;
  }

  .url {
    list-style: none;
    text-decoration: none;
    text-transform: capitalize;
  }
`;

export default SideBar;
