import React from "react";
import {
  faAngleDown,
  faCaretDown,
  faFire,
  faCertificate,
  faRankingStar,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles.css";

function SortButtonsBar() {
  return (
    <div className="inner-menu-control">
      <div className="menu-links">
        {/* will be links */}
        <div id="hot">
          <a href="#">
            <FontAwesomeIcon icon={faFire} className="mlb"></FontAwesomeIcon>
            Hot
          </a>
        </div>
        <div id="everywhere">
          <a href="#">
            Everywhere
            <FontAwesomeIcon
              icon={faCaretDown}
              className="mlb"
            ></FontAwesomeIcon>
          </a>
        </div>
        <div id="new">
          <a href="#">
            <FontAwesomeIcon
              icon={faCertificate}
              className="mlb"
            ></FontAwesomeIcon>
            New
          </a>
        </div>
        <div id="top">
          <a href="#">
            <FontAwesomeIcon
              icon={faRankingStar}
              className="mlb"
            ></FontAwesomeIcon>
            Top
          </a>
        </div>
      </div>
      <div className="dotsButton">
        <a href="#">
          <FontAwesomeIcon icon={faEllipsis} className="mlb"></FontAwesomeIcon>
        </a>
      </div>
      <div className="viewButton">
        <a href="#">
          {/* at some point maybe change view or remove */}
          <FontAwesomeIcon
            icon={faAngleDown}
            className="actMag"
          ></FontAwesomeIcon>
        </a>
      </div>
    </div>
  );
}

export default SortButtonsBar;
