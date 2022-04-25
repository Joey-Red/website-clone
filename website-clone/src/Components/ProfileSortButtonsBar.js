import React from "react";
import {
  faFire,
  faCertificate,
  faRankingStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles.css";

function ProfileSortButtonsBar() {
  return (
    <div className="inner-menu-control">
      <div className="menu-links">
        {/* will be links */}

        <div className="profileSortButtons">
          <a href="#">
            <FontAwesomeIcon
              icon={faCertificate}
              className="mlb"
            ></FontAwesomeIcon>
            New
          </a>
        </div>
        <div className="profileSortButtons">
          <a href="#">
            <FontAwesomeIcon icon={faFire} className="mlb"></FontAwesomeIcon>
            Hot
          </a>
        </div>
        <div className="profileSortButtons">
          <a href="#">
            <FontAwesomeIcon
              icon={faRankingStar}
              className="mlb"
            ></FontAwesomeIcon>
            Top
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileSortButtonsBar;
