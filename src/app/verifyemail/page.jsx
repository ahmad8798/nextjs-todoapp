'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = () => {

    const [token,setToken] = useState("")
    const [verified,setVerified] = useState(false)
    const [error,setError] = useState(false)

    const verifyUserEmail = async()=>{
        try{
            await axios.post('/api/users/verify',{token})
            setVerified(true)
        }catch(error){
            setError(true)
            console.log(error.response.data)
        }
    }

    useEffect(()=>{
        const urlToken = window.location.search.split("=")[1]
       const originalToken =  decodeURIComponent(urlToken)
        setToken(originalToken||"")
    })

    useEffect(()=>{
        if(token.length>0){
            verifyUserEmail()
        }
    },[])
  return (
 <>
<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
  <div className="bg-white p-8 rounded-lg shadow-lg">
    {
        verified?<h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Email is verified successfully</h1>:
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Verify Your Account</h1>
    }
  
  {
    verified?<p className="text-gray-600 mb-6 text-center">Thank you for verifying email! now you can login into you account</p>
    :  <p className="text-gray-600 mb-6 text-center">Thank you for signing up! To complete your registration, please click the button below to verify your email address.</p>
  }
    <div className="flex justify-center">
      {
        verified?<button className='bg-pink-500 text-white py-3 px-6 rounded-lg hover:bg-pink-600 transition duration-300'>Login</button>:
        <button onClick={verifyUserEmail} className="bg-pink-500 text-white py-3 px-6 rounded-lg hover:bg-pink-600 transition duration-300">
        Verify Email
      </button>
      }
    </div>
    <p className="mt-4 text-sm text-gray-600 text-center">
      Already verified? <a href="#" className="text-pink-500 hover:underline">Log In</a>
    </p>
  </div>
</div>


 </>
  )
}

export default page
