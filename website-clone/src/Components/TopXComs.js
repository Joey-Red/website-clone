import React, { useState, useEffect } from "react";
import { faCaretUp, faShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import adPhoto from "../Components/img/adplacement.jpg";
import { db, auth } from "../firebase";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  query,
  where,
  getDoc,
  orderBy,
  limit,
} from "firebase/firestore";
import { Link } from "react-router-dom";

function TopXComs() {
  let [activeButton, setActiveButton] = useState(true);
  const [comList, setComList] = useState([]);
  const [hrefLoad, setHrefLoad] = useState(true);
  const [hrefLinkOne, setHrefLinkOne] = useState("");
  const [hrefLinkTwo, setHrefLinkTwo] = useState("");
  const [hrefLinkThree, setHrefLinkThree] = useState("");
  const [hrefLinkFour, setHrefLinkFour] = useState("");
  const [hrefLinkFive, setHrefLinkFive] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [hrefLinkDisplayZero, setHrefLinkDisplayZero] = useState("");
  const [hrefLinkDisplayOne, setHrefLinkDisplayOne] = useState("");
  const [hrefLinkDisplayTwo, setHrefLinkDisplayTwo] = useState("");
  const [hrefLinkDisplayThree, setHrefLinkDisplayThree] = useState("");
  const [hrefLinkDisplayFour, setHrefLinkDisplayFour] = useState("");
  let topComsSort = (e) => {
    if (activeButton === true) {
      e.target.style.backgroundColor = "#0079d3";
      e.target.style.color = "#f6f7f8";
    } else if (activeButton === false) {
      e.target.style.backgroundColor = "#f6f7f8";
      e.target.style.color = "#0079d3";
    }
    setActiveButton(!activeButton);
  };

  useEffect(() => {
    let getPosts = async () => {
      const querySnapshot = await getDocs(
        collection(db, "communities"),
        limit(5)
      );
      setComList(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getPosts();
    setHrefLoad(false);
  }, []);
  useEffect(() => {
    if (hrefLoad === false && comList.length > 0) {
      setIsLoaded(true);
      setHrefLinkOne("/website-clone/r/" + comList[0].id);
      setHrefLinkDisplayZero("r/" + comList[0].id);
      setHrefLinkTwo("/website-clone/r/" + comList[1].id);
      setHrefLinkDisplayOne("r/" + comList[1].id);
      setHrefLinkThree("/website-clone/r/" + comList[2].id);
      setHrefLinkDisplayTwo("r/" + comList[2].id);
      setHrefLinkFour("/website-clone/r/" + comList[3].id);
      setHrefLinkDisplayThree("r/" + comList[3].id);
      setHrefLinkFive("/website-clone/r/" + comList[4].id);
      setHrefLinkDisplayFour("r/" + comList[4].id);
    }
  }, [comList]);

  return (
    <div className="top-x-communities-container" id="orig">
      <div className="top-communities">
        <div className="top-coms-header">
          <h2>Explore New Communities</h2>
        </div>
        <ol className="top-coms-list">
          <li>
            <div className="liA">
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
                <Link href={hrefLinkOne} to={hrefLinkOne}>
                  <div className="subNameLink">
                    {isLoaded ? <>{hrefLinkDisplayZero}</> : "loading..."}
                  </div>
                </Link>
              </span>
              <div className="joinButtonDiv">
                <button>
                  <div>Join</div>
                </button>
              </div>
            </div>
          </li>
          <li>
            <div className="liA">
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
                <Link href={hrefLinkTwo} to={hrefLinkTwo}>
                  <div className="subNameLink">
                    {isLoaded ? <>{hrefLinkDisplayOne}</> : "loading..."}
                  </div>
                </Link>
              </span>
              <div className="joinButtonDiv">
                <button>
                  <div>Join</div>
                </button>
              </div>
            </div>
          </li>
          <li>
            <div className="liA">
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
                <Link href={hrefLinkThree} to={hrefLinkThree}>
                  <div className="subNameLink">
                    {isLoaded ? <>{hrefLinkDisplayTwo}</> : "loading..."}
                  </div>
                </Link>
              </span>
              <div className="joinButtonDiv">
                <button>
                  <div>Join</div>
                </button>
              </div>
            </div>
          </li>
          <li>
            <div className="liA">
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
                <Link href={hrefLinkFour} to={hrefLinkFour}>
                  <div className="subNameLink">
                    {isLoaded ? <>{hrefLinkDisplayThree}</> : "loading..."}
                  </div>
                </Link>
              </span>
              <div className="joinButtonDiv">
                <button>
                  <div>Join</div>
                </button>
              </div>
            </div>
          </li>
          <li>
            <div className="liA">
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
                <Link href={hrefLinkFive} to={hrefLinkFive}>
                  <div className="subNameLink">
                    {isLoaded ? <>{hrefLinkDisplayFour}</> : "loading..."}
                  </div>
                </Link>
              </span>
              <div className="joinButtonDiv">
                <button>
                  <div>Join</div>
                </button>
              </div>
            </div>
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
