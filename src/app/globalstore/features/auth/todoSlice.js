import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import {  toast } from 'react-hot-toast'
import axios from "axios";

export const getAllData = createAsyncThunk('gitusers',async()=>{
    try{
        const response = await axios.get('/api/todos')
        const results  = response
        console.log(response)
        return results.data.data.todos
    }catch(err){
        return err
    }

})


export const postData = createAsyncThunk('postusers',async(data)=>{
    try{
        const response = await axios.post('/api/todos',data)
        const results  = response
        console.log(results.data.data.userTodo,'state data for post')
        toast.success('todo added successfully!',{
            icon:'➕'
        })
        return results.data.data.userTodo
        
    }catch(err){
        return err
    }

})

export const updateData = createAsyncThunk('updateUsers',async({id,data})=>{
    try{
        const response = await axios.put(`/api/todos/${id}`,data)
        const results  = response
        console.log(results.data,'state data for update')
        toast.success('todo updated succssfully!',{
            icon:'📝'
        })
        return results.data.data.todo
    }catch(err){
        return err
    }
})

export const deleteTodo = createAsyncThunk('deleteUsers',async(id)=>{
    try{
        const response = await axios.delete(`/api/todos/${id}`)
        const results  = response
        console.log(results,'state data for update')
        toast.success('todo deleted successfully!',{
            icon:'🗑️'
        })
        return results.data.data.todo
    }catch(err){
        return err
    }
})


export const getPosts = createSlice({
    name:'getposts',
    initialState:{
        posts:[],
        loading:false,
        error:null,
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllData.fulfilled,(state,action)=>{
            state.posts = action.payload
            state.loading = false
        }),
        builder.addCase(getAllData.rejected,(state,action)=>{
            state.error = action.payload
            state.loading = false
        }),
        builder.addCase(getAllData.pending,(state)=>{
            state.loading = true
        }),

        builder.addCase(postData.fulfilled,(state,action)=>{
            state.loading = false
            console.log("state..",state.posts)
            state.posts.push(action.payload)
        }),
        builder.addCase(postData.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        }),
        builder.addCase(postData.pending,(state,action)=>{
            state.loading = true
        }),
        builder.addCase(updateData.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = state.posts.map((ele) => {
              if (ele._id === action.payload.updatedTodo._id) {
                return {
                  ...ele,
                  title: action.payload.updatedTodo.title,
                  description: action.payload.updatedTodo.description,
                };
              }
              return ele; // Return the unchanged element if it's not the one being updated
            });
          }),
        builder.addCase(updateData.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        }),
        builder.addCase(updateData.pending,(state,action)=>{
            state.loading = true
        }),
        builder.addCase(deleteTodo.fulfilled,(state,action)=>{
            state.loading = false
            state.posts = state.posts.filter((post)=>post._id!==action.payload._id)
        }),
        builder.addCase(deleteTodo.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        }),
        builder.addCase(deleteTodo.pending,(state,action)=>{
            state.loading = true
        })
    }
})

export default getPosts.reducer