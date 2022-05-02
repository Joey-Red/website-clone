import React from "react";
import { faArrowUp, faArrowDown, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UpDownVotes(props) {
  return (
    <div className="likeContainerFP">
      <div className="likeContainer-x1FP">
        <div className="like-container-x2FP">
          <button className="upVote">
            <span>
              <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
            </span>
          </button>
          <div className="voteCount">{props.likes}</div>
          <button className="downVote">
            <span>
              <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpDownVotes;
