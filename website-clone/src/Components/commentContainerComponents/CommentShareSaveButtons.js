import React from "react";
import {
  faComment,
  faShare,
  faBookmark,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CommentShareSaveButtons(props) {
  return (
    <div className="commentShareSave">
      <div className="cSSContainerFP">
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
    </div>
  );
}

export default CommentShareSaveButtons;
