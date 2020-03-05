import PropTypes from "prop-types";
import React, { Component } from "react";

import Navbar from "/client/ui/components/layouts/navbar.jsx";

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  /**
   * Render the component.
   * @return  {HTMLEntity}    HTML to display
   */
  render() {
    let showcase = (
      <div className="layout main">
        <Navbar />
        <div className="content">{this.props.page}</div>
      </div>
    );

    return showcase;
  }
}

Main.propTypes = {
  page: PropTypes.element.isRequired,
};
