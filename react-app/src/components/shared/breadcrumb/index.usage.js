import React from "react";
import CodeHighlighter from "../code-highlighter";
import Breadcrumb from "./index";

class BreadcrumbUsage extends React.Component {
  state = {
    trails: [
      { label: "Dashboard", path: "/breadcrumb" },
      { label: "Employee", path: "/breadcrumb" },
      { label: "AccessDenied", path: "/breadcrumb" },
    ],
  };

  handleNavigate = ({ trail, index }) => {
    const filteredTrails = this.state.trails.filter((item, i) => i <= index);
    this.setState({ trails: filteredTrails });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Breadcrumb</h1>
        <br />
        <Breadcrumb
          trails={this.state.trails}
          onNavigate={this.handleNavigate}
        />
        <br />
        <h3>Usage</h3>
        <CodeHighlighter language="html">
          {`
<Breadcrumb
  trails={this.state.trails}
  onNavigate={this.handleNavigate}
/>
          `}
        </CodeHighlighter>
        <br />
        State of the component where Breadcrumb is used
        <CodeHighlighter language="js">
          {`
state = {
  trails: [
    { label: "Dashboard", path: "/breadcrumb" },
    { label: "Employee", path: "/breadcrumb" },
    { label: "AccessDenied", path: "/breadcrumb" }
  ]
};
          `}
        </CodeHighlighter>
        <br />
        Callback method onNavigate (Can be used to remove trails on the right
        side)
        <CodeHighlighter language="js">
          {`
handleNavigate = ({ trail, index }) => {
  const filteredTrails = this.state.trails.filter((item, i) => i <= index);
  this.setState({ trails: filteredTrails });
};
          `}
        </CodeHighlighter>
      </React.Fragment>
    );
  }
}

export default BreadcrumbUsage;
