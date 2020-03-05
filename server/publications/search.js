import { Meteor } from "meteor/meteor";

import { Book } from "/collections/books";

import isIsbn13 from "/modules/isbn/is-isbn-13";
import isIsbn10 from "/modules/isbn/is-isbn-10";

Meteor.publish("search", ({ query }, skip = 0, limit = 9) => {
  if (isIsbn13(query)) {
    return Book.find({ isbn13: query });
  } else if (isIsbn10(query)) {
    return Book.find({ isbn10: query });
  }

  return Book.find(
    { $text: { $search: `${query}` } },
    {
      fields: {
        score: { $meta: "textScore" },
      },
      sort: { score: { $meta: "textScore" } },
      limit,
      skip,
    }
  );
});
