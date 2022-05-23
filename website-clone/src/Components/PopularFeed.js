import React, { useState, useEffect } from "react";
import TextPost from "./TextPost";
import PostFullPage from "./PostFullPage";
import { db, auth } from "../firebase";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  query,
  where,
  getDoc,
} from "firebase/firestore";

function PopularFeed(props) {
  const { postPopUp, setPostPopUp, isLoggedIn } = props;
  const [livePostList, setLivePostList] = useState([]);
  const [currAuthor, setCurrAuthor] = useState("");
  const [currPostDate, setCurrPostDate] = useState("");
  const [currComName, setCurrComName] = useState("");
  const [currPostBody, setCurrPostBody] = useState("");
  const [currPostTitle, setCurrPostTitle] = useState("");
  const [currVoteCount, setCurrVoteCount] = useState(1);
  const [currCommentCount, setCurrCommentCount] = useState(0);
  const [currPostId, setCurrPostId] = useState("");
  useEffect(() => {
    let getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      setLivePostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const setPostId = (id) => {
    let getPost = async () => {
      const postDoc = doc(db, "posts", id);
      const docSnap = await getDoc(postDoc);
      let data = docSnap.data();
      // setCurrAuthor(data.author.username);
      setCurrPostDate(data.author.postDate);
      setCurrComName(data.communityName.postingToCom);
      setCurrPostBody(data.postBody.content);
      setCurrPostTitle(data.postTitle);
      setCurrPostId(id);
      setCurrVoteCount(data.stats.votes);
      setCurrCommentCount(data.stats.comments);
    };
    getPost();
  };

  return (
    <>
      {livePostList.map((post) => {
        return (
          <div key={post.id} onClick={() => setPostId(post.id)}>
            <TextPost
              id={post.id}
              postPopUp={postPopUp}
              setPostPopUp={setPostPopUp}
              postSub={post.communityName.postingToCom}
              postTitle={post.postTitle}
              comments={post.stats.comments}
              likes={post.stats.votes}
              username={post.author.username}
              postBody={post.postBody.content}
              postDate={post.author.postDate}
              isLoggedIn={isLoggedIn}
            />
          </div>
        );
      })}
      {postPopUp ? (
        <PostFullPage
          postPopUp={postPopUp}
          setPostPopUp={setPostPopUp}
          postSub={currComName}
          postTitle={currPostTitle}
          comments={currCommentCount}
          likes={currVoteCount}
          username={currAuthor}
          postBody={currPostBody}
          postDate={currPostDate}
          isLoggedIn={isLoggedIn}
          currPostId={currPostId}
          setCurrPostId={setCurrPostId}
        />
      ) : null}
    </>
  );
}

export default PopularFeed;
