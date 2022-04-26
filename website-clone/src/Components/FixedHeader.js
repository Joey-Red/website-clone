import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBullhorn,
  faMagnifyingGlass,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./img/Reddit_logo_new.png";
// Todos on this page so far: give everything a link.
function FixedHeader() {
  const [displayOptions, setDisplayOptions] = useState(true);
  return (
    <div className="headerOuter">
      <div className="headerContainer">
        <div className="inner-container">
          <div className="left-side">
            <div className="logoWrapper">
              <img src={logo} alt="redditlogo" className="logo" />
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
              />
            </form>
          </div>
          <div className="right-side">
            <div className="buttonGroup">
              <div>
                <button className="faBullhorn">
                  <FontAwesomeIcon icon={faBullhorn}></FontAwesomeIcon>
                </button>
              </div>
              <div>
                <button className="ioButton iButton">Log In</button>
              </div>
              <div>
                <button className="ioButton oButton">Sign Up</button>
              </div>
              <div className="faUserContainer">
                <button
                  className="faUser"
                  onClick={() => setDisplayOptions((s) => !s)}
                >
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                </button>
                {!displayOptions ? (
                  <div className="userOptionsContainer">
                    <div className="myStuff">
                      <div className="myProfile">
                        <a href="#">Create Account</a>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FixedHeader;
