const sendgrid = require('@sendgrid/mail')

module.exports = ({ from, to, subject, text, apiKey }, { success, failure }) => {
  sendgrid.setApiKey(apiKey)
  sendgrid.send({ from, to, subject, text })
    .then(([response, _]) => success({ status: response.statusCode }))
    .catch(e => failure({ message: e.toString() }))
}