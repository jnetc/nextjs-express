const sgMail = require('@sendgrid/mail');

const sendgrid = async (data, callback) => {
  const { email, message } = data;
  console.log(data);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'fspirits@gmail.com',
    from: email,
    subject: 'Sending with Twilio SendGrid is Fun',
    text: message,
    html: `<strong>${message}and easy to do anywhere, even with Node.js</strong>`,
  };

  try {
    console.log(msg);
    await sgMail.send(msg);
    callback(null, msg);
    // res.status(200).send('Message sent successfully');
  } catch (error) {
    console.log('ERROR', error);
    callback(error, null);
    // res.status(400).send('Message not sent.');
  }
};
module.exports = sendgrid;
