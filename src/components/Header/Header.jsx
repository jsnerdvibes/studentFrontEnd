import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (<>
        <div className='text-center text-white bg-gray-800 h-20 text-3xl flex justify-center items-center'>Student Data</div>
        <div className='flex justify-around'>
        <NavLink to="/"
        className="flex flex-row items-center justify-center w-full  py-2 mb-4 mt-4 text-md font-bold bg-green-300 leading-6 duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10   hover:shadow-lg hover:-translate-y-1 max-565:w-16"
        >Back</NavLink>
        <NavLink to="/AddStudent"
        className="flex flex-row items-center justify-center w-full  py-2 mb-4 mt-4 text-md font-bold bg-green-300 leading-6 duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10   hover:shadow-lg hover:-translate-y-1 max-565:w-1/2"
        >Add a Student</NavLink>
        </div>
    </>
  )
}

export default Header