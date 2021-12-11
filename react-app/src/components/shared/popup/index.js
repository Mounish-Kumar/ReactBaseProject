import React, { Component } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { isString } from "../../../services/utils";
import PropTypes from "prop-types";

class Popup extends Component {
  state = {};

  render() {
    const {
      header,
      onClose,
      children,
      footer,
      primaryBtn,
      secondaryBtn,
      size, // small, medium, large, xlarge
      position, // center, top, bottom, right, left, top-right, top-left, bottom-right, bottom-left
    } = this.props;

    const {
      label: primaryBtnLabel,
      onClick: onPrimaryBtnClick,
      disabled: primaryBtnDisabled,
    } = primaryBtn || {};

    const {
      label: secondaryBtnLabel,
      onClick: onSecondaryBtnClick,
      disabled: secondaryBtnDisabled,
    } = secondaryBtn || {};

    return (
      <div className="glasspane">
        <div
          className={`modal ${size ? size : "medium"} 
            ${position ? position : "center"}`}
        >
          <div className="modal-header">
            {isString(header) ? <h2>{header}</h2> : header}
            <CloseIcon
              className="close"
              onClick={onClose || onSecondaryBtnClick}
            />
          </div>

          <div className="modal-body">{children}</div>

          <div className="modal-footer">
            {footer || (
              <React.Fragment>
                <button
                  onClick={onSecondaryBtnClick || onClose}
                  disabled={primaryBtnDisabled}
                >
                  {secondaryBtnLabel || "No"}
                </button>
                <button
                  className="primary"
                  onClick={onPrimaryBtnClick}
                  disabled={secondaryBtnDisabled}
                >
                  {primaryBtnLabel || "Yes"}
                </button>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Popup.propTypes = {
  header: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
  primaryBtn: PropTypes.object,
  secondaryBtn: PropTypes.object,
  size: PropTypes.string,
  position: PropTypes.string,
  footer: PropTypes.node,
};

export default Popup;
