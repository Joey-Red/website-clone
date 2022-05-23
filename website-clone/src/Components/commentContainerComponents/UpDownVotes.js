import React, { useState, useEffect } from "react";
import { faArrowUp, faArrowDown, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { db, auth } from "../../firebase";
import { increment, updateDoc, doc } from "firebase/firestore";
function UpDownVotes(props) {
  const { isLoggedIn } = props;
  let [fakeCount, setFakeCount] = useState(props.likes);
  const upVote = async (id) => {
    if (!isLoggedIn) {
      return;
    } else {
      await updateDoc(doc(db, "posts", props.id), {
        "stats.votes": increment(1),
      });
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
      setFakeCount(props.likes - 1);
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
            <span>
              <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
            </span>
          </button>
          {/* <div className="voteCount">{fakeCount}</div> */}
          <div className="voteCount">{fakeCount}</div>

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
