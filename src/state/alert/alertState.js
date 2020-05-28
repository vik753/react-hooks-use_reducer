import React from "react";
import AlertContext from "./alertContext";
import { alertReducer } from "./alert-reducer";
import { closeAlert, showAlert } from "./alert-actions";

const AlertState = ({ children }) => {
  const initialState = {
    alert: null,
  };
  const [state, dispatch] = React.useReducer(alertReducer, initialState);

  const hide = () => dispatch(closeAlert());
  const show = (alert) => {
    dispatch(showAlert(alert));
  }

  return (
    <AlertContext.Provider value={{ hide, show, alert: state.alert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertState;
