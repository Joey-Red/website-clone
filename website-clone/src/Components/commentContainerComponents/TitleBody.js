import React from "react";
import CommentShareSaveButtons from "./CommentShareSaveButtons";
function TitleBody(props) {
  return (
    <div className="postBodyContainer">
      <div className="wrapperTEST">
        <div className="postBodyContainerFPInner">
          <div className="postTitleFPStrict">
            <h3 id="FPTitle">{props.postTitle}</h3>
          </div>
          <div className="postBodyMargin">
            <div className="postBodyText">{props.postBody}</div>
            <CommentShareSaveButtons comments={props.comments} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleBody;
