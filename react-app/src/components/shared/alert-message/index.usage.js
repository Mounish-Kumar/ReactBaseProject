import React, { Component } from "react";
import CodeHighlighter from "../code-highlighter";
import AlertMessage from "./index";

class AlertMessageUsage extends Component {
  state = {
    messages: [
      { type: "SUCCESS", message: "This is a success message..." },
      { type: "ERROR", message: "This is an error message..." },
      { type: "WARNING", message: "This is a warning message..." },
      { type: "INFO", message: "This is an info message..." },
    ],
  };

  deleteMessage = (index) => {
    const messages = this.state.messages.filter((item, i) => index !== i);
    this.setState({ messages });
  };

  render() {
    return (
      <React.Fragment>
        <h1>AlertMessage</h1>
        <br />
        <AlertMessage
          messages={this.state.messages}
          onDelete={this.deleteMessage}
        />
        <br />
        <h3>Usage</h3>
        <CodeHighlighter language="html">
          {`
<AlertMessage
  messages={this.state.messages}
  onDelete={this.deleteMessage}
/>
          `}
        </CodeHighlighter>
        <br />
        To configure alert messages to be displayed
        <CodeHighlighter language="js">
          {`
state = {
  messages: [
    { type: "SUCCESS", message: "This is a success message..." },
    { type: "ERROR", message: "This is an error message..." },
    { type: "WARNING", message: "This is a warning message..." },
    { type: "INFO", message: "This is an info message..." }
  ]
};
          `}
        </CodeHighlighter>
        <br />
        Callback method to delete alert message on clicking close icon
        <CodeHighlighter language="js">
          {`
deleteMessage = (index) => {
  const messages = this.state.messages.filter((item, i) => index !== i);
  this.setState({ messages });
}
          `}
        </CodeHighlighter>
      </React.Fragment>
    );
  }
}

export default AlertMessageUsage;
