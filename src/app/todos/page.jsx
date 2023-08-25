'use client'
import axios from 'axios';
import React, { useEffect} from 'react';
import TodoCard from '../components/TodoCard';
import { useDispatch, useSelector } from 'react-redux';
import ModalComponent from '../components/Modal';
import { getAllData } from '../globalstore/features/auth/todoSlice';

const TodoList = () => {
  const dispatch = useDispatch()
  const CurrentTodos = useSelector((state)=>state.app.posts)
  console.log(CurrentTodos,'this is redux store todos from todos page')
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

    dispatch(getAllData())
    getTodos()
  },[])
  
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen">
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
      {CurrentTodos.map((task, index) => (
       
        <TodoCard key={index} task={task} custom={<ModalComponent/>}/>
      ))}
    </div>
    </div>
  );
};

export default TodoList;
