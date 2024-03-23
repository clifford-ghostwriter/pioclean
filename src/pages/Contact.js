import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";

const Contact = () => {
  return (
    <Wrapper>
      <PageHero path="/" text="Back Home" />
      <div>
        <h3>need help?</h3>
        <h4>reach us</h4>
        <address className="address">
          <p>pioclean laundry services</p>
          <p>office: 15, Abeokuta street, ogba, lagos</p>
          <p>phone: 08130969333</p>
          <p>
            email: piocleanlaundry@gmail.com, info@piocleanlaundry@gmail.com
          </p>
        </address>
      </div>
      <div className="contact__form">
        <h2>get in touch us</h2>
        <form action="">
          <div className="form__input">
            <label htmlFor="name">your name (required)</label>
            <input type="text" id="name" />
          </div>
          <div className="form__input">
            <label htmlFor="email">your email (required)</label>
            <input type="text" id="email" />
          </div>
          <div className="form__input">
            <label htmlFor="subject">subject </label>
            <input type="text" id="subject" />
          </div>
          <div className="form__input">
            <label htmlFor="text">your message</label>
            <textarea name="text" id="text" cols="30" rows="10"></textarea>
          </div>
          <input type="submit" />
        </form>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .form__input {
    display: grid;
    padding: 0.5rem;
  }
`;
export default Contact;
