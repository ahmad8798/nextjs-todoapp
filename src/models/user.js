import mongoose,{Schema}from "mongoose";

const userSchema = new Schema({
        userName:{
            type:String,
            unique:true,
            required:true
        },
        email:{
            type:String,
            unique:true,
            required:true
        }, 
         password:{
            type:String,
            required:true
        },

        isVerified:{
            type:Boolean,
            default:false 
        },
        verifyToken:{
            type:String
        },
        verifyTokenExpiry:{
            type:String
        },
        forgetPasswordToken:{
            type:String
        },
        forgetPasswordTokenExpiry:{
            type:String
        }

})

export const User = mongoose.models.users || mongoose.model('users',userSchema)