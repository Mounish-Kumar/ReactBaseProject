import React, { Component } from "react";
import CodeHighlighter from "../code-highlighter";
import ExpandCollapse from "./index";

class ExpandCollapseUsage extends Component {
  code = (
    <ExpandCollapse collapse={true} collapsible={<h1>Click me!</h1>}>
      <p>
        Proident deserunt ut mollit proident do aute tempor excepteur veniam
        ipsum fugiat eu exercitation.
      </p>
    </ExpandCollapse>
  );

  render() {
    return (
      <React.Fragment>
        <h1>ExpandCollapse</h1>
        <br />
        <h3>Preview</h3>
        {this.code}
        <br />
        <h3>Usage</h3>
        <CodeHighlighter language="html">
          {`
<ExpandCollapse
  collapse={true}
  collapsible={<h1>Click me!</h1>}
>
  <p> <!-- collapsible content -->
    Proident deserunt ut mollit proident do aute tempor excepteur veniam
    ipsum fugiat eu exercitation.
  </p>
</ExpandCollapse>
          `}
        </CodeHighlighter>
        <br />
        To configure if the content should be collapsed on load
        <CodeHighlighter language="js">{`collapse={true}`}</CodeHighlighter>
        <br />
        The toggle element can be passed via props as
        <CodeHighlighter language="html">{`collapsible={<h1>Click me!</h1>}`}</CodeHighlighter>
      </React.Fragment>
    );
  }
}

export default ExpandCollapseUsage;
