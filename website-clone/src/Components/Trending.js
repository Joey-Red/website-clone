import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  query,
  where,
  getDoc,
  orderBy,
  limit,
} from "firebase/firestore";
import Carousel from "./Carousel";
function Trending(props) {
  const [livePostList, setLivePostList] = useState([]);
  useEffect(() => {
    let getPosts = async () => {
      const data = await getDocs(collection(db, "posts"), limit(5));
      setLivePostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);
  return (
    <div className="trend-om">
      <div className="trend-x1">
        <div className="trend-x2">
          <div className="trend-x3">
            <div id="TrendingPostsContainer">
              <div className="inside-x1">
                <div className="header-outside">
                  <div className="header-inside">Recent Posts</div>
                </div>
                <div className="carousel-x1">
                  <div className="carousel-x2">
                    <div className="carousel-x3">
                      {livePostList.length > 0 ? <></> : <>loading posts...</>}
                      {livePostList.map((post) => {
                        return (
                          <div key={post.id}>
                            <Carousel
                              id={post.id}
                              postPopUp={props.postPopUp}
                              setPostPopUp={props.setPostPopUp}
                              postSub={post.communityName.postingToCom}
                              postTitle={post.postTitle}
                              comments={post.stats.comments}
                              likes={post.stats.votes}
                              username={post.author.username}
                              postBody={post.postBody.content}
                              postDate={post.author.postDate}
                              isLoggedIn={props.isLoggedIn}
                              displayLogIn={props.displayLogIn}
                              setDisplayLogIn={props.setDisplayLogIn}
                              setDisplayForgotPw={props.setDisplayForgotPw}
                              displayForgotPw={props.displayForgotPw}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
