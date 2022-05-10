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
  } = props;
  // let createPost = () => {
  //   setDisplayCreatePost(!displayCreatePost);
  // };
  return (
    <>
      {/* {displayCreatePost ? <CreatePost /> : null} */}
      <div className="outermost-popular-container" id="loggedInPop">
        <div className="outer-menu-control-container">
          {/* <div onClick={() => createPost()}> */}
          <MakePostLinkBox />
          {/* </div> */}
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
    </>
  );
}

export default Popular;
