import React, { Component } from "react";
class VideoCandidate extends Component {
  state = {};
  render() {
    const overlayTextStyle = {
      position: "absolute",
      top: "70%",
      left: "39%",
      zIndex: 1,
      fontSize: 25,
      color: "white"
    };
    return (
      <React.Fragment>
        {this.props.children}
        <div style={overlayTextStyle} class="overlayText">
          <p>Overlay Text</p>
        </div>
      </React.Fragment>
    );
  }
}

export default VideoCandidate;
