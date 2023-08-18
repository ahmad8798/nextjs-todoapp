import { connectDb } from "@/helper/db";
const { User } = require("@/models/user");
const { NextResponse } = require("next/server");

connectDb()


export async function POST(request){
    try{
       
        const reqBody = await request.json()
        const {token}= reqBody
        console.log(token)
       const user  =  await User.findOne({verifyToken:token,verifyTokenExpiry:{$gt:Date.now()}})
        console.log(user,'this is user object')
       if(!user){
        return NextResponse.json({
            message:"invalid token"
        },{status:400})
      
       }
       user.isVerified = true;
       user.verifyToken = undefined;
       user.verifyTokenExpiry = undefined;
          await user.save()
          return NextResponse.json({
            message:"Email is verified Successfully",
            success:true
          })
    
    }catch(err){
        return NextResponse.json({err:err.message},{status:500})
    }
}