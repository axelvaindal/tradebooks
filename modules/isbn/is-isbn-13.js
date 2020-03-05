import isIsbn from "is-isbn";

export default query => isIsbn.validate(query) && query.length === 13;
