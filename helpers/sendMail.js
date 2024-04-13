const nodemailer = require("nodemailer");
const Pass = process.env.Pass;
const dotenv = require("dotenv");
async function sendMail(to,subject,text,html) {
  dotenv.config();
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", 
    
    secure: true, // Usually true if connecting to port 465
    auth: {
      user: "vanshgoel104203@gmail.com", // Your email address
      pass: Pass, // Password (for gmail, your app password)
      // ⚠️ For better security, use environment variables set on the server for these values when deploying
    },
  });
  
  
  let info = await transporter.sendMail({
    from: "vanshgoel104203@gmail.com",
    to,
    subject,
    html
    
  });

  console.log(info.messageId); // Random ID generated after successful send (optional)
}

module.exports = {sendMail}