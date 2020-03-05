import PropTypes from "prop-types";
import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";

import Loader from "./loader.jsx";

class InfiniteScrollPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      subscription,
      data,
      element: Element,
      subscriptionData,
    } = this.props;

    if (!subscription) {
      return (
        <div className="row">
          <Loader />
        </div>
      );
    }

    return <Element data={data} subscriptionData={subscriptionData} />;
  }
}

export default withTracker(props => {
  const { collection, skip, amount, publication, subscriptionData } = props;

  const subscription = Meteor.subscribe(
    publication,
    subscriptionData,
    skip,
    amount
  );

  const data = collection.find({}, { limit: amount, skip }).fetch();

  return {
    subscription: subscription.ready(),
    data,
  };
})(InfiniteScrollPage);

InfiniteScrollPage.propTypes = {
  skip: PropTypes.number,
  amount: PropTypes.number,
  publication: PropTypes.string.isRequired,
  subscriptionData: PropTypes.object,
  element: PropTypes.func.isRequired,
  collection: PropTypes.func.isRequired,
};

InfiniteScrollPage.defaultProps = {
  skip: 0,
  amount: 9,
  subscriptionData: {},
};
