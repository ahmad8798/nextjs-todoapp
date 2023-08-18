'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TodoCard from '../components/TodoCard';
import { useSelector } from 'react-redux';
import ModalComponent from '../components/Modal';
const TodoList = () => {
  const isLogin = useSelector((state)=>state)
  console.log(isLogin,'this is redux store value from todos')
  const [todos,setTodos] = useState([])
  const [selectedTask, setSelectedTask] = useState(null);
  
  async function getTodos(){
    try{
      const todos = await axios.get('/api/todos')
      console.log(todos.data.data.todos,'this is todos data')
      setTodos(todos.data.data.todos)
    }catch(error){
      console.log(error)
    }
   
  }
  useEffect(()=>{

  
    getTodos()
  },[])
  
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen">
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
      {todos.map((task, index) => (
        <TodoCard key={index} task={task} custom={<ModalComponent/>} fetchTodos={getTodos} />
      ))}
    </div>
    </div>
  );
};

export default TodoList;
