"use strict";
const { v4: uuid } = require("uuid");

const { sendEmail } = require("../services/email/sendEmail");

const { httpResponse } = require("../utils/httpResponse");

module.exports.handler = async (event) => {
  try {
    if (event.Records && event.Records.length) {
      const message = JSON.parse(event.Records[0].Sns.Message);
      const data = {
        ...message,
        code: `BRL-FRETE-${uuid()}`,
      };

      await sendEmail(data);

      console.log("\x1b[32m", "SEND_ORDER");

      return httpResponse(200, { ...message });
    }
  } catch (err) {
    console.log("\x1b[31m", err.message);

    return httpResponse(err.status || 500, {
      error: err.message || "Internal Error",
    });
  }
};
