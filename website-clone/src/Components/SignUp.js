import React from "react";
import "../styleSheet4.css";
import artSidebar from "./img/art-sidebar.jpg";
function SignUp() {
  return (
    <div className="signUpContainerOutside">
      <div className="signUpContainer">
        <div className="art-sidebar">
          <img src={artSidebar} alt="" className="art-sidebar-pic" />
        </div>
        <div className="agreementTextContainer">
          xbutton
          <div className="signUpHeader">
            Sign Up
            <div className="additionalText">
              <a href="#">Create Community</a>
              By continuing, you are setting up a Reddit account and agree to
              our <a href="#">User Agreement</a> and{" "}
              <a href="#">Privacy Policy</a>.
            </div>
            <div className="signUpButtons">
              <div className="googleButton">Continue With Google</div>
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
