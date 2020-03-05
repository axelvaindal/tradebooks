import { debounce } from "lodash";
import PropTypes from "prop-types";
import React, { Component } from "react";

import InfiniteScrollPage from "./infinite-scroll-page.jsx";

export default class InfiniteScroll extends Component {
  constructor(props) {
    super(props);

    this.infiniteScrollerRef = React.createRef();

    this.addPage = this.addPage.bind(this);
    this.detectEndOfScreen = this.detectEndOfScreen.bind(this);

    this.state = {
      pages: 1,
      showButton: true,
      totalDocs: this.props.totalDocs,
    };
  }

  addPage() {
    const { elementPerPage } = this.props;
    const { pages, totalDocs } = this.state;

    if (pages * elementPerPage < 500) {
      this.setState({ pages: pages + 1, showButton: false });
      document.addEventListener(
        "scroll",
        debounce(this.detectEndOfScreen, 100)
      );
    }
  }

  detectEndOfScreen() {
    const { pages } = this.state;

    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      this.setState({ pages: pages + 1 });
    }
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.detectEndOfScreen);
  }

  render() {
    const {
      elementPerPage,
      publication,
      subscriptionData,
      collection,
      element,
    } = this.props;

    const pages = [];

    for (let i = 0; i < this.state.pages; i++) {
      pages.push(
        <InfiniteScrollPage
          key={i}
          onScroll={this.detectEndOfScreen}
          publication={publication}
          subscriptionData={{ ...subscriptionData, pageNumber: i + 1 }}
          skip={i * elementPerPage}
          amount={elementPerPage}
          collection={collection}
          element={element}
        />
      );
    }

    const button = this.state.showButton ? (
      <div className="row">
        <button className="btn btn-lg show-more-btn" onClick={this.addPage}>
          Show more
        </button>
      </div>
    ) : null;

    return (
      <div className="infinite-scroller" ref={this.infiniteScrollerRef}>
        {pages}
        {button}
      </div>
    );
  }
}

InfiniteScroll.propTypes = {
  elementPerPage: PropTypes.number,
  publication: PropTypes.string.isRequired,
  subscriptionData: PropTypes.object,
  element: PropTypes.func.isRequired,
  collection: PropTypes.func.isRequired,
};

InfiniteScroll.defaultProps = {
  elementPerPage: 9,
  subscriptionData: {},
};
