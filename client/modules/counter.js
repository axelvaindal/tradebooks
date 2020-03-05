import { Count } from "/collections/counts";

export default class Counter {
  static searchResult() {
    return Count.findOne({ _id: "query_search" }).count;
  }
}
