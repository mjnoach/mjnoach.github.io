import { EmailParams, MailerSend, Recipient } from 'mailersend'

const mailersend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY as string,
})

const getEmailParams = (from: string, message: string) =>
  new EmailParams()
    .setFrom({
      email: 'a.siennkiewicz@gmail.com',
      name: 'MailerSend',
    })
    .setTo([new Recipient('a.siennkiewicz@gmail.com')])
    .setSubject('Contact Request')
    .setText(
      `
      from: ${from}\n
      message:\n
      ${message}`
    )
    .setTemplateId('yzkq340xzrx4d796')

export const mail = {
  send: async (from: string, message: string) =>
    mailersend.email.send(getEmailParams(from, message)),
}
