'use client'
import {useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { logout } from '../globalstore/features/auth/authslice';
import { useDispatch, useSelector } from 'react-redux';

const Navbar2 = () => {
    const isLoginIsThere = useSelector((state)=>state.auth)
    const [isOpen, setIsOpen] = useState(false);
  const Router = useRouter();
    const dispatch = useDispatch()
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      const response = await axios.get('/api/users/logout');
      Router.push('/login');
      console.log(response);
      dispatch(logout())
      setIsLogin(false);

    } catch (error) {
      console.log(error);
    }
  };


  return (
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
              {isLoginIsThere && (
                <button
                  onClick={handleLogout}
                  className="text-black-300 hover:text-white px-3 py-2 rounded-md"
                >
                  Logout
                </button>
              )}

      {isLoginIsThere && (
                <button
                  onClick= {()=>Router.push('/createtodo')}
                  className="text-black-300 hover:text-white px-3 py-2 rounded-md"
                >
                  Add Todo
                </button>
              )}

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
          {isLoginIsThere&& (
            <button
              onClick={handleLogout}
              className="text-black-300 hover:text-white px-3 py-2 rounded-md"
            >
              Logout
            </button>
          )}

          
      {isLoginIsThere && <a onClick= {()=>Router.push('/createtodo')} href="#" className="text-black-300 hover:text-white block px-3 py-2 rounded-md">add todo</a>}
          
        </div>
      </div>
    </nav>
    
    );
};

export default Navbar2;
