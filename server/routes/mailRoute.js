const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')



const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    },
  });
  

router.post('/', (req,res) => {
    const { name, lastname, email, text } = req.body;
    const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: process.env.PERSONAL_EMAIL,
        subject: `${name} ${lastname}, ${email}`,
        text: text,
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        } else {
          console.log('Email sent: ' + info.response);
          res.status(200).send('Email sent successfully');
        }
    })
})

module.exports = router;