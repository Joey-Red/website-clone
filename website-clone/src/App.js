import React, { Fragment, useState } from "react";
import Trending from "./Components/Trending";
import FixedHeader from "./Components/FixedHeader";
import Popular from "./Components/Popular";
import "./styles/styles.css";
import "./styles/styleSheet2.css";
import "./styles/styleSheet3.css";
import "./styles/styleSheet4.css";
import "./styles/styleSheet5.css";
import CreatePost from "./Components/CreatePost";
import CommunityCreated from "./Components/CommunityCreated";
import LoggedInHeader from "./Components/LoggedInHeader";
import ProfilePage from "./Components/ProfilePage";
import PopularLoggedOut from "./Components/PopularLoggedOut";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { AuthProvider } from "./Components/contexts/AuthContext";
import UserSettings from "./Components/UserSettings";
// import PrivateRoutes from "./PrivateRoutes";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [displaySignUp, setDisplaySignUp] = useState(true);
  const [displayLogIn, setDisplayLogIn] = useState(true);
  const [displayForgotPw, setDisplayForgotPw] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isAuth"));
  const [postPopUp, setPostPopUp] = useState(false);
  return (
    <>
      <Router>
        {isLoggedIn ? (
          <LoggedInHeader
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            setDisplayLogIn={setDisplayLogIn}
          />
        ) : (
          <FixedHeader
            displaySignUp={displaySignUp}
            setDisplaySignUp={setDisplaySignUp}
            displayLogIn={displayLogIn}
            setDisplayLogIn={setDisplayLogIn}
            setIsLoggedIn={setIsLoggedIn}
            setDisplayForgotPw={setDisplayForgotPw}
            displayForgotPw={displayForgotPw}
          />
        )}
        <Routes>
          <Route path="profile" element={<ProfilePage />} />
          {isLoggedIn ? (
            <Route
              exact
              path="/"
              element={
                <Fragment>
                  <Popular
                    postPopUp={postPopUp}
                    setPostPopUp={setPostPopUp}
                    isLoggedIn={isLoggedIn}
                  />
                </Fragment>
              }
            />
          ) : (
            <Route
              exact
              path="/"
              element={
                <Fragment>
                  <Trending />
                  <PopularLoggedOut
                    postPopUp={postPopUp}
                    setPostPopUp={setPostPopUp}
                    isLoggedIn={isLoggedIn}
                  />
                </Fragment>
              }
            />
          )}
          <Route
            path="createpost"
            element={<CreatePost isLoggedIn={isLoggedIn} />}
          />
          <Route path="communitycreated" element={<CommunityCreated />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="userSettings" element={<UserSettings />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
