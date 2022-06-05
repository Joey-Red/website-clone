import React from "react";
import { Interweave } from "interweave";
function Carousel(props) {
  return (
    <div className="carousel">
      <div className="caro-inside-x1">
        <div className="caro-inside-x2">
          <h2 className="caroPostTitle">{props.postTitle}</h2>
          <div className="caro-text-body">
            <Interweave
              noHtml
              content={props.postBody}
              className="caroPostBody"
            />
          </div>
          <div>
            <img />
            <span>r/{props.postSub}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
