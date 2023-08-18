import { NextResponse } from 'next/server';
import nodemailer  from 'nodemailer'
export async function POST(request){
    try{
        const reqBody = await request.json()
        const{email} = reqBody
        const transporter =  nodemailer.createTransport({
            host:'smtp.gmail.com',
            service:'gmail',
            port:465,
            secure:false,
            requireTLS:true,
            auth:{
               user:'shaikahmad.pasha@innomatics.in',
               pass:'rogfrnxhkdoxucwg'
            }
       
           })
          const mailOptions = {
            from:'shaikahmad.pasha@innomatics.in',
            to:email,
            subject:"sample testing",
            html:`<h1>Hello world this is sample email for testing purpose</h1>`
          }

          const mailResponse = await transporter.sendMail(mailOptions)
          console.log(mailResponse,'this is mail response object')
          return NextResponse.json(mailResponse)
    }catch(err){
        return NextResponse.json(err.message)
    }
}