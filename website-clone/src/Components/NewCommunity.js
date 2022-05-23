import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import React, { useState, useEffect } from "react";
import {
  faBullhorn,
  faLock,
  faPerson,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NewCommunity(props) {
  const { setShowNewCom } = props;
  let [communityName, setCommunityName] = useState("");

  let createDay = new Date();
  createDay.getDay();
  let dateString = createDay.toDateString();
  let modifiedDate = dateString.slice(4);
  let hideCreate = () => {
    setShowNewCom(false);
  };
  const createCommunity = async () => {
    await setDoc(doc(db, "communities", communityName), {
      communityName,
      creationDate: modifiedDate,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    setShowNewCom(false);
  };

  return (
    <div className="blackScreen">
      <div className="newComContainer">
        <div className="ccHeader">
          <h1>Create a community</h1>
        </div>
        <div className="ccInfoContainer">
          <div className="ccNameInfo">
            <div className="ccName">
              <p className="ccNameSpan">Name</p>
              <span className="nameInfo">
                Community names cannot be changed.
              </span>
              <span className="ccrPlaceholder">r/</span>
              <input
                onChange={(e) => {
                  setCommunityName(e.target.value);
                }}
                type="text"
                id="ccNameInput"
                minLength={4}
                maxLength={21}
              />
            </div>
          </div>
          <div className="ccComType">
            <div>
              <input type="radio" value="" defaultChecked id="comType" />
              <label htmlFor="comType">
                <FontAwesomeIcon
                  icon={faPerson}
                  className="ccFa"
                ></FontAwesomeIcon>
                Public
              </label>
              <div className="ccTypeInfo">
                Anyone can view, post and comment to this community
              </div>
            </div>
            <div>
              <input type="radio" value="" id="comTypeRestricted" />
              <label htmlFor="comTypeRestricted">
                <FontAwesomeIcon
                  icon={faEye}
                  className="ccFa"
                ></FontAwesomeIcon>
                Restricted
              </label>
              <div className="ccTypeInfo">
                Anyone can view this community, but only approved users can post
              </div>
            </div>
            <div>
              <input type="radio" value="" id="comTypePrivate" />
              <label htmlFor="comTypePrivate">
                <FontAwesomeIcon
                  icon={faLock}
                  className="ccFa"
                ></FontAwesomeIcon>
                Private
              </label>
              <div className="ccTypeInfo">
                Only approved users can view and submit to this community
              </div>
            </div>
            <div>
              <input type="radio" value="" id="ccNotice" />
              <label htmlFor="ccNotice">
                <FontAwesomeIcon
                  icon={faBullhorn}
                  className="ccFa"
                ></FontAwesomeIcon>
                <p className="ccNotice">Notice</p>
              </label>
              <div className="ccTypeInfo">
                All Communities are treated as public.
              </div>
            </div>
          </div>
        </div>
        <div className="ccFooter">
          <div className="ccButtonContainer">
            <button
              onClick={() => {
                hideCreate();
              }}
              className="ccCancelButton"
            >
              Cancel
            </button>
            {/* create community needs to load to see if it was a success, then link to r/newcomname */}
            <button
              className="ccCreateButton"
              onClick={() => createCommunity()}
            >
              Create Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewCommunity;
