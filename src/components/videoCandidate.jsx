import React, { Component } from "react";
class VideoCandidate extends Component {
  state = {};
  render() {
    const overlayNameStyle = {
      position: "absolute",
      top: 625,
      left: 670,
      zIndex: 1,
      fontSize: 25,
      color: "white",
      textAlign: "left"
    };
    const overlayDescriptionStyle = {
      position: "absolute",
      top: 660,
      left: 670,
      zIndex: 1,
      fontSize: 16,
      color: "white",
      wordWrap: "break-word",
      width: 300,
      textAlign: "left"
    };
    const videoContainerStyle = {
      // background: "green",
      width: "40%",
      margin: "auto"
    };
    return (
      <React.Fragment>
        <div className="videoContainer" style={videoContainerStyle}>
          {this.props.children}
          <div style={overlayNameStyle} className="overlayName">
            <p>Nala Cat</p>
          </div>
          <div style={overlayDescriptionStyle} className="overlayDescription">
            <p>
              I like to eat frogs 😍 and I somehow have hairballs and i only
              date badboys 9/10 only
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default VideoCandidate;
