import React from "react";
import TitleBody from "./TitleBody";

function TopInfoContainer(props) {
  return (
    <div className="top-info-container">
      <div className="post-infoFP">
        <div className="post-pic">
          <a href="#">{/* link to sub img */}</a>
        </div>
        <div className="subMoreInfoFP">
          <div className="subAndPosterName">
            <div className="subName">
              <a href="#">{props.postSub}</a>
            </div>
            <span className="extraSpans">•</span>
            <span className="extraSpans">Posted by</span>
            <div className="posterName">
              <div>
                <a href="#">u/{props.username}</a>
              </div>
            </div>
            <span className="timeStamp">
              <a href="#">10 Hours ago</a>
            </span>
          </div>
        </div>
      </div>
      <TitleBody
        postbody={props.postBody}
        comments={props.comments}
        postTitle={props.postTitle}
      />
    </div>
  );
}

export default TopInfoContainer;
