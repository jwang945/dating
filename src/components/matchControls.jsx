import React, { Component } from "react";
import passIcon from "./../icons/passIcon.svg";
class MatchControls extends Component {
  state = {};
  render() {
    const passButtonStyle = {
      position: "fixed",
      top: "90%",
      left: "50%"
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
          <button>More</button>
          <button>Pass</button>
          <button>Like</button>
        </div>
      </React.Fragment>
    );
  }
}

export default MatchControls;
