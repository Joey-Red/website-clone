import React, { useState, useEffect } from "react";
import SortButtonsBar from "./SortButtonsBar";
import profilePic from "./img/userPhImg.png";
import TextPost from "./TextPost";
import { db } from "../firebase";
import PostFullPage from "./PostFullPage";
import {
  getDocs,
  collection,
  query,
  where,
  getDoc,
  doc,
} from "firebase/firestore";
function ProfilePage(props) {
  const { postPopUp, setPostPopUp, isLoggedIn } = props;
  const [profileUser, setProfileUser] = useState("Username");
  const [livePostList, setLivePostList] = useState([]);
  const [currAuthor, setCurrAuthor] = useState("");
  const [currPostDate, setCurrPostDate] = useState("");
  const [currComName, setCurrComName] = useState("");
  const [currPostBody, setCurrPostBody] = useState("");
  const [currPostTitle, setCurrPostTitle] = useState("");
  const [currVoteCount, setCurrVoteCount] = useState(1);
  const [currCommentCount, setCurrCommentCount] = useState(0);
  const [currPostId, setCurrPostId] = useState("");
  let url = window.location.href;
  let urlSplit = url.split("/");
  let searchUserTemp = urlSplit[4];
  let searchUser = decodeURI(searchUserTemp);
  useEffect(() => {
    let getPosts = async () => {
      setProfileUser(searchUser);

      const postsRef = collection(db, "posts");
      const q = query(postsRef, where("author.username", "==", searchUser));
      const querySnapshot = await getDocs(q);
      setLivePostList(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getPosts();
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

  return (
    <>
      <div className="pfpContainer">
        <div className="pfpSortingButtonsContainer">
          <div className="sortingButton">
            <a href="#">Overview</a>
            <a href="#">Posts</a>
            <a href="#">Comments</a>
            <a href="#">Saved</a>
            <a href="#">Upvoted</a>
            <a href="#">Downvoted</a>
          </div>
        </div>
      </div>
      <div className="outermost-popular-container">
        <div className="outer-menu-control-containerSmall">
          <SortButtonsBar />
          {livePostList.length === 0 ? (
            <>
              <div className="emptyPostBody">
                <div className="beFirstText">
                  `hmm... u/{profileUser} hasn't posted anything`
                </div>
              </div>
            </>
          ) : (
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
            </>
          )}
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
        </div>
        <div className="top-x-communities-container" id="orig">
          <div className="top-communities">
            <div id="tchProfile">
              <div className="profilePicContainer">
                <div className="pfpInner">
                  <img src={profilePic} alt="" className="profilePic" />
                </div>
                <div className="usernameContainer topComsUser">
                  u/{profileUser}
                </div>
              </div>
            </div>
            <div className="accountInfoContainer topComsUser">
              <div className="acctDetails">
                <div className="upvoteScore">
                  <h5>Karma</h5> <div>####</div>
                </div>
                <div className="accountCreationDate">
                  <h5>Cake day</h5>
                  <div>m d y</div>
                </div>
              </div>
            </div>
            <div className="viewButtonContainer">
              <a href="/website-clone/createPost">New Post</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
