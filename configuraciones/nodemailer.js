require('dotenv').config()
const nodemailer= require ("nodemailer")

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.user,
      pass: process.env.pass
    }
  });

  module.exports= transport