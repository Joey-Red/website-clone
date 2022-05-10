import React, { useState, useRef } from "react";
// import "../styleSheet4.css";
import G from "./img/googleG.png";
import Apple from "./img/Apple_logo_black.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import LogIn from "./LogIn";
// import { useAuth } from "./contexts/AuthContext";
import { useNavigate } from "react-router-dom";

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
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  // const { signup } = useAuth();
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   if (passwordRef.current.value !== passwordConfirmRef.current.value) {
  //     return setError("Passwords do not match.");
  //   }

  //   try {
  //     setError("");
  //     setLoading(true);
  //     await signup(
  //       emailRef.current.value,
  //       passwordRef.current.value,
  //       passwordConfirmRef.current.value
  //     );
  //     navigate("/", { replace: true });
  //   } catch {
  //     setError("Failed to create an account");
  //   }
  //   setLoading(false);
  // }
  // console.log(error);
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
              {/* {currentUser && currentUser.email} */}
              {/* {error && <div>{error}</div>} */}
              <form>
                <div className="signUpInputContainer" id="email">
                  <input
                    type="email"
                    // ref={emailRef}
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
