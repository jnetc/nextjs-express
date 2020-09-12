module.exports = (req, res) => {
  // res.send({ msg: `Hello ${req.body}!` });
  const { name = 'World' } = req.query;
  res.json({ msg: `Hello ${name}!` });
};

// import sgMail from '@sendgrid/mail';

// export default async function (req, res) {
//   const { email, message } = req.body;
//   setTimeout(() => {
//     console.log(req.body);
//     sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//     const msg = {
//       to: 'fspirits@gmail.com',
//       from: email,
//       subject: 'Sending with Twilio SendGrid is Fun',
//       text: message,
//       html: `<strong>${message}and easy to do anywhere, even with Node.js</strong>`,
//     };

//     try {
//       console.log(msg);
//       // await sgMail.send(msg);
//       res.status(200).send('Message sent successfully');
//     } catch (error) {
//       console.log('ERROR', error);
//       res.status(400).send('Message not sent.');
//     }
//   }, 3000);
// }
