import React from "react";
import "../styleSheet4.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
function SignUp() {
  return (
    <div className="signUpContainerOutside">
      <div className="signUpContainer">
        <button className="xButton">
          <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
        </button>
        <div className="art-sidebar"></div>
        <div className="agreementTextContainer">
          <div className="signUpHeader">
            <h1>Sign Up</h1>
            <div className="additionalText">
              By continuing, you are setting up a Reddit account and agree to
              our <a href="#">User Agreement</a> and
              <a href="#"> Privacy Policy</a>.
            </div>
            <div className="signUpButtons">
              <div className="googleButtonContainer">
                <div className="googleButtonInner">
                  <div className="googleButtonFlex">
                    <div className="googleIco">[]</div>
                    <span>Continue with Google</span>
                  </div>
                </div>
              </div>
              <div className="appleButton">Continue with Apple</div>
              <div className="spacer">------- OR -------</div>
              <input type="text" placeholder="EMAIL" />
              <button>Continue</button>
              Already a redditor? <a href="#">LOG IN</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
