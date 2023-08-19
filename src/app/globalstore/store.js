import  getPosts from "./features/auth/todoSlice";

const { configureStore } = require("@reduxjs/toolkit");
const { default: authslice } = require("./features/auth/authslice");

export const store = configureStore({
    reducer:{
        auth:authslice,
        app:getPosts
    }
})