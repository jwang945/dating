import React, { Component } from "react";
import VideoCandidate from "./videoCandidate";
import video from "./../hairlessCat.mp4";
class MatchCandidate extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <VideoCandidate>
          <video
            ref="mainVideoRef"
            src={video}
            autoPlay={true}
            loop={true}
            controls={true}
          />
        </VideoCandidate>
      </React.Fragment>
    );
  }
}

export default MatchCandidate;
