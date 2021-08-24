import React, { Component } from "react";
import VideoCandidate from "./videoCandidate";
import MatchControls from "./matchControls";
import video from "./../hairlessCat.mp4";
class MatchCandidate extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <VideoCandidate>
          <video
            src={video}
            autoPlay={true}
            loop={true}
            controls={true}
            controlsList="nodownload"
            disablePictureInPicture={true}
            height="700"
            style={{ marginTop: 20 }}
          />
        </VideoCandidate>
        <MatchControls />
      </React.Fragment>
    );
  }
}

export default MatchCandidate;
