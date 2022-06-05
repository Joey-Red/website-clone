import React, { useState, useRef } from "react";
// import "../styleSheet4.css";
import G from "./img/googleG.png";
import Apple from "./img/Apple_logo_black.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import LogIn from "./LogIn";
// import { useAuth } from "./contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

function SignUp(props) {
  let {
    setDisplaySignUp,
    displaySignUp,
    displayLogIn,
    setDisplayLogIn,
    setIsLoggedIn,
  } = props;
  let toggleMenu = () => {
    setDisplaySignUp(!displaySignUp);
  };
  let altSignIn = () => {
    setDisplaySignUp(!displaySignUp);
    setDisplayLogIn(!displayLogIn);
  };
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      setIsLoggedIn(true);
      localStorage.setItem("isAuth", true);
      window.location.pathname = "/website-clone/";
    });
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
      <div className="signUpContainer signUpContainerPadding">
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
              <div
                className="googleButtonContainer"
                onClick={() => signInWithGoogle()}
              >
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
              {/* {currentUser && currentUser.email} */}
              {/* {error && <div>{error}</div>} */}
              <form>
                <div className="signUpInputContainer" id="email">
                  <input
                    type="email"
                    // ref={emailRef}
                    required
                    placeholder="EMAIL (Only Google button works)"
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
                {/* <form > */}
                <div className="signUpInputContainer" id="passwordConfirm">
                  <input
                    minLength={6}
                    maxLength={16}
                    type="password"
                    // ref={passwordConfirmRef}
                    required
                    placeholder="CONFIRM PASSWORD"
                  />
                </div>
                {/* </form> */}

                <div className="signUpButtonContinue">
                  <button type="submit">Continue</button>
                </div>
              </form>

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
