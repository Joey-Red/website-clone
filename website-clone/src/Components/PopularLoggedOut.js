import React, { useState } from "react";
import PopularFeed from "./PopularFeed";
import TopXComsLoggedOut from "./TopXComsLoggedOut";
import SortButtonsBar from "./SortButtonsBar";

function PopularLoggedOut(props) {
  const {
    setPostPopUp,
    postPopUp,
    isLoggedIn,
    displayLogIn,
    setDisplayLogIn,
    displayForgotPw,
    setDisplayForgotPw,
    displaySignUp,
    setDisplaySignUp,
    setIsLoggedIn,
  } = props;
  return (
    <div className="outermost-popular-container">
      <div className="outer-menu-control-container">
        <div className="popular-post-header">Popular Posts</div>
        <SortButtonsBar />
        <PopularFeed
          displayLogIn={displayLogIn}
          setDisplayLogIn={setDisplayLogIn}
          postPopUp={postPopUp}
          setPostPopUp={setPostPopUp}
          isLoggedIn={isLoggedIn}
          setDisplayForgotPw={setDisplayForgotPw}
          displayForgotPw={displayForgotPw}
          displaySignUp={displaySignUp}
          setDisplaySignUp={setDisplaySignUp}
          setIsLoggedIn={setIsLoggedIn}
        />
      </div>
      <TopXComsLoggedOut />
    </div>
  );
}

export default PopularLoggedOut;
