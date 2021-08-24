import React, { Component } from "react";
class MatchCard extends Component {
  state = {};
  render() {
    const matchCardStyle = {
      height: 100,
      width: "100%",
      overflow: "hidden",
      background: "green"
    };
    const matchIconStyle = {
      position: "absolute",
      left: 0,
      top: 30
    };
    const matchTextStyle = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignContent: "center"
    };
    return (
      <div className="matchCard" style={matchCardStyle}>
        <div className="matchIcon" style={matchIconStyle}>
          <img src={this.props.icon} alt="Bojangle Icon" />
        </div>
        <div className="matchText" style={matchTextStyle}>
          <div className="matchName">{this.props.name}</div>
          <div className="matchMessage">{this.props.latestMessage}</div>
        </div>
      </div>
    );
  }
}

export default MatchCard;
