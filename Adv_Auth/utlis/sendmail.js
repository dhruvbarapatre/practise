const nodemailer = require("nodemailer");

const transpoter = nodemailer.createTransport({
  secure: true,
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "barapatredhruv28012006@gmail.com",
    pass: "kqqxouklyvqynhdk",
  },
});

async function sendmail(email, htmlTemplate) {
  try {
    const data = await transpoter.sendMail({
      to:email,
      sub: "Verification Code",
      html:htmlTemplate,
      from: ' "Verification From Dhruv" barapatredhruv28012006@gmail.com',
    });
    console.log("Mail Sent Succesfully.....", data);
  } catch (error) {
    console.log(error);
  }
}

module.exports = sendmail;
