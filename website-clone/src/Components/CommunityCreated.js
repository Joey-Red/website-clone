import React, { useState, useEffect } from "react";
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
import { db, auth } from "../firebase";
import { doc, getDocs, collection, query, where } from "firebase/firestore";
import TextPost from "./TextPost";

function CommunityCreated(props) {
  const { isLoggedIn, setPostPopUp, postPopUp } = props;
  let createDay = new Date();
  createDay.getDay();
  let dateString = createDay.toDateString();
  let modifiedDate = dateString.slice(4);

  const [livePostList, setLivePostList] = useState([]);
  const [postId, setPostId] = useState("");
  let url = window.location.href;
  let urlSplit = url.split("/");
  let searchComTemp = urlSplit[4];
  let searchCom = decodeURI(searchComTemp);
  // console.log(searchCom);
  useEffect(() => {
    let getPosts = async () => {
      const postsRef = collection(db, "posts");
      const q = query(
        postsRef,
        where("communityName.postingToCom", "==", searchCom)
      );
      const querySnapshot = await getDocs(q);
      setLivePostList(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getPosts();
    console.log(livePostList);
  }, []);

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
                  <h1>{searchCom}</h1>
                  <h2>r/{searchCom}</h2>
                </div>
              </div>
              <div className="ccJoinLeaveNotif">
                <div className="block" id="joinButton">
                  <button className="ccJoinButtonStale">Join</button>
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
            <div className="postBodyContainer">
              {livePostList.length === 0 ? (
                <>
                  <div className="emptyPostBody">
                    <div className="beFirstText">
                      There are no posts in this subreddit
                    </div>
                    <div className="beFirstText bft">
                      Be the first to till this fertile land.
                    </div>
                    <div className="viewButtonContainer">
                      <a href="/new/createPost">Add a post</a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="outermost-popular-container">
                    <div className="outer-menu-control-containerSmall">
                      <div className="mpOuter">
                        <MakePostLinkBox />
                        <SortButtonsBar />
                      </div>
                      {livePostList.map((post) => {
                        return (
                          <div key={post.id} onClick={() => setPostId(post.id)}>
                            <TextPost
                              id={post.id}
                              postPopUp={postPopUp}
                              setPostPopUp={setPostPopUp}
                              postSub={post.communityName.postingToCom}
                              postTitle={post.postTitle}
                              comments={post.stats.comments}
                              likes={post.stats.votes}
                              username={post.author.username}
                              postBody={post.postBody.content}
                              postDate={post.author.postDate}
                              isLoggedIn={isLoggedIn}
                            />
                          </div>
                        );
                      })}
                    </div>
                    <div
                      className="top-x-communities-container extraBit subMQ"
                      id="orig"
                    >
                      <div className="top-communities">
                        <div className="top-coms-header-edit">
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
                            <a href="/createPost">Create Post</a>
                          </div>
                        </div>
                      </div>
                      <div className="top-x-communities-container top-x-special extraBits">
                        <div className="top-communities">
                          <div className="top-coms-header-edit">Moderators</div>
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
                            <div className="viewAllMods">
                              View All Moderators
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommunityCreated;
