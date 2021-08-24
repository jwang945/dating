import React, { Component } from "react";
class BottomNavBar extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginTop: 56 }} className="nav-scroller bg-body shadow-sm">
        <nav className="nav nav-underline" aria-label="Secondary navigation">
          <button
            style={{ border: "none", background: "none" }}
            onClick={this.props.onMatchClick}
          >
            Matches
            <span className="badge bg-light text-dark rounded-pill align-text-bottom">
              27
            </span>
          </button>
          <a className="nav-link" href="/#">
            Explore
          </a>
          <a className="nav-link" href="/#">
            Suggestions
          </a>
        </nav>
      </div>
    );
  }
}

export default BottomNavBar;
