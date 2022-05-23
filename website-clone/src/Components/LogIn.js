import React, { useState, useEffect, useRef } from "react";
// import { useAuth } from "./contexts/AuthContext";
// import "../styleSheet4.css";
import G from "./img/googleG.png";
import Apple from "./img/Apple_logo_black.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
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

  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      setIsLoggedIn(true);
      localStorage.setItem("isAuth", true);
      navigate("/");
      window.location.pathname = "/";
    });
  };
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
                    <span>
                      <button
                        onClick={signInWithGoogle}
                        className="login-with-google-btn"
                      >
                        Continue with Google
                      </button>
                    </span>
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
              {/* {error && <div>{error}</div>} */}
              <form>
                <div className="signUpInputContainer" id="email">
                  <input
                    type="email"
                    // ref={emailRef}
                    required
                    placeholder="EMAIL (only google button works)"
                  />
                </div>
                {/* <form > */}
                <div className="signUpInputContainer" id="password">
                  <input
                    minLength={6}
                    maxLength={16}
                    type="password"
                    // ref={passwordRef}
                    required
                    placeholder="PASSWORD"
                  />
                </div>
                {/* </form> */}
                <div className="signUpButtonContinue">
                  <button type="submit">Continue</button>
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
