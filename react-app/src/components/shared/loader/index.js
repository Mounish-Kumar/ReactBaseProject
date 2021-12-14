import React, { Component } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import PropTypes from "prop-types";

class Loader extends Component {
  render() {
    const { showFull, show, size, color } = this.props;

    return (
      <>
        {showFull && (
          <div className="glasspane">
            <CircularProgress size="4.5rem" sx={{ color: "#33b5e5" }} />
          </div>
        )}

        {show && (
          <CircularProgress
            size={size || "1rem"}
            sx={{ color: color || "#33b5e5" }}
          />
        )}
      </>
    );
  }
}

Loader.propTypes = {
  showFull: PropTypes.bool,
  show: PropTypes.bool,
};

export default Loader;
