import React from "react";
import "./styleSheet3.css";

function NewCommunity() {
  return (
    <div className="blackScreen">
      <div className="newComContainer">
        <div className="ccHeader">
          <h1>Create a community</h1>
        </div>
        <hr />
        <div className="ccInfoContainer">
          <div className="ccNameInfo">
            <div className="ccName">
              <p className="ccNameSpan">Name</p>
              <span className="nameInfo">
                Community names cannot be changed.
              </span>
              <input
                type="text"
                name=""
                id="ccNameInput"
                placeholder="r/"
                maxLength={21}
              />
            </div>
          </div>
          <div className="ccComType">
            <div>
              <input type="radio" value="" checked id="comType" />
              <label htmlFor="comType">Public</label>
              <div className="ccTypeInfo">
                Anyone can view, post and comment to this community.
              </div>
            </div>
            <div>
              <input type="radio" value="" id="comTypeRestricted" />
              <label htmlFor="comTypeRestricted">Restricted</label>
              <div className="ccTypeInfo">
                Anyone can view this community, but only approved users can post
              </div>
            </div>
            <div>
              <input type="radio" value="" id="comTypePrivate" />
              <label htmlFor="comTypePrivate">Private</label>
              <div className="ccTypeInfo">
                Only approved users can view and submit to this community
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
