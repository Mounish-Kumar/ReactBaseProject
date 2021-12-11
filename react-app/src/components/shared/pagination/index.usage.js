import React, { Component } from "react";
import CodeHighlighter from "../code-highlighter";
import Pagination from ".";

class PaginationUsage extends Component {
  handlePaginate = (page) => {
    console.log("Current Page Number = " + page.currentPage);
    console.log("Page Size = " + page.pageSize);
    console.log("Page Start Index = " + page.startIndex);
    console.log("Page End Index = " + page.endIndex);
  };

  code = (
    <Pagination
      totalItems={45}
      onPaginate={this.handlePaginate}
      paginateOnLoad={true}
    />
  );

  render() {
    return (
      <React.Fragment>
        <h1>Pagination</h1>
        <br />
        <h3>Preview</h3>
        {this.code}
        <br />
        <h3>Usage</h3>
        <CodeHighlighter language="html">
          {`
<Pagination
  totalItems={45}
  onPaginate={this.handlePaginate}
  paginateOnLoad={true}
/>
          `}
        </CodeHighlighter>
        <br />
        Callback method on Pagination
        <CodeHighlighter language="js">
          {`
handlePaginate = (page) => {
  console.log("Current Page Number = " + page.currentPage);
  console.log("Page Size = " + page.pageSize);
  console.log("Page Start Index = " + page.startIndex);
  console.log("Page End Index = " + page.endIndex);
  // Your fetch call here
};
          `}
        </CodeHighlighter>
        <br />
        To call onPaginate method on component load
        <CodeHighlighter language="js">
          {`
paginateOnLoad={true}
          `}
        </CodeHighlighter>
      </React.Fragment>
    );
  }
}

export default PaginationUsage;
