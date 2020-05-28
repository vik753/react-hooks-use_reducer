import React, { useContext } from "react";
import AlertContext from "../state/alert/alertContext";

const Alert = () => {
  const { alert, hide } = useContext(AlertContext);
  if (!alert) return null;

  return (
    <div
      className={`alert alert-${alert.type || "secondary"} alert-dismissible`}
      role="alert"
      style={{position: 'fixed', top:'20px', right: '20px'}}
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
