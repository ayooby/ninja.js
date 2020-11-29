import React from "react";

const Page = ({ pageNumber, currentPageNumber, onChange }) => {
  const buttonClass = currentPageNumber === pageNumber ? "button-outline" : "";

  const pageNumberInt = pageNumber + 1;

  const click = (event) => {
    event.preventDefault();
    onChange(pageNumber);
  };

  return (
    <li className="page-item mr-1">
      <button className={buttonClass} onClick={click}>
        {pageNumberInt}
      </button>
    </li>
  );
};

// add proptypes here
export default Page;
