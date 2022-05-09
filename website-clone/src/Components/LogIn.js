import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "./contexts/AuthContext";
// import "../styleSheet4.css";
import G from "./img/googleG.png";
import Apple from "./img/Apple_logo_black.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
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
  };
  let signUp = () => {
    setDisplaySignUp(!displaySignUp);
    setDisplayLogIn(!displayLogIn);
  };
  let forgotPw = () => {
    // setDisplayLogIn(!displayLogIn);
    setDisplayForgotPw(!displayForgotPw);
  };

  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/", { replace: true });
      setIsLoggedIn(true);
    } catch {
      setError("Failed to log in");
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
            <h1>Log In</h1>
            <div className="additionalText addTextLinks">
              By continuing, you agree to our <a href="#">User Agreement</a> and
              <a href="#"> Privacy Policy</a>.
            </div>
            <div className="signUpButtons signInInputContainer">
              <div className="googleButtonContainer">
                <div className="googleButtonInner">
                  <div className="googleButtonFlex">
                    <div className="googleIco">
                      <img src={G} alt="" />
                    </div>
                    <span>Continue with Google</span>
                  </div>
                </div>
              </div>
              <div className="googleButtonContainer appleButtonContainer">
                <div className="googleButtonInner">
                  <div className="googleButtonFlex">
                    <div className="googleIco appleIco">
                      <img src={Apple} alt="" />
                    </div>
                    <span>Continue with Apple</span>
                  </div>
                </div>
              </div>
              <div className="spacer signInSpacer">
                <span className="spacerSpan"></span>
                <span className="spacerText">OR</span>
                <span className="spacerSpan"></span>
              </div>
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
                {/* <form > */}
                <div className="signUpInputContainer" id="password">
                  <input
                    minLength={6}
                    maxLength={16}
                    type="password"
                    ref={passwordRef}
                    required
                    placeholder="PASSWORD"
                  />
                </div>
                {/* </form> */}
                <div className="signUpButtonContinue">
                  <button type="submit" disabled={loading}>
                    Continue
                  </button>
                </div>
              </form>
              <div className="altLogin">
                <div className="additionalText addTextLinks forgotLinks">
                  Forgot your <a href="#">username</a> or{" "}
                  <a href="#" onClick={() => forgotPw()}>
                    Password
                  </a>
                  ?
                </div>
                <div className="newToRed">
                  New to Reddit?{" "}
                  <a href="#" onClick={() => signUp()}>
                    SIGN UP
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {displayForgotPw ? (
        <ForgotPassword
          displayLogIn={displayLogIn}
          setDisplayLogIn={setDisplayLogIn}
          displaySignUp={displaySignUp}
          setDisplaySignUp={setDisplaySignUp}
          setIsLoggedIn={setIsLoggedIn}
          setDisplayForgotPw={setDisplayForgotPw}
          displayForgotPw={displayForgotPw}
        />
      ) : null}
    </div>
  );
}

export default LogIn;
