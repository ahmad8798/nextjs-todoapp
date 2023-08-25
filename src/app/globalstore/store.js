import  getPosts from "./features/auth/todoSlice";
const { configureStore } = require("@reduxjs/toolkit");


export const store = configureStore({
    reducer:{
        app:getPosts
    }
})