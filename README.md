# Email Sendgrid Service

```
mesg-core service deploy https://github.com/mesg-foundation/service-email-sendgrid.git
```

## Tasks

### Send

#### inputs
| input | type | description |
| --- | --- | --- |
| apiKey | String | The Sendgrid API key. If needed, you can create here: https://app.sendgrid.com/settings/api_keys |
| from | String | The account to send the email from |
| to | String | The recipient of the email |
| subject | String | The subject of the email |
| text | String | The text of the email |

#### outputs
| ouput | description |
| --- | --- |
| success | When the email is successfully sent |
| failure | When an error occurs while trying to send the email (this can be any kind of error such as, a wrong email address, Sendgrid API down, etc...) |
