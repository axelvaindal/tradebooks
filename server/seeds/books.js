import { Meteor } from "meteor/meteor";
import Seeder from "meteor/m4dnation:meteor-seeder";

import { Book } from "/collections/books";
import BookFactory from "/server/factories/book";

Meteor.startup(() => {
  Seeder(Book.getCollection(), {
    environments: ["development", "staging"],
    data: BookFactory.build(6),
    enableLogging: true,
  });
});
