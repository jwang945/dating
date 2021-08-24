import React, { Component } from "react";
import MatchCandidate from "./matchCandidate";
import MatchControls from "./matchControls";
class Body extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <MatchCandidate />
        <MatchControls />
      </React.Fragment>
    );
  }
}

export default Body;
