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
        <main style={{ marginLeft: 80 }}>
          <VideoCandidate>
            <video
              src={video}
              autoPlay={true}
              loop={true}
              controls={true}
              controlsList="nodownload"
              disablePictureInPicture={true}
              height="700"
            />
          </VideoCandidate>
          <MatchControls
            onMoreClick={this.onMoreClick}
            onPassClick={this.onPassClick}
            onLikeClick={this.onLikeClick}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default MatchCandidate;
