import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/scss/bootstrap.scss";
import Alert from "./components/Alert";
import AlertState from "./state/alert/alertState";

ReactDOM.render(
  <AlertState>
    <Alert alert={{text: 'Hello'}} />
    <App />
  </AlertState>,
  document.getElementById("root")
);
