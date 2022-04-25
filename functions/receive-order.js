"use strict";

const { v4: uuid } = require("uuid");

const { httpResponse } = require("../utils/httpResponse");
const { validation } = require("../utils/validation");

const { publish } = require("../services/sns/publish");

module.exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);

    validation(body);

    const id = uuid();

    await publish({ ...body, id });

    console.log("\x1b[32m", "RECEIVE_ORDER");

    return httpResponse(200, { ...body, id });
  } catch (err) {
    console.log("\x1b[31m", err.message);

    return httpResponse(err.status || 500, {
      error: err.message || "Internal Error",
    });
  }
};
