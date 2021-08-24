import React, { Component } from "react";
import TopNavBar from "./topNavBar";
import BottomNavBar from "./bottomNavBar";
class NavBar extends Component {
  state = {};
  onMatchClick() {
    console.log("matches have been clicked");
  }
  render() {
    return (
      <React.Fragment>
        <TopNavBar />
        <BottomNavBar onMatchClick={this.onMatchClick} />
      </React.Fragment>
    );
  }
}

export default NavBar;
