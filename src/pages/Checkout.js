import React from "react";
import {
  Checkoutitem,
  Ordercolumn,
  Orderfooter,
  // PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { UseServiceContext } from "../contexts/service.Context";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { order } = UseServiceContext();
  const navigate = useNavigate();
  const checkout = function () {
    // clearList();
    navigate("/payment");
  };
  return (
    <Wrapper>
      {/* <PageHero path="/checkout" text="Checkout" /> */}
      <div className="section">
        <div className="section-center">
          <div className="section-container">
            <Link className="list__btn list-btn" to="/order">
              Add more items
            </Link>
            <div className="order">
              <Ordercolumn />
              {order.map((item, index) => {
                return <Checkoutitem key={index} item={item} />;
              })}
              <Orderfooter />
            </div>
            <button className="list__btn payment-btn" onClick={checkout}>
              make payment
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-block: 2rem;
  .list__btn {
    text-transform: capitalize;
    letter-spacing: 0.05rem;
    text-decoration: none;
    width: max-content;
    border: 2px solid black;
    border-radius: 3px;
    background-color: var(--clr--primary-six);
    color: black;
    cursor: pointer;
    padding: 0.3rem;
    display: block;
  }

  .list-btn {
    /* margin-left: 2rem; */
  }

  .payment-btn {
    /* border: 1px solid red; */
    position: absolute;
    right: 0;
    margin-top: 0.3rem;
    /* margin-right: 2rem; */
  }

  .section-container {
    /* width: 80%; */
    /* border: 1px solid red; */
    position: relative;
    /* padding-top: 2rem; */
    margin-bottom: 3rem;
  }
  .order {
    /* border: 2px solid pink; */
    padding-top: 2rem;
  }
  .item:nth-child(even) {
    background-color: wheat;
  }
`;
export default Checkout;
