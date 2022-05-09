import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "./contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
function LogIn(props) {
  let {
    setDisplayLogIn,
    displayLogIn,
    displaySignUp,
    setDisplaySignUp,
    setIsLoggedIn,
    setDisplayForgotPw,
    displayForgotPw,
  } = props;
  let toggleMenu = () => {
    setDisplayLogIn(!displayLogIn);
    setDisplayForgotPw(!displayForgotPw);
  };
  let logIn = () => {
    setDisplayForgotPw(false);
    setDisplayLogIn(false);
    setDisplaySignUp(true);
  };
  let signUp = () => {
    setDisplayForgotPw(false);
    setDisplaySignUp(false);
    setDisplayLogIn(true);
  };
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setIsLoggedIn(true);
      alert("Check your inbox for further instructions.");
    } catch {
      setError("Failed to reset password.");
    }
    setLoading(false);
  }

  return (
    <div className="signUpContainerOutside">
      <div className="signUpContainer">
        <button className="xButton" onClick={() => toggleMenu()}>
          <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
        </button>
        <div className="art-sidebar"></div>
        <div className="agreementTextContainer  signInContainer">
          <div className="signInHeader">
            <h1>Forgot Password</h1>
            <div className="additionalText addTextLinks">
              Reset your password Tell us the username and email address
              associated with your Reddit account, and we’ll send you an email
              with a link to reset your password.
            </div>
            <div className="signUpButtons signInInputContainer">
              {error && <div>{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="signUpInputContainer" id="email">
                  <input
                    type="email"
                    ref={emailRef}
                    required
                    placeholder="EMAIL"
                  />
                </div>
                <div className="signUpButtonContinue">
                  <button type="submit" disabled={loading}>
                    Reset Password
                  </button>
                </div>
              </form>
              <div className="altLogin">
                <div className="newToRed">
                  <a href="" onClick={() => logIn()}>
                    LOG IN
                  </a>{" "}
                  <a href="" onClick={() => signUp()}>
                    SIGN UP
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
