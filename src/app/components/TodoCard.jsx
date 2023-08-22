'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { useState } from 'react'
import axios from 'axios';
import { mutate } from 'swr';
import ModalComponent from './Modal';
 const TodoCard = ({ task}) => {
    const navigate = useRouter()

  const onOpenModal = () => setOpen(true);


  // const handleDelete = () => {
  //   onOpenModal();
    
  // };

//   const deleteTodo = async()=>{
//          try{
//             onOpenModal();
//             const response = await axios.delete(`/api/todos/${task._id}`)
//             console.log(response)
//             onCloseModal()
//             fetchTodos()
//          }catch(err){
//                 console.log(err)
//          }
//   }
  return (
    <>
       <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
          <p className="text-gray-600">{task.description}</p>
        </div>
        <div className="flex justify-between p-4">
          
          <button
            onClick={() => navigate.push(`todos/edit/${task._id}`)}
            className="text-gray-600 hover:text-gray-800 transition"
          >
            edit
          </button>
          <button
           
            className="text-red-600 hover:text-red-800 transition"
          >
            <ModalComponent  todoId={task._id}/>
          </button>
        </div>
      </div>
      
    </>
  )
}

export default TodoCard

