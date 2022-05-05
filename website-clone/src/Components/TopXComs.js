import React, { useState } from "react";
import { faCaretUp, faShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import adPhoto from "../Components/img/adplacement.jpg";

function TopXComs() {
  let [activeButton, setActiveButton] = useState(true);
  let topComsSort = (e) => {
    if (activeButton === true) {
      e.target.style.backgroundColor = "#0079d3";
      e.target.style.color = "#f6f7f8";
    } else if (activeButton === false) {
      e.target.style.backgroundColor = "#f6f7f8";
      e.target.style.color = "#0079d3";
    }
    setActiveButton(!activeButton);
    console.log(activeButton);
  };
  return (
    <div className="top-x-communities-container" id="orig">
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
            <a href="#">View All</a>
          </div>
        </ol>
        <div className="extra-catagories">
          <span>
            <button onClick={topComsSort}>Top</button>
          </span>
          <span>
            <button onClick={topComsSort}>Near You</button>
          </span>
          <span>
            <button onClick={topComsSort}>Sports</button>
          </span>
          <span>
            <button onClick={topComsSort}>Gaming</button>
          </span>
        </div>
      </div>
      <div className="top-communities" id="redditPremium">
        {/* <div className="top-coms-header ">
          <h2>Reddit Premium</h2>
        </div> */}
        <div>
          <div className="premFlex">
            <FontAwesomeIcon
              icon={faShield}
              className="faShield"
            ></FontAwesomeIcon>
            <div className="premInfo">
              <div className="premHeader">Reddit Premium </div>
              <div className="premText">
                The best Reddit experience, with monthly Coins
              </div>
            </div>
          </div>
          <ol className="top-coms-list">
            <div className="redditPremiumButtonContainer">
              <a href="#" className="redditPremiumButton">
                Try Now
              </a>
            </div>
          </ol>
        </div>
      </div>
      <div className="top-communities" id="adContainer">
        <div className="adContainer">
          <div className="adWords">ADVERTISEMENT</div>
          <img src={adPhoto} alt="adPhoto" />
        </div>
      </div>
      <div className="top-communities" id="supportLinks">
        <div className="supportLinks">
          <div className="supportLinksInner">
            <div className="top-support-links">
              <div className="supportLinksFirst">
                <a href="#">Help</a>
                <a href="#">Reddit Coins</a>
                <a href="#">Reddit Premium</a>
                <a href="#">Communities</a>
                <a href="#">Rereddit</a>
                <a href="#">Topics</a>
              </div>
              <div className="supportLinksSecond">
                <a href="#">About</a>
                <a href="#">Careers</a>
                <a href="#">Press</a>
                <a href="#">Advertise</a>
                <a href="#">Blog</a>
                <a href="#">Terms</a>
                <a href="#">Content Policy</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Mod Policy</a>
              </div>
            </div>
            <div className="lang">
              <div className="langEn">
                <a href="#">USA/Global</a>
              </div>
              <div className="langDeutsch">
                <a href="#">Deutsch</a>
              </div>
            </div>
            <p>Reddit Clone by Joey Dalrymple, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopXComs;
