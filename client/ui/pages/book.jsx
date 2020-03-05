import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";

import { Book } from "/collections/books";

import "./book.css";

/**
 * Book information page of the app.
 * Main objectives :
 * - Display detailed information about a specific book
 * - Allow social and buying interaction to maximize profits
 * @extends Component
 */
class BookInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { book, bookSub } = this.props;

    if (!bookSub) {
      return null;
    }

    const result = (
      <div className="page book">
        <div className="container">
          <div className="row mb-4">
            <div className="col-xl-4 col-md-6 col-sm-12">
              <img
                alt="Thumbnail [100%x225]"
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16d6e20f102%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16d6e20f102%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.3359375%22%20y%3D%22120.121875%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                data-holder-rendered="true"
              />
            </div>
            <div className="col-xl-8 col-md-6 col-sm-12">
              <h3 className="book-title">{book.title}</h3>
              <h5 className="book-subtitle">The Order of the Phoenix</h5>
              <p>Written by John Carpenter and published by Hachette Livre</p>
              <p>Page count: {book.page_count}</p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12">
              <p className="book-description">{book.description}</p>
            </div>
          </div>
          <div className="row mb-4">
            <h3>Sale orders for {book.title}</h3>
            <div className="col-12">
              <table className="sale-orders-table table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Note</th>
                    <th scope="col">Qualité</th>
                    <th scope="col">Points</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </th>
                    <td>Neuf</td>
                    <td>7</td>
                    <td className="button-td">
                      <button type="button" className="btn btn-sm">
                        Trader
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </th>
                    <td>Très bon</td>
                    <td>5</td>
                    <td className="button-td">
                      <button type="button" className="btn btn-sm">
                        Trader
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );

    return result;
  }
}

export default withTracker(props => {
  const bookSub = Meteor.subscribe("book", props.isbn);
  const book = Book.findOne();

  return {
    bookSub: bookSub.ready(),
    book,
  };
})(BookInfo);
