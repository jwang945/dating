import React, { Component } from "react";
class VideoCandidate extends Component {
  state = {};
  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

export default VideoCandidate;
