
const nodemailer = require("nodemailer");

const sendMail = async (email, subject, data) => {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OTP Verification</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
        h1 { color: red; }
        .otp { font-size: 36px; color: #7b68ee; margin-top: 20px; }
    </style>
</head>
<body>
    <h1>OTP Verification</h1>
    <p>Hello ${data.name}, your One-Time Password (OTP) for account verification is:</p>
    <p class="otp">${data.otp}</p>
</body>
</html>`;

  await transport.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject,
    html,
  });
};

module.exports = sendMail;
