import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/navBar";
import Body from "./components/body";

class App extends Component {
  state = {};
  onMatchClick() {}
  render() {
    return (
      <div className="App">
        <NavBar onMatchClick={this.onMatchClick.bind(this)} />
        <Body />
      </div>
    );
  }
}

export default App;
