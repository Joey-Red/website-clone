import React from "react";
import TitleBody from "./TitleBody";
import { Link } from "react-router-dom";

function TopInfoContainer(props) {
  let { username, postSub } = props;
  let hrefLink = "/website-clone/u/" + username;
  let hrefLinkCom = "/website-clone/r/" + postSub;
  let closePost = () => {
    props.setPostPopUp(false);
  };
  return (
    <div className="top-info-container">
      <div className="post-infoFP">
        <div className="post-pic">
          <a href="#">{/* link to sub img */}</a>
        </div>
        <div className="subMoreInfoFP">
          <div className="subAndPosterName">
            <div className="subName">
              <Link
                href={hrefLinkCom}
                to={hrefLinkCom}
                onClick={() => closePost()}
              >
                <a href="#" className="subNameLink">
                  r/{props.postSub}
                </a>
              </Link>
            </div>
            <span className="extraSpans" id="esSpace">
              •
            </span>
            <span className="extraSpans">Posted by</span>
            <div className="posterName">
              <div>
                <Link href={hrefLink} to={hrefLink} onClick={() => closePost()}>
                  <a href="#">u/{props.username}</a>
                </Link>
              </div>
            </div>
            <span className="timeStamp">
              <a href="#">10 Hours ago</a>
            </span>
          </div>
        </div>
      </div>
      <TitleBody
        postBody={props.postBody}
        comments={props.comments}
        postTitle={props.postTitle}
      />
    </div>
  );
}

export default TopInfoContainer;
