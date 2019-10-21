const axios = require('axios');

const slackApiUrl =
  'https://hooks.slack.com/services/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';

module.exports.hello = (event, context, callback) => {
  const slackNotification = notificationMessage =>
    axios({
      method: 'POST',
      url: slackApiUrl,
      data: JSON.stringify({
        text: notificationMessage
      })
    });

  slackNotification('Hello Im from aws lambda!')
    .then(res => {
      callback(null, {
        stateCode: 200,
        body: 'success'
      });
    })
    .catch(err => {
      callback(null, {
        stateCode: 200,
        body: 'failure'
      });
    });

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
