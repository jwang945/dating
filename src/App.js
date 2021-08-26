import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/navBar";
import Body from "./components/body";
//import { OffCanvas, OffCanvasMenu } from "react-offcanvas";
import Offcanvas from "react-bootstrap/Offcanvas";

class App extends Component {
  state = {
    isMenuOpened: false
  };
  onMatchClick() {
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
    //this.setState({ show: true });
  }
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
