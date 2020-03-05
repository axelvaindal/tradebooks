import React, { Component } from "react";

import "./book-card.css";

export default class BookCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { book } = this.props;
    const bookCard = (
      <div className="book-card">
        <div className="card mb-4">
          <img
            className="card-img-top"
            alt="Thumbnail [100%x225]"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16d6e20f102%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16d6e20f102%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.3359375%22%20y%3D%22120.121875%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            data-holder-rendered="true"
          />
          <div className="card-body">
            <div className="c d-flex justify-content-between align-items-center mb-4">
              <i className="fa fa-heart-o" />
              <i className="fa fa-share-alt" />
              <i className="fa fa-comment-o" />
              <i className="fa fa-void" />
              <i className="fa fa-void" />
              <i className="fa fa-void" />
              <i className="fa fa-void" />
              <small className="points-price">9 pts</small>
            </div>
            <h4
              onClick={() => FlowRouter.go("book", { isbn: book.isbn13 })}
              className="card-title">
              {book.title}
            </h4>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm">
                  Trader
                </button>
                <button type="button" className="btn btn-sm">
                  Wish
                </button>
                <button type="button" className="btn btn-sm">
                  Réserver
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    return bookCard;
  }
}
