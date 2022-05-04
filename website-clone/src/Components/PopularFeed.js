import React, { useState } from "react";
import TextPost from "./TextPost";
// import PostFullPage from "./PostFullPageOLDNOTUSED";
import PostFullPage from "./PostFullPage";

function PopularFeed(props) {
  const { postPopUp, setPostPopUp } = props;
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
  // let stringNum = Array.from(String(postData.likes), Number);
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
      <TextPost
        postPopUp={postPopUp}
        setPostPopUp={setPostPopUp}
        postSub={postData.postSub}
        postTitle={postData.postTitle}
        comments={postData.comments}
        likes={postData.likes}
        username={postData.username}
        postBody={postData.postBody}
      />
      <TextPost
        postPopUp={postPopUp}
        setPostPopUp={setPostPopUp}
        postSub={postData.postSub}
        postTitle={postData.postTitle}
        comments={postData.comments}
        likes={postData.likes}
        username={postData.username}
        postBody={postData.postBody}
      />
      <TextPost
        postPopUp={postPopUp}
        setPostPopUp={setPostPopUp}
        postSub={postData.postSub}
        postTitle={postData.postTitle}
        comments={postData.comments}
        likes={postData.likes}
        username={postData.username}
        postBody={postData.postBody}
      />
      <TextPost
        postPopUp={postPopUp}
        setPostPopUp={setPostPopUp}
        postSub={postData.postSub}
        postTitle={postData.postTitle}
        comments={postData.comments}
        likes={postData.likes}
        username={postData.username}
        postBody={postData.postBody}
      />
      <TextPost
        postPopUp={postPopUp}
        setPostPopUp={setPostPopUp}
        postSub={postData.postSub}
        postTitle={postData.postTitle}
        comments={postData.comments}
        likes={postData.likes}
        username={postData.username}
        postBody={postData.postBody}
      />
      <TextPost
        postPopUp={postPopUp}
        setPostPopUp={setPostPopUp}
        postSub={postData.postSub}
        postTitle={postData.postTitle}
        comments={postData.comments}
        likes={postData.likes}
        username={postData.username}
        postBody={postData.postBody}
      />
      <TextPost
        postPopUp={postPopUp}
        setPostPopUp={setPostPopUp}
        postSub={postData.postSub}
        postTitle={postData.postTitle}
        comments={postData.comments}
        likes={postData.likes}
        username={postData.username}
        postBody={postData.postBody}
      />
      <TextPost
        postPopUp={postPopUp}
        setPostPopUp={setPostPopUp}
        postSub={postData.postSub}
        postTitle={postData.postTitle}
        comments={postData.comments}
        likes={postData.likes}
        username={postData.username}
        postBody={postData.postBody}
      />
      <TextPost
        postPopUp={postPopUp}
        setPostPopUp={setPostPopUp}
        postSub={postData.postSub}
        postTitle={postData.postTitle}
        comments={postData.comments}
        likes={postData.likes}
        username={postData.username}
        postBody={postData.postBody}
      />
      <TextPost
        postPopUp={postPopUp}
        setPostPopUp={setPostPopUp}
        postSub={postData.postSub}
        postTitle={postData.postTitle}
        comments={postData.comments}
        likes={postData.likes}
        username={postData.username}
        postBody={postData.postBody}
      />
      <TextPost
        postPopUp={postPopUp}
        setPostPopUp={setPostPopUp}
        postSub={postData.postSub}
        postTitle={postData.postTitle}
        comments={postData.comments}
        likes={postData.likes}
        username={postData.username}
        postBody={postData.postBody}
      />
      <TextPost
        postPopUp={postPopUp}
        setPostPopUp={setPostPopUp}
        postSub={postData.postSub}
        postTitle={postData.postTitle}
        comments={postData.comments}
        likes={postData.likes}
        username={postData.username}
        postBody={postData.postBody}
      />
      <TextPost
        postPopUp={postPopUp}
        setPostPopUp={setPostPopUp}
        postSub={postData.postSub}
        postTitle={postData.postTitle}
        comments={postData.comments}
        likes={postData.likes}
        username={postData.username}
        postBody={postData.postBody}
      />
      <TextPost
        postPopUp={postPopUp}
        setPostPopUp={setPostPopUp}
        postSub={postData.postSub}
        postTitle={postData.postTitle}
        comments={postData.comments}
        likes={postData.likes}
        username={postData.username}
        postBody={postData.postBody}
      />
      <TextPost
        postPopUp={postPopUp}
        setPostPopUp={setPostPopUp}
        postSub={postData.postSub}
        postTitle={postData.postTitle}
        comments={postData.comments}
        likes={postData.likes}
        username={postData.username}
        postBody={postData.postBody}
      />
      {postPopUp ? (
        <PostFullPage
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
