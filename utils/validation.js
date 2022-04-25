const HandleErrors = require("./HandlerErrors");

const fields = [
  "name",
  "email",
  "product_id",
  "payment_type",
  "payment_value",
  "address",
];

const paymentTypes = ["boleto", "cartão de crédito", "pix", "cartão de débito"];

module.exports.validation = (data) => {
  if (typeof data !== "object") {
    throw new HandleErrors(400, "The body should be an object");
  }

  for (let field of fields) {
    if (!data[field]) {
      throw new HandleErrors(400, `The field ${field} is not defined`);
    }
  }

  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (!regex.test(data.email)) {
    throw new HandleErrors(400, "The e-mail is invalid");
  }

  if (!paymentTypes.includes(data.payment_type.toLowerCase())) {
    throw new HandleErrors(400, "The type payment is invalid");
  }

  return true;
};
