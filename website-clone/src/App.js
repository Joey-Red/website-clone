import React, { Fragment, useState } from "react";
import Trending from "./Components/Trending";
import FixedHeader from "./Components/FixedHeader";
import Popular from "./Components/Popular";
import "./styleSheet2.css";
import "./styleSheet3.css";
import "./styleSheet4.css";
import "./styles.css";
import CreatePost from "./Components/CreatePost";
import CommunityCreated from "./Components/CommunityCreated";
import LoggedInHeader from "./Components/LoggedInHeader";
import ProfilePage from "./Components/ProfilePage";
import SignUp from "./Components/SignUp";
import MakePostLinkBox from "./Components/MakePostLinkBox";
import PopularLoggedOut from "./Components/PopularLoggedOut";
import { Routes, Route, Link, Router } from "react-router-dom";
import TopXComs from "./Components/TopXComs";

function App() {
  const [displaySignUp, setDisplaySignUp] = useState(true);
  const [displayLogIn, setDisplayLogIn] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // const [displayPfp, setDisplayPfp] = useState(true);
  // Is logged in state y/n needs to be here. BUT we wont be doing logged in for some time

  /*
  If youre logged in: 
  1. LoggedInHeader
  2. Make Post Link Box
  3. Trending
  4. Popular
  ------------
  If youre logged out:
  1. FixedHeader
  2. Trending
  3. Popular
  */
  return (
    <>
      <Routes>
        {/* Logged In */}
        {/* <Route path="profile" element={<ProfilePage />} />
        <Route
          path="/"
          element={
            <Fragment>
              <Trending />
              <Popular />
            </Fragment>
          }
        /> */}
        <Route path="createpost" element={<CreatePost />} />
        <Route path="communitycreated" element={<CommunityCreated />} />
        <Route path="profile" element={<ProfilePage />} />
        {/* Logged Out */}
        <Route
          path="/"
          element={
            <Fragment>
              <Trending />
              <PopularLoggedOut />
            </Fragment>
          }
        />
      </Routes>
      <FixedHeader
        displaySignUp={displaySignUp}
        setDisplaySignUp={setDisplaySignUp}
        displayLogIn={displayLogIn}
        setDisplayLogIn={setDisplayLogIn}
      />
      {/* <LoggedInHeader /> */}
    </>
  );
}

export default App;
