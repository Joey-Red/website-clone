import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUser,
  faBullhorn,
  faMagnifyingGlass,
  faAngleDown,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./img/Reddit_logo_new.png";
import { useNavigate, Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  query,
  where,
  getDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

function LoggedInHeader(props) {
  const [currentUser, setCurrentUser] = useState(null);
  let {
    displayPfp,
    setDisplayPfp,
    setIsLoggedIn,
    isLoggedIn,
    setDisplayLogIn,
    formValue,
    setFormValue,
    displayOptions,
    setDisplayOptions,
  } = props;
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsLoggedIn(false);
      window.location.pathname = "/";
      setDisplayLogIn(true);
    });
  };
  const auth = getAuth();
  const navigate = useNavigate();
  const searchQuery = () => {
    navigate("search/");
    localStorage.setItem("searchQuery", formValue);
  };
  let hrefLink = "/website-clone/u/" + localStorage.getItem("user");

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
          <div className="right-side">
            <div className="buttonGroup">
              <div className="bullHornDiv">
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
                          <Link
                            href={hrefLink}
                            to={hrefLink}
                            onClick={() => setDisplayOptions((s) => !s)}
                          >
                            Profile
                          </Link>
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
                        <a href="#" onClick={() => signUserOut()}>
                          Log Out
                        </a>
                      </div>
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

export default LoggedInHeader;
