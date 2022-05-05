import React from "react";
import { faArrowUp, faArrowDown, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styleSheet5.css";
import TextEditorDRAFTJS from "./TextEditorDRAFTJS";
import CommentContainer from "./CommentContainer";
import FPRightSide from "./commentContainerComponents/FPRightSide";
import UpDownVotes from "./commentContainerComponents/UpDownVotes";
import TopInfoContainer from "./commentContainerComponents/TopInfoContainer";
function PostFullPage(props) {
  let { setPostPopUp, isLoggedIn } = props;
  let closePost = () => {
    setPostPopUp(false);
  };
  let commentData = {
    commentBody:
      "I used to eat apples. I used to eat apples.I used to eat apples. I used to eat apples.",
    likes: 100,
    username: "just-a-dreamer",
  };
  let commentData2 = {
    commentBody: "lorem lorem.",
    likes: 10,
    username: "radGuy9",
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
              <div className="postFormatContainerOuter">
                <div className="postFormatContainerInner">
                  <div className="FPLeftSideOuter">
                    <div className="FPLeftSide">
                      <div className="postMutator">
                        <UpDownVotes likes={props.likes} />
                        <TopInfoContainer
                          postBody={props.postBody}
                          comments={props.comments}
                          postTitle={props.postTitle}
                          postSub={props.postSub}
                          username={props.username}
                        />
                      </div>
                      <div className="holdsAllComments">
                        {isLoggedIn ? (
                          <TextEditorDRAFTJS />
                        ) : (
                          <div className="logInToComment">
                            <span>Log in or sign up to leave a comment</span>
                            <div className="ioButtonComment">
                              <div className="inComment">
                                <button>
                                  <a
                                    href="#"
                                    className="ioButton iButton"
                                    id="iButtonComment"
                                  >
                                    Log In
                                  </a>
                                </button>
                              </div>
                              <div className="outComment">
                                <button>
                                  <a
                                    href="#"
                                    className="ioButton oButton"
                                    id="oButtonComment"
                                  >
                                    Sign Up
                                  </a>
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                        {/* <TextEditorDRAFTJS /> */}
                        <CommentContainer
                          username={commentData.username}
                          likes={commentData.likes}
                          commentBody={commentData.commentBody}
                        />
                        <CommentContainer
                          username={commentData2.username}
                          likes={commentData2.likes}
                          commentBody={commentData2.commentBody}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="FPRightSide">
                    <FPRightSide />
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
