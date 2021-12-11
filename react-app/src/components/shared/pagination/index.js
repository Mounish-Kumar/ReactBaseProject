import React, { Component } from "react";
import PropTypes from "prop-types";

class Pagination extends Component {
  state = {
    currentPage: 1,
    pageSize: 10,
    startIndex: 1,
    endIndex: 10,
  };

  pageSizeOptions = [5, 10, 20, 50, 100];

  componentDidMount() {
    this.props.paginateOnLoad && this.navigateTo(1);
  }

  handlePageSizeChange = (event) => {
    this.setState({ pageSize: event.target.value }, () => this.navigateTo(1));
  };

  navigateTo = (currentPage) => {
    const { pageSize } = this.state;
    const { totalItems, onPaginate, onSortAndPaginate, sortedField } =
      this.props;
    const startIndex = (currentPage - 1) * pageSize + 1;
    const endIndex = Math.min(currentPage * pageSize, totalItems);

    this.setState({ currentPage, startIndex, endIndex }, () => {
      const page = { currentPage, pageSize, startIndex, endIndex };
      onPaginate && onPaginate(page);
      onSortAndPaginate && onSortAndPaginate(sortedField, page);
    });
  };

  render() {
    const { totalItems } = this.props;
    const { currentPage, pageSize, startIndex, endIndex } = this.state;
    const totalPages = Math.ceil(totalItems / pageSize);

    return (
      <div className="pagination">
        <div className="section results">
          Showing {startIndex} - {endIndex} of {totalItems} results
        </div>

        <div className="wrapper">
          <div className="section">
            <span style={{ paddingRight: "0.5rem" }}>Items per page</span>
            <select value={pageSize} onChange={this.handlePageSizeChange}>
              {this.pageSizeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="section total-pages">
            Page {currentPage} of {totalPages}
          </div>

          <div className="section">
            <a
              className={currentPage === 1 ? "disabled" : ""}
              onClick={() => currentPage !== 1 && this.navigateTo(1)}
            >
              First
            </a>
            <a
              className={currentPage === 1 ? "disabled" : ""}
              onClick={() =>
                currentPage !== 1 && this.navigateTo(currentPage - 1)
              }
            >
              &lt;
            </a>
            <a className="active">{currentPage}</a>
            <a
              className={currentPage === totalPages ? "disabled" : ""}
              onClick={() =>
                currentPage !== totalPages && this.navigateTo(currentPage + 1)
              }
            >
              &gt;
            </a>
            <a
              className={currentPage === totalPages ? "disabled" : ""}
              onClick={() =>
                currentPage !== totalPages && this.navigateTo(totalPages)
              }
            >
              Last
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  onPaginate: PropTypes.func.isRequired,
  paginateOnLoad: PropTypes.bool,
  onSortAndPaginate: PropTypes.func,
  sortedField: PropTypes.object,
};

export default Pagination;
