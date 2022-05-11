import React, { useState, useEffect } from "react";
import {
  faAngleDown,
  faCircle,
  faImage,
  faBars,
  faLink,
  faPoll,
  faMicrophone,
  faPlusCircle,
  faBullhorn,
  faLock,
  faPerson,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextEditorDRAFTJSCreatePost from "./TextEditorDRAFTJSCreatePost";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, getDocs, doc } from "firebase/firestore";
import { auth, db } from "../firebase";
import NewCommunity from "./NewCommunity";
function CreatePost(props) {
  const { isLoggedIn } = props;

  let [showNewCom, setShowNewCom] = useState(false);
  let [postingToCom, setPostingToCom] = useState("");
  let [postToComId, setPostToComId] = useState("");
  let [postBody, setPostBody] = useState("");
  const [communities, setCommunities] = useState([]);
  const [postTitle, setPostTitle] = useState("");

  let dropDownClick = () => {
    let target = document.querySelector(".dropDownContainer");
    if (target.style.display === "flex") {
      target.style.display = "none";
    } else {
      target.style.display = "flex";
    }
  };
  let createNewCom = () => {
    if (showNewCom === false) {
      setShowNewCom(true);
    } else {
      setShowNewCom(false);
    }
  };

  let createDay = new Date();
  createDay.getDay();
  let dateString = createDay.toDateString();
  let modifiedDate = dateString.slice(4);
  let navigate = useNavigate();
  const communitiesCollectionRef = collection(db, "communities");

  // console.log(typeof postingToCom);

  // const postToComRef = doc(db, "communities", postingToCom);
  const postToComRef = doc(db, "communities", "postingToCom");
  const submitPost = async () => {
    await addDoc(postToComRef, {
      postTitle,
      postBody,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    navigate("/");
  };
  // here^
  // really need to figure out how to create a collection of posts
  // when you create a new community thats the key here,
  // then i can create a dynamic reference
  // also need to figure out this loop issue at some point
  // lastly, need to get texteditorbody state somehow, maybe through props?
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    } else {
    }
  }, []);
  useEffect(() => {
    let getPosts = async () => {
      const data = await getDocs(communitiesCollectionRef);
      setCommunities(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);
  // This loop is killing me. it has to refresh ..
  return (
    <div className="createPostContainer">
      {showNewCom ? (
        <NewCommunity setShowNewCom={setShowNewCom} showNewCom={showNewCom} />
      ) : null}
      <div className="createPost-x1">
        <div className="createPost-x2">
          <div className="createPostHeaderContainer">
            <div className="createPostHeader">Create a post</div>
            <div className="draft-count">
              <button>
                DRAFTS <span className="draftCountSpan">0</span>
              </button>
            </div>
          </div>
          <div className="chooseCommunityContainer">
            <div className="chooseCommunity-x1">
              <div className="chooseCommunity-x2">
                <span className="circlePlaceHolder">
                  <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                </span>
                <div className="inputCommunity">
                  {postingToCom !== "" ? (
                    postingToCom
                  ) : (
                    <input type="text" placeholder="Choose a community" />
                  )}
                </div>
                <div
                  className="dropDownCommunity"
                  onClick={() => {
                    dropDownClick();
                  }}
                >
                  <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                  <div className="dropDownContainer">
                    <div className="yourComStyle">
                      <span>COMMUNITIES</span>
                      <div>
                        <button
                          onClick={() => {
                            createNewCom();
                          }}
                        >
                          Create New
                        </button>
                      </div>
                    </div>
                    {communities.map((post) => {
                      return (
                        <div
                          key={post.id}
                          onClick={() => {
                            setPostingToCom(post.communityName);
                            setPostToComId(post.id);
                          }}
                        >
                          <div className="indComStyle">
                            <img
                              src="https://styles.redditmedia.com/t5_3ofro/styles/communityIcon_hx4thg2ikey71.png"
                              alt=""
                            />
                            <div className="flexSpans">
                              <span className="liSubName">
                                r/{post.communityName}
                              </span>
                              <span className="liSubMemberCount">
                                # Members
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="createPostFormContainer">
            <div className="formHeaderContainer">
              <div className="formHeaderContainer-x1">
                <button className="postButton">
                  <FontAwesomeIcon
                    icon={faBars}
                    className="createFA"
                  ></FontAwesomeIcon>
                  <span className="buttonText">Post</span>
                </button>
                <button className="disabledButton">
                  <FontAwesomeIcon
                    icon={faImage}
                    className="createFA"
                  ></FontAwesomeIcon>
                  <span className="buttonText">Images & Video</span>
                </button>
                <button className="disabledButton">
                  <FontAwesomeIcon
                    icon={faLink}
                    className="createFA"
                  ></FontAwesomeIcon>
                  <span className="buttonText">Link</span>
                </button>
                <button className="disabledButton">
                  <FontAwesomeIcon
                    icon={faPoll}
                    className="createFA"
                  ></FontAwesomeIcon>
                  Poll
                </button>
                <button className="disabledButton">
                  <FontAwesomeIcon
                    icon={faMicrophone}
                    className="createFA"
                  ></FontAwesomeIcon>
                  <span className="buttonText">Talk</span>
                </button>
              </div>
              <div className="textAreaContainer">
                <div className="textAreaContainer-x1">
                  <div>
                    <textarea
                      maxLength="300"
                      placeholder="Title"
                      className="titleTextArea"
                      onChange={(e) => {
                        setPostTitle(e.target.value);
                      }}
                    ></textarea>
                  </div>
                </div>
                <TextEditorDRAFTJSCreatePost
                  onChange={(e) => {
                    setPostBody(e.target.value);
                  }}
                />
                <div className="textFormattingButtonsContainer">
                  <div className="textFormattingButtonsContainer-x1">
                    <div className="tagAndSubmit">
                      <div className="tagContainer">
                        <div className="tagList">
                          <button className="tag">
                            <FontAwesomeIcon
                              icon={faPlusCircle}
                              className="faAddFlair"
                            ></FontAwesomeIcon>
                            OC
                          </button>
                          <button className="tag">
                            <FontAwesomeIcon
                              icon={faPlusCircle}
                              className="faAddFlair"
                            ></FontAwesomeIcon>
                            Spoiler
                          </button>
                          <button className="tag">
                            <FontAwesomeIcon
                              icon={faPlusCircle}
                              className="faAddFlair"
                            ></FontAwesomeIcon>
                            NSFW
                          </button>
                          <button className="tag">
                            <FontAwesomeIcon
                              icon={faPlusCircle}
                              className="faAddFlair"
                            ></FontAwesomeIcon>
                            Flair
                          </button>
                        </div>
                      </div>
                      <hr></hr>

                      <div className="draftOrSubmit">
                        <div className="postSubmitButton">
                          <button onClick={() => submitPost()}>Post</button>
                        </div>
                        <div className="saveDraft">
                          <button>Save Draft</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
