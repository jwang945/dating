import React, { Component } from "react";
import TopNavBar from "./topNavBar";
import BottomNavBar from "./bottomNavBar";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <TopNavBar />
        <BottomNavBar onMatchClick={this.props.onMatchClick} />
      </React.Fragment>
    );
  }
}

export default NavBar;
