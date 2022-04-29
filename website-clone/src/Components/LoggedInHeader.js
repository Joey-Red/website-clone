import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUser,
  faBullhorn,
  faMagnifyingGlass,
  faAngleDown,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./img/Reddit_logo_new.png";
import ProfilePage from "./ProfilePage";
// Todos on this page so far: give everything a link.
function LoggedInHeader(props) {
  const [displayOptions, setDisplayOptions] = useState(true);
  let { displayPfp, setDisplayPfp } = props;
  // let showPfp = () => {
  //   setDisplayPfp(!displayPfp);
  //   console.log("peepoHey");
  // };
  return (
    <div className="headerOuter">
      <div className="headerContainer">
        <div className="inner-container">
          <div className="left-side">
            <div className="logoWrapper">
              <a href="/">
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
              <div className="faMessageContainer">
                <button className="faMessage">
                  <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
                </button>
              </div>
              <div>
                <div className="faUserContainer">
                  <button
                    className="faUser"
                    onClick={() => setDisplayOptions((s) => !s)}
                  >
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                  </button>
                </div>
                {!displayOptions ? (
                  <div className="userOptionsContainer">
                    <div className="optionsContainer">
                      <div className="myStuff">
                        <div className="myProfile">
                          <a href="/profile">Profile</a>
                          <a href="#">User Settings</a>
                        </div>
                      </div>
                      <div className="additionalStuff">
                        <a href="#">Create Community</a>
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
                  </div>
                ) : null}
                {/* {!displayPfp ? (
                  <ProfilePage
                    displayPfp={displayPfp}
                    setDisplayPfp={setDisplayPfp}
                  />
                ) : null} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoggedInHeader;
