'use client'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ToastBar, Toaster, toast } from 'react-hot-toast'
const page = () => {
    const params = useParams()
    const {todoId} = params
    const navigate = useRouter()
    const [todoData, setTodoData] = useState({
        title: '',
        description: ''
      });
    
      useEffect(() => {
        async function fetchTodoData() {
          try {
            const response = await axios.get(`/api/todos/${todoId}`);
            console.log(response.data.data,'this is todo that is returned') // Replace with your API endpoint
            const fetchedTodoData = {
                title: response?.data?.data?.todo?.title,
                description: response?.data?.data?.todo?.description
              };
              setTodoData(fetchedTodoData);
          } catch (error) {
            console.error('Error fetching todo:', error);
          }
        }
        fetchTodoData();
      }, []);
    
      const handleChange = event => {
        const { name, value } = event.target;
        setTodoData(prevTodoData => ({
          ...prevTodoData,
          [name]: value
        }));
      };
    
      const handleUpdateTodo = async () => {
        try {
          const response = await axios.put(`/api/todos/${todoId}`, todoData); // Replace with your API endpoint and method
          console.log('Todo updated:', response.data);
          navigate.push('/todos')
        } catch (error) {
          console.error('Error updating todo:', error);
        }
      };
      
      const updateTodo = ()=>{
        toast.promise(handleUpdateTodo(),{
          loading:'updating Todo',
          success:'Todo updated Successfully',
          error:'error occured'
        })
      }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
    <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
      <h1 className="text-2xl font-semibold mb-6 text-center">Edit Todo</h1>

      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={todoData.title}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500 transition duration-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={todoData.description}
          onChange={handleChange}
          rows="3"
          className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500 transition duration-300"
        />
      </div>
      <div className="flex justify-center">
        <button onClick={updateTodo} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
          Update
        </button>
      </div>
    </div>
  </div>
  )
}

export default page
