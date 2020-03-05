import PropTypes from "prop-types";
import React, { Component } from "react";

import BookCard from "/client/ui/components/book-card.jsx";

export default class BooksList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data: books } = this.props;

    if (books.length === 0) {
      return null;
    }

    const list = books.map((book, index) => (
      <div
        key={index}
        className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
        <BookCard book={book} />
      </div>
    ));

    return (
      <div className="books-list">
        <div className="row">{list}</div>
      </div>
    );
  }
}

/**
 * As this component is passed through
 */
BooksList.propTypes = {
  data: PropTypes.array,
};
