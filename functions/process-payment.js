"use strict";

const products = require("../utils/products.json");
const { httpResponse } = require("../utils/httpResponse");
const HandleErrors = require("../utils/HandlerErrors");

const { publish } = require("../services/sns/publish");

module.exports.handler = async (event) => {
  try {
    if (event.Records && event.Records.length) {
      const message = JSON.parse(event.Records[0].Sns.Message);

      const findProductById = products.data.find(
        (product) => product.id === message.product_id && product.amount
      );

      if (!findProductById) {
        throw new HandleErrors(404, { error: "The product is not exists" });
      }

      if (Number(findProductById.value) !== Number(message.payment_value)) {
        throw new HandleErrors(400, "The payment not go approved");
      }

      await publish({ ...message, product: findProductById });

      console.log("\x1b[32m", "PROCESS_PAYMENT");

      return httpResponse(200, { ...message, product: findProductById });
    }
  } catch (err) {
    console.log("\x1b[31m", err.message);

    return httpResponse(err.status || 500, {
      error: err.message || "Internal Error",
    });
  }
};
