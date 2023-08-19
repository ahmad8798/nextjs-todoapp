import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllData } from '../globalstore/features/auth/todoSlice'
const page = () => {
    const dispatch = useDispatch()
    
  return (
        <>
                <h1>hello this is sample</h1>
                <button onClick={()=>dispatch(getAllData())}>get users</button>
        </>
  )
}

export default page
