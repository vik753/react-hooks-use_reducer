const alertReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_ALERT":
      return {
        alert: action.alert,
      };
    case "CLOSE_ALERT":
      return {
        alert: null,
      };
    default:
      return state;
  }
};

export { alertReducer };
