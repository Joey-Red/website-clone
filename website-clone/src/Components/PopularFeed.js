import React, { useState } from "react";
import TextPost from "./TextPost";
import PostFullPage from "./PostFullPage";
import { collection, doc, setDoc, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { getDatabase, ref, set } from "firebase/database";

// const postsRef = collection(db, 'posts');

function PopularFeed(props) {
  const { postPopUp, setPostPopUp, isLoggedIn } = props;
  let postData = {
    postSub: "r/AskReddit",
    postTitle:
      "What did you eat as a kid that you now realize was really f*cked up?",
    postBody: "I used to eat xyz",
    comments: 14000,
    likes: 23000,
    username: "MawedUpScribble",
  };
  let postData2 = {
    postSub: "r/Economics",
    postTitle: "The Mystery of the Declining U.S. Birth Rate | Econofact",
    postBody: "I used to eat xyz",
    comments: 808,
    likes: 1000,
    username: "just-a-dreamer",
  };
  // Maybe do a loop returning like 10 posts or something

  // function writeUserData(userId, name, email) {
  //   const db = getDatabase();
  //   set(ref(db, "users/" + userId), {
  //     username: name,
  //     email: email,
  //   });
  // }

  return (
    <>
      <TextPost
        postPopUp={postPopUp}
        setPostPopUp={setPostPopUp}
        postSub={postData2.postSub}
        postTitle={postData2.postTitle}
        comments={postData2.comments}
        likes={postData2.likes}
        username={postData2.username}
        postBody={postData2.postBody}
      />
      {postPopUp ? (
        <PostFullPage
          isLoggedIn={isLoggedIn}
          postPopUp={postPopUp}
          setPostPopUp={setPostPopUp}
          postSub={postData.postSub}
          postTitle={postData.postTitle}
          comments={postData.comments}
          likes={postData.likes}
          username={postData.username}
          postBody={postData.postBody}
        />
      ) : null}
    </>
  );
}

export default PopularFeed;
