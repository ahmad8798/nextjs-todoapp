import { connectDb } from "@/helper/db";
import { Todo } from "@/models/todo";
import { NextResponse } from "next/server";

connectDb()
export async function PUT(request,{params}){
    const {todoId} = params
    console.log(todoId,'this is todoId in route.js')
    try{
        const reqBody = await request.json()
        console.log(reqBody,"this is reqbody")
        const {title,description} = reqBody
        const updatedTodo = await Todo.findByIdAndUpdate(todoId,{title,description})

        return NextResponse.json({
            updatedTodo
        },{status:200})
    }catch(err){
        return NextResponse.json({
            err
        },{status:200})
    }
}


export async function GET(request,{params}){
    // const reqbody  = await request.json()
    const {todoId} = params
    console.log(todoId,"this is todoID")
    try{
        
        const todo = await Todo.findById(todoId)
        console.log(todo,'this is todo')
        return NextResponse.json({
            message:'get request is working fine',
            data:{
                todo
            }
            
        })
    }catch(error){
        return NextResponse.json({
            message:error.message
        })
    }
}


export async function DELETE(request,{params}){
    // const reqbody  = await request.json()
    const {todoId} = params
    console.log(todoId,"this is todoID")
    try{
        
        const todo = await Todo.findByIdAndDelete(todoId)
        console.log(todo,'this is todo')
        return NextResponse.json({
            message:'Todo deleted successfully',
            data:{
                todo
            }
            
        })
    }catch(error){
        return NextResponse.json({
            message:error.message
        })
    }
}


