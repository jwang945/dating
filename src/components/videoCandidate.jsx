import React, { Component } from "react";
class VideoCandidate extends Component {
  state = {};
  render() {
    console.log(this.props);
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

export default VideoCandidate;
