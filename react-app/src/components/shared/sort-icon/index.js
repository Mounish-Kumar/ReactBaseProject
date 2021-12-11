import React, { Component } from "react";
import CodeIcon from "@mui/icons-material/Code";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PropTypes from "prop-types";

class SortIcon extends Component {
  handleSort = (order) => {
    const newOrder = !order ? "asc" : order === "asc" ? "desc" : "asc";
    this.props.onSort(newOrder);
  };

  render() {
    const { order } = this.props;
    let icon = !order ? (
      <CodeIcon
        className="sort-icon unsorted"
        onClick={() => this.handleSort(order)}
      />
    ) : order === "asc" ? (
      <KeyboardArrowUpIcon
        className="sort-icon"
        onClick={() => this.handleSort(order)}
      />
    ) : (
      <KeyboardArrowDownIcon
        className="sort-icon"
        onClick={() => this.handleSort(order)}
      />
    );

    return <>{icon}</>;
  }
}

SortIcon.propTypes = {
  order: PropTypes.string,
  onSort: PropTypes.func.isRequired,
};

export default SortIcon;
