import PropTypes from "prop-types";
import React, { PureComponent } from "react";

import SearchBar from "/client/ui/components/search/search-bar.jsx";

/**
 * SearchPanel
 * @extends Component
 */
export default class SearchPanel extends PureComponent {
  constructor(props) {
    super(props);
  }

  /**
   * Render the component.
   * @return  {HTMLEntity}    HTML to display
   */
  render() {
    return (
      <div className="search-panel">
        <h2 className="text-center">
          {this.props.totalResult} Résultats pour "{this.props.query}"
        </h2>
        <SearchBar query={this.props.query} />
      </div>
    );
  }
}

SearchPanel.propTypes = {
  totalResult: PropTypes.string,
  query: PropTypes.string,
};

SearchPanel.defaultProps = {
  totalResult: "",
};
