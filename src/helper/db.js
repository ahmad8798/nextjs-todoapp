import mongoose from "mongoose";

export const connectDb = async()=>{
    try{
        const {connection} = await mongoose.connect(process.env.DB,{
            dbName:"work_manager"
        })
        console.log("db connected")
        console.log(connection.host);
    }catch(err){
        console.log(err)
    }
}