import React, { useState, useEffect } from "react";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextEditorDRAFTJS from "./TextEditorDRAFTJS";
import CommentContainer from "./CommentContainer";
import FPRightSide from "./commentContainerComponents/FPRightSide";
import UpDownVotes from "./commentContainerComponents/UpDownVotes";
import TopInfoContainer from "./commentContainerComponents/TopInfoContainer";
import {
  addDoc,
  collection,
  getDocs,
  doc,
  updateDoc,
  increment,
} from "firebase/firestore";
import { auth, db } from "../firebase";

function PostFullPage(props) {
  const [draftjs, setDraftJS] = useState({ content: "" });
  const [commentBody, setCommentBody] = useState("");
  const [commentDisplayContainer, setCommentDisplayContainer] = useState([]);
  const [seeOwnComment, setSeeOwnComment] = useState(false);
  const [cursor, setCursor] = useState("default");
  let { setPostPopUp, isLoggedIn, currPostId } = props;
  let closePost = () => {
    setPostPopUp(false);
    window.location.pathname = "/";
  };
  const handleEditor = (e) => {
    setCommentBody({ ...draftjs, content: e });
  };
  let createDay = new Date();
  createDay.getDay();
  let dateString = createDay.toDateString();
  let modifiedDate = dateString.slice(4);
  const submitComment = async () => {
    await addDoc(collection(db, "posts", props.currPostId, "comments"), {
      commentBody,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
        postDate: modifiedDate,
      },
      stats: {
        votes: 1,
      },
    });
    setSeeOwnComment(!seeOwnComment);
    await updateDoc(doc(db, "posts", props.currPostId), {
      "stats.comments": increment(1),
    });
    setCursor("progress");
    setTimeout(() => {
      setCursor("default");
    }, 1000);
  };

  useEffect(() => {
    let getPosts = async () => {
      const commentsDoc = await getDocs(
        collection(db, "posts", currPostId, "comments")
      );
      setCommentDisplayContainer(
        commentsDoc.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getPosts();
  }, [currPostId, seeOwnComment]);

  return (
    <div className="postFullScreenContainer" style={{ cursor: cursor }}>
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
                        <UpDownVotes
                          likes={props.likes}
                          id={props.currPostId}
                          isLoggedIn={isLoggedIn}
                        />
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
                        {commentDisplayContainer.map((post) => {
                          return (
                            // <Editor readOnly={readOnly}/>
                            <div key={post.id}>
                              <CommentContainer
                                username={post.author.username}
                                likes={post.stats.votes}
                                commentBody={post.commentBody.content}
                              />
                            </div>
                          );
                        })}
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
