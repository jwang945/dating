import React, { Component } from "react";
import MatchCandidate from "./matchCandidate";
import MatchesCardList from "./matchesCardList";
class Body extends Component {
  state = {};
  render() {
    const bodyStyle = {
      marginTop: 80,
      display: "flex"
    };

    return (
      <React.Fragment>
        <div className="body" style={bodyStyle}>
          <MatchesCardList />
          <MatchCandidate />
        </div>
      </React.Fragment>
    );
  }
}

export default Body;
