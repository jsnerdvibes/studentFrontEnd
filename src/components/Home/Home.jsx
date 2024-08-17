import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Home() {

    const [studentinfo, setStudentinfo] = useState({ count: 0, data: [] });



    useEffect(() => {
        axios
            .get("http://localhost:3000/studentinfo")
            .then((response) => {
                setStudentinfo(response.data)
            })
            .catch((error) => {
                alert("an error occured");
                console.log("Error", error);
            })
    }, [])

    useEffect(() => {
        console.log(studentinfo);
        console.log(studentinfo.count)
    }, [studentinfo]);



    return (
        <>
            <div className='flex justify-center items-center w-full  mt-10 text-center'>
                <table className='border-collapse w-3/4  bg-gray-200'>
                    <thead>
                        <tr>
                            <th className='p-2 border border-black'>Sr No.</th>
                            <th className='p-2 border border-black'>Name</th>
                            <th className='p-2 border border-black'>Age</th>
                            <th className='p-2 border border-black'>Total Marks</th>
                            <th className='p-2 border border-black'>More</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentinfo.data.map((student, index) => (
                            <tr key={student._id}>
                                <td className='p-2 border border-black'>{index + 1}</td>
                                <td className='p-2 border border-black'>{student.name}</td>
                                <td className='p-2 border border-black'>{student.age}</td>
                                <td className='p-2 border border-black'>{student.totalMarks}</td>
                                <td className='p-2 border border-black flex justify-around'>
                                    <Link to={`/ShowStudent/${student._id}`} > <svg className="max-565:h-12 text-themeColor-500 w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    </Link>

                                    <Link to={`/EditStud/${student._id}`} > <svg className="max-565:h-12 text-themeColor-500 w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    </Link>
                                    <Link to={`/RemoveStudent/${student._id}`} > <svg className="max-565:h-12 text-themeColor-500 w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    </Link> </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Home