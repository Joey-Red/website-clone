import React from "react";
import CommentShareSaveButtons from "./CommentShareSaveButtons";
import { Markup } from "interweave";
function TitleBody(props) {
  const { postBody } = props;
  return (
    <div className="postBodyContainer">
      <div className="wrapperTEST">
        <div className="postBodyContainerFPInner">
          <div className="postTitleFPStrict">
            <h3 id="FPTitle">{props.postTitle}</h3>
          </div>
          <div className="postBodyMargin">
            <div className="postBodyText">
              <Markup blockList={"p"} content={postBody} />
            </div>
            <CommentShareSaveButtons comments={props.comments} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleBody;
