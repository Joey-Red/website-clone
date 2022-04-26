import React from "react";
import "../styleSheet4.css";
import SortButtonsBar from "./SortButtonsBar";
import {
  faEnvelope,
  faBell,
  faCake,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MakePostLinkBox from "./MakePostLinkBox";
import phimg from "./img/phimg.png";
import TextPost from "./TextPost";

function CommunityCreated() {
  // let creationDate = new Date("2015-03-25");
  // let createYear = new Date();
  // createYear.getFullYear();
  // let createMonth = new Date();
  // createMonth.getMonth();
  let createDay = new Date();
  createDay.getDay();
  let dateString = createDay.toDateString();
  let modifiedDate = dateString.slice(4);
  return (
    <>
      <span className="colorSpan"></span>
      <div className="comCreatedPicName">
        <div className="comCreatedHeaderContainer">
          <div className="ccJuice">
            <div className="imgContainer">
              <img src={phimg} alt="" />
            </div>
            <div className="nameAndButtons">
              <div>
                <div className="ccName">
                  <h1>SUBNAME</h1>
                  <h2>r/SUBNAME</h2>
                </div>
              </div>
              <div className="ccJoinLeaveNotif">
                <div className="block" id="joinButton">
                  {/* are you a part of this? if so, 'Joined' leave on hover, if not, Join */}
                  <button>Join</button>
                </div>
                <div className="block" id="notifButton">
                  <button>
                    <FontAwesomeIcon
                      icon={faBell}
                      className="faBell"
                    ></FontAwesomeIcon>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="outermost-popular-container" id="CCPC">
        <div>
          <div>
            <MakePostLinkBox />
            <SortButtonsBar />
            <div className="postsBodyContainer">
              {/* if there are no posts return this: */}
              <div className="emptyPostBody">
                <div className="beFirstText">
                  There are no posts in this subreddit
                </div>
                <div className="beFirstText bft">
                  Be the first to till this fertile land.
                </div>
                <div className="viewButtonContainer">
                  <a href="#">Add a post</a>
                </div>
                {/* else return this with the relevant props*/}
                {/* <TextPost /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="top-x-communities-container" id="orig">
          <div className="top-communities">
            <div className="top-coms-header top-coms-header-edit">
              About Community
            </div>
            <div className="tcInside">
              <div className="aboutComInfo">
                Input about this community
                {/* if a mod, display edit pencil */}
                <FontAwesomeIcon
                  icon={faPencil}
                  className="faEnv"
                ></FontAwesomeIcon>
              </div>
              <div className="createdInfo">
                <FontAwesomeIcon
                  icon={faCake}
                  className="faEnv"
                ></FontAwesomeIcon>

                {modifiedDate}
              </div>
              <div className="viewButtonContainer">
                <a href="#">Create Post</a>
              </div>
            </div>
          </div>
          <div className="top-x-communities-container top-x-special">
            <div className="top-communities">
              <div className="top-coms-header top-coms-header-edit">
                Moderators
              </div>
              <div className="tcInside">
                <div className="viewButtonContainerInverse">
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="faEnv"
                    ></FontAwesomeIcon>
                    Message the mods
                  </a>
                </div>
                <div className="modsList">
                  {/* will need to loop through mods and list mods here also needs to be a link*/}
                  <ol>
                    <li>u/ModGuy1</li>
                  </ol>
                </div>
                <div className="viewAllMods">View All Moderators</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommunityCreated;
