import React from "react";
import {
  faArrowUp,
  faArrowDown,
  faComment,
  faShare,
  faBookmark,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TextPost(props) {
  return (
    <div className="outerPostContainer">
      <div className="innerPostContainer">
        <div className="likeContainer">
          <div className="likeContainer-x1">
            <div className="like-container-x2">
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
        <div className="postFormatContainer">
          <div className="post-info">
            <div className="post-pic">
              <a href="#">{/* link to sub img */}</a>
            </div>
            <div className="subMoreInfo">
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
            <button className="post-join-button-container">
                  <span>Join</span>
                </button>
          </div>
          <div className="postBodyContainer">
            <div className="postTitle">
              {/* post title */}
              <h3>
                {props.postTitle}
              </h3>
            </div>
            <div className="commentShareSave">
              <div className="cSSContainer">
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
  );
}

export default TextPost;
