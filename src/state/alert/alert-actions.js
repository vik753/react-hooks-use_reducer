// alert = {
// type: 'danger' or 'success' or 'warning' or 'info',
// text: 'any text',
// },
const showAlert = (alert) => ({
  type: "SHOW_ALERT",
  alert,
});

const closeAlert = () => ({
  type: "CLOSE_ALERT",
});

export { showAlert, closeAlert };
