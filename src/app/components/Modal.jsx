'use client'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { deleteTodo } from '../globalstore/features/auth/todoSlice';



const ModalComponent = ({todoId}) => {
    const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const deleteCurrentTodo = async()=>{
        dispatch(deleteTodo(todoId))
        onCloseModal()
  }

  return (
    <>
      <button
        onClick={onOpenModal}
        className="text-red-600 hover:text-red-800 transition"
      >
        Delete
      </button>
      <Modal
        aria-labelledby="my-modal-title"
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          modal: 'rounded-lg overflow-hidden',
          overlay: 'z-50 bg-black opacity-50',
        }}
      >
        <div className="p-6">
          <h1
            id="my-modal-title"
            className="text-2xl font-semibold mb-4"
          >
            Are you sure you want to delete the todo?
          </h1>
          <div className="flex justify-end">
            <button
              onClick={onCloseModal}
              className="mr-2 px-4 py-2 text-white bg-gray-400 hover:bg-gray-600 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
            <button
              onClick={deleteCurrentTodo}
              className="px-4 py-2 text-white bg-red-500 hover:bg-red-700 rounded focus:outline-none focus:shadow-outline"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>

    </>
  );
};

export default ModalComponent;
