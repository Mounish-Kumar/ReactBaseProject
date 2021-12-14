import React, { Component } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import WarningIcon from "@mui/icons-material/Warning";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";

class AlertMessage extends Component {
  render() {
    const { messages, onDelete } = this.props;

    return (
      <>
        {messages && messages.length > 0 && (
          <div className="alert-messages">
            {messages.map((item, i) => {
              const { type } = item;
              let alertClasses = "success";
              let icon = <CheckCircleIcon />;
              switch (type && type.toUpperCase()) {
                case "ERROR":
                  alertClasses = "error";
                  icon = <CancelIcon />;
                  break;
                case "WARNING":
                  alertClasses = "warning";
                  icon = <WarningIcon />;
                  break;
                case "INFO":
                  alertClasses = "info";
                  icon = <InfoIcon />;
                  break;
              }
              return (
                <div key={i} className={alertClasses}>
                  {icon}
                  <span>{item.message}</span>
                  <CloseIcon
                    fontSize="inherit"
                    className="close-icon"
                    onClick={() => onDelete(i)}
                  />
                </div>
              );
            })}
          </div>
        )}
      </>
    );
  }
}

AlertMessage.propTypes = {
  messages: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default AlertMessage;
