import React, { useState, useEffect, useRef } from "react";
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
  // const emailRef = useRef();
  // const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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
              {message && <div>{message}</div>}
              <form>
                <div className="signUpInputContainer" id="email">
                  <input type="email" required placeholder="EMAIL" />
                </div>
                <div className="signUpButtonContinue">
                  <button type="submit" disabled={loading}>
                    Reset Password
                  </button>
                </div>
              </form>
              <div className="altLogin">
                <div className="newToRed">
                  <a href="#" onClick={() => logIn()}>
                    LOG IN
                  </a>{" "}
                  <a href="#" onClick={() => signUp()}>
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
