import React, { useState, useEffect } from "react";
import LoggedInHeader from "./LoggedInHeader";
import ProfileSortButtonsBar from "./ProfileSortButtonsBar";
import profilePic from "./img/userPhImg.png";
import TextPost from "./TextPost";
import { db, auth } from "../firebase";
import { doc, getDocs, collection, query, where } from "firebase/firestore";
function ProfilePage(props) {
  const { postPopUp, setPostPopUp, isLoggedIn, currentUser } = props;
  const [livePostList, setLivePostList] = useState([]);
  const [postId, setPostId] = useState("");
  let url = window.location.href;
  let urlSplit = url.split("/");
  let searchUserTemp = urlSplit[4];
  let searchUser = decodeURI(searchUserTemp);
  console.log(searchUser);
  useEffect(() => {
    let getPosts = async () => {
      const postsRef = collection(db, "posts");
      const q = query(postsRef, where("author.username", "==", searchUser));
      const querySnapshot = await getDocs(q);
      setLivePostList(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getPosts();
    console.log(livePostList);
  }, []);

  return (
    <>
      <LoggedInHeader />
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
        <div className="outer-menu-control-container">
          <ProfileSortButtonsBar />
          <div className="postsBodyContainer">
            {livePostList.length === 0 ? (
              <>
                <div className="emptyPostBody">
                  <div className="beFirstText">
                    `hmm... u/{currentUser} hasn't posted anything`
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
          </div>
        </div>
        <div className="top-x-communities-container" id="orig">
          <div className="top-communities">
            <div id="tchProfile">
              <div className="profilePicContainer">
                <div className="pfpInner">
                  <img src={profilePic} alt="" className="profilePic" />
                </div>
                <div className="usernameContainer topComsUser">u/userName</div>
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
              <a href="#">New Post</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
