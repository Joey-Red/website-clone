import React, { useState } from "react";
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

function App() {
  const [displaySignUp, setDisplaySignUp] = useState(true);
  const [displayLogIn, setDisplayLogIn] = useState(true);
  // Is logged in state y/n needs to be here. BUT we wont be doing logged in for some time
  return (
    <>
      <FixedHeader
        displaySignUp={displaySignUp}
        setDisplaySignUp={setDisplaySignUp}
        displayLogIn={displayLogIn}
        setDisplayLogIn={setDisplayLogIn}
      />
      {/* <LoggedInHeader /> */}
      {/* <CommunityCreated /> */}
      <Trending />
      {/* <Popular />
      <CreatePost />
      <ProfilePage /> */}
      {/* <SignUp /> */}
    </>
  );
}

export default App;
