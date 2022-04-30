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
import PopularLoggedOut from "./Components/PopularLoggedOut";
import { Routes, Route } from "react-router-dom";

function App() {
  const [displaySignUp, setDisplaySignUp] = useState(true);
  const [displayLogIn, setDisplayLogIn] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Routes>
        <Route path="profile" element={<ProfilePage />} />
        {isLoggedIn ? (
          <Route
            path="/"
            element={
              <Fragment>
                <Trending />
                <Popular />
              </Fragment>
            }
          />
        ) : (
          <Route
            path="/"
            element={
              <Fragment>
                <Trending />
                <PopularLoggedOut />
              </Fragment>
            }
          />
        )}
        <Route path="createpost" element={<CreatePost />} />
        <Route path="communitycreated" element={<CommunityCreated />} />
        <Route path="profile" element={<ProfilePage />} />
      </Routes>
      {isLoggedIn ? (
        <LoggedInHeader />
      ) : (
        <FixedHeader
          displaySignUp={displaySignUp}
          setDisplaySignUp={setDisplaySignUp}
          displayLogIn={displayLogIn}
          setDisplayLogIn={setDisplayLogIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </>
  );
}

export default App;
