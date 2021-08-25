import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/navBar";
import Body from "./components/body";
import { OffCanvas, OffCanvasMenu } from "react-offcanvas";
import MatchesCardList from "./components/matchesCardList";

class App extends Component {
  state = {
    isMenuOpened: true
  };
  onMatchClick() {
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  }
  render() {
    return (
      <div className="App">
        <NavBar onMatchClick={this.onMatchClick.bind(this)} />
        <Body />
        <OffCanvas
          width={1200}
          isMenuOpened={this.state.isMenuOpened}
          effect={"overlay"}
          transitionDuration={750}
        >
          <OffCanvasMenu>
            <MatchesCardList />
          </OffCanvasMenu>
        </OffCanvas>
      </div>
    );
  }
}

export default App;
