import { faCake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

function FPRightSide(props) {
  return (
    <div className="top-x-communities-container">
      <div className="top-communities">
        <div className="top-coms-header-editFP"></div>
        <div className="tcInside">
          <div>r/{props.postSub}</div>
          <div className="modsList">
            <FontAwesomeIcon icon={faCake}></FontAwesomeIcon>{" "}
            {props.modifiedDate}
            <div className="members">Members: #</div>
          </div>
        </div>
      </div>
      <div className="fpGap">
        <div className="top-communities">
          <div className="top-coms-header-editFP">r/{props.postSub} Rules</div>
          <div className="tcInside">
            <div className="rulesList">
              <ol>
                <li>Dont be a dick.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="fpGap">
        <div className="top-communities">
          <div className="top-coms-header-editFP">Moderators</div>
          <div className="tcInside">
            <div className="viewButtonContainerInverse">
              <a href="#">Message the mods</a>
            </div>
            <div className="modsList">
              <ol>
                <li>u/ModGuy1</li>
              </ol>
            </div>
            <div className="viewAllMods">View All Moderators</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FPRightSide;
