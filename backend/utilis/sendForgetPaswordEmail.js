const nodemailer=require("nodemailer")
const SendForgetEmail=async(email,code)=>{
    var transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
port: 465,
auth: {
user: process.env.EMAIL_ID,
pass: process.env.EMAIL_PASSWORD
}
       });

       transporter.verify(function(error, success) {
        if (error) {
          console.error('Transporter verification failed:', error);
        } else {
          console.log('Transporter is ready to send emails');
        }
      });
      
       
       var mailOptions = {
        from:process.env.EMAIL_ID,
        to: email,
        subject: "Reset  Your Password for Pleader.Ai Account",
         html:`
         <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Password Reset for Pleader.ai Account</title>
    </head>
    <body>
      <div>
        <p>Dear,</p>

        <p>
          We have received a request to reset your password for your Pleader.ai account.
          To proceed with the password reset process, please follow the link below:
        </p>

        <p><a href="https://pleader.ai/resetpassword/${code}">Reset Password</a></p>

        <p>
          If you did not request a password reset, please ignore this email. 
          Your password will remain unchanged.
        </p>

        <p>
          Please note that the password reset link is valid for 10 minutes only.
          If you do not reset your password within this time, you may need to request
          another password reset.
        </p>

        <p>
          If you require any assistance or encounter any issues during the password
          reset process, please feel free to contact our support team. We are here to help.
        </p>

        <p>Best regards,</p>
        <p>Pleader.ai</p>
      </div>
    </body>
  </html>

         `
       };
       
       transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        }
       });
}
module.exports= SendForgetEmail;