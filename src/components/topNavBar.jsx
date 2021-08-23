import React, { Component } from "react";
class TopNavBar extends Component {
  state = {};
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark"
        aria-label="Main navigation"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            Offcanvas navbar
          </a>
          <button
            className="navbar-toggler p-0 border-0"
            type="button"
            id="navbarSideCollapse"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="navbar-collapse offcanvas-collapse"
            id="navbarsExampleDefault"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Notifications
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default TopNavBar;
