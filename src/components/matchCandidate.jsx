import React, { Component } from "react";
import VideoCandidate from "./videoCandidate";
import MatchControls from "./matchControls";
import video from "./../hairlessCat.mp4";
class MatchCandidate extends Component {
  state = {};
  onMoreClick() {
    console.log("more button clicked");
  }
  onPassClick() {
    console.log("pass button clicked");
  }
  onLikeClick() {
    console.log("like button clicked");
  }
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
        <MatchControls
          onMoreClick={this.onMoreClick}
          onPassClick={this.onPassClick}
          onLikeClick={this.onLikeClick}
        />
      </React.Fragment>
    );
  }
}

export default MatchCandidate;
