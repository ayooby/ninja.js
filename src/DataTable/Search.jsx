import React from "react";

const Search = ({ onSearch }) => {
// using search query param instead
  return (
    <div className="p-b-1">
      <input
        type="search"
        className="form-control"
        //use local text here
        placeholder="Søg brugere"
        onChange={onSearch.bind(this)}
      />
    </div>
  );
};

export default Search;
