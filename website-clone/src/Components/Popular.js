import React from "react";
import PopularFeed from "./PopularFeed";
import TopXComs from "./TopXComs";
import SortButtonsBar from "./SortButtonsBar";
import MakePostLinkBox from "./MakePostLinkBox";

function Popular() {
  return (
    <div className="outermost-popular-container">
      <div className="outer-menu-control-container">
        <MakePostLinkBox />

        <div className="popular-post-header">Popular Posts</div>
        <SortButtonsBar />
        <PopularFeed />
      </div>
      <TopXComs />
    </div>
  );
}

export default Popular;
