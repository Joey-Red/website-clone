import React, { useState, useEffect } from "react";
import { faArrowUp, faArrowDown, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { db, auth } from "../../firebase";
import { increment, updateDoc, doc } from "firebase/firestore";
function UpDownVotes(props) {
  const { isLoggedIn } = props;
  let [fakeCount, setFakeCount] = useState(props.likes);
  let [voteStyle, setVoteStyle] = useState(null);
  let [downVoteStyle, setDownVoteStyle] = useState(null);
  const upVote = async (id) => {
    if (!isLoggedIn) {
      return;
    } else {
      await updateDoc(doc(db, "posts", props.id), {
        "stats.votes": increment(1),
      });
      if (downVoteStyle !== null) {
        setDownVoteStyle(null);
      }
      setVoteStyle("upVoteStyle");
      setFakeCount(props.likes + 1);
    }
  };
  const downVote = async (id) => {
    if (!isLoggedIn) {
      return;
    } else {
      await updateDoc(doc(db, "posts", props.id), {
        "stats.votes": increment(-1),
      });
      if (voteStyle !== null) {
        setVoteStyle(null);
      }
      setFakeCount(props.likes - 1);
      setDownVoteStyle("downVoteStyle");
    }
  };
  useEffect(() => {
    setFakeCount(props.likes);
  }, [props.likes]);

  return (
    <div className="likeContainerFP">
      <div className="likeContainer-x1FP">
        <div className="like-container-x2FP">
          <button className="upVote" onClick={() => upVote()}>
            <span className={voteStyle}>
              <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
            </span>
          </button>
          <div className="voteCount">{fakeCount}</div>

          <button className="downVote" onClick={() => downVote()}>
            <span className={downVoteStyle}>
              <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpDownVotes;
