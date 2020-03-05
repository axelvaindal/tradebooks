import React, { PureComponent } from "react";

import "./loader.css";

export default class Loader extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}
