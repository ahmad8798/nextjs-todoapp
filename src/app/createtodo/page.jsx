'use client'
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { getAllData, postData } from '../globalstore/features/auth/todoSlice';

const CreateTodoForm = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
     const todo = {title,description}
     dispatch(postData(todo))
     router.push('/todos')
    // try {

    //   // const response = await axios.post('/api/todos', { title, description });
    //   
    //   // dispatch(getAllData(getAllData))
    //   console.log('Todo created:', response.data);
    //   
    //   // You can perform any actions you want after creating the todo
    // } catch (error) {
    //   console.error('Error creating todo:', error);
    // }


  };

  useEffect(()=>{

  },[])
  return (
    <div className="flex justify-center h-screen items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h1 className="text-2xl font-semibold mb-6 text-center">Create Todo</h1>

        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500 transition-colors duration-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500 transition-colors duration-300"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Create Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTodoForm;
