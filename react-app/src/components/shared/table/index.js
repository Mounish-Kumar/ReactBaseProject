import React, { Component } from "react";
import SortIcon from "./../sort-icon/index";
import PropTypes from "prop-types";
import Pagination from "./../pagination/index";

class Table extends Component {
  constructor(props) {
    super(props);

    const { currentPage, pageSize, startIndex, endIndex } =
      props.pageInit || {};

    this.state = {
      sortedField: props.sortInit,
      page: {
        currentPage: currentPage || 1,
        pageSize: pageSize || 10,
        startIndex: startIndex || 1,
        endIndex: endIndex || 10,
      },
    };
  }

  componentDidMount() {
    const { sortInit, sortOnLoad } = this.props;
    const { key, order } = sortInit || {};
    if (sortOnLoad && key) {
      this.handleSort(key, order);
    }
  }

  handleSort = (key, order = "asc") => {
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
      sortOnLoad,
      totalItems,
      onPaginate,
      pageInit,
      paginateOnLoad,
      onSortAndPaginate,
    } = this.props;
    const keys = Object.keys(mapping);
    const { sortedField } = this.state;
    const { key: sortedKey, order: sortedOrder } = sortedField || {};

    return (
      <div>
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
            pageInit={pageInit}
            paginateOnLoad={!sortOnLoad && paginateOnLoad}
            onSortAndPaginate={onSortAndPaginate}
            sortedField={sortedField}
          />
        ) : (
          <></>
        )}
      </div>
    );
  }
}

Table.propTypes = {
  dataList: PropTypes.array.isRequired,
  mapping: PropTypes.object.isRequired,

  onSort: PropTypes.func,
  sortInit: PropTypes.object,
  sortOnLoad: PropTypes.bool,

  totalItems: PropTypes.number,
  onPaginate: PropTypes.func,
  pageInit: PropTypes.object,
  paginateOnLoad: PropTypes.bool,

  onSortAndPaginate: PropTypes.func,
};

export default Table;
