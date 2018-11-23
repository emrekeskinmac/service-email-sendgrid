const sendgrid = require('@sendgrid/mail')

module.exports = ({ from, to, subject, text, html, apiKey }, { success, failure }) => {
  if (!text && !html) {
    failure({ message: "at least of the 'text' or 'html' contents must be provided" })
    return
  }

  sendgrid.setApiKey(apiKey)
  sendgrid.send({ from, to, subject, text, html })
    .then(([response, _]) => success({ status: response.statusCode }))
    .catch(e => failure({ message: e.toString() }))
}