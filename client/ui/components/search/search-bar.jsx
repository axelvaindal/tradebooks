import React, { PureComponent } from "react";

const SCOPE = {
  BOOK: "Livres",
  AUTHOR: "Auteurs",
  PUBLISHER: "Editeurs",
};

export default class SearchBar extends PureComponent {
  constructor(props) {
    super(props);

    this.searchInput = React.createRef();

    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);

    this.state = {
      activeSearch: SCOPE.BOOK,
    };
  }

  handleSearch() {
    const query = this.searchInput.current.value.trim();

    if (query !== "") {
      FlowRouter.go("search", {}, { query, scope: this.state.activeSearch });
    }
  }

  handleKeyUp(event) {
    if (event.key === "Enter") {
      this.handleSearch();
    }
  }

  render() {
    const searchBar = (
      <div className="search-bar">
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend topic-dropdown">
              <button
                className="btn btn-sm search-topic dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                {this.state.activeSearch}
              </button>
              <div className="dropdown-menu topic-dropdown-menu">
                <a
                  className="dropdown-item"
                  onClick={() => this.setState({ activeSearch: SCOPE.BOOK })}>
                  Livres
                </a>
                <a
                  className="dropdown-item"
                  onClick={() => this.setState({ activeSearch: SCOPE.AUTHOR })}>
                  Auteurs
                </a>
                <a
                  className="dropdown-item"
                  onClick={() =>
                    this.setState({ activeSearch: SCOPE.PUBLISHER })
                  }>
                  Editeurs
                </a>
              </div>
            </div>
            <input
              id="search"
              placeholder={getPlaceHolder(this.state.activeSearch)}
              type="search"
              ref={this.searchInput}
              onKeyUp={this.handleKeyUp}
              defaultValue={this.props.query}
              className="form-control"
            />
            <div className="input-group-append">
              <button
                className="btn btn-search"
                type="button"
                onClick={this.handleSearch}
                id="button-go">
                <i className="fa fa-search" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );

    return searchBar;
  }
}

function getPlaceHolder(scope) {
  switch (scope) {
    case SCOPE.AUTHOR:
      return "Chercher par nom d'auteur";
    case SCOPE.BOOK:
      return "Chercher par titre ou ISBN";
    case SCOPE.PUBLISHER:
      return "Chercher par nom d'éditeur";
  }
}
