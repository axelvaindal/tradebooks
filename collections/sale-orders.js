import { Class } from "meteor/jagi:astronomy";

const SaleOrders = new Mongo.Collection("sale_orders");

SaleOrder.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

const SaleOrderStatus = {};

export const SaleOrder = Class.create({
  name: "SaleOrder",
  collection: SaleOrders,
  fields: {
    targeted_book: {
      type: String,
    },
    price: {
      type: Number,
    },
    due_at: {
      type: Date,
    },
    seller: {
      type: String,
    },
    status: {
      type: SaleOrderStatus,
    },
    buyerId: {
      type: String,
      optional: true,
    },
    sellInformation: {
      type: Object,
      optional: true,
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
