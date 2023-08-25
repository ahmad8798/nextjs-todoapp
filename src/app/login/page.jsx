'use client'
import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import {  toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'

  export function page() {
    useEffect(() => {
      Cookies.set('login', 'false', { expires: 7 });
    }, []);
    const dispatch = useDispatch()
  const router = useRouter()
  const [user, setUser] = useState({
    email: '', password: ''
  })

  const doLogin = async () => {
    try {
      const data = await axios.post('/api/users/login', user)
      console.log(data.data)
      router.push('/todos')
      return data
    } catch (err) {
      console.log(err)
      throw new Error(err.response.data.message)
    }
  }

  const toastify = ()=>{
    toast.promise(doLogin(),{
      loading:'logging in',
      success:(data)=>`${data.data.message}`,
      error:(err)=>`${err}`
    })
  }
  return (
    <>
      <div className="flex justify-center h-screen items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
  <div className="w-full sm:w-96 bg-white p-8 rounded-lg shadow-lg">
    <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Log In</h1>
    <form>
      <div className="mb-4 relative">
        <input
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}
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
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-pink-500 transition-colors duration-300"
        />
        <div className="animate-input absolute w-full h-1 bg-pink-500 top-0 left-0 transform scale-x-0 origin-left transition-transform duration-300"></div>
      </div>
      <div className="flex justify-center">
        <button onClick={(e) => { e.preventDefault(); toastify()}} className="bg-pink-500 text-white py-3 px-6 rounded-lg hover:bg-pink-600 transition duration-300">
          Log In
        </button>

      </div>
    </form>
    <p className="mt-4 text-sm text-gray-600 text-center">
      Don't have an account? <a onClick={()=>router.push('/signup')} href="#" className="text-pink-500 hover:underline">Sign Up</a>
    </p>
  </div>
</div>





    </>
  )
}

export default page
