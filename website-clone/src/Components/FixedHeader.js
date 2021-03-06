import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBullhorn,
  faMagnifyingGlass,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./img/Reddit_logo_new.png";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import { useNavigate } from "react-router-dom";
function FixedHeader(props) {
  let {
    setDisplaySignUp,
    displaySignUp,
    setDisplayLogIn,
    displayLogIn,
    setIsLoggedIn,
    setDisplayForgotPw,
    displayForgotPw,
    formValue,
    setFormValue,
  } = props;
  const [displayOptions, setDisplayOptions] = useState(true);
  let toggleMenu = () => {
    setDisplaySignUp(!displaySignUp);
    setDisplayOptions(!displayOptions);
  };
  let showMenu = () => {
    setDisplaySignUp(!displaySignUp);
  };
  let showLogin = () => {
    setDisplayLogIn(!displayLogIn);
  };
  const navigate = useNavigate();
  const searchQuery = () => {
    localStorage.setItem("searchQuery", formValue);
    navigate("/website-clone/search/" + formValue);
  };
  return (
    <div className="headerOuter">
      <div className="headerContainer">
        <div className="inner-container">
          <div className="left-side">
            <div className="logoWrapper">
              <a href="/website-clone/">
                <img src={logo} alt="redditlogo" className="logo" />
              </a>
            </div>
            <form className="searchDiv">
              <label htmlFor="searchBar" className="faMag">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="actMag"
                ></FontAwesomeIcon>
              </label>
              <input
                type="text"
                className="searchBar"
                placeholder="Search Reddit"
                id="searchQuery"
                onChange={(e) => setFormValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && searchQuery()}
              />
            </form>
          </div>
          <div className="loRightSide">
            <div className="buttonGroup loButtonGroup">
              <div className="bullHornDiv loBull">
                <button className="faBullhorn">
                  <FontAwesomeIcon icon={faBullhorn}></FontAwesomeIcon>
                </button>
              </div>
              <div>
                <button
                  className="ioButton iButton"
                  onClick={() => showLogin()}
                >
                  Log In
                </button>
              </div>
              <div>
                <button className="ioButton oButton" onClick={() => showMenu()}>
                  Sign Up
                </button>
              </div>
              <div className="faUserContainer">
                <button
                  className="faUser"
                  onClick={() => setDisplayOptions((x) => !x)}
                >
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                </button>
                {!displayOptions ? (
                  <div className="userOptionsContainer">
                    <div className="myStuff">
                      <div className="myProfile">
                        <a href="#" onClick={() => toggleMenu()}>
                          Create Account
                        </a>
                      </div>
                    </div>
                    <div className="additionalStuff">
                      <a href="#">Advertise on Reddit</a>
                      <a href="#">Reddit Coins</a>
                      <a href="#">Premium</a>
                      <a href="#">Help Center</a>
                      <a href="#">Terms & Policies</a>
                      <a href="#">User Agreement</a>
                      <a href="#">Privacy Policy</a>
                      <a href="#">Content Policy</a>
                      <a href="#">Moderator Guidelines</a>
                    </div>
                  </div>
                ) : null}
                {!displaySignUp ? (
                  <SignUp
                    displaySignUp={displaySignUp}
                    setDisplaySignUp={setDisplaySignUp}
                    displayLogIn={displayLogIn}
                    setDisplayLogIn={setDisplayLogIn}
                    setIsLoggedIn={setIsLoggedIn}
                    displayOptions={displayOptions}
                    setDisplayOptions={setDisplayOptions}
                  />
                ) : null}
                {!displayLogIn ? (
                  <LogIn
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FixedHeader;
