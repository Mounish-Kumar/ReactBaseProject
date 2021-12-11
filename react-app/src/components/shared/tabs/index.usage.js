import React, { Component } from "react";
import CodeHighlighter from "../code-highlighter";
import Tabs from "./index";

class TabsUsage extends Component {
  tabsConfig = [
    {
      head: <h2>Tab A</h2>,
      body: <h2>Excepteur voluptate nisi ad ullamco aliqua aute ex sit.</h2>,
    },
    {
      head: "Tab B",
      body:
        "Qui voluptate elit nostrud velit anim et pariatur deserunt id labore.",
    },
    {
      head: "Tab C",
      body: "Laboris laborum incididunt laboris eiusmod labore.",
    },
    {
      head: "Tab D",
      body:
        "Tempor ut et ea dolor incididunt consequat sit adipisicing laboris quis incididunt do.",
      disabled: true,
    },
  ];

  handleTabChange = (item, index) =>
    console.log("Tab changed to index " + index);

  getCode = (direction) => (
    <Tabs
      tabsConfig={this.tabsConfig}
      defaultActiveIndex={1}
      onTabChange={this.handleTabChange}
      callTabChangeOnLoad={true}
      direction={direction}
    />
  );

  render() {
    return (
      <React.Fragment>
        <h1>Tabs</h1>
        <br />
        <h3>Preview</h3>
        {this.getCode("x")}
        <br />
        <h3>Usage</h3>
        <CodeHighlighter language="html">
          {`
<Tabs
  tabsConfig={this.tabsConfig}
  defaultActiveIndex={1}
  onTabChange={this.handleTabChange}
  callTabChangeOnLoad={true}
  direction="x"
/>
          `}
        </CodeHighlighter>
        <br />
        To configure tabs
        <CodeHighlighter language="js">
          {`
tabsConfig = [
  {
    head: <h2>Tab A</h2>,  // Heading of the tab (Mandatory). Value can be String or JSX.
    body: <h2>Excepteur voluptate nisi ad ullamco aliqua aute ex sit.</h2>  // Body of the tab  (Mandatory).
    // Value can be String or JSX.
  },
  {
    head: "Tab B",
    body: "Qui voluptate elit nostrud velit anim et pariatur deserunt id labore."
  },
  {
    head: "Tab C",
    body: "Laboris laborum incididunt laboris eiusmod labore."
  },
  {
    head: "Tab D",
    body: "Tempor ut et ea dolor incididunt consequat sit adipisicing laboris quis incididunt do.",
    disabled: true  // To disable the tab
  }
];
          `}
        </CodeHighlighter>
        <br />
        Index of tab to be active on load
        <CodeHighlighter language="js">
          {`
defaultActiveIndex={1}  // Value is 0 by default.
          `}
        </CodeHighlighter>
        <br />
        Callback method for tab change event
        <CodeHighlighter language="js">
          {`
handleTabChange = (item, index) => console.log("Tab changed to index " + index);
          `}
        </CodeHighlighter>
        <br />
        If onTabChange callback method should be called onload or not
        <CodeHighlighter language="js">
          {`
callTabChangeOnLoad={true}  // Value is false by default
          `}
        </CodeHighlighter>
        <br />
        Direction of the component
        <CodeHighlighter language="js">
          {`
direction="x"  // Value can be 'x' or 'y'. Default value is 'x'.
          `}
        </CodeHighlighter>
        <br />
        <h3>Preview (when direction="y")</h3>
        {this.getCode("y")}
      </React.Fragment>
    );
  }
}

export default TabsUsage;
