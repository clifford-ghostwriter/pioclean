import React from "react";
import styled from "styled-components";
import { Hero } from "../components";
// import { PageHero } from "../components";
import callcenteragent from "../assests/heroimages/call-centre-agent.jpg";

const Contact = () => {
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <Wrapper>
      <Hero bcg={callcenteragent} text="contact us" white={true} />
      {/* <PageHero path="/contact" text="Contact us" /> */}
      <div className="section-center section__container">
        <div>
          <h3 className="heading">need help?</h3>
          <address className="address">
            <h4>reach us:</h4>
            <p>pioclean laundry services</p>
            <p>office: 15, Abeokuta street, ogba, lagos</p>
            <p>phone: 08130969333</p>
            <p>
              email: piocleanlaundry@gmail.com, info@piocleanlaundry@gmail.com
            </p>
          </address>
        </div>
        <div className="contact__form">
          <h2 className="text-center">get in touch us:</h2>
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
            <input
              className="submit-btn"
              type="submit"
              onClick={(e) => {
                submit(e);
              }}
            />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding-bottom: 2rem;
  .section__container {
    padding-top: 2rem;
    /* border: 1px solid blue; */
    margin: auto;
  }
  label {
    text-transform: capitalize;
  }

  .heading {
    text-align: center;
  }

  .form__input {
    display: grid;
    /* padding: 0.5rem; */
    border-radius: 2px;
  }

  h1,
  h2,
  h3,
  h4 {
    text-transform: capitalize;
  }

  .contact__form {
    padding-top: 2rem;
  }
  form {
    padding-top: 1rem;
    gap: 1rem;
    display: grid;
  }

  .address {
    align-content: center;
    padding-top: 2rem;
    text-align: center;
  }

  .submit-btn {
    background-color: var(--clr--primary-one);
  }

  .submit-btn:hover {
    background-color: var(--clr--primary-six);
  }

  @media (min-width: 800px) {
    .section__container {
      width: 70%;
    }

    .submit-btn {
      width: 50%;
      margin: auto;
    }
  }

  @media (min-width: 1200px) {
    .section__container {
      width: 50%;
    }
  }

  @media (min-width: 1500px) {
    .section__container {
      width: 40%;
    }
  }
`;
export default Contact;
