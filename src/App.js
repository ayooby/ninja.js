import React from "react";

import "./App.css";
import DataTable from "./DataTable";
import { userData } from "./data";

// both machines and human love functional component, more readable, less buggy they are
const App = () => {
  // it is better to have fixed data table
  return (
    <div className="container mt-3">
      <DataTable rows={userData} locale="da" rowsPerPage={5} />
    </div>
  );
};

export default App;
