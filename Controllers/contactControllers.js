const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const db = require('../db/db.Config.js')
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});


router.post("/submit", async (req, res) => {
  const { name, email, message } = req.body;

  try {
   
    await db.none(
      "INSERT INTO contact_forms (name, email, message) VALUES ($1, $2, $3)",
      [name, email, message]
    );

    
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      data: { message: "Contact form submitted successfully" },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      data: { error: "Internal server error, failed to submit contact form" },
    });
  }
});

module.exports = router;
