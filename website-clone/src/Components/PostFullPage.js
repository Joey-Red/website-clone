import React, { useState, useEffect } from "react";
import { faArrowUp, faArrowDown, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "../styleSheet5.css";
import TextEditorDRAFTJS from "./TextEditorDRAFTJS";
import CommentContainer from "./CommentContainer";
import FPRightSide from "./commentContainerComponents/FPRightSide";
import UpDownVotes from "./commentContainerComponents/UpDownVotes";
import TopInfoContainer from "./commentContainerComponents/TopInfoContainer";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { addDoc, collection, getDocs, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import uniqid from "uniqid";
import { Editor } from "draft-js";
function PostFullPage(props) {
  const [commentState, setCommentState] = useState("false");
  const [draftjs, setDraftJS] = useState({ content: "" });
  const [commentBody, setCommentBody] = useState("");
  const [commentDisplayContainer, setCommentDisplayContainer] = useState([]);
  // const [submitCommentState, setSubmitCommentState] = useState(false);
  let { setPostPopUp, isLoggedIn, currCommentCount } = props;
  // console.log("peepoLoggedIn?" + isLoggedIn);
  let closePost = () => {
    setPostPopUp(false);
  };
  // console.log(submitCommentState);
  useEffect(() => {
    if (currCommentCount > 0) {
      setCommentState(true);
    } else {
      setCommentState(false);
    }
  }, []);
  const handleEditor = (e) => {
    setCommentBody({ ...draftjs, content: e });
  };
  let createDay = new Date();
  createDay.getDay();
  let dateString = createDay.toDateString();
  let modifiedDate = dateString.slice(4);
  // let postId = uniqid();
  const submitComment = async () => {
    await addDoc(collection(db, "posts", props.currPostId, "comments"), {
      commentBody,
      // communityName: { postingToCom },
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
        postDate: modifiedDate,
      },
      stats: {
        // may have to map comments to get length for number rather than a formula
        votes: 1,
      },
    });
  };

  // useEffect(() => {
  let getPosts = async () => {
    const commentsDoc = await getDocs(
      collection(db, "posts", props.currPostId, "comments")
    );
    setCommentDisplayContainer(
      commentsDoc.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };
  getPosts();

  // ?^
  // }, []);
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
                          <div className="commentButtonContainer">
                            <TextEditorDRAFTJS handleEditor={handleEditor} />
                            <button
                              className="submitComment"
                              onClick={() => submitComment()}
                            >
                              Comment
                            </button>
                          </div>
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
                        {/* commentDisplayContainer.length > 0 */}
                        {/* ?  */}
                        {commentDisplayContainer.map((post) => {
                          return (
                            // <Editor readOnly={readOnly}/>
                            <CommentContainer
                              username={post.author.username}
                              likes={post.stats.votes}
                              commentBody={post.commentBody.content}
                            />
                          );
                        })}
                        {/* : null */}
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
