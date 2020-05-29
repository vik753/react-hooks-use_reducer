import React from "react";
import { AlertContext } from "./AlertContexxt";
import { alertReducer } from "./alertReducer";
import { HIDE_ALERT, SHOW_ALERT } from "../types";

const AlertState = ({ children }) => {
  const [state, dispatch] = React.useReducer(alertReducer, null);
  let alertTimeout = null;

  React.useEffect(() => {
    if (alertTimeout) {
      clearTimeout(alertTimeout);
    }
  }, []);

  const hide = () => {
    dispatch({ type: HIDE_ALERT });
  };

  const show = (payload) => {
    dispatch({
      type: SHOW_ALERT,
      payload,
    });
    alertTimeout = setTimeout(() => {
      hide();
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, hide, show }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertState;
