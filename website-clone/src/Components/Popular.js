import React from "react";
import PopularFeed from "./PopularFeed";
import TopXComs from "./TopXComs";
import SortButtonsBar from "./SortButtonsBar";
import MakePostLinkBox from "./MakePostLinkBox";
import CreatePost from "./CreatePost";

function Popular(props) {
  const {
    setPostPopUp,
    postPopUp,
    isLoggedIn,
    displayCreatePost,
    setDisplayCreatePost,
    communities,
    setCommunities,
  } = props;
  return (
    <>
      <div className="outermost-popular-container" id="loggedInPop">
        <div className="outer-menu-control-container">
          <MakePostLinkBox />
          <div className="popular-post-header">Popular Posts</div>
          <SortButtonsBar />
          <PopularFeed
            postPopUp={postPopUp}
            setPostPopUp={setPostPopUp}
            isLoggedIn={isLoggedIn}
            communities={communities}
            setCommunities={setCommunities}
          />
        </div>
        <TopXComs />
      </div>
    </>
  );
}

export default Popular;
