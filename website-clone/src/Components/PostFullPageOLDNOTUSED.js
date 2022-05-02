import React from "react";
import {
  faArrowUp,
  faArrowDown,
  faComment,
  faShare,
  faBookmark,
  faEllipsis,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styleSheet5.css";
import TextEditorDRAFTJS from "./TextEditorDRAFTJS";
import CommentContainer from "./CommentContainer";
function PostFullPage(props) {
  let { setPostPopUp } = props;
  let closePost = () => {
    setPostPopUp(false);
  };
  return (
    <div className="postFullScreenContainer">
      <div className="fullScreenPost">
        <div className="fullScreenPostHeader">
          <div className="postTitleFP">
            <h1>{props.postTitle}</h1>
          </div>
          <div className="faxContainer" onClick={() => closePost()}>
            <FontAwesomeIcon icon={faX} className="faX"></FontAwesomeIcon>
            Close
          </div>
        </div>
        <div className="layoutWrapper">
          <div className="innerPostContainerCommentMode">
            <div className="postFormatContainerCM">
              <div className="postFormatContainerInner">
                <div className="likeContainerFP">
                  <div className="likeContainer-x1FP">
                    <div className="like-container-x2FP">
                      <button className="upVote">
                        <span>
                          <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
                        </span>
                      </button>
                      <div className="voteCount">{props.likes}</div>
                      <button className="downVote">
                        <span>
                          <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="top-info-container">
                  <div className="post-infoFP">
                    <div className="post-pic">
                      <a href="#">{/* link to sub img */}</a>
                    </div>

                    <div className="subMoreInfoFP">
                      <div className="subAndPosterName">
                        <div className="subName">
                          <a href="#">
                            {/* sub name here */}
                            {props.postSub}
                          </a>
                        </div>
                        <span className="extraSpans">•</span>
                        <span className="extraSpans">Posted by</span>
                        <div className="posterName">
                          <div>
                            <a href="#">
                              {/* user who posted link */}
                              u/{props.username}
                            </a>
                          </div>
                        </div>
                        <span className="timeStamp">
                          <a href="#">
                            {/* posted X time ago */}
                            10 Hours ago
                          </a>
                        </span>
                      </div>
                    </div>
                    {/* <button className="post-join-button-container">
                  <span>Join</span>
                </button> */}
                  </div>
                  <div className="postBodyContainer">
                    <div className="wrapperTEST">
                      <div className="postBodyContainerFPInner">
                        <div className="postTitleFP">
                          {/* post title */}
                          <h3>{props.postTitle}</h3>
                        </div>
                        <div className="postBodyMargin">
                          <div className="postBodyText">{props.postBody}</div>
                          <div className="commentShareSave">
                            <div className="cSSContainerFP">
                              <a href="#">
                                <FontAwesomeIcon
                                  icon={faComment}
                                  className="faComment"
                                ></FontAwesomeIcon>
                                <span className="commentCount">
                                  {/* number Comments */}
                                  {props.comments}
                                </span>
                              </a>
                              <div className="shareButton">
                                <FontAwesomeIcon
                                  icon={faShare}
                                  className="faComment"
                                ></FontAwesomeIcon>
                                <button>
                                  <span>Share</span>
                                </button>
                              </div>
                              <div className="saveButton">
                                <button>
                                  <FontAwesomeIcon
                                    icon={faBookmark}
                                    className="faComment"
                                  ></FontAwesomeIcon>
                                  <span className="saveSpan">Save</span>
                                </button>
                              </div>
                              <div className="elipsesButton">
                                <button>
                                  <span className="faComment">
                                    <FontAwesomeIcon
                                      icon={faEllipsis}
                                      className="faComment"
                                    ></FontAwesomeIcon>
                                  </span>
                                </button>
                              </div>
                            </div>

                            <div className="emptySpaceDiv"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <TextEditorDRAFTJS />
                <CommentContainer />
                {/*  */}
              </div>
              <div className="top-x-communities-container top-x-special extraBits">
                <div className="top-communities">
                  <div className="top-coms-header-edit">Moderators</div>
                  <div className="tcInside">
                    <div className="viewButtonContainerInverse">
                      <a href="#">
                        {/* <FontAwesomeIcon
                          icon={faEnvelope}
                          className="faEnv"
                        ></FontAwesomeIcon> */}
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
        </div>
      </div>
    </div>
  );
}

export default PostFullPage;
