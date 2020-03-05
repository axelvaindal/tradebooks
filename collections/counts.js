import { Class } from "meteor/jagi:astronomy";

Counts = new Mongo.Collection("counts"); // eslint-disable-line no-undef

export const Count = Class.create({
  name: "Count",
  collection: Counts, // eslint-disable-line no-undef
  fields: {
    count: {
      type: Number,
    },
  },
});
