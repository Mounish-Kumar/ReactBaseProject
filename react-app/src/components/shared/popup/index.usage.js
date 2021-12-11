import React, { Component } from "react";
import CodeHighlighter from "../code-highlighter";
import Popup from "./index";

class PopupUsage extends Component {
  state = {
    showPopup: false,
    size: null,
    position: null,
  };

  openPopup = (size, position) => () =>
    this.setState({ showPopup: true, size, position });

  closePopup = () => this.setState({ showPopup: false });

  getPopup = (size, position) => {
    return (
      <Popup
        header="My Title"
        primaryBtn={{
          label: "Save",
          onClick: () => console.log("Primary Button Clicked"),
        }}
        secondaryBtn={{ label: "Cancel", onClick: this.closePopup }}
        size={size}
        position={position}
      >
        <p>
          Velit sit ipsum ea anim enim anim dolore. Nostrud esse ipsum sint sint
          consequat labore labore sunt tempor laboris proident aliquip dolore.
          Aliquip aute amet dolor qui aliqua velit laboris veniam sunt enim.
          Nisi ex consequat sunt incididunt esse incididunt aliqua id excepteur
          laborum qui quis velit aliqua.
        </p>
      </Popup>
    );
  };

  render() {
    const { showPopup, size, position } = this.state;

    return (
      <React.Fragment>
        <h1>Popup</h1>
        <br />
        <h3>Preview</h3>
        <p>Click the buttons to view popup in different size and position.</p>
        <div className="viewport popup-viewport">
          <button className="primary" onClick={this.openPopup(null, null)}>
            Default
          </button>
          <div className="section">
            <button onClick={this.openPopup("small", null)}>Small</button>
            <button onClick={this.openPopup("medium", null)}>Medium</button>
            <button onClick={this.openPopup("large", null)}>Large</button>
            <button onClick={this.openPopup("xlarge", null)}>
              Extra Large
            </button>
          </div>
          <div className="section">
            <button onClick={this.openPopup(null, "center")}>Center</button>
            <button onClick={this.openPopup(null, "top")}>Top</button>
            <button onClick={this.openPopup(null, "bottom")}>Bottom</button>
            <button onClick={this.openPopup(null, "right")}>Right</button>
            <button onClick={this.openPopup(null, "left")}>Left</button>
          </div>
          <div className="section">
            <button onClick={this.openPopup(null, "top-right")}>
              Top Right
            </button>
            <button onClick={this.openPopup(null, "top-left")}>Top Left</button>
            <button onClick={this.openPopup(null, "bottom-right")}>
              Bottom Right
            </button>
            <button onClick={this.openPopup(null, "bottom-left")}>
              Bottom Left
            </button>
          </div>

          {showPopup && this.getPopup(size, position)}
        </div>
        <br />
        <h3>Usage</h3>
        <CodeHighlighter language="html">{`
<Popup
  header="My Title"
  onClose={this.onClose}
  primaryBtn={this.primaryBtn}
  secondaryBtn={this.secondaryBtn}
  size="medium"
  position="center"
>
  <p> <!-- Content that will render inside popup body -->
    Velit sit ipsum ea anim enim anim dolore. Nostrud esse ipsum sint sint
    consequat labore labore sunt tempor laboris proident aliquip dolore.
    Aliquip aute amet dolor qui aliqua velit laboris veniam sunt enim.
    Nisi ex consequat sunt incididunt esse incididunt aliqua id excepteur
    laborum qui quis velit aliqua.
  </p>
</Popup>
        `}</CodeHighlighter>
        <br />
        Popup header can be either be String or JSX
        <CodeHighlighter language="js">{`
header="My Title"  // String
header=<h2>My Title</h2>  // JSX
        `}</CodeHighlighter>
        <br />
        Callback method for close icon in popup header
        <CodeHighlighter language="js">{`
onClose = () => this.setState({ showPopup: false })};
// If onClose is not given, the secondaryBtn's onClick method will be called.
        `}</CodeHighlighter>
        <br />
        To configure primary button
        <CodeHighlighter language="js">{`
primaryBtn = {
  label: "Save",  // Label for primary button. Value is "Yes" by default.
  onClick: () => console.log("Primary Button Clicked"),  // Callback method for primary button's onClick.
  disabled: false  // If value is true, button will be disabled.
};
        `}</CodeHighlighter>
        <br />
        To configure secondary button
        <CodeHighlighter language="js">{`
secondaryBtn = {
  label: "Cancel",  // Label for secondary button. Value is "No" by default.
  onClick: () => console.log("Primary Button Clicked"),  // Callback method for secondary button's onClick.
  // If onClick is not given, the onClose method will be called.
  disabled: false  // If value is true, button will be disabled.
};
        `}</CodeHighlighter>
        <br />
        To configure size
        <CodeHighlighter language="js">{`
size="medium"  // Values can be "small", "medium", "large", "xlarge".
// If value is not given, takes "medium" by default.
        `}</CodeHighlighter>
        <br />
        To configure position
        <CodeHighlighter language="js">{`
position="center"  // Values can be "center", "top", "bottom", "right", "left", "top-right", "top-left", "bottom-right", "bottom-left".
// If value is not given, takes "center" by default.
        `}</CodeHighlighter>
        <br />
        If you want different footer instead of primary and secondary buttons,
        you can pass JSX into popup footer
        <CodeHighlighter language="html">{`
footer = (
  <React.Fragment>
    <input type="checkbox" /> Accept terms and conditions
  </React.Fragment>
);
        `}</CodeHighlighter>
      </React.Fragment>
    );
  }
}

export default PopupUsage;
