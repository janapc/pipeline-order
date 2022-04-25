const AWS = require("aws-sdk");

module.exports.publish = async (body) => {
  let config = {
    region: process.env.AWS_REGION,
  };

  if (process.env.IS_OFFLINE) config.endpoint = process.env.SNS_ENDPOINT_LOCAL;

  const sns = new AWS.SNS(config);

  const params = {
    Message: JSON.stringify(body),
    TopicArn: process.env.SNS_ARN,
  };

  return await sns.publish(params).promise();
};
