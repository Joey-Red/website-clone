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

// const postsRef = collection(db, 'posts');

// let postData = {
//   postSub: "r/AskReddit",
//   postTitle:
//     "What did you eat as a kid that you now realize was really f*cked up?",
//   postBody: "I used to eat xyz",
//   comments: 14000,
//   likes: 23000,
//   username: "MawedUpScribble",
// };
let postData2 = {
  postSub: "r/Economics",
  postTitle: "The Mystery of the Declining U.S. Birth Rate | Econofact",
  postBody: "I used to eat xyz",
  comments: 808,
  likes: 1000,
  username: "just-a-dreamer",
};

function PopularFeed(props) {
  const { postPopUp, setPostPopUp, isLoggedIn, communities, setCommunities } =
    props;
  const [livePostList, setLivePostList] = useState([]);
  const [currentPost, setCurrentPost] = useState([]);
  const [currAuthor, setCurrAuthor] = useState("");
  const [currPostDate, setCurrPostDate] = useState("");
  const [currComName, setCurrComName] = useState("");
  const [currPostBody, setCurrPostBody] = useState("");
  const [currPostTitle, setCurrPostTitle] = useState("");
  const [currVoteCount, setCurrVoteCount] = useState(1);
  const [currCommentCount, setCurrCommentCount] = useState(0);

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
      // console.log(docSnap.data());
      let data = docSnap.data();
      setCurrAuthor(data.author.username);
      setCurrPostDate(data.author.postDate);
      setCurrComName(data.communityName.postingToCom);
      setCurrPostBody(data.postBody.content);
      setCurrPostTitle(data.postTitle);
    };
    getPost();
  };

  return (
    <>
      {livePostList.map((post) => {
        return (
          <div key={post.id} onClick={() => setPostId(post.id)}>
            <TextPost
              postPopUp={postPopUp}
              setPostPopUp={setPostPopUp}
              postSub={post.communityName.postingToCom}
              postTitle={post.postTitle}
              comments={postData2.comments}
              likes={postData2.likes}
              username={post.author.username}
              postBody={post.postBody.content}
              postDate={post.author.postDate}
              isLoggedIn={isLoggedIn}
            />
          </div>
        );
      })}
      {/* onclick take post.id and fetch it :) */}
      {/* {currentPost.map((post) => { */}
      {/* return  */}
      {postPopUp ? (
        <PostFullPage
          postPopUp={postPopUp}
          setPostPopUp={setPostPopUp}
          postSub={currComName}
          postTitle={currPostTitle}
          comments={postData2.comments}
          likes={postData2.likes}
          username={currAuthor}
          postBody={currPostBody}
          postDate={currPostDate}
          isLoggedIn={isLoggedIn}
        />
      ) : null}
      {/* })} */}
    </>
  );
}

export default PopularFeed;
