import React, { useState } from "react";
import "./styleSheet2.css";
import {
  faAngleDown,
  faCircle,
  faImage,
  faBars,
  faLink,
  faPoll,
  faMicrophone,
  faBold,
  faItalic,
  faStrikethrough,
  faCode,
  faSuperscript,
  faDiamond,
  faHeading,
  faListDots,
  faListNumeric,
  faQuoteRight,
  faTable,
  faQuoteLeftAlt,
  faVideo,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NewCommunity from "./NewCommunity";
function CreatePost() {
  let [bold, setBold] = useState(true);
  let [italic, setItalic] = useState(true);
  let [strikeThrough, setStrikeThrough] = useState(true);
  let [heading, setHeading] = useState(true);
  let [dotsList, setDotsList] = useState(true);
  let [numericList, setNumericList] = useState(true);
  let [quotes, setQuotes] = useState(true);

  let boldActive = (e) => {
    e.target.setAttribute("class", bold ? "Selected" : "");
    setBold(!bold);
  };
  let italicActive = (e) => {
    e.target.setAttribute("class", italic ? "Selected" : "");
    setItalic(!italic);
  };
  let strikethroughActive = (e) => {
    e.target.setAttribute("class", strikeThrough ? "Selected" : "");
    setStrikeThrough(!strikeThrough);
  };
  let headingActive = (e) => {
    e.target.setAttribute("class", heading ? "Selected" : "");
    setHeading(!heading);
  };
  let dotsListActive = (e) => {
    e.target.setAttribute("class", dotsList ? "Selected" : "");
    setDotsList(!dotsList);
  };
  let numericListActive = (e) => {
    e.target.setAttribute("class", numericList ? "Selected" : "");
    setNumericList(!numericList);
  };
  let quotesActive = (e) => {
    e.target.setAttribute("class", quotes ? "Selected" : "");
    setQuotes(!quotes);
  };
  let dropDownClick = () => {
    let target = document.querySelector(".dropDownContainer");
    if (target.style.display === "flex") {
      target.style.display = "none";
    } else {
      target.style.display = "flex";
    }
  };
  let createNewCom = () => {
    <NewCommunity />;
  };
  return (
    <div className="createPostContainer">
      <div className="createPost-x1">
        <div className="createPost-x2">
          <div className="createPostHeaderContainer">
            <div className="createPostHeader">Create a post</div>
            <div className="draft-count">
              <button>
                DRAFTS <span className="draftCountSpan">0</span>
              </button>
            </div>
          </div>
          <div className="chooseCommunityContainer">
            <div className="chooseCommunity-x1">
              <div className="chooseCommunity-x2">
                <span className="circlePlaceHolder">
                  <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                </span>
                <div className="inputCommunity">
                  <input type="text" placeholder="Choose a community" />
                </div>
                <div
                  className="dropDownCommunity"
                  onClick={() => {
                    dropDownClick();
                  }}
                >
                  <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                  <div className="dropDownContainer">
                    <div className="yourComStyle">
                      <span>YOUR COMMUNITIES</span>
                      <div>
                        <button
                          onClick={() => {
                            createNewCom();
                          }}
                        >
                          Create New
                        </button>
                      </div>
                    </div>
                    <div className="indComStyle">
                      <img
                        src="https://styles.redditmedia.com/t5_3ofro/styles/communityIcon_hx4thg2ikey71.png"
                        alt=""
                      />
                      <div className="flexSpans">
                        <span className="liSubName">r/tech</span>
                        <span className="liSubMemberCount">1000 Members</span>
                      </div>
                    </div>
                    <div className="indComStyle">
                      <img
                        src="https://styles.redditmedia.com/t5_3ofro/styles/communityIcon_hx4thg2ikey71.png"
                        alt=""
                      />
                      <div className="flexSpans">
                        <span className="liSubName">r/tech</span>
                        <span className="liSubMemberCount">1000 Members</span>
                      </div>
                    </div>
                    <div className="indComStyle">
                      <img
                        src="https://styles.redditmedia.com/t5_3ofro/styles/communityIcon_hx4thg2ikey71.png"
                        alt=""
                      />
                      <div className="flexSpans">
                        <span className="liSubName">r/tech</span>
                        <span className="liSubMemberCount">1000 Members</span>
                      </div>
                    </div>
                    <div className="indComStyle">
                      <img
                        src="https://styles.redditmedia.com/t5_3ofro/styles/communityIcon_hx4thg2ikey71.png"
                        alt=""
                      />
                      <div className="flexSpans">
                        <span className="liSubName">r/tech</span>
                        <span className="liSubMemberCount">1000 Members</span>
                      </div>
                    </div>
                    <div className="indComStyle">
                      <img
                        src="https://styles.redditmedia.com/t5_3ofro/styles/communityIcon_hx4thg2ikey71.png"
                        alt=""
                      />
                      <div className="flexSpans">
                        <span className="liSubName">r/tech</span>
                        <span className="liSubMemberCount">1000 Members</span>
                      </div>
                    </div>
                    <div className="indComStyle">
                      <img
                        src="https://styles.redditmedia.com/t5_3ofro/styles/communityIcon_hx4thg2ikey71.png"
                        alt=""
                      />
                      <div className="flexSpans">
                        <span className="liSubName">r/tech</span>
                        <span className="liSubMemberCount">1000 Members</span>
                      </div>
                    </div>
                    <div className="indComStyle">
                      <img
                        src="https://styles.redditmedia.com/t5_3ofro/styles/communityIcon_hx4thg2ikey71.png"
                        alt=""
                      />
                      <div className="flexSpans">
                        <span className="liSubName">r/tech</span>
                        <span className="liSubMemberCount">1000 Members</span>
                      </div>
                    </div>
                    <div className="indComStyle">
                      <img
                        src="https://styles.redditmedia.com/t5_3ofro/styles/communityIcon_hx4thg2ikey71.png"
                        alt=""
                      />
                      <div className="flexSpans">
                        <span className="liSubName">r/tech</span>
                        <span className="liSubMemberCount">1000 Members</span>
                      </div>
                    </div>
                    <div className="indComStyle">
                      <img
                        src="https://styles.redditmedia.com/t5_3ofro/styles/communityIcon_hx4thg2ikey71.png"
                        alt=""
                      />
                      <div className="flexSpans">
                        <span className="liSubName">r/tech</span>
                        <span className="liSubMemberCount">1000 Members</span>
                      </div>
                    </div>
                    <div className="indComStyle">
                      <img
                        src="https://styles.redditmedia.com/t5_3ofro/styles/communityIcon_hx4thg2ikey71.png"
                        alt=""
                      />
                      <div className="flexSpans">
                        <span className="liSubName">r/tech</span>
                        <span className="liSubMemberCount">1000 Members</span>
                      </div>
                    </div>
                    <div className="indComStyle">
                      <img
                        src="https://styles.redditmedia.com/t5_3ofro/styles/communityIcon_hx4thg2ikey71.png"
                        alt=""
                      />
                      <div className="flexSpans">
                        <span className="liSubName">r/tech</span>
                        <span className="liSubMemberCount">1000 Members</span>
                      </div>
                    </div>
                    <div className="indComStyle">
                      <img
                        src="https://styles.redditmedia.com/t5_3ofro/styles/communityIcon_hx4thg2ikey71.png"
                        alt=""
                      />
                      <div className="flexSpans">
                        <span className="liSubName">r/gaming</span>
                        <span className="liSubMemberCount">1000 Members</span>
                      </div>
                    </div>
                    <div className="indComStyle">
                      <img
                        src="https://styles.redditmedia.com/t5_3ofro/styles/communityIcon_hx4thg2ikey71.png"
                        alt=""
                      />
                      <div className="flexSpans">
                        <span className="liSubName">r/sports</span>
                        <span className="liSubMemberCount">1000 Members</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="createPostFormContainer">
            <div className="formHeaderContainer">
              <div className="formHeaderContainer-x1">
                <button className="postButton">
                  <FontAwesomeIcon
                    icon={faBars}
                    className="createFA"
                  ></FontAwesomeIcon>
                  <span className="buttonText">Post</span>
                </button>
                <button className="disabledButton">
                  <FontAwesomeIcon
                    icon={faImage}
                    className="createFA"
                  ></FontAwesomeIcon>
                  <span className="buttonText">Images & Video</span>
                </button>
                <button className="disabledButton">
                  <FontAwesomeIcon
                    icon={faLink}
                    className="createFA"
                  ></FontAwesomeIcon>
                  <span className="buttonText">Link</span>
                </button>
                <button className="disabledButton">
                  <FontAwesomeIcon
                    icon={faPoll}
                    className="createFA"
                  ></FontAwesomeIcon>
                  Poll
                </button>
                <button className="disabledButton">
                  <FontAwesomeIcon
                    icon={faMicrophone}
                    className="createFA"
                  ></FontAwesomeIcon>
                  <span className="buttonText">Talk</span>
                </button>
              </div>
              <div className="textAreaContainer">
                <div className="textAreaContainer-x1">
                  <div>
                    <textarea
                      maxLength="300"
                      placeholder="Title"
                      className="titleTextArea"
                    ></textarea>
                  </div>
                </div>
                <div className="textFormattingButtonsContainer">
                  <div className="textFormattingButtonsContainer-x1">
                    <div className="textFormattingButtonsContainer-x2">
                      <div className="actualButtonInfluence">
                        <div className="actualButtonInfluence-x1">
                          <div className="strictlyButtons">
                            <button onClick={boldActive}>
                              <FontAwesomeIcon
                                icon={faBold}
                                className="textFormatIcon"
                                id="bold"
                              ></FontAwesomeIcon>
                              <div>{/* <div>Bold</div> */}</div>
                            </button>
                            <span>
                              <button onClick={italicActive}>
                                <FontAwesomeIcon
                                  icon={faItalic}
                                  className="textFormatIcon"
                                  id="italic"
                                ></FontAwesomeIcon>
                                <div>{/* <div>Italics</div> */}</div>
                              </button>
                            </span>
                            <span>
                              <button>
                                <FontAwesomeIcon
                                  icon={faLink}
                                  className="textFormatIcon"
                                  id="link"
                                ></FontAwesomeIcon>
                              </button>
                            </span>
                            <span></span>
                            <span>
                              <button onClick={strikethroughActive}>
                                <FontAwesomeIcon
                                  icon={faStrikethrough}
                                  className="textFormatIcon"
                                  id="strike"
                                ></FontAwesomeIcon>
                              </button>
                            </span>
                            <span>
                              <button>
                                <div>
                                  <div>
                                    <FontAwesomeIcon
                                      icon={faSuperscript}
                                      className="textFormatIcon"
                                      id="superscript"
                                    ></FontAwesomeIcon>
                                  </div>
                                </div>
                              </button>
                            </span>
                            <span>
                              <button>
                                <div>
                                  <div>
                                    <FontAwesomeIcon
                                      icon={faDiamond}
                                      className="textFormatIcon"
                                    ></FontAwesomeIcon>
                                  </div>
                                </div>
                              </button>
                            </span>
                            <span>
                              <div></div>
                            </span>
                            <span>
                              <button onClick={headingActive}>
                                <FontAwesomeIcon
                                  icon={faHeading}
                                  className="textFormatIcon"
                                  id="heading"
                                ></FontAwesomeIcon>
                              </button>
                            </span>
                            <span>
                              <button onClick={dotsListActive}>
                                <FontAwesomeIcon
                                  icon={faListDots}
                                  className="textFormatIcon"
                                  id="dotList"
                                ></FontAwesomeIcon>
                              </button>
                            </span>
                            <span>
                              <button onClick={numericListActive}>
                                <div>
                                  <div>
                                    <FontAwesomeIcon
                                      icon={faListNumeric}
                                      className="textFormatIcon"
                                      id="numList"
                                    ></FontAwesomeIcon>
                                  </div>
                                </div>
                              </button>
                            </span>
                            <span>
                              <button onClick={quotesActive}>
                                <div>
                                  <div>
                                    <FontAwesomeIcon
                                      icon={faQuoteLeftAlt}
                                      className="textFormatIcon"
                                      id="quote"
                                    ></FontAwesomeIcon>
                                    <FontAwesomeIcon
                                      icon={faQuoteRight}
                                    ></FontAwesomeIcon>
                                  </div>
                                </div>
                              </button>
                            </span>
                            <span>
                              <button>
                                <div>
                                  <div>
                                    <FontAwesomeIcon
                                      icon={faCode}
                                      className="textFormatIcon"
                                      id="code"
                                    ></FontAwesomeIcon>
                                  </div>
                                </div>
                              </button>
                            </span>
                            <span>
                              <div></div>
                            </span>
                            <span>
                              <button>
                                <div>
                                  <div>
                                    <FontAwesomeIcon
                                      icon={faTable}
                                      className="textFormatIcon"
                                      id="table"
                                    ></FontAwesomeIcon>
                                  </div>
                                </div>
                              </button>
                            </span>
                            <span>
                              <button>
                                <div>
                                  <div>
                                    <FontAwesomeIcon
                                      icon={faImage}
                                      className="textFormatIcon"
                                    ></FontAwesomeIcon>
                                  </div>
                                </div>
                                <input
                                  className="displayNone"
                                  multiple=""
                                  type="file"
                                  accept="image/png,image/gif,image/jpeg,image/webp"
                                />
                              </button>
                            </span>
                            <span>
                              <button>
                                <div>
                                  <div>
                                    <FontAwesomeIcon
                                      icon={faVideo}
                                      className="textFormatIcon"
                                    ></FontAwesomeIcon>
                                  </div>
                                </div>
                                <input
                                  className="displayNone"
                                  multiple=""
                                  type="file"
                                  accept="video/mp4,video/quicktime"
                                />
                              </button>
                            </span>
                          </div>
                        </div>
                        <div>
                          <button className="markdownMode">
                            <span>Markdown Mode</span>
                          </button>
                        </div>
                      </div>
                      <div>
                        <div></div>
                      </div>
                      <div className="textBodyContainer">
                        <div className="textBodyContainer-x1"></div>
                      </div>
                    </div>
                    <div className="tagAndSubmit">
                      <div className="tagContainer">
                        <div className="tagList">
                          <button className="tag">
                            <FontAwesomeIcon
                              icon={faPlusCircle}
                              className="faAddFlair"
                            ></FontAwesomeIcon>
                            OC
                          </button>
                          <button className="tag">
                            <FontAwesomeIcon
                              icon={faPlusCircle}
                              className="faAddFlair"
                            ></FontAwesomeIcon>
                            Spoiler
                          </button>
                          <button className="tag">
                            <FontAwesomeIcon
                              icon={faPlusCircle}
                              className="faAddFlair"
                            ></FontAwesomeIcon>
                            NSFW
                          </button>
                          <button className="tag">
                            <FontAwesomeIcon
                              icon={faPlusCircle}
                              className="faAddFlair"
                            ></FontAwesomeIcon>
                            Flair
                          </button>
                        </div>
                      </div>
                      <hr></hr>

                      <div className="draftOrSubmit">
                        <div className="postSubmitButton">
                          <button>Post</button>
                        </div>
                        <div className="saveDraft">
                          <button>Save Draft</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
