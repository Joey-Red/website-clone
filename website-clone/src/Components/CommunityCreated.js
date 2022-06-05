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
// import phimg from "./img/phimg.png";
import phimg from "./img/rslash.png";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  doc,
  getDocs,
  collection,
  query,
  where,
  getDoc,
} from "firebase/firestore";
import TextPost from "./TextPost";
import PostFullPage from "./PostFullPage";

function CommunityCreated(props) {
  const { isLoggedIn, setPostPopUp, postPopUp } = props;
  let createDay = new Date();
  createDay.getDay();
  let dateString = createDay.toDateString();
  let modifiedDate = dateString.slice(4);
  const navigate = useNavigate();

  const [livePostList, setLivePostList] = useState([]);
  // const [postId, setPostId] = useState("");
  let url = window.location.href;
  let urlSplit = url.split("/");
  let searchComTemp = urlSplit[5];
  let searchCom = decodeURI(searchComTemp);
  const [currAuthor, setCurrAuthor] = useState("");
  const [currPostDate, setCurrPostDate] = useState("");
  const [currComName, setCurrComName] = useState("");
  const [currPostBody, setCurrPostBody] = useState("");
  const [currPostTitle, setCurrPostTitle] = useState("");
  const [currVoteCount, setCurrVoteCount] = useState(1);
  const [currCommentCount, setCurrCommentCount] = useState(0);
  const [currPostId, setCurrPostId] = useState("");
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
  }, []);
  const setPostId = (id) => {
    let getPost = async () => {
      const postDoc = doc(db, "posts", id);
      const docSnap = await getDoc(postDoc);
      let data = docSnap.data();
      setCurrAuthor(data.author.username);
      setCurrPostDate(data.author.postDate);
      setCurrComName(data.communityName.postingToCom);
      setCurrPostBody(data.postBody.content);
      setCurrPostTitle(data.postTitle);
      setCurrPostId(id);
      setCurrVoteCount(data.stats.votes);
      setCurrCommentCount(data.stats.comments);
    };
    getPost();
  };

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
                      <a>
                        <div
                          onClick={() => {
                            navigate("/website-clone/usersettings");
                            props.setDisplayOptions((s) => !s);
                          }}
                        ></div>
                        Add a post
                      </a>
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
                      {postPopUp ? (
                        <PostFullPage
                          postPopUp={postPopUp}
                          setPostPopUp={setPostPopUp}
                          postSub={currComName}
                          postTitle={currPostTitle}
                          comments={currCommentCount}
                          likes={currVoteCount}
                          username={currAuthor}
                          postBody={currPostBody}
                          postDate={currPostDate}
                          isLoggedIn={isLoggedIn}
                          currPostId={currPostId}
                          setCurrPostId={setCurrPostId}
                        />
                      ) : null}
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
                            <a href="/website-clone/createPost">Create Post</a>
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
