import { Meteor } from "meteor/meteor";

import { Book } from "/collections/books";

import isIsbn13 from "/modules/isbn/is-isbn-13";
import isIsbn10 from "/modules/isbn/is-isbn-10";

Meteor.publish("search_count", function(query, scope) {
  const self = this;
  let count = 0;
  let initializing = true;
  let cursor;

  if (isIsbn13(query)) {
    cursor = Book.find({ isbn13: query });
  } else if (isIsbn10(query)) {
    cursor = Book.find({ isbn10: query });
  } else {
    cursor = Book.find({ $text: { $search: `${query}` } });
  }

  const handle = cursor.observeChanges({
    added: () => {
      count++;
      if (!initializing) {
        self.changed("counts", "query_search", { count });
      }
    },
    removed: () => {
      count--;
      self.changed("counts", "query_search", { count });
    },
  });

  initializing = false;
  this.added("counts", "query_search", { count });
  this.ready();

  this.onStop(() => {
    handle.stop();
  });
});
