import React from "react";
import styled from "styled-components";
import { Formrow, Formrowselect } from "../components";
// import Formrow from "./formrow";
// import Formrowselect from "./formrowselect";

const Request = () => {
  return (
    <Wrapper className="section section-center">
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
        <Formrow type="date" placeholder="name*" name="name" required={true} />
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <input type="submit" className="submit-btn" />
      </form>
      <div className="pickup section section-center">
        <h2>Collection and delivery service :</h2>
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
  .pickup__form {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  .pickup__form * {
    border-radius: 5px;
    max-width: 100%;
    padding: 0;
  }

  .pickup__form input,
  textarea {
    padding-left: 0.5rem;
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
    width: 5rem;
    background-color: var(--clr--primary-one);
    cursor: pointer;
  }

  .pickup {
    /* border: 1px solid red; */
  }

  .pickup p {
    padding-top: 1rem;
  }
`;
export default Request;
