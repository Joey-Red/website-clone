import React, { useState } from "react";
import {
  faArrowUp,
  faArrowDown,
  faComment,
  faShare,
  faBookmark,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { doc, updateDoc, increment } from "firebase/firestore";
import { db, auth } from "../firebase";
import LogIn from "./ForgotPassword";
import SignUp from "./SignUp";
function TextPost(props) {
  const [fakeCount, setFakeCount] = useState(props.likes);
  let {
    setDisplaySignUp,
    displaySignUp,
    setDisplayLogIn,
    displayLogIn,
    setIsLoggedIn,
    setDisplayForgotPw,
    displayForgotPw,
    isLoggedIn,
    setPostPopUp,
  } = props;
  let [voteStyle, setVoteStyle] = useState(null);
  let [downVoteStyle, setDownVoteStyle] = useState(null);
  const [displayOptions, setDisplayOptions] = useState(false);

  const [displayLogInFromText, setDisplayLogInFromText] = useState(false);
  const [displaySignUpFromText, setDisplaySignUpFromText] = useState(false);
  let openPost = () => {
    setPostPopUp(true);
  };

  let toggleMenu = () => {
    setDisplayOptions(!displayOptions);
  };

  let showLogin = () => {
    setDisplayLogIn(!displayLogIn);
  };

  const upVote = async (id) => {
    if (!isLoggedIn) {
      showLogin();
      return;
    } else {
      await updateDoc(doc(db, "posts", props.id), {
        "stats.votes": increment(1),
      });
      if (downVoteStyle !== null) {
        setDownVoteStyle(null);
      }
      setVoteStyle("upVoteStyle");
      setFakeCount(fakeCount + 1);
    }
  };
  const downVote = async (id) => {
    if (!isLoggedIn) {
      showLogin();
      return;
    } else {
      await updateDoc(doc(db, "posts", props.id), {
        "stats.votes": increment(-1),
      });
      if (voteStyle !== null) {
        setVoteStyle(null);
      }
      setDownVoteStyle("downVoteStyle");
      setFakeCount(fakeCount - 1);
    }
  };
  return (
    <>
      <div className="outerPostContainer">
        <div className="innerPostContainer">
          <div className="likeContainer">
            <div className="likeContainer-x1">
              <div className="like-container-x2">
                <button className="upVote" onClick={() => upVote()}>
                  <span className={voteStyle}>
                    <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
                  </span>
                </button>
                <div className="voteCount">{fakeCount}</div>
                <button className="downVote" onClick={() => downVote()}>
                  <span className={downVoteStyle}>
                    <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="postFormatContainerHP" onClick={() => openPost()}>
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
                  <span className="extraSpans" id="esSpace">
                    •
                  </span>
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
                      {props.postDate}
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
                <h3>{props.postTitle}</h3>
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
        {displayOptions ? (
          <div className="userOptionsContainer">
            <div className="myStuff">
              <div className="myProfile">
                <a href="#" onClick={() => toggleMenu()}>
                  Create Account
                </a>
              </div>
            </div>
            <div className="additionalStuff">
              <a href="#">Advertise on Reddit</a>
              <a href="#">Reddit Coins</a>
              <a href="#">Premium</a>
              <a href="#">Help Center</a>
              <a href="#">Terms & Policies</a>
              <a href="#">User Agreement</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Content Policy</a>
              <a href="#">Moderator Guidelines</a>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default TextPost;
