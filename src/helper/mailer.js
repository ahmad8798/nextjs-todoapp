import nodemailer from 'nodemailer'
import { User } from '@/models/user'
import bcrypt from 'bcryptjs'

import { NextResponse } from 'next/server'

// 
export const sendEmail = async({email,emailType,userId})=>{
    try{
          const hashedToken =   await bcrypt.hash(userId.toString(),10)
            if(emailType==='VERIFY'){
                await User.findByIdAndUpdate(userId,{ 
                    verifyToken:hashedToken,verifyTokenExpiry:Date.now()+360000
                 })
            }else if(emailType==='RESET'){
                await User.findByIdAndUpdate(userId,{ 
                    forgetPasswordToken:hashedToken,forgetPasswordTokenExpiry:Date.now()+360000
                 })
            }
            
            var transporter = nodemailer.createTransport({
                  host: "sandbox.smtp.mailtrap.io",
                  port: 2525,
                  auth: {
                    user: "957e7c92ddcc41",
                    pass: "9ed00752859c68"
                  }
                });
              const mailOptions = {
                from:'aikahmad.pasha@innomatics.ishn',
                to:email,
                subject:emailType==="VERIFY"?"Verify Email":"Reset Password",
                html:`<p>click<a href="${process.env.DOMAIN}/verifyemail/?token=${hashedToken}">here</a> to ${
                    emailType==="VERIFY"?"verify email":"reset your password" 
                } or copy paste this url ${process.env.DOMAIN}/verifyemail/?token=${hashedToken}`
              }

             const mailResponse = await transporter.sendMail(mailOptions)
             console.log(mailResponse,'this is mail response')
             return mailResponse
     
    }catch(err){
        return NextResponse.json(err)
    }
}