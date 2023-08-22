import { NextResponse } from "next/server";

export async function GET(){
    try{
        const response =  NextResponse.json({
            message:"loggedout successfully!"
        },{status:200})
        response.cookies.delete('authtoken')
        response.cookies.set('login',false)
        return response
    }catch(err){
        return NextResponse.json({
            message:err.message
        })
    }
}
