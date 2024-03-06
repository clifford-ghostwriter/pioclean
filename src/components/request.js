import React from "react";
import styled from "styled-components";
import Formrow from "./formrow";
import Formrowselect from "./formrowselect";

const Request = () => {
  return (
    <Wrapper>
      <h2 className="heading">
        fill the pick up <br />
        request form below
      </h2>
      <form action="">
        <div className="form__customer__detail">
          <Formrow
            type="text"
            placeholder="Name*"
            name="name"
            required="true"
          />
          <Formrow
            type="email"
            placeholder="E-mail*"
            name="name"
            required="true"
          />
          <Formrow
            type="number"
            placeholder="Phone Number*"
            name="name"
            required="true"
          />
        </div>
        <div className="pickup__area">
          <p>Pickup Area</p>
          <Formrowselect name="pickup" />
          <Formrow
            type="text"
            placeholder="Your Address"
            name="name"
            required="true"
          />
        </div>
        <div className="date">
          <p>Pickup Date</p>
          <Formrow
            type="date"
            placeholder="name*"
            name="name"
            required="true"
          />
          <Formrow
            type="time"
            placeholder="name*"
            name="name"
            required="true"
          />
        </div>
        <Formrow type="date" placeholder="name*" name="name" required="true" />
        <textarea name="" id="" cols="30" rows="10">
          Enter additional information about your request
        </textarea>
        <input type="submit" />
      </form>
      <div className="pickup">
        <h2>Collection and delivery service is available in the below area:</h2>
        <p>
          Ogba / Ikeja and it’s environs Send us a quick message using the
          request form or call 08130969333 to arrange on demand pick
          up/delivery. Please call the day before you wish a collection to take
          place to maximize chances of booking the slot. Also give the driver a
          big time window to cater for traffic. Collection and delivery charges
          N1,000 for pick up and delivery Free for all orders over N10,000
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .heading {
    text-transform: uppercase;
    padding-top: 1rem;
  }
`;
export default Request;
