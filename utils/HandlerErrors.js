class HandleErrors extends Error {
  constructor(code, message) {
    super(message);
    this.status = code;
  }
}

module.exports = HandleErrors;
