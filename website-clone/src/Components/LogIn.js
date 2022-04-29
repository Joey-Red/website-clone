import React, { useState } from "react";
import "../styleSheet4.css";
import G from "./img/googleG.png";
import Apple from "./img/Apple_logo_black.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
function LogIn(props) {
  let { setDisplayLogIn, displayLogIn, displaySignUp, setDisplaySignUp } =
    props;
  let toggleMenu = () => {
    setDisplayLogIn(!displayLogIn);
  };
  let signUp = () => {
    setDisplaySignUp(!displaySignUp);
    setDisplayLogIn(!displayLogIn);
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
              <div className="signUpInputContainer ">
                <input type="text" placeholder="EMAIL" />
                <input
                  type="text"
                  placeholder="PASSWORD"
                  className="signUpInputPW"
                />
              </div>
              <div className="signUpButtonContinue">
                <button>Continue</button>
              </div>
              <div className="altLogin">
                <div className="additionalText addTextLinks forgotLinks">
                  Forgot your <a href="#">username</a> or{" "}
                  <a href="#">Password</a>?
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
    </div>
  );
}

export default LogIn;
