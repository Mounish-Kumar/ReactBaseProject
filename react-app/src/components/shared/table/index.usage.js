import React, { Component } from "react";
import CodeHighlighter from "../code-highlighter";
import Table from "./index";
import EditIcon from "@mui/icons-material/Edit";

class TableUsage extends Component {
  dataList = [
    {
      id: 1,
      firstName: "Mounish",
      lastName: "V",
      email: "mounish@example.com",
      phone: "8888888888",
      address: "Perumbakkam",
    },
    {
      id: 2,
      firstName: "Jestin",
      lastName: "M",
      email: "jestin@example.com",
      phone: "9999999999",
      address: "Sholinganallur",
    },
    {
      id: 3,
      firstName: "Shan",
      lastName: "M",
      email: "shan@example.com",
      phone: "7777777777",
      address: "Velachery",
    },
  ];

  mapping = {
    id: {
      heading: <h2>ID</h2>,
      sort: true,
      hideInMobile: true,
      renderField: (rowData) => {
        return (
          <a
            className="anchor"
            onClick={() => console.log("ID clicked : " + rowData.id)}
          >
            {rowData.id}
          </a>
        );
      },
    },
    firstName: { heading: "First Name", sort: true },
    lastName: { heading: "Last Name", hideInMobile: true },
    email: { heading: "Email", sort: true, hideInMobile: true },
    phone: { heading: "Phone", sort: true },
    address: { heading: "Address", sort: true, hideInMobile: true },
    edit: {
      heading: "Edit",
      renderField: (rowData) => {
        return (
          <EditIcon
            onClick={() => console.log("Edit clicked for " + rowData.firstName)}
          />
        );
      },
    },
  };

  sortInit = { key: "id", order: "desc" };

  handleSort = (key, order) => {
    console.log("Sort by '" + key + "' in " + order);
  };

  code = (
    <Table
      dataList={this.dataList}
      mapping={this.mapping}
      sortInit={this.sortInit}
      onSort={this.handleSort}
    />
  );

  render() {
    return (
      <React.Fragment>
        <h1>Table</h1>
        <br />
        <h3>Preview</h3>
        {this.code}
        <br />
        <h3>Usage</h3>
        <CodeHighlighter language="html">
          {`
<Table
  dataList={this.dataList}
  mapping={this.mapping}
  sortInit={this.sortInit}
  onSort={this.handleSort}
/>
          `}
        </CodeHighlighter>
        <br />
        Data (array) to be rendered inside table
        <CodeHighlighter language="js">
          {`
dataList = [
  { id: 1, firstName: "Mounish", lastName: "V", email: "mounish@example.com", phone: "8888888888", address: "Perumbakkam" },
  { id: 2, firstName: "Jestin", lastName: "M", email: "jestin@example.com", phone: "9999999999", address: "Sholinganallur" },
  { id: 3, firstName: "Shan", lastName: "M", email: "shan@example.com", phone: "7777777777", address: "Velachery" }
];
          `}
        </CodeHighlighter>
        <br />
        Configure how each column should be displayed
        <CodeHighlighter language="js">
          {`
mapping = {
  id: {  // Key in the dataList
    heading: <h2>ID</h2>,  // Heading for the column (Mandatory). Value can be String or JSX.
    sort: true,  // To enable sorting for the column (Optional). Value is false by default.
    hideInMobile: true,  // To hide the field in mobile view (Optional). Value is false by default.

    // renderField method is used to format the value or display the field differently (Optional).
    renderField: (rowData) => {
      // renderField method can return String or JSX.
      return (
        <a className="anchor" onClick={() => console.log("ID clicked : " + rowData.id)}>
          {rowData.id}
        </a>
      );
    }
    // Example: You can format a date in dd/MM/yyyy format inside renderField method and return the formatted value.
  },
  firstName: { heading: "First Name", sort: true },
  lastName: { heading: "Last Name", hideInMobile: true },
  email: { heading: "Email", sort: true, hideInMobile: true },
  phone: { heading: "Phone", sort: true },
  address: { heading: "Address", sort: true, hideInMobile: true },
  edit: {
    heading: "Edit",
    renderField: (rowData) => {
      // Here is an example of renderField method returning an icon.
      return (
        <EditIcon
          onClick={() => console.log("Edit clicked for " + rowData.firstName)}
        />
      );
    }
  }
};
          `}
        </CodeHighlighter>
        <br />
        To sort the table on load, configure sortInit
        <CodeHighlighter language="js">
          {`
sortInit = { key: "id", order: "desc" };
          `}
        </CodeHighlighter>
        <br />
        Callback method to handle onClick of sort icon present in table header
        <CodeHighlighter language="js">
          {`
handleSort = (key, order) => {
  console.log("Sort by '" + key + "' in " + order);
};
          `}
        </CodeHighlighter>
      </React.Fragment>
    );
  }
}

export default TableUsage;
