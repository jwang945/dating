import React, { Component } from "react";
import MatchCard from "./matchCard";
import bojangleIcon from "./../matchPictures/bojangleIcon.png";
import pandaIcon from "./../matchPictures/pandaIcon.png";
import burgerKingIcon from "./../matchPictures/burgerKingIcon.png";
import cfaIcon from "./../matchPictures/cfaIcon.png";
import dairyQueenIcon from "./../matchPictures/dairyQueenIcon.png";
import jackIcon from "./../matchPictures/jackIcon.png";
import mcdonaldsIcon from "./../matchPictures/mcdonaldsIcon.png";
import popeyesIcon from "./../matchPictures/popeyesIcon.png";
import shakeShackIcon from "./../matchPictures/shakeShackIcon.png";
import wendysIcon from "./../matchPictures/wendysIcon.png";
class MatchesCardList extends Component {
  state = {
    matches: [
      {
        uuid: "001",
        name: "Bojangle",
        latestMessage: "Start up a conversation with this person",
        icon: bojangleIcon
      },
      {
        uuid: "002",
        name: "Panda Express",
        latestMessage: "example last message",
        icon: pandaIcon
      },
      {
        uuid: "003",
        name: "Burger King",
        latestMessage: "example last message",
        icon: burgerKingIcon
      },
      {
        uuid: "004",
        name: "Chick-fil-a",
        latestMessage: "example last message",
        icon: cfaIcon
      },
      {
        uuid: "005",
        name: "Dairy Queen",
        latestMessage: "example last message",
        icon: dairyQueenIcon
      },
      {
        uuid: "006",
        name: "Jack in the Box",
        latestMessage: "example last message",
        icon: jackIcon
      },
      {
        uuid: "007",
        name: "McDonald's",
        latestMessage: "example last message",
        icon: mcdonaldsIcon
      },
      {
        uuid: "008",
        name: "Popeyes",
        latestMessage: "example last message",
        icon: popeyesIcon
      },
      {
        uuid: "009",
        name: "Shake Shack",
        latestMessage: "example last message",
        icon: shakeShackIcon
      },
      {
        uuid: "010",
        name: "Wendy's",
        latestMessage: "example last message",
        icon: wendysIcon
      }
    ]
  };
  render() {
    const matchesCardListContainerStyle = {
      display: "flex",
      flexDirection: "column",
      width: 450,
      background: "green"
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
