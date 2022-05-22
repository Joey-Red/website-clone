import React from "react";
import { faArrowUp, faArrowDown, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { db } from "../../firebase";
import { increment, updateDoc, doc } from "firebase/firestore";
function UpDownVotes(props) {
  const upVote = async (id) => {
    await updateDoc(doc(db, "posts", props.id), {
      "stats.votes": increment(1),
    });
    props.likes = props.likes + 1;
  };
  const downVote = async (id) => {
    await updateDoc(doc(db, "posts", props.id), {
      "stats.votes": increment(-1),
    });
    props.likes = props.likes - 1;
  };
  return (
    <div className="likeContainerFP">
      <div className="likeContainer-x1FP">
        <div className="like-container-x2FP">
          <button className="upVote" onClick={() => upVote()}>
            <span>
              <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
            </span>
          </button>
          <div className="voteCount">{props.likes}</div>
          <button className="downVote" onClick={() => downVote()}>
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
