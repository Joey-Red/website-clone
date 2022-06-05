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
import SearchPage from "./Components/SearchPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import UserSettings from "./Components/UserSettings";
// import { createBrowserHistory } from "history";

function App() {
  const [displaySignUp, setDisplaySignUp] = useState(true);
  const [displayLogIn, setDisplayLogIn] = useState(true);
  const [displayForgotPw, setDisplayForgotPw] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isAuth"));
  const [postPopUp, setPostPopUp] = useState(false);
  const [communities, setCommunities] = useState([]);
  const [formValue, setFormValue] = useState("");
  const [displayOptions, setDisplayOptions] = useState(true);
  const [currentUser] = useState(null);

  // const history = createBrowserHistory({
  //   basename: process.env.PUBLIC_URL,
  // });

  return (
    <>
      <Router>
        {isLoggedIn ? (
          <LoggedInHeader
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            setDisplayLogIn={setDisplayLogIn}
            formValue={formValue}
            setFormValue={setFormValue}
            displayOptions={displayOptions}
            setDisplayOptions={setDisplayOptions}
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
            formValue={formValue}
            setFormValue={setFormValue}
          />
        )}
        <Routes>
          <Route
            path="profile"
            element={<ProfilePage setDisplayOptions={setDisplayOptions} />}
          />
          {isLoggedIn ? (
            <Route
              exact
              path="/website-clone/"
              element={
                <Fragment>
                  <Popular
                    postPopUp={postPopUp}
                    setPostPopUp={setPostPopUp}
                    isLoggedIn={isLoggedIn}
                    communities={communities}
                    setCommunities={setCommunities}
                  />
                </Fragment>
              }
            />
          ) : (
            <Route
              exact
              path="/website-clone/"
              element={
                <Fragment>
                  <Trending
                    displaySignUp={displaySignUp}
                    setDisplaySignUp={setDisplaySignUp}
                    setIsLoggedIn={setIsLoggedIn}
                    postPopUp={postPopUp}
                    setPostPopUp={setPostPopUp}
                    isLoggedIn={isLoggedIn}
                    communities={communities}
                    setCommunities={setCommunities}
                    displayLogIn={displayLogIn}
                    setDisplayLogIn={setDisplayLogIn}
                    setDisplayForgotPw={setDisplayForgotPw}
                    displayForgotPw={displayForgotPw}
                  />
                  <PopularLoggedOut
                    displaySignUp={displaySignUp}
                    setDisplaySignUp={setDisplaySignUp}
                    setIsLoggedIn={setIsLoggedIn}
                    postPopUp={postPopUp}
                    setPostPopUp={setPostPopUp}
                    isLoggedIn={isLoggedIn}
                    communities={communities}
                    setCommunities={setCommunities}
                    displayLogIn={displayLogIn}
                    setDisplayLogIn={setDisplayLogIn}
                    setDisplayForgotPw={setDisplayForgotPw}
                    displayForgotPw={displayForgotPw}
                  />
                </Fragment>
              }
            />
          )}
          <Route
            path="/website-clone/createpost/"
            element={
              <CreatePost
                isLoggedIn={isLoggedIn}
                communities={communities}
                setCommunities={setCommunities}
              />
            }
          />
          <Route
            path="/website-clone/u/:username"
            element={
              <ProfilePage
                postPopUp={postPopUp}
                setPostPopUp={setPostPopUp}
                isLoggedIn={isLoggedIn}
                currentUser={currentUser}
              />
            }
          />
          <Route
            path="/website-clone/usersettings"
            element={<UserSettings />}
          />
          <Route
            path="/website-clone/r/:subId"
            element={
              <CommunityCreated
                postPopUp={postPopUp}
                setPostPopUp={setPostPopUp}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route
            path="/website-clone/search/:searchValue"
            element={
              <SearchPage
                isLoggedIn={isLoggedIn}
                postPopUp={postPopUp}
                setPostPopUp={setPostPopUp}
                formValue={formValue}
                setFormValue={setFormValue}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
