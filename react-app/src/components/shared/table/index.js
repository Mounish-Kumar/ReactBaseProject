import React, { Component } from "react";
import SortIcon from "./../sort-icon/index";
import PropTypes from "prop-types";
import Pagination from "./../pagination/index";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortedField: props.sortInit,
      page: {
        currentPage: 1,
        pageSize: 10,
        startIndex: 1,
        endIndex: 10,
      },
    };
  }

  componentDidMount() {
    const { sortInit } = this.props;
    const { key, order } = sortInit || {};
    if (key && order) {
      this.handleSort(key, order);
    }
  }

  handleSort = (key, order) => {
    const { onSort, onSortAndPaginate } = this.props;
    const sortedField = { key, order };
    this.setState({ sortedField }, () => {
      onSort && onSort(key, order);
      onSortAndPaginate && onSortAndPaginate(sortedField, this.state.page);
    });
  };

  render() {
    const {
      dataList,
      mapping,
      sortInit,
      totalItems,
      onPaginate,
      paginateOnLoad,
      onSortAndPaginate,
    } = this.props;
    const keys = Object.keys(mapping);
    const { sortedField } = this.state;
    const { key: sortedKey, order: sortedOrder } = sortedField || {};

    return (
      <>
        <table>
          <thead>
            <tr>
              {keys.map((key) => (
                <th
                  key={key}
                  className={mapping[key].hideInMobile ? "mobile-hide" : ""}
                >
                  {mapping[key].heading}
                  {mapping[key].sort && (
                    <SortIcon
                      order={key === sortedKey ? sortedOrder : null}
                      onSort={(order) => this.handleSort(key, order)}
                    />
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataList.map((data, i) => (
              <tr key={i}>
                {keys.map((key) => (
                  <td
                    key={key}
                    className={mapping[key].hideInMobile ? "mobile-hide" : ""}
                  >
                    {mapping[key].renderField
                      ? mapping[key].renderField(data)
                      : data[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        {totalItems && (onPaginate || onSortAndPaginate) ? (
          <Pagination
            totalItems={totalItems}
            onPaginate={(page) => {
              this.setState({ page }, () => {
                onPaginate && onPaginate(page);
              });
            }}
            paginateOnLoad={!sortInit && paginateOnLoad}
            onSortAndPaginate={onSortAndPaginate}
            sortedField={sortedField}
          />
        ) : (
          <></>
        )}
      </>
    );
  }
}

Table.propTypes = {
  dataList: PropTypes.array.isRequired,
  mapping: PropTypes.object.isRequired,
  sortInit: PropTypes.object,
  onSort: PropTypes.func,
};

export default Table;
