import React from "react";
import styled from "styled-components";

const Testimonies = ({ customer }) => {
  const { image, name, occupation, text } = customer;
  return (
    <Wrapper>
      <div className="customer__image__container">
        <img src={image} alt="customer" />
      </div>
      <div className="customer__testimonials__text">
        <p className="text">{text}</p>
        <p className="customer__name">-{name}</p>
        <p className="customer__occupation">-{occupation}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-block: 2rem;
  /* border: 1px solid red; */
  .customer__image__container {
    display: grid;
  }
  .customer__name,
  .customer__occupation {
    text-transform: capitalize;
    padding-top: 0.5rem;
    font-style: italic;
  }

  .customer__image__container {
    border-radius: 560vh;
    border: 1px solid red;
    max-width: max-content;
    margin-left: 0.5rem;
    background-color: var(--clr--primary-six);
  }

  .customer__image__container img {
    border-radius: 560vh;
    margin-left: -0.3rem;
    /* border: 1px solid red; */
    /* max-width: max-content; */
  }

  .customer__testimonials__text {
    /* text-align: center; */
  }
`;
export default Testimonies;
