import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import bcrypt from 'bcryptjs'
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connectDb()

export async function POST(request){
    try{
        const requestBody = await request.json()
        const{email,password} = requestBody
        const existingUser = await User.findOne({email})
        if(existingUser){
            const isPasswordMatch = await bcrypt.compare(password,existingUser.password)
            if(isPasswordMatch){
                const token  = jwt.sign({id:existingUser._id},process.env.JWT_SECRET,{expiresIn:'7d'})
                const response =  NextResponse.json({
                    message:'logged in success',
                    token
                })
                const expirationDate = new Date();
                expirationDate.setDate(expirationDate.getDate() + 7);

                response.cookies.set("authtoken",token,{
                    httpOnly:true,
                    expires:expirationDate,
                    secure:true
                })
                response.cookies.set("login",true,{
                    expires:expirationDate,
                })
                return response
            }
            return NextResponse.json({
                message:'incorrect email or password'
            },{status:401})
        }

        return NextResponse.json({
            message:'user does not exists'
        },{status:404})
    }catch(err){
        return NextResponse.json({
            err
        })
    }
}