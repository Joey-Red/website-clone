import React from "react";
import PopularFeed from "./PopularFeed";
import TopXComsLoggedOut from "./TopXComsLoggedOut";
import SortButtonsBar from "./SortButtonsBar";

function PopularLoggedOut() {
  return (
    <div className="outermost-popular-container">
      <div className="outer-menu-control-container">
        <div className="popular-post-header">Popular Posts</div>
        <SortButtonsBar />
        <PopularFeed />
      </div>
      <TopXComsLoggedOut />
    </div>
  );
}

export default PopularLoggedOut;
