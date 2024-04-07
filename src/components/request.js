import React from "react";
import styled from "styled-components";
import { Formrow, Formrowselect } from "../components";
// import Formrow from "./formrow";
// import Formrowselect from "./formrowselect";

const Request = () => {
  return (
    <Wrapper className="section-center">
      <div className="container">
        <h2 className="heading">
          fill the pick up <br />
          request form below
        </h2>
        <form className="pickup__form" action="">
          <div className="form__customer__detail">
            <Formrow
              type="text"
              placeholder="Name*"
              name="name"
              required={true}
            />
            <Formrow
              type="email"
              placeholder="E-mail*"
              name="name"
              required={true}
            />
            <Formrow
              type="number"
              placeholder="Phone Number*"
              name="name"
              required={true}
            />
          </div>
          <div className="pickup__area">
            <p>Pickup Area</p>
            <Formrowselect name="pickup" />
            <Formrow
              type="text"
              placeholder="Your Address"
              name="name"
              required={true}
            />
          </div>
          <div className="date">
            <p>Pickup Date</p>
            <Formrow
              type="date"
              placeholder="name*"
              name="name"
              required={true}
            />
            <Formrow
              type="time"
              placeholder="name*"
              name="name"
              required={true}
            />
          </div>
          <Formrow
            type="date"
            placeholder="name*"
            name="name"
            required={true}
          />
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <input type="submit" className="submit-btn" />
        </form>
      </div>
      <div className="pickup__text text-center">
        <h2 className="heading">Collection and delivery:</h2>
        <p>
          Collection and delivery service is available in Ogba / Ikeja and it’s
          environs. <br />
          Send us a quick message using the request form or call 08130969333 to
          arrange on demand pick up/delivery. <br />
          Please call the day before you wish a collection to take place to
          maximize chances of booking the slot, also give the driver a big time
          window to cater for traffic. <br />
          Collection and delivery charges N1,000 for pick up and delivery Free
          for all orders over N10,000
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* border: 1px solid red; */
  /* padding-top: 2rem; */

  .container {
    /* border: 2px solid blue; */
    /* padding: 2rem; */
    /* width: 50%; */
    /* margin-inline: auto; */
  }
  .pickup__form {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 2rem;
  }
  .pickup__form * {
    border-radius: 2px;
    max-width: 100%;
    padding: 0;
    /* padding: 0.3rem; */
  }

  .pickup__form input,
  textarea {
    padding-left: 0.5rem;
    border: 1px solid black;
    display: block;
  }
  .pickup__form div {
    display: grid;
    gap: 0.5rem;
  }
  .heading {
    text-transform: uppercase;
    padding-top: 1rem;
  }

  .submit-btn {
    /* width: 5rem; */
    background-color: var(--clr--primary-one);
    cursor: pointer;
    margin-top: -0.5rem;
    font-size: medium;
    padding-block: 0.3rem;
    display: block;
    width: 50%;
    margin: auto;
  }

  .pickup__text {
    padding-block: 2rem;
    /* border: 1px solid red; */
  }

  .pickup__text p {
    padding: 1rem;
  }

  @media (min-width: 1000px) {
    .container {
      /* border: 2px solid blue; */
      padding: 2.5rem;
      width: 50%;
      margin: auto;
    }

    .pickup__text {
      width: 80%;
      margin: auto;
      padding-inline: 2rem;
    }
  }

  @media (min-width: 800px) {
    .submit-btn {
      width: 50%;
      margin: auto;
    }
  }
`;
export default Request;
