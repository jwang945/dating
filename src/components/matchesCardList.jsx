import React, { Component } from "react";
class MatchesCardList extends Component {
  state = {};
  render() {
    const matchesCardListContainerStyle = {
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      background: "green",
      width: "30%",
      height: "100%"
    };
    return (
      <React.Fragment>
        <div
          className="matchesCardListContainer"
          style={matchesCardListContainerStyle}
        ></div>
      </React.Fragment>
    );
  }
}

export default MatchesCardList;
