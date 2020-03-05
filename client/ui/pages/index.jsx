import React, { Component } from "react";

import SearchBar from "/client/ui/components/search/search-bar.jsx";

/**
 * Index page of the app.
 * Main objectives :
 * - Allow for immediate search of books
 * - Push book content to customers
 * @extends Component
 */
export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const index = (
      <div className="page index">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <main role="main">
                <h2 className="">Tradebooks</h2>
                <p className="lead">Une idée de livre à dévorer ?</p>
              </main>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    );

    return index;
  }
}
