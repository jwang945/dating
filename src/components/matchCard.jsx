import React, { Component } from "react";
class MatchCard extends Component {
  state = {};
  render() {
    const matchCardStyle = {
      height: 100,
      width: "100%",
      overflow: "hidden",
      display: "flex",
      border: "solid #000"
    };
    const matchIconStyle = {
      position: "absolute",
      left: 10,
      top: 30
    };
    const matchTextStyle = {
      marginTop: 5,
      marginLeft: 80,
      textAlign: "left"
    };
    return (
      <div className="matchCard" style={matchCardStyle}>
        <div className="matchIcon" style={matchIconStyle}>
          <img src={this.props.icon} alt="Bojangle Icon" />
        </div>
        <div className="matchText" style={matchTextStyle}>
          <div className="matchName" style={{ fontSize: 22 }}>
            {this.props.name}
          </div>
          <div className="matchMessage">{this.props.latestMessage}</div>
        </div>
      </div>
    );
  }
}

export default MatchCard;
