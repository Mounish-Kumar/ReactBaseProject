import React from "react";
import CodeHighlighter from "../code-highlighter";
import Breadcrumb from "./index";

class BreadcrumbUsage extends React.Component {
  state = {
    trails: [
      { label: "Dashboard", path: "/dashboard" },
      { label: "Employee", path: "/employee" },
      { label: "AccessDenied", path: "/accessdenied" },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <h1>Breadcrumb</h1>
        <br />
        <Breadcrumb
          trails={this.state.trails}
          onTrailsChange={(updatedTrails) =>
            this.setState({ trails: updatedTrails })
          }
        />
        <br />
        <h3>Usage</h3>
        <CodeHighlighter language="html">
          {`
<Breadcrumb
  trails={this.state.trails}
  onTrailsChange={(updatedTrails) => this.setState({ trails: updatedTrails })}
/>
          `}
        </CodeHighlighter>
        <br />
        State of the component where Breadcrumb is used
        <CodeHighlighter language="js">
          {`
state = {
  trails: [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Employee", path: "/employee" },
    { label: "AccessDenied", path: "/accessdenied" }
  ]
};
          `}
        </CodeHighlighter>
        <br />
        Methods to add/start trail in breadcrumb by updating the state
        <CodeHighlighter language="js">
          {`
addBreadcrumbTrail = (label, path) => {
  this.setState({
    trails: [...this.state.trails, { label, path }]
  });
};

startBreadcrumbTrail = (label, path) => {
  this.setState({
    trails: [{ label, path }]
  });
};
          `}
        </CodeHighlighter>
      </React.Fragment>
    );
  }
}

export default BreadcrumbUsage;
