import React from "react";

import Page from "./Page";

const Pagination = ({ currentPageNumber, totalNumberOfPages, onChange }) => {
  // better to use memoize for this array
  const pagesNumbers = Array.from(Array(totalNumberOfPages), (_, i) => i);

  if (totalNumberOfPages <= 1) {
    return null;
  }

  return (
    <ul className="pagination">
      {pagesNumbers.map((pageNumber) => (
        <Page
          key={pageNumber}
          currentPageNumber={currentPageNumber}
          pageNumber={pageNumber}
          onChange={onChange}
        />
      ))}
    </ul>
  );
};

export default Pagination;
