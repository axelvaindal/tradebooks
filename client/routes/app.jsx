import React from "react";
import { mount } from "react-mounter";
import { FlowRouter } from "meteor/kadira:flow-router";

import Tradebooks from "/client/ui/layouts/main.jsx";

import Book from "/client/ui/pages/book.jsx";
import Index from "/client/ui/pages/index.jsx";
import SearchResult from "/client/ui/pages/search-result.jsx";

const app = FlowRouter.group({
  name: "tradebooks",
});

app.route("/", {
  name: "index",
  action() {
    mount(Tradebooks, {
      page: <Index />,
    });
  },
});

app.route("/search", {
  name: "search",
  action(params, { query }) {
    mount(Tradebooks, {
      page: <SearchResult query={query} />,
    });
  },
});

app.route("/book/:isbn", {
  name: "book",
  action({ isbn }) {
    mount(Tradebooks, {
      page: <Book isbn={isbn} />,
    });
  },
});
