import React from "react";
import { faAngleDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Popular() {
  return (
    <div className="outermost-popular-container">
      <div className="outer-menu-control-container">
        <div className="popular-post-header">Popular Posts</div>
        <div className="inner-menu-control">
          <div className="menu-links">
            {/* will be links */}
            <div id="hot">
              <button>Hot</button>
            </div>
            <div id="everywhere">
              <button>Everywhere</button>
            </div>
            <div id="new">
              <button>New</button>
            </div>
            <div id="top">
              <button>Top</button>
            </div>
          </div>
          <div className="dotsButton">
            <button>...</button>
          </div>
          <div className="viewButton">
            <button>
              {/* at some point maybe change view or remove */}
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
          <div className="top-coms-header">
            <h2>Top News Communities</h2>
          </div>
          <ol className="top-coms-list">
            <li>
              <a href="#">
              <FontAwesomeIcon
                icon={faCaretUp}
                className="actMag"
              ></FontAwesomeIcon>
              [pic]
              <span>r/technews</span>
              <div className="joinButtonDiv">
                <button>
                  <span>
                    Join
                    </span>
                </button>
              </div>
              </a>
            </li>
            <li>
              <a href="#">
              <FontAwesomeIcon
                icon={faCaretUp}
                className="actMag"
              ></FontAwesomeIcon>
              [pic]
              <span>r/offbeat</span>
              <div>
                <button>
                  <span>
                    Join
                    </span>
                </button>
              </div>
              </a>
            </li>
            <li>
              <a href="#">
              <FontAwesomeIcon
                icon={faCaretUp}
                className="actMag"
              ></FontAwesomeIcon>
              [pic]
              <span>r/gamernews</span>
              <div>
                <button>
                  <span>
                    Join
                    </span>
                </button>
              </div>
              </a>
            </li>
            <li>
              <a href="#">
              <FontAwesomeIcon
                icon={faCaretUp}
                className="actMag"
              ></FontAwesomeIcon>
              [pic]
              <span>r/savedyouaclick</span>
              <div>
                <button>
                  <span>
                    Join
                    </span>
                </button>
              </div>
              </a>
            </li>
            <li>
              <a href="#">
              <FontAwesomeIcon
                icon={faCaretUp}
                className="actMag"
              ></FontAwesomeIcon>
              [pic]
              <span>r/olympics</span>
              <div>
                <button>
                  <span>
                    Join
                    </span>
                </button>
              </div>
              </a>
            </li>
            <button>View All</button>
          </ol>
          <div className="extra-catagories">
            <a href="#">Top</a>
            <a href="#">Near You</a>
            <a href="#">Sports</a>
            <a href="#">Gaming</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;
