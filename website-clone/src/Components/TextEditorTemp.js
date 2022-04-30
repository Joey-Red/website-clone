import React, { useState } from "react";
import "../styleSheet2.css";
import "../styleSheet3.css";
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
function TextEditorTemp() {
  let [bold, setBold] = useState(true);
  let [italic, setItalic] = useState(true);
  let [strikeThrough, setStrikeThrough] = useState(true);
  let [heading, setHeading] = useState(true);
  let [dotsList, setDotsList] = useState(true);
  let [numericList, setNumericList] = useState(true);
  let [quotes, setQuotes] = useState(true);
  let [showNewCom, setShowNewCom] = useState(false);
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
    if (showNewCom === false) {
      setShowNewCom(true);
    } else {
      setShowNewCom(false);
    }
  };
  let hideCreate = () => {
    setShowNewCom(false);
  };
  return (
    <div className="createPostFormContainer">
      <div className="formHeaderContainer">
        <div className="textAreaContainer-x1"></div>
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

            <div className="draftOrSubmit">
              <div className="postSubmitButton">
                <button>Comment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextEditorTemp;
