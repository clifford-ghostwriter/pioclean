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
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  // console.log(year);
  return (
    <Wrapper>
      <div className="section-center footer__container">
        <address className="contact__us">
          <p className="text">contact us</p>
          <span>
            <FaLocationDot />: <span>15 Abeokuta street, Ogba</span>
          </span>
          <span>
            <FaRegMessage />:<span>piocleanlaundry@gmail.com</span>
          </span>
          <span>
            <IoIosTimer />: <span>Mon-Sat: 8:00am-6:00pm</span>
          </span>

          <span>
            <FaPhone />: 080-00-000-000
          </span>
        </address>
        <div className="socials__term">
          <div className="socials">
            {/* <p>channels</p> */}
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
          <div className="terms__conditions">
            <Link> terms and conditions</Link>
            <Link> privacy policies</Link>
          </div>
        </div>
        <p className="copyright">
          &copy;
          {` ${year} pioclean dry cleaning and laundry services, all rights reserved`}
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--clr--primary-two);
  color: var(--clr--primary-four);
  opacity: 0.9;
  padding-block: 3rem;

  .footer__container {
    display: grid;
    /* grid-template-columns: 2fr 1fr; */
    /* border: 1px solid red; */
    /* width: 80vw; */
    gap: 2rem;
    padding-block: 1rem;
    margin: auto;
    /* padding-inline: 1rem; */
    justify-items: center;
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
    /* flex-direction: column; */
    /* border: 1px solid red; */
    width: 15rem;
    gap: 1rem;
  }

  .socials > * {
    flex: 1;
    color: var(--clr--primary-eight);
    align-self: center;
  }

  .terms__conditions {
    display: grid;
    gap: 0.5rem;
  }

  .socials__term {
    display: grid;
    /* border: 1px solid red; */
    gap: 1rem;
  }

  .copyright {
    /* border: 1px solid red; */
    text-align: center;
    text-transform: capitalize;
  }
  .text {
    text-transform: capitalize;
  }
`;

export default Footer;
