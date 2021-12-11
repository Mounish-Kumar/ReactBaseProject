import React, { Component } from "react";
import CodeHighlighter from "../code-highlighter";
import Loader from "./index";

class LoaderUsage extends Component {
  fullpageLoaderCode = (<Loader showFull={true} />);

  loaderCode = (<Loader show={true} size="2rem" color="red" />);

  render() {
    return (
      <React.Fragment>
        <h1>Loader</h1>
        <br />
        <h3>Preview (Full Page Loader)</h3>
        <div className="viewport">{this.fullpageLoaderCode}</div>
        <br />
        <h3>Usage (Full Page Loader)</h3>
        <CodeHighlighter>{this.fullpageLoaderCode}</CodeHighlighter>
        <br />
        <br />
        <h3>Preview (Small Loader)</h3>
        {this.loaderCode}
        <br />
        <h3>Usage (Small Loader)</h3>
        <CodeHighlighter language="html">
          {`
<Loader
  show={true}
  size="2rem"
  color="red"
/>
          `}
        </CodeHighlighter>
        <CodeHighlighter language="js">
          {`
size="2rem"   // If value is not given, takes 1rem (16px) by default.
color="red"   // If value is not given, takes #33b5e5 (sky blue color) by default.
          `}
        </CodeHighlighter>
      </React.Fragment>
    );
  }
}

export default LoaderUsage;
