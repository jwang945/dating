import React, { Component } from "react";
import TopNavBar from "./topNavBar";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <TopNavBar />
        <BottomNavBar />
      </React.Fragment>
    );
  }
}

export default NavBar;
