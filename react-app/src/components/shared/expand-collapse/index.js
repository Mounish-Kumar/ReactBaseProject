import React, { Component } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import PropTypes from "prop-types";

class ExpandCollapse extends Component {
  state = {
    collapse: this.props.collapse,
  };

  contentHeight;

  toggleExpandCollapse = () =>
    this.setState({ collapse: !this.state.collapse });

  render() {
    const { collapsible, children } = this.props;
    const { collapse } = this.state;

    return (
      <React.Fragment>
        {collapsible && (
          <div className="collapsible" onClick={this.toggleExpandCollapse}>
            {collapsible}
            {children &&
              (collapse ? (
                <ExpandMoreIcon className="collapse-arrow" />
              ) : (
                <ExpandLessIcon className="collapse-arrow" />
              ))}
          </div>
        )}
        {children && (
          <div
            className="collapsible-content"
            style={{ maxHeight: collapse ? 0 : this.contentHeight }}
            ref={(ele) => (this.contentHeight = ele && ele.scrollHeight)}
          >
            {children}
          </div>
        )}
      </React.Fragment>
    );
  }
}

ExpandCollapse.propTypes = {
  collapse: PropTypes.bool,
  collapsible: PropTypes.node.isRequired,
  children: PropTypes.node,
};

export default ExpandCollapse;
