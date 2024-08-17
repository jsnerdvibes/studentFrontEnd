import axios from 'axios';
import React, { useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'

function StudEdit() {

    const param =useParams();
    const navTo=useNavigate();

    const [sName,setName]= useState("");
    const [sAge,setAge]= useState("");
    const [sTotalMarks,setTotalMarks]= useState("");

    const handleClick = (e)=>{
        e.preventDefault();
        const data = {
            name:sName,
            age:sAge,
            totalMarks:sTotalMarks,
        }
        console.log(data)
        axios.put(`http://localhost:3000/studentinfo/${param.id}`,data)
        .then(()=>{
            alert("Data updated Succesfully");
            navTo("/")

        })
        .catch((error)=>{
            console.log(error);
        })

    }

  return (
    <>
    <div className='w-full flex justify-center items-center pt-8 '>
    <div className='bg-gray-900 w-1/2 h-66 p-4  self-center border rounded-md '>
        <h2 className='text-center text-white mb-2'>Fill Details to Add Student</h2>
      <form onSubmit={handleClick}>
        <div className='flex flex-col justify-around items-center h-4/6	' >
        <input 
        type="text" 
        name="" 
        placeholder='Name'
        onChange={(e) => setName(e.target.value)}  
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
        <input 
        type="number" 
        placeholder='Age' 
        onChange={(e) => setAge(e.target.value)} 
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
        <input 
        type="number" 
        placeholder='Total Marks' 
        onChange={(e) => setTotalMarks(e.target.value)}  
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
        <button type='submit'
        className='bg-gray-700 border rounded-md w-16 text-white w-auto p-1 mt-2'>Edit Entry</button>
        </div>
      </form>

      </div>

      </div>
    </>
  )
}

export default StudEdit