import React, { useState } from "react";
import "../styleSheet4.css";
import G from "./img/googleG.png";
import Apple from "./img/Apple_logo_black.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import LogIn from "./LogIn";
function SignUp(props) {
  let { setDisplaySignUp, displaySignUp, displayLogIn, setDisplayLogIn } =
    props;
  let toggleMenu = () => {
    setDisplaySignUp(!displaySignUp);
  };
  let altSignIn = () => {
    setDisplaySignUp(!displaySignUp);
    setDisplayLogIn(!displayLogIn);
  };

  return (
    <div className="signUpContainerOutside">
      {!displayLogIn ? (
        <LogIn
          displayLogIn={displayLogIn}
          setDisplayLogIn={setDisplayLogIn}
          displaySignUp={displaySignUp}
          setDisplaySignUp={setDisplaySignUp}
        />
      ) : null}
      <div className="signUpContainer">
        <button className="xButton" onClick={() => toggleMenu()}>
          <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
        </button>
        <div className="art-sidebar"></div>
        <div className="agreementTextContainer">
          <div className="signUpHeader">
            <h1>Sign Up</h1>
            <div className="additionalText addTextLinks">
              By continuing, you are setting up a Reddit account and agree to
              our <a href="#">User Agreement</a> and
              <a href="#"> Privacy Policy</a>.
            </div>
            <div className="signUpButtons">
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
              <div className="spacer">
                <span className="spacerSpan"></span>
                <span className="spacerText">OR</span>
                <span className="spacerSpan"></span>
              </div>
              <div className="signUpInputContainer">
                <input type="text" placeholder="EMAIL" />
              </div>
              <div className="signUpButtonContinue">
                <button>Continue</button>
              </div>
              <div className="altLogin">
                Already a redditor?{" "}
                <a href="#" onClick={() => altSignIn()}>
                  LOG IN
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
