const nodemailer=require("nodemailer")
const sendEmail=async(email,code)=>{
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
        subject: "Verify Your Email for Pleader.Ai Account",
         html:`
         <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Verification for Pleader.ai Account</title>
  </head>
  <body>
    <div>
      <p>Dear,</p>

      <p>
        We would like to kindly request your email verification to ensure the
        security and authenticity of your Pleader.ai account. To proceed with
        the verification process, please follow the link below:
      </p>

      <p><a href="https://pleader.ai/verify/${code}">Verify Email</a></p>

      <p>
        Thank you for choosing Pleader.ai as your preferred platform.
        If you require any assistance or encounter any issues during the
        verification process, please feel free to contact our support team. We
        are here to help.
      </p>
      <p>
      The token will be valid for 10 minutes only.
        </p>
      <p>
    If not requested by you then please ignore it.
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
module.exports= sendEmail;