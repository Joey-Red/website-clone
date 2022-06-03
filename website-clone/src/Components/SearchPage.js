import React, { useState, useEffect } from "react";
import TextPost from "../Components/TextPost";
import { db, auth } from "../firebase";
import {
  getDocs,
  collection,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import PostFullPage from "./PostFullPage";
import { Link } from "react-router-dom";

function SearchPage(props) {
  const { isLoggedIn, postPopUp, setPostPopUp, formValue, setFormValue } =
    props;
  const [searchPostList, setSearchPostList] = useState([]);
  const [searchComList, setSearchComList] = useState([]);
  let searchTerm = localStorage.getItem("searchQuery");
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
      const postsRef = collection(db, "posts");
      const q = query(postsRef, where("postTitle", "==", searchTerm));
      const querySnapshot = await getDocs(q);
      setSearchPostList(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    let getComs = async () => {
      const postsRef = collection(db, "posts");
      const q = query(
        postsRef,
        where("communityName.postingToCom", "==", searchTerm)
      );
      const querySnapshot = await getDocs(q);
      setSearchComList(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getPosts();
    getComs();
  }, []);
  const setPostId = (id) => {
    let getPost = async () => {
      const postDoc = doc(db, "posts", id);
      const docSnap = await getDoc(postDoc);
      let data = docSnap.data();
      setCurrAuthor(data.author.username);
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

  let searchPopUp = () => {
    setPostPopUp(true);
  };
  return (
    <>
      <div className="staleButtonsContainer">
        <div>
          <button className="postButtonQuery">Posts</button>
        </div>
        <div>
          <button className="staleButton">Comments</button>
        </div>
        <div>
          <button className="staleButton">Communities</button>
        </div>
        <div>
          <button className="staleButton staleButtonPeople">People</button>
        </div>
      </div>
      <div className="searchPageContainer">
        {searchPostList.length > 0 ? null : (
          <div className="noPostFoundMsg">
            No posts for {searchTerm} were found, at this time search must match
            with post title exactly.<br></br>
          </div>
        )}
        {searchComList.length > 0 ? null : (
          <div className="noPostFoundMsg">
            No communities named {searchTerm} were found, at this time search
            query must match with community name exactly.
          </div>
        )}
        {searchPostList.map((post) => {
          return (
            <div
              key={post.id}
              onClick={() => setPostId(post.id)}
              className="searchQueryPost"
            >
              <div onClick={() => searchPopUp()} className="postFound">
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
            </div>
          );
        })}
        <div className="searchComListQuery">
          {searchComList.length > 0 ? (
            <div className="searchComHeader">Communities</div>
          ) : null}
          {searchComList.map((post) => {
            return (
              <div id={post.id} className="searchQueryCom" key={post.id}>
                <div className="queryComName">
                  <Link
                    to={`/website-clone/r/` + post.communityName.postingToCom}
                  >
                    {post.communityName.postingToCom}
                  </Link>
                  <div className="searchQueryComInfo">5 Billion Members</div>
                </div>
                <button className="joinComQueryButton">Join</button>
              </div>
            );
          })}
        </div>
      </div>
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

export default SearchPage;
