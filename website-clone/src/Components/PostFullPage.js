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
  let { setPostPopUp } = props;
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
                  <div className="FPLeftSide">
                    <UpDownVotes likes={props.likes} />
                    <TopInfoContainer
                      postbody={props.postBody}
                      comments={props.comments}
                      postTitle={props.postTitle}
                      postSub={props.postSub}
                      username={props.username}
                    />
                    <div className="holdsAllComments">
                      <TextEditorDRAFTJS />
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
