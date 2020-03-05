import { Class } from "meteor/jagi:astronomy";

const Books = new Mongo.Collection("books");

Books.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

export const Book = Class.create({
  name: "Book",
  collection: Books,
  fields: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
    description: {
      type: String,
    },
    pageCount: {
      type: Number,
    },
    isbn13: {
      type: String,
    },
    isbn10: {
      type: String,
    },
    cover: {
      type: String,
    },
    publishedAt: {
      type: Date,
    },
    activeSellOrders: {
      type: Number,
    },
    authorId: {
      type: String,
    },
    publisherId: {
      type: String,
    },
  },
  helpers: {},
  behaviors: {
    timestamp: {
      hasCreatedField: true,
      createdFieldName: "createdAt",
      hasUpdatedField: true,
      updatedFieldName: "updatedAt",
    },
  },
});
