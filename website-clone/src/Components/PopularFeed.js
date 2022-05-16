import React, { useState, useEffect } from "react";
import TextPost from "./TextPost";
import PostFullPage from "./PostFullPage";
import { db, auth } from "../firebase";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";

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
  const [postList, setPostList] = useState([]);
  const [tempCom, setTempCom] = useState([]);
  const [livePostList, setLivePostList] = useState([]);
  const [loadCount, setLoadCount] = useState(0);
  const postArray = [];
  // const postsCollectionRef = collection(db, "posts");

  // Maybe do a loop returning like 10 posts or something
  const loadPosts = () => {
    setLoadCount(loadCount + 1);
    console.log(loadCount);
  };
  useEffect(() => {
    let getComs = async () => {
      const getColList = await getDocs(collection(db, "communities"));
      setTempCom(getColList.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      // So I need to get the list of communities, DONE-
      setCommunities(tempCom.map((com) => com.id));

      /*
      DO NOT CHANGE
      // const postList = await getDocs(
      //   collection(db, "communities", communities[1], "posts")
      // );
      // console.log(
      //   postList.docs[1]._document.data.value.mapValue.fields.postTitle
      // ); this successfully pulls title
      DO NOT CHANGE
      */

      // get into them,grab posts,
      for (let i = 0; i < communities.length; i++) {
        const postList = await getDocs(
          collection(db, "communities", communities[i], "posts")
        );
        for (let j = 0; j < postList.docs.length; j++) {
          //Checking to see if the post is the first one made in the community
          //Because firebase requires a field in order to be read, so upon community creation
          //A post is made with a property "firstPost"
          if (
            postList.docs[
              j
            ]._document.data.value.mapValue.fields.hasOwnProperty("firstPost")
          ) {
            continue;
          } else {
            postArray.push(
              postList.docs[j]._document.data.value.mapValue.fields
            );
            // console.log(postArray.docs[1]._document.data.value.mapValue.fields);
          }
        }
      }
      // console.log(livePostList);

      // display post info
    };
    getComs();
  }, [loadCount]);

  return (
    <>
      <button onClick={() => loadPosts()}>Load More Posts</button>
      {postArray.map((post) => {
        return (
          <TextPost
            key={post.id}
            postPopUp={postPopUp}
            setPostPopUp={setPostPopUp}
            postSub={postData2.postSub}
            postTitle={post.postTitle.stringValue}
            comments={postData2.comments}
            likes={postData2.likes}
            username={post.author.mapValue.fields.username.stringValue}
            postBody={post.postBody.mapValue.fields.content.stringValue}
          />
        );
      })}
    </>
  );
}

export default PopularFeed;

// {
//   postPopUp ? (
//     <PostFullPage
//       isLoggedIn={isLoggedIn}
//       key={post.id}
//       postPopUp={postPopUp}
//       setPostPopUp={setPostPopUp}
//       postSub={postData2.postSub}
//       postTitle={post.title}
//       comments={postData2.comments}
//       likes={postData2.likes}
//       username={post.author.username}
//       postBody={post.body}
//     />
//   ) : null;
// }
