import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    auth: {
    // replace `user` and `pass` values 
     //     user: 'REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM',
     //     pass: 'REPLACE-WITH-YOUR-GENERATED-PASSWORD'
     user: process.env.SMTP_USER,
     pass: process.env.SMTP_PASS,
    }
});
    
async function main() {
      // send mail with defined transport object
    const info = await transporter.sendMail({
    from: '"Fred Foo 👻" ',        // sender address
    to: "bar@example.com, baz@example.com",         // list of receivers
    subject: "Hello There✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>",        // html body
});
    
console.log("Message sent: %s", info.messageId);
      
// Message sent:   

}
    
main().catch(console.error);