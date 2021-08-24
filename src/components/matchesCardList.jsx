import React, { Component } from "react";
import MatchCard from "./matchCard";
import bojanglePicture from "./../matchPictures/bojangleIcon.png";
class MatchesCardList extends Component {
  state = {
    matches: [
      {
        uuid: "001",
        name: "Bojangle",
        latestMessage: "Start up a conversation with this person",
        icon: bojanglePicture
      },
      {
        uuid: "002",
        name: "Panda Express",
        latestMessage: "hey sexy",
        icon: bojanglePicture
      }
    ]
  };
  render() {
    const matchesCardListContainerStyle = {
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      width: "30%",
      height: "100%"
    };
    return (
      <React.Fragment>
        <div
          className="matchesCardListContainer"
          style={matchesCardListContainerStyle}
        >
          {this.state.matches.map(match => (
            <MatchCard
              key={match.uuid}
              name={match.name}
              latestMessage={match.latestMessage}
              icon={match.icon}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default MatchesCardList;
