import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
function UserSettings() {
  return (
    <div className="outerSettingsContainer">
      <div className="userSettingsContainer">
        <h2>Account Settings</h2>
        <h3>Account Preferences</h3>
        <div className="emailDiv">
          <div className="emailDivInner">
            <div className="settingsTitle">Email address</div>
          </div>
          <div className="changeButton">
            <button className="ioButton settingsIo">Change</button>
          </div>
        </div>

        <div className="passwordDiv">
          <div className="emailDivInner">
            <div className="settingsTitle">Change password</div>
            <p>Password must be at least 8 characters long.</p>
          </div>
          <div className="changeButton">
            <button className="ioButton settingsIo">Change</button>
          </div>
        </div>
        <div className="genderDiv">
          <div className="emailDivInner">
            <div className="settingsTitle">Gender</div>
            <p>
              Reddit will never share this information and ony uses it to
              improve what content you see.
            </p>
          </div>
        </div>
        <h3>Delete Account</h3>
        <div className="changeButton">
          <button className="deleteAccountButton">
            <FontAwesomeIcon
              icon={faTrash}
              className="actMag"
            ></FontAwesomeIcon>
            DELETE ACCOUNT
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserSettings;
