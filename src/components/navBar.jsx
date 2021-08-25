import React, { Component } from "react";
import TopNavBar from "./topNavBar";
import BottomNavBar from "./bottomNavBar";
import MatchesCardList from "./matchesCardList";
class NavBar extends Component {
  state = {
    isMenuOpened: false
  };
  componentDidMount() {
    console.log("mounted");
  }
  onMatchClick() {
    console.log("matches have been clicked");
  }
  render() {
    return (
      <React.Fragment>
        <TopNavBar />
        <BottomNavBar onMatchClick={this.onMatchClick} />
        <MatchesCardList />
      </React.Fragment>
    );
  }
}

export default NavBar;
