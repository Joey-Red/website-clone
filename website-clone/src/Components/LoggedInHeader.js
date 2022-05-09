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
import { useAuth } from "./contexts/AuthContext";
import { useNavigate } from "react-router-dom";

// Todos on this page so far: give everything a link.
function LoggedInHeader(props) {
  const [displayOptions, setDisplayOptions] = useState(true);
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth;
  let { displayPfp, setDisplayPfp } = props;
  const navigate = useNavigate();
  // let showPfp = () => {
  //   setDisplayPfp(!displayPfp);
  //   console.log("peepoHey");
  // };
  async function handleLogout() {
    setError("");
    try {
      await logout();
      // navigate("/", { replace: true });
    } catch {
      setError("Failed to log out");
    }
  }
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
                          <a href="/userSettings">User Settings</a>
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
                        <a href="#" onClick={() => handleLogout()}>
                          Log Out
                        </a>
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
