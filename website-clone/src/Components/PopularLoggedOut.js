import React from "react";
import PopularFeed from "./PopularFeed";
import TopXComs from "./TopXComs";
import SortButtonsBar from "./SortButtonsBar";

function PopularLoggedOut() {
  return (
    <div className="outermost-popular-container">
      <div className="outer-menu-control-container">
        <div className="popular-post-header">Popular Posts</div>
        <SortButtonsBar />
        <PopularFeed />
      </div>
      <TopXComs />
    </div>
  );
}

export default PopularLoggedOut;
