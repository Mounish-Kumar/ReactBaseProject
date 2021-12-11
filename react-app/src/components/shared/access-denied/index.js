import React from "react";
import LockIcon from "@mui/icons-material/Lock";

class AccessDenied extends React.Component {
  render() {
    return (
      <div className="access-denied">
        <LockIcon sx={{ fontSize: "14rem", color: "#212121" }} />
        <h2>Access Denied</h2>
      </div>
    );
  }
}

export default AccessDenied;
