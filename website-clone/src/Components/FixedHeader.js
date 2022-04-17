import React from "react";
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
              <div>
                <button className="faUser">
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FixedHeader;
