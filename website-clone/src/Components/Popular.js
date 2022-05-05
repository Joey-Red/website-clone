import React from "react";
import PopularFeed from "./PopularFeed";
import TopXComs from "./TopXComs";
import SortButtonsBar from "./SortButtonsBar";
import MakePostLinkBox from "./MakePostLinkBox";

function Popular(props) {
  const { setPostPopUp, postPopUp, isLoggedIn } = props;
  return (
    <div className="outermost-popular-container" id="loggedInPop">
      <div className="outer-menu-control-container">
        <MakePostLinkBox />
        <div className="popular-post-header">Popular Posts</div>
        <SortButtonsBar />
        <PopularFeed
          postPopUp={postPopUp}
          setPostPopUp={setPostPopUp}
          isLoggedIn={isLoggedIn}
        />
      </div>
      <TopXComs />
    </div>
  );
}

export default Popular;
