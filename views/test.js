var User       = require("../models/user");
var nodemailer = require("nodemailer")

var Otp = Math.floor(1000 + Math.random() * 9000);

var nodemailer=require("nodemailer")
var transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "F2017266366@umt.edu.com",
        pass: "f2017266366"
    }
});
let info = transporter.sendMail({
    to: req.body.email, // list of receivers
    subject: 'OTP for Email Verification', // Subject line
    text: Otp.toString() // plain text body
});

console.log('Message sent: %s', info.messageId);
