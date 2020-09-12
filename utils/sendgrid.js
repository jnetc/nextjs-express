// import sgMail from '@sendgrid/mail';

// export default async function sendgrid(req, res) {
//   const { email, message } = req.data;

//   console.log(req.data);
//   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//   const msg = {
//     to: 'fspirits@gmail.com',
//     from: email,
//     subject: 'Sending with Twilio SendGrid is Fun',
//     text: message,
//     html: `<strong>${message}and easy to do anywhere, even with Node.js</strong>`,
//   };

//   try {
//     console.log(msg);
//     // await sgMail.send(msg);
//     res.status(200).send('Message sent successfully');
//   } catch (error) {
//     console.log('ERROR', error);
//     res.status(400).send('Message not sent.');
//   }
// }
