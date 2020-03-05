import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";

import { Book } from "/collections/books";

import InfiniteScroll from "/client/ui/components/utils/infinite-scroll.jsx";

import BooksList from "../components/search/books-list.jsx";
import SearchPanel from "/client/ui/components/search/search-panel.jsx";

import Counter from "/client/modules/counter";
import isIsbn10 from "/modules/isbn/is-isbn-10";
import isIsbn13 from "/modules/isbn/is-isbn-13";

/**
 * Search result page of the app.
 * Main objectives :
 * - Display main information about books
 * - Allow social and buying interaction to maximize profits
 * @extends Component
 */
class SearchResult extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { query, count } = this.props;

    const notice =
      count === 0 ? (
        <h3 className="search-result-not-found">
          Désolé, nous ne trouvons aucune référence à votre recherche dans notre
          bibliothèque.
        </h3>
      ) : (
        <InfiniteScroll
          publication="search"
          subscriptionData={{ query }}
          element={BooksList}
          collection={Book}
          totalDocs={count}
        />
      );

    const searchResult = (
      <div className="page search-result">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SearchPanel query={query} totalResult={count} />
            </div>
          </div>
          {notice}
        </div>
      </div>
    );

    return searchResult;
  }
}

export default withTracker(props => {
  /*
   * If query is an ISBN, we want to display the book details page directly.
   */
  if (isIsbn10(props.query) || isIsbn13(props.query)) {
    FlowRouter.go("book", { isbn: props.query });
  }

  const searchCountSub = Meteor.subscribe(
    "search_count",
    props.query,
    props.scope
  );
  const count = searchCountSub.ready() ? String(Counter.searchResult()) : "";

  return {
    count,
    searchCountSub,
  };
})(SearchResult);

SearchResult.propTypes = {
  count: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  searchCountSub: PropTypes.object.isRequired,
};

SearchResult.defaultProps = {
  count: "",
};
