import React, { useState } from "react";
import styled from "styled-components";
import { Alert, Formrow } from "../components";
// import logo from "../assests/logo2.png";
// import { UseAppContext } from "../contexts/app.Context";
import { Link, useNavigate } from "react-router-dom";
import { UseServiceContext } from "../contexts/service.Context";
import { UseAppContext } from "../contexts/app.Context";

const Login = () => {
  const [userLogin, setUser] = useState({ name: "", password: "" });
  const [usersignup, setusrSignUp] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const {
    handleLoginSubmit,
    removeAlert,
    loginAlert,
    username,
    toggleMember,
    iscustomer,
    handleSignupSubmit,
  } = UseAppContext();

  const { totalamount } = UseServiceContext();
  const navigate = useNavigate();

  // console.log(userLogin);
  const handleLogin = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((userLogin) => {
      return { ...userLogin, [name]: value };
    });
  };
  // console.log(usersignup);
  const handleSignUp = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setusrSignUp((usersignup) => {
      return { ...usersignup, [name]: value };
    });
  };

  return (
    <Wrapper>
      <div className="login-center">
        <div className="login__form-center">
          {/* <div className="logo">
            <img src={logo} alt="logo" />
          </div> */}
          {/* <p className="login__text">login to proceed...</p> */}
          <p className="customer__status">
            {iscustomer ? "Not a customer ?" : "Already a customer ?"}{" "}
            <button className="status__btn" onClick={toggleMember}>
              {iscustomer ? " register" : "login"}
            </button>
          </p>

          {iscustomer ? (
            <form action="" className="form">
              <Formrow
                type="text"
                name="name"
                className="form-input"
                value={userLogin.name}
                handleFormChange={handleLogin}
                label="LoginID"
                placeholder="Your Name"
                required
              />
              <Formrow
                type="password"
                name="password"
                className="form-input"
                value={userLogin.password}
                handleFormChange={handleLogin}
                label="password"
                placeholder={`Password is xy1234`}
                required
              />
              {/* {alert_flag && <Alert />} */}
              <Alert />
              <button
                type="submit"
                className="btn btn-block"
                onClick={(e) => {
                  e.preventDefault();

                  if (username.name === "" || username.password === "") {
                    loginAlert("fill up the required spaces");
                    setTimeout(removeAlert, 3000);
                    return;
                  }

                  if (!username.includes(userLogin.name)) {
                    loginAlert("wrong credential");
                    setTimeout(removeAlert, 3000);
                    return;
                  }
                  if (userLogin.password !== "xy1234") {
                    loginAlert("wrong credential");
                    setTimeout(removeAlert, 3000);
                    return;
                  }
                  handleLoginSubmit(userLogin);
                  setTimeout(removeAlert, 3000);
                  if (totalamount) {
                    navigate("/checkout");
                  } else {
                    navigate("/");
                    return;
                  }
                }}>
                Login
              </button>
              <Link to="/">back to home</Link>
            </form>
          ) : (
            <form action="" className="form">
              <Formrow
                type="email"
                name="email"
                className="form-input"
                value={usersignup.email}
                handleFormChange={handleSignUp}
                label="email"
                // placeholder="Your Email"
                required
              />
              <Formrow
                type="password"
                name="password"
                className="form-input"
                value={usersignup.password}
                handleFormChange={handleSignUp}
                label="password"
                // placeholder={`Password`}
                required
              />
              <Formrow
                type="password"
                name="confirmpassword"
                className="form-input"
                value={usersignup.confirmpassword}
                handleFormChange={handleSignUp}
                label="confirm password"
                // placeholder={`confirm Password `}
                required
              />
              {/* {alert_flag && <Alert />} */}
              <Alert />
              <button
                type="submit"
                className="btn btn-block"
                onClick={(e) => {
                  e.preventDefault();

                  if (
                    usersignup.name === "" ||
                    usersignup.password === "" ||
                    usersignup.confirmpassword === ""
                  ) {
                    loginAlert("fill up the required spaces");
                    setTimeout(removeAlert, 3000);
                    return;
                  }

                  if (usersignup.password !== usersignup.confirmpassword) {
                    loginAlert("confirm password");
                    setTimeout(removeAlert, 3000);
                    return;
                  }
                  // if (userLogin.password !== "xy1234") {
                  //   loginAlert("wrong credential");
                  //   setTimeout(removeAlert, 3000);
                  //   return;
                  // }
                  handleSignupSubmit(usersignup);
                  setTimeout(removeAlert, 3000);
                  if (totalamount) {
                    navigate("/checkout");
                  } else {
                    navigate("/");
                    return;
                  }
                }}>
                sign up
              </button>
              <Link to="/">back to home</Link>
            </form>
          )}
        </div>
        <div className="hint">
          <h3>hint</h3>
          <p>
            <span>usernames: </span> user1, user2
          </p>
          <p>
            <span>password: </span>xy1234
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--clr--primary-one);
  min-height: 100vh;
  width: 100vw;
  display: grid;
  align-content: center;
  justify-content: center;

  min-width: max-content;

  .login__text {
    font-style: italic;
    font-weight: bold;
    text-align: center;
  }

  .status__btn {
    background: transparent;
    border: none;
    color: red;
    text-transform: capitalize;
  }

  .customer__status {
    text-align: center;
  }

  .login-center {
    width: 90vw;
    min-width: max-content;
    /* border: 2px solid blue; */

    display: grid;
    align-content: center;
    justify-content: center;
    padding-inline: 1rem;
  }

  .form {
    min-width: 300px;

    background-color: var(--clr-white);
  }

  .login__form-center {
    /* border: 1px solid red; */
    background-color: var(--clr-white);
    /* width: 25vw; */
    max-width: var(--fixed-width);
    background: var(--clr--primary-four);
    border-radius: 5px;
    box-shadow: 2px 2px 3px black;
    padding: 2rem 2.5rem;
    margin: 0.1rem auto 3rem;
    transition: var(--transition);
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
  }
  .btn {
  }
  .btn-block {
    width: 100%;
    height: 2rem;
    background-color: var(--clr--primary-one);
    border-radius: 5px;
    letter-spacing: 0.1rem;
    text-transform: capitalize;
    display: grid;
    align-items: center;
  }

  .btn:hover {
    background-color: var(--clr--primary-six);
  }
  .logo {
    /* border: 1px solid red; */
    text-align: center;
    display: grid;
    justify-content: center;
  }

  .hint {
    color: white;
  }

  /* extra form styles */
  .form {
    width: 25vw;
    max-width: var(--fixed-width);
    background: var(--clr--primary-four);
    border-radius: 5px;
    /* box-shadow: 2px 2px 3px black; */
    padding: 2rem 2.5rem;
    /* margin: 0.1rem auto 3rem; */
    transition: var(--transition);
    /* border: 1px solid red; */
  }

  /* .form:hover {
  box-shadow: var(--shadow-4);
} */

  .form-label {
    display: block;
    /* font-size: var(--smallText); */
    font-size: medium;
    /* margin-bottom: 0.1rem; */
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    /* border: 1px solid red; */
  }

  .form-input,
  .form-textarea,
  .form-select {
    width: 100%;
    padding: 0.375rem 0.75rem;
    border-radius: 3px;
    background: var(--clr--primary-nine);
    border: 1px solid black;
  }

  .form-input,
  .form-select,
  .btn-block {
    height: 30px;
  }

  .form-row {
    margin-bottom: 1rem;
  }
  a {
    padding-top: 1rem;
    text-align: center;
    display: block;
    color: var(--clr--primary-three);
  }
`;

export default Login;
