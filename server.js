const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const sendgrid = require('./utils/sendgrid');

app.prepare().then(() => {
  const server = express();

  server.use(express.urlencoded({ extended: false }));
  server.use(express.json());

  server.get('/sendgrid', (req, res) => {
    res.send({ msg: 'waiting' });
  });

  server.post('/sendgrid', (req, res) => {
    setTimeout(() => {
      sendgrid(req.body, (err, data) => {
        if (err) {
          res.send({ status: 'failed', msg: err });
        } else {
          res.send({ status: 'complited', msg: data });
        }
      });
    }, 3000);
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
