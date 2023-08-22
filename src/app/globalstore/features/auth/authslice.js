import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const cookieValue = Cookies.get('login');
let initialState = cookieValue ? JSON.parse(cookieValue) : false;
console.log(initialState,'this is auth slice cookies')
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state)=>{
            
            return state = true
        
        },
        logout:(state)=>{
           return state = false
                    }
    }
})

export  default authSlice.reducer

export const {login,logout} = authSlice.actions