
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req:Request){
    try{
      const {userEmail , firstName ,verificationToken} = await req.json();
      let html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Verify Your Email</title>
        <style>
          body { font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; }
          .container { max-width: 500px; margin: auto; background: #fff; padding: 20px; border-radius: 8px; }
          .header { text-align: center; }
          .header h1 { color: #333; margin: 0; }
          .content { text-align: center; padding: 20px; }
          .button { background-color: #007bff; color: white!important; padding: 12px 24px; text-decoration: none; display: inline-block; border-radius: 5px; font-weight: bold; }
          .footer { font-size: 12px; color: #888; text-align: center; margin-top: 15px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Welcome to RentoPC</h1>
            <h2>Verify Your Email</h2>
          </div>
          <div class="content">
            <h3>Hello, ${firstName}!</h3>
            <p>Click the button below to verify your email and secure your account.</p>
            <a href="${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/users/verify-email/${verificationToken}" class="button">Verify Email</a>
          </div>
          <div class="footer">
            If you didn’t sign up for RentoPC, ignore this email.
          </div>
        </div>
      </body>
      </html>`;

      if(userEmail){
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.EMAIL_USER, // Your Gmail address
              pass: process.env.EMAIL_PASS, // Your App Password
            },
          });
          const mailOptions = {
            from: process.env.EMAIL_USER,
            to:userEmail,
            subject:"User Registration",
            text:"Email has been sent successfully",
            html:html
          };
      
          const info = await transporter.sendMail(mailOptions);
          return NextResponse.json({ message: "Email sent successfully", info }, { status: 200 });
      }else{
        return NextResponse.json({error:"All data fields are required" , status:400 , success:false})
      }
    }catch(error){
        NextResponse.json({error, msg:"Failed to sent email" , status:400 , success:false})
    }
}