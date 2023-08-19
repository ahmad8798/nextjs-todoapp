import { Todo } from "@/models/todo";
import { NextResponse } from "next/server";
import {cookies} from 'next/headers'
import  jwt  from "jsonwebtoken";
import { connectDb } from "@/helper/db";
connectDb()

export async function POST(request){
        const cookieStore = cookies()
        const authToken = cookieStore.get('authtoken')
        console.log(authToken,'this is auth token')
        
    try{
        const reqBody = await request.json()
        const hasValidToken = jwt.verify(authToken.value,process.env.JWT_SECRET)
        const user = hasValidToken.id
        const {title,description} = reqBody
        const userTodo = await Todo.create({title,description,user})
        return NextResponse.json({
            status:'success',
            message:'Todo created successfully',
            data:{
                userTodo
            }
        },{status:201})

    }catch(error){
        console.log(error.name)
        return NextResponse.json({
            message:error.message
        },{status:400})
    }
}



export async function GET(request){
    const cookieStore = cookies()
    const authToken = cookieStore.get('authtoken')
    try{
        const hasValidToken = jwt.verify(authToken.value,process.env.JWT_SECRET)
        const user = hasValidToken.id
        console.log(user,'this is user id by get request')
        const todos = await Todo.find({user})
        return NextResponse.json({
            message:'success',
            data:{
                todos
            }
        },{status:200})
    }catch(error){
        return NextResponse.json({
          message: error.message
        })
    }
}