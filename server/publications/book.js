import { Meteor } from "meteor/meteor";

import { Book } from "/collections/books";

import isIsbn13 from "/modules/isbn/is-isbn-13";

Meteor.publish("book", isbn => {
  if (isIsbn13(isbn)) {
    return Book.find({ isbn13: isbn });
  } else {
    return Book.find({ isbn10: isbn });
  }
});
