const consoleLogTesting = (object, showAlert) => {
  return showAlert
    ? alert(`Allert message: ${object.fields.alertMsg}`)
    : console.log(`${object.name}: ${object.fields.field1} ${object.fields.field2}`);
};

export default consoleLogTesting;
