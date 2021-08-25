import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/navBar";
import Body from "./components/body";

class App extends Component {
  onMatchClick() {
    console.log("matches have been clicked");
  }
  render() {
    return (
      <div className="App">
        <NavBar onMatchClick={this.onMatchClick} />
        <Body />
      </div>
    );
  }
}

export default App;
