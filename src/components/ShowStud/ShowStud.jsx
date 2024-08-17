import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ShowStud() {

    const param=useParams();
    const [data,setData]=useState({})

    useEffect(()=>{
    axios.get(`http://localhost:3000/studentinfo/${param.id}`)
    .then(res=>setData(res.data.stud))
    .catch(error=>console.log("Error ",error))

    },[])

  return (
    
<><div className='w-full flex items-center justify-center'>
    <div className='flex flex-col mt-8 ml-4 bg-gray-900 text-white h-52 w-3/4 pl-4 pt-4'>
        <label htmlFor="">Name : {data.name}</label>
        <label htmlFor="">Age : {data.age}</label>
        <label htmlFor="">Total Marks : {data.totalMarks}</label> 
    </div>
    </div>
</>
  )
}

export default ShowStud