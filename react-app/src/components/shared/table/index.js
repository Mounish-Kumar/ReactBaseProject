import React, { Component } from "react";
import SortIcon from "./../sort-icon/index";
import PropTypes from "prop-types";

class Table extends Component {
  state = {
    sortedField: null,
  };

  componentDidMount() {
    const { sortInit } = this.props;
    if (sortInit) {
      const { key, order } = sortInit;
      this.handleSort(key, order);
    }
  }

  handleSort = (key, order) => {
    const { onSort } = this.props;
    this.setState({ sortedField: { key, order } });
    onSort(key, order);
  };

  render() {
    const { dataList, mapping } = this.props;
    const keys = Object.keys(mapping);
    const { sortedField } = this.state;
    const { key: sortedKey, order: sortedOrder } = sortedField || {};

    return (
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
