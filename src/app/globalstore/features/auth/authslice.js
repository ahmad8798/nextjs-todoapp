import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = JSON.parse(Cookies.get('login'))

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