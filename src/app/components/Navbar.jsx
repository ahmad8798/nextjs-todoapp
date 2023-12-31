'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const Navbar = () => {

    // const login = Cookies.get('login')
    // const isLogin = JSON.parse(login)
    const isLogin = useSelector((state)=>state)
const [isOpen, setIsOpen] = useState(false);

  const Router = useRouter()
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };


  const logOut = async()=>{
    try{
      const response = await axios.get('/api/users/logout')
      Router.push('/login')
      console.log(response)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <>
        <nav className="bg-gray-800 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white font-semibold">
              Todo App
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
             
              <a onClick={logOut} href="#" className="text-black-300 hover:text-white px-3 py-2 rounded-md">logout</a>
              <a href="#" className="text-black-300 hover:text-white px-3 py-2 rounded-md">About</a>
              <a href="#" className="text-black-300 hover:text-white px-3 py-2 rounded-md">About</a>
              <a href="#" className="text-black-300 hover:text-white px-3 py-2 rounded-md">Services</a>
              <a href="#" className="text-black-300 hover:text-white px-3 py-2 rounded-md">Contact</a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-black-400 hover:text-white focus:outline-none"
            >
              <svg className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
       
        <a onClick={logOut} href="#" className="text-black-300 hover:text-white px-3 py-2 rounded-md">logout</a>
          <a href="#" className="text-black-300 hover:text-white block px-3 py-2 rounded-md">About</a>
          <a href="#" className="text-black-300 hover:text-white block px-3 py-2 rounded-md">Services</a>
          <a href="#" className="text-black-300 hover:text-white block px-3 py-2 rounded-md">Contact</a>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
