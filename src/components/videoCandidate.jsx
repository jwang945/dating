import React, { Component } from "react";
class VideoCandidate extends Component {
  state = {};
  render() {
    const overlayNameStyle = {
      position: "absolute",
      top: "70%",
      left: "39%",
      zIndex: 1,
      fontSize: 25,
      color: "white"
    };
    const overlayDescriptionStyle = {
      position: "absolute",
      top: "74%",
      left: "39%",
      zIndex: 1,
      fontSize: 16,
      color: "white",
      wordWrap: "break-word",
      width: 300,
      textAlign: "left"
    };
    return (
      <React.Fragment>
        {this.props.children}
        <div style={overlayNameStyle} class="overlayName">
          <p>Nala Cat</p>
        </div>
        <div style={overlayDescriptionStyle}>
          <p>
            I like to eat frogs 😍 and I somehow have hairballs and i only date
            badboys 9/10 only
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default VideoCandidate;
