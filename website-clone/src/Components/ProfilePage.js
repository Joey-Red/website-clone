import React from "react";
import LoggedInHeader from "./LoggedInHeader";
import ProfileSortButtonsBar from "./ProfileSortButtonsBar";
import profilePic from "./img/userPhImg.png";

function ProfilePage() {
  return (
    <>
      <LoggedInHeader />
      <div className="pfpContainer">
        <div className="pfpSortingButtonsContainer">
          <div className="sortingButton">
            <a href="#">Overview</a>
            <a href="#">Posts</a>
            <a href="#">Comments</a>
            <a href="#">Saved</a>
            <a href="#">Upvoted</a>
            <a href="#">Downvoted</a>
          </div>
        </div>
      </div>
      <div className="outermost-popular-container">
        <div className="outer-menu-control-container">
          <ProfileSortButtonsBar />
          <div className="postsBodyContainer">
            {/* if there are no posts return this: */}
            <div className="emptyPostBody">
              <div className="beFirstText">
                `hmm... u/Salty_Hero hasn't posted anything`
              </div>
              {/* else return this with the relevant props*/}
              {/* <TextPost /> */}
            </div>
          </div>
        </div>
        <div className="top-x-communities-container" id="orig">
          <div className="top-communities">
            <div className="top-coms-header">
              <div className="profilePicContainer">
                <div className="pfpInner">
                  <img src={profilePic} alt="" className="profilePic" />
                </div>
                <div className="usernameContainer topComsUser">u/userName</div>
              </div>
            </div>
            <div className="accountInfoContainer topComsUser">
              <div className="acctDetails">
                <div className="upvoteScore">
                  <h5>Karma</h5> <div>####</div>
                </div>
                <div className="accountCreationDate">
                  <h5>Cake day</h5>
                  <div>m d y</div>
                </div>
              </div>
            </div>
            <div className="viewButtonContainer">
              <a href="#">New Post</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
