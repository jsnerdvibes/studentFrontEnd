import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom';


function RemoveStudent() {
  const param=useParams()
  const [data,setData]=useState({})
  const navTo=useNavigate();

  useEffect(()=>{
    axios.get(`http://localhost:3000/studentinfo/${param.id}`)
  .then(response=>{
    setData(response.data.stud);
  })
  },[])
  useEffect(()=>{
    console.log(data);
  },[data])

  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.delete(`http://localhost:3000/studentinfo/${param.id}`)
    .then(()=>{
      alert("Entery Deleted successfully")
      navTo("/");

    })
    .catch((error)=>{
      console.log("Something went Wrong ",error);
    })
  }
  
  return (
    <>
   
   <div className='w-full flex justify-center items-center pt-8 text-white'>
    <div className='bg-gray-900 w-1/2 h-66 p-4  self-center border rounded-md '>
      <h2 className='text-center text-white mb-2'>Ary You sure you want to delete this entry ?</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className='flex flex-col items-center m-3'>
        <label  className="m-3">
          Name : {data.name}   
        </label>
        <label  className="m-3">
          age : {data.age}   
        </label>
        <label  className="m-3">
          Total Marks : {data.totalMarks}   

          
          
        </label>
        <button type='submit' className='flex-1 font-bold text-xl text-black bg-white border-2 border-red-600 px-6 py-1 rounded-full hover:bg-red-500 hover:text-white'>Delete</button>
        </div>
      </form>
      </div>

</div>
    </>
  )
}

export default RemoveStudent