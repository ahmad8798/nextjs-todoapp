'use client'
import React, { useState } from 'react'
import axios from 'axios'

const page = () => {

    const [user,setUser] = useState({
        userName:'',
        email:'',
        password:''
    })

    const doSignup = async()=>{
        try{
            const data = await axios.post("/api/users/signup",user)
            console.log(data.data,'this is data')
        }catch(err){
            console.log(err.response.data.message)
            
        }
        
    }

  return (
            <>
                <div className="flex justify-center h-screen items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
  <div className="w-full sm:w-96 bg-white p-8 rounded-lg shadow-lg">
    <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Create your account</h1>
    <div className="mb-4 relative">
      <input onChange={(e)=>setUser({...user,userName:e.target.value})}
        type="text"
        id="username"
        name="username"
        placeholder="Username"
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-pink-500 transition-colors duration-300"
      />
      <div className="animate-input absolute w-full h-1 bg-pink-500 top-0 left-0 transform scale-x-0 origin-left transition-transform duration-300"></div>
    </div>
    <div className="mb-4 relative">
      <input
      onChange={(e)=>setUser({...user,email:e.target.value})}
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-pink-500 transition-colors duration-300"
      />
      <div className="animate-input absolute w-full h-1 bg-pink-500 top-0 left-0 transform scale-x-0 origin-left transition-transform duration-300"></div>
    </div>
    <div className="mb-6 relative">
      <input
      onChange={(e)=>setUser({...user,password:e.target.value})}
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-pink-500 transition-colors duration-300"
      />
      <div className="animate-input absolute w-full h-1 bg-pink-500 top-0 left-0 transform scale-x-0 origin-left transition-transform duration-300"></div>
    </div>
    <div className="flex justify-center">
      <button onClick={doSignup} className="bg-pink-500 text-white py-3 px-6 rounded-lg hover:bg-pink-600 transition duration-300">
        Sign Up
      </button>
    </div>
  </div>
</div>
            </>
  )
}

export default page
