import React from "react";

import Pagination from "./Pagination";
import Row from "./Row";
import Search from "./Search";

// to have a better performance PureComponents is beetter
// refactor to function component
class DataTable extends React.Component {
  state = {
    rows: this.props.rows,
    currentPageNumber: 0,
    totalNumberOfPages: this.calculateTotalNumberOfPages(this.props.rows),
  };

  // use proptype instead. remove this lines
  static defaultProps = {
    rowsPerPage: 40,
  };

  calculateTotalNumberOfPages(rows) {
    const { rowsPerPage } = this.props;
    if (rowsPerPage === 0) return 0;
    return Math.ceil(rows.length / rowsPerPage);
  }

  isKeyInText(key, value) {
    if (!value) return false;

    return value.toLowerCase().search(key) > -1;
  }

  searchOnRow(row, text) {
    const key = text.toLowerCase();
    const { name1, email } = row;
    return this.isKeyInText(key, name1) || this.isKeyInText(key, email);
  }

  search(text) {
    if (!text) return;

    const rowsFound = this.props.rows.filter((row) => {
      return this.searchOnRow(row, text);
    });
    const totalNumberOfPages = this.calculateTotalNumberOfPages(rowsFound);

    this.setState({
      rows: rowsFound,
      currentPageNumber: 0,
      totalNumberOfPages,
    });
  }

  changeToPageNumber(pageNumber) {
    this.setState({ ...this.state, currentPageNumber: pageNumber });
  }

  rowsInPageNumber(pageNumber) {
    const { rowsPerPage } = this.props;
    const startIndex = pageNumber * rowsPerPage;
    return [startIndex, startIndex + rowsPerPage];
  }

  render() {
    const { rows, currentPageNumber, totalNumberOfPages } = this.state;
    const rowsToRender = rows
      .map((row) => <Row key={row.per_id} row={row} />)
      .slice(...this.rowsInPageNumber(currentPageNumber));

    return (
      <div>
        <Search onSearch={(event) => this.search(event.target.value)} />
        <table>
          <tbody>{rowsToRender}</tbody>
        </table>
        <Pagination
          currentPageNumber={currentPageNumber}
          totalNumberOfPages={totalNumberOfPages}
          onChange={(pageNumber) => this.changeToPageNumber(pageNumber)}
        />
      </div>
    );
  }
}

export default DataTable;
