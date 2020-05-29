import React from "react";
import { AlertContext } from "../contexts/Alert/AlertContexxt";

const Alert = (props) => {
  const { alert, hide } = React.useContext(AlertContext);

  if (!alert) return null;

  return (
    <div
      className={`alert alert-${alert.type} alert-dismissible fade show`}
      role="alert"
      style={{ position: "fixed", top: "11px", right: "11px" }}
    >
      {alert.text}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={hide}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;
