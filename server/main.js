import { Meteor } from "meteor/meteor";

import "/collections/counts";
import "./publications/search-count";
import "./publications/search";
import "./publications/book";

Meteor.startup(() => {
  // code to run on server at startup
});
