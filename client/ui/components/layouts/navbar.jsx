import React, { Component } from "react";

import "./navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const navbar = (
      <nav className="navbar navbar-expand fixed-top layout-navbar">
        <a className="navbar-brand" href={FlowRouter.path("/")}>
          Tradebooks
        </a>
        <ul className="navbar-nav navigation mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Tendances <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Genres <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Mon livre du jour <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Livres voyageurs <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown profile-dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              Axel VAINDAL
            </a>
            <div
              className="dropdown-menu profile-dropdown-menu"
              aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Profil
              </a>
              <a className="dropdown-item" href="#">
                Mes ordres
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Deconnexion
              </a>
            </div>
          </li>
        </ul>
      </nav>
    );

    return navbar;
  }
}
