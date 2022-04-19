import React, { useState } from "react";
import {
  faAngleDown,
  faCaretUp,
  faCaretDown,
  faFire,
  faCertificate,
  faRankingStar,
  faEllipsis
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PopularFeed from "./PopularFeed";

function Popular() {
    let [activeButton, setActiveButton] = useState(true);
    // something weird going on here
  let topComsSort = (e) => {
    if (activeButton === true) {
      e.target.style.backgroundColor="#0079d3";
    e.target.style.color="#f6f7f8";
    } else if (activeButton === false){
    e.target.style.backgroundColor="#f6f7f8";
    e.target.style.color="#0079d3";
    }
    setActiveButton(!activeButton)
    console.log(activeButton)
  }

  return (
    <div className="outermost-popular-container">
      <div className="outer-menu-control-container">
        <div className="popular-post-header">Popular Posts</div>
        <div className="inner-menu-control">
          <div className="menu-links">
            {/* will be links */}
            <div id="hot">
              <a href="#">
                <FontAwesomeIcon
                  icon={faFire}
                  className="mlb"
                ></FontAwesomeIcon>
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
            <a href="#"><FontAwesomeIcon
                  icon={faEllipsis}
                  className="mlb"
                ></FontAwesomeIcon></a>
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
          <PopularFeed />
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
            <span><button onClick={topComsSort}>Top</button></span>
            <span><button onClick={topComsSort}>Near You</button></span>
            <span><button onClick={topComsSort}>Sports</button></span>
            <span><button onClick={topComsSort}>Gaming</button></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;
