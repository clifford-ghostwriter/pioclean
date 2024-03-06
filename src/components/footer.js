import React from "react";
import styled from "styled-components";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <div className="section-center footer__container">
        <address className="contact__us">
          <span>
            <FaLocationDot />: <span>15 Abeokuta street, Ogba</span>
          </span>
          <span>
            <FaRegMessage />:<span>poicleanlaundry@gmail.com</span>
          </span>
          <span>
            <IoIosTimer />: <span>Mon-Sat: 8:00am-6:00pm</span>
          </span>

          <span>
            <FaPhone />: 080-00-000-000
          </span>
        </address>
        <div className="socials">
          <a href="#learnmore">
            <FaFacebook />
          </a>
          <a href="#learnmore">
            <FaInstagramSquare />
          </a>
          <a href="#learnmore">
            <FaTwitter />
          </a>
          <a href="#learnmore">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--clr--primary-two);
  color: var(--clr--primary-four);

  .footer__container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    border: 1px solid red;
    width: 80vw;
    padding-block: 1rem;
    margin: auto;
    /* padding-inline: 1rem; */
    justify-content: space-around;
  }
  .contact__us {
    display: grid;
    align-content: center;
    gap: 1rem;
  }
  .contact__us > span {
    /* color: blue; */
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
  }

  .socials {
    display: flex;
    flex-direction: column;
  }

  .socials > * {
    flex: 1;
    color: var(--clr--primary-eight);
  }
`;

export default Footer;
