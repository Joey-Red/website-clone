import React from "react";
import "../styleSheet3.css";
import {
  faEye,
  faPerson,
  faLock,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function NewCommunity() {
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
              <input type="text" name="" id="ccNameInput" maxLength={21} />
            </div>
          </div>
          <div className="ccComType">
            <div>
              <input type="radio" value="" checked id="comType" />
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
                Notice
              </label>
              <div className="ccTypeInfo">
                All Communities are treated as public.
              </div>
            </div>
          </div>
        </div>
        <div className="ccFooter">
          <div className="ccButtonContainer">
            <button className="ccCancelButton">Cancel</button>
            <button className="ccCreateButton">Create Community</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCommunity;
