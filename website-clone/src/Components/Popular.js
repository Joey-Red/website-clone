import React from "react";
import {
  faAngleDown,
  faCaretUp,
  faCaretDown,
  faFire,
  faCertificate,
  faRankingStar,
} from "@fortawesome/free-solid-svg-icons";
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
              <button>
                <FontAwesomeIcon
                  icon={faFire}
                  className="mlb"
                ></FontAwesomeIcon>
                Hot
              </button>
            </div>
            <div id="everywhere">
              <button>
                Everywhere
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="mlb"
                ></FontAwesomeIcon>
              </button>
            </div>
            <div id="new">
              <button>
                <FontAwesomeIcon
                  icon={faCertificate}
                  className="mlb"
                ></FontAwesomeIcon>
                New
              </button>
            </div>
            <div id="top">
              <button>
                <FontAwesomeIcon
                  icon={faRankingStar}
                  className="mlb"
                ></FontAwesomeIcon>
                Top
              </button>
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
                <span>
                  <div className="number-holder">1</div>
                  <FontAwesomeIcon
                    icon={faCaretUp}
                    className="caretUp"
                  ></FontAwesomeIcon>
                  <img
                    alt="Subreddit Icon"
                    role="presentation"
                    src="https://styles.redditmedia.com/t5_2qi4j/styles/communityIcon_a0b0l0lb75k41.png"
                    
                  />
                  r/technews
                </span>
                <div className="joinButtonDiv">
                  <button>
                    <div>Join</div>
                  </button>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <div className="number-holder">2</div>
                  <FontAwesomeIcon
                    icon={faCaretUp}
                    className="caretUp"
                  ></FontAwesomeIcon>
                  <img
                    alt="Subreddit Icon"
                    role="presentation"
                    src="https://a.thumbs.redditmedia.com/E0Bkwgwe5TkVLflBA7WMe9fMSC7DV2UOeff-UpNJeb0.png"
                  />
                  r/technews
                </span>
                <div className="joinButtonDiv">
                  <button>
                    <div>Join</div>
                  </button>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <div className="number-holder">3</div>
                  <FontAwesomeIcon
                    icon={faCaretUp}
                    className="caretUp"
                  ></FontAwesomeIcon>
                  <img
                    alt="Subreddit Icon"
                    role="presentation"
                    src="https://styles.redditmedia.com/t5_2qi4j/styles/communityIcon_a0b0l0lb75k41.png"
                  />
                  r/worldnews
                </span>
                <div className="joinButtonDiv">
                  <button>
                    <div>Join</div>
                  </button>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <div className="number-holder">4</div>
                  <FontAwesomeIcon
                    icon={faCaretUp}
                    className="caretUp"
                  ></FontAwesomeIcon>
                  <img
                    alt="Subreddit Icon"
                    role="presentation"
                    src="https://styles.redditmedia.com/t5_2qh11/styles/communityIcon_yn4xge2wh2h51.png"
                  />
                  r/offbeat
                </span>
                <div className="joinButtonDiv">
                  <button>
                    <div>Join</div>
                  </button>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <div className="number-holder">5</div>
                  <FontAwesomeIcon
                    icon={faCaretUp}
                    className="caretUp"
                  ></FontAwesomeIcon>
                  <img
                    alt="Subreddit Icon"
                    role="presentation"
                    src="https://styles.redditmedia.com/t5_2sc3f/styles/communityIcon_x6dymnk82f861.png"
                  />
                  r/gamernews
                </span>
                <div className="joinButtonDiv">
                  <button>
                    <div>Join</div>
                  </button>
                </div>
              </a>
            </li>
            <div className="viewButtonContainer">
              <a href="#">
                View All
              </a>
            </div>
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
