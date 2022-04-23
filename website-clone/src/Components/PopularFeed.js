import React from "react";
import TextPost from "./TextPost";

function PopularFeed() {
  let postData = {
    postSub: "r/AskReddit",
    postTitle:
      "What did you eat as a kid that you now realize was really f*cked up?",
    comments: 14000,
    likes: 23000,
    username: "MawedUpScribble",
  };
  let postData2 = {
    postSub: "r/Economics",
    postTitle: "The Mystery of the Declining U.S. Birth Rate | Econofact",
    comments: 808,
    likes: 1000,
    username: "just-a-dreamer",
  };
  // Maybe do a loop returning like 10 posts or something
  let stringNum = Array.from(String(postData.likes), Number);
  console.log(stringNum);
  // if (postData.likes > 999) {
  //   postData.likes ===
  // } else if (postData.likes > 9999) {
  //   postData.likes ===
  // }
  return (
    <div>
      <TextPost
        postSub={postData.postSub}
        postTitle={postData.postTitle}
        comments={postData.comments}
        likes={postData.likes}
        username={postData.username}
      />
      <TextPost
        postSub={postData2.postSub}
        postTitle={postData2.postTitle}
        comments={postData2.comments}
        likes={postData2.likes}
        username={postData2.username}
      />
    </div>
  );
}

export default PopularFeed;
