import React, { Component } from "react";
import moreIcon from "./../icons/moreIcon.svg";
import passIcon from "./../icons/passIcon.svg";
import likeIcon from "./../icons/likeIcon.svg";
class MatchControls extends Component {
  state = {};
  render() {
    const buttonStyle = {
      height: 60,
      width: 60
    };
    const flexContainerStyle = {
      display: "flex",
      columnGap: 100,
      justifyContent: "center",
      marginTop: 25
    };
    return (
      <React.Fragment>
        <div style={flexContainerStyle}>
          <button style={buttonStyle}>
            <img src={moreIcon} alt="More" />
          </button>
          <button style={buttonStyle}>
            <img src={passIcon} alt="Pass" />
          </button>
          <button style={buttonStyle}>
            <img src={likeIcon} alt="Like" />
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default MatchControls;
