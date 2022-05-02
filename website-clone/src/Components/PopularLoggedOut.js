import React from "react";
import PopularFeed from "./PopularFeed";
import TopXComsLoggedOut from "./TopXComsLoggedOut";
import SortButtonsBar from "./SortButtonsBar";

function PopularLoggedOut(props) {
  let { setPostPopUp, postPopUp } = props;
  return (
    <div className="outermost-popular-container">
      <div className="outer-menu-control-container">
        <div className="popular-post-header">Popular Posts</div>
        <SortButtonsBar />
        <PopularFeed postPopUp={postPopUp} setPostPopUp={setPostPopUp} />
      </div>
      <TopXComsLoggedOut />
    </div>
  );
}

export default PopularLoggedOut;
