import React from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Popular() {
  return (
    <div className="outermost-popular-container">
      <div className="outer-menu-control-container">
        <div className="popular-post-header">Popular Posts</div>
        <div className="inner-menu-control">
          <div className="menu-links">
            {/* will be links */}
            <div>
              <button>Hot</button>
            </div>
            <div>
              <button>Everywhere</button>
            </div>
            <div>
              <button>New</button>
            </div>
            <div>
              <button>Top</button>
            </div>
          </div>
          <div className="dotsButton">
            <button>...</button>
          </div>
          <div className="viewButton">
            <button>
              [|]
              <FontAwesomeIcon
                icon={faAngleDown}
                className="actMag"
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
      <div className="top-x-communities-container">
        <div className="top-communities">
          <div>Top "whatever" Here</div>
        </div>
      </div>
    </div>
  );
}

export default Popular;
