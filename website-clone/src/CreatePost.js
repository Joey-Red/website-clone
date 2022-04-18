import React from "react";
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
function CreatePost() {
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
                <span>
                  <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                </span>
                <div className="inputCommunity">
                  <input type="text" placeholder="Choose a community" />
                </div>
                <div className="dropDownCommunity">
                  <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
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
                            <span>
                              <button>
                                <FontAwesomeIcon
                                  icon={faBold}
                                  className="textFormatIcon"
                                ></FontAwesomeIcon>
                                <div>{/* <div>Bold</div> */}</div>
                              </button>
                            </span>
                            <span>
                              <button>
                                <FontAwesomeIcon
                                  icon={faItalic}
                                  className="textFormatIcon"
                                ></FontAwesomeIcon>
                                <div>{/* <div>Italics</div> */}</div>
                              </button>
                            </span>
                            <span>
                              <button>
                                <FontAwesomeIcon
                                  icon={faLink}
                                  className="textFormatIcon"
                                ></FontAwesomeIcon>
                              </button>
                            </span>
                            <span></span>
                            <span>
                              <button>
                                <div>
                                  <div>
                                    <FontAwesomeIcon
                                      icon={faStrikethrough}
                                      className="textFormatIcon"
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
                                      icon={faSuperscript}
                                      className="textFormatIcon"
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
                              <button>
                                <div>
                                  <div>
                                    <FontAwesomeIcon
                                      icon={faHeading}
                                      className="textFormatIcon"
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
                                      icon={faListDots}
                                      className="textFormatIcon"
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
                                      icon={faListNumeric}
                                      className="textFormatIcon"
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
                                      icon={faQuoteLeftAlt}
                                      className="textFormatIcon"
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
                                {/* <input
                                  multiple=""
                                  type="file"
                                  accept="image/png,image/gif,image/jpeg,image/webp"
                                /> */}
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
                                {/* <input
                                  multiple=""
                                  type="file"
                                  accept="video/mp4,video/quicktime"
                                /> */}
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
                        <div className="textBodyContainer-x1">
                          <div></div>
                        </div>
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
