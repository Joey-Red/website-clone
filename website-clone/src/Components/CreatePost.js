import React, { useState } from "react";
// import "../styleSheet2.css";
// import "../styleSheet3.css";
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
function CreatePost() {
  let [showNewCom, setShowNewCom] = useState(false);
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
  let hideCreate = () => {
    setShowNewCom(false);
  };
  function NewCommunity() {
    return (
      <div className="blackScreen">
        <div className="newComContainer">
          <div className="ccHeader">
            <h1>Create a community</h1>
          </div>
          <div className="ccInfoContainer">
            <div className="ccNameInfo">
              <div className="ccName">
                <p className="ccNameSpan">Name</p>
                <span className="nameInfo">
                  Community names cannot be changed.
                </span>
                <span className="ccrPlaceholder">r/</span>
                <input type="text" name="" id="ccNameInput" maxLength={21} />
              </div>
            </div>
            <div className="ccComType">
              <div>
                <input type="radio" value="" defaultChecked id="comType" />
                <label htmlFor="comType">
                  <FontAwesomeIcon
                    icon={faPerson}
                    className="ccFa"
                  ></FontAwesomeIcon>
                  Public
                </label>
                <div className="ccTypeInfo">
                  Anyone can view, post and comment to this community
                </div>
              </div>
              <div>
                <input type="radio" value="" id="comTypeRestricted" />
                <label htmlFor="comTypeRestricted">
                  <FontAwesomeIcon
                    icon={faEye}
                    className="ccFa"
                  ></FontAwesomeIcon>
                  Restricted
                </label>
                <div className="ccTypeInfo">
                  Anyone can view this community, but only approved users can
                  post
                </div>
              </div>
              <div>
                <input type="radio" value="" id="comTypePrivate" />
                <label htmlFor="comTypePrivate">
                  <FontAwesomeIcon
                    icon={faLock}
                    className="ccFa"
                  ></FontAwesomeIcon>
                  Private
                </label>
                <div className="ccTypeInfo">
                  Only approved users can view and submit to this community
                </div>
              </div>
              <div>
                <input type="radio" value="" id="ccNotice" />
                <label htmlFor="ccNotice">
                  <FontAwesomeIcon
                    icon={faBullhorn}
                    className="ccFa"
                  ></FontAwesomeIcon>
                  <p className="ccNotice">Notice</p>
                </label>
                <div className="ccTypeInfo">
                  All Communities are treated as public.
                </div>
              </div>
            </div>
          </div>
          <div className="ccFooter">
            <div className="ccButtonContainer">
              <button
                onClick={() => {
                  hideCreate();
                }}
                className="ccCancelButton"
              >
                Cancel
              </button>
              {/* create community needs to load to see if it was a success, then link to r/newcomname */}
              <button className="ccCreateButton">Create Community</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="createPostContainer">
      {showNewCom ? <NewCommunity /> : null}
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
                  <input type="text" placeholder="Choose a community" />
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
                      <span>YOUR COMMUNITIES</span>
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
                    <div className="indComStyle">
                      <img
                        src="https://styles.redditmedia.com/t5_3ofro/styles/communityIcon_hx4thg2ikey71.png"
                        alt=""
                      />
                      <div className="flexSpans">
                        <span className="liSubName">r/tech</span>
                        <span className="liSubMemberCount">1000 Members</span>
                      </div>
                    </div>
                    <div className="indComStyle">
                      <img
                        src="https://styles.redditmedia.com/t5_3ofro/styles/communityIcon_hx4thg2ikey71.png"
                        alt=""
                      />
                      <div className="flexSpans">
                        <span className="liSubName">r/tech</span>
                        <span className="liSubMemberCount">1000 Members</span>
                      </div>
                    </div>
                    <div className="indComStyle">
                      <img
                        src="https://styles.redditmedia.com/t5_3ofro/styles/communityIcon_hx4thg2ikey71.png"
                        alt=""
                      />
                      <div className="flexSpans">
                        <span className="liSubName">r/tech</span>
                        <span className="liSubMemberCount">1000 Members</span>
                      </div>
                    </div>
                    <div className="indComStyle">
                      <img
                        src="https://styles.redditmedia.com/t5_3ofro/styles/communityIcon_hx4thg2ikey71.png"
                        alt=""
                      />
                      <div className="flexSpans">
                        <span className="liSubName">r/tech</span>
                        <span className="liSubMemberCount">1000 Members</span>
                      </div>
                    </div>
                    <div className="indComStyle">
                      <img
                        src="https://styles.redditmedia.com/t5_3ofro/styles/communityIcon_hx4thg2ikey71.png"
                        alt=""
                      />
                      <div className="flexSpans">
                        <span className="liSubName">r/tech</span>
                        <span className="liSubMemberCount">1000 Members</span>
                      </div>
                    </div>
                    <div className="indComStyle">
                      <img
                        src="https://styles.redditmedia.com/t5_3ofro/styles/communityIcon_hx4thg2ikey71.png"
                        alt=""
                      />
                      <div className="flexSpans">
                        <span className="liSubName">r/tech</span>
                        <span className="liSubMemberCount">1000 Members</span>
                      </div>
                    </div>
                    <div className="indComStyle">
                      <img
                        src="https://styles.redditmedia.com/t5_3ofro/styles/communityIcon_hx4thg2ikey71.png"
                        alt=""
                      />
                      <div className="flexSpans">
                        <span className="liSubName">r/tech</span>
                        <span className="liSubMemberCount">1000 Members</span>
                      </div>
                    </div>
                    <div className="indComStyle">
                      <img
                        src="https://styles.redditmedia.com/t5_3ofro/styles/communityIcon_hx4thg2ikey71.png"
                        alt=""
                      />
                      <div className="flexSpans">
                        <span className="liSubName">r/tech</span>
                        <span className="liSubMemberCount">1000 Members</span>
                      </div>
                    </div>
                    <div className="indComStyle">
                      <img
                        src="https://styles.redditmedia.com/t5_3ofro/styles/communityIcon_hx4thg2ikey71.png"
                        alt=""
                      />
                      <div className="flexSpans">
                        <span className="liSubName">r/tech</span>
                        <span className="liSubMemberCount">1000 Members</span>
                      </div>
                    </div>
                    <div className="indComStyle">
                      <img
                        src="https://styles.redditmedia.com/t5_3ofro/styles/communityIcon_hx4thg2ikey71.png"
                        alt=""
                      />
                      <div className="flexSpans">
                        <span className="liSubName">r/tech</span>
                        <span className="liSubMemberCount">1000 Members</span>
                      </div>
                    </div>
                    <div className="indComStyle">
                      <img
                        src="https://styles.redditmedia.com/t5_3ofro/styles/communityIcon_hx4thg2ikey71.png"
                        alt=""
                      />
                      <div className="flexSpans">
                        <span className="liSubName">r/tech</span>
                        <span className="liSubMemberCount">1000 Members</span>
                      </div>
                    </div>
                    <div className="indComStyle">
                      <img
                        src="https://styles.redditmedia.com/t5_3ofro/styles/communityIcon_hx4thg2ikey71.png"
                        alt=""
                      />
                      <div className="flexSpans">
                        <span className="liSubName">r/gaming</span>
                        <span className="liSubMemberCount">1000 Members</span>
                      </div>
                    </div>
                    <div className="indComStyle">
                      <img
                        src="https://styles.redditmedia.com/t5_3ofro/styles/communityIcon_hx4thg2ikey71.png"
                        alt=""
                      />
                      <div className="flexSpans">
                        <span className="liSubName">r/sports</span>
                        <span className="liSubMemberCount">1000 Members</span>
                      </div>
                    </div>
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
                    ></textarea>
                  </div>
                </div>
                <TextEditorDRAFTJSCreatePost />
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
                          <button>Post</button>
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
