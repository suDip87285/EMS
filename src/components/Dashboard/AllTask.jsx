import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext);
    
  return (
    <div id='alltask' className='bg-[#1c1c1c] p-5 mt-5 rounded'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
                <h3 className='text-lg font-medium w-1/5'>New Task</h3>
                <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
                <h5 className='text-lg font-medium w-1/5'>Completed</h5>
                <h5 className='text-lg font-medium w-1/5'>Failed</h5>
              </div>
        <div className='h-[80%]'>
        {userData.map((elem, idx)=> {
        return <div className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded' key={idx}>
                <h2 className='w-1/5 text-lg font-medium '>{elem.firstname}</h2>
                <h3 className='w-1/5 text-lg font-medium text-blue-400'>{elem.taskCount.newTask}</h3>
                <h5 className='w-1/5 text-lg font-medium text-yellow-400'>{elem.taskCount.active}</h5>
                <h5 className='w-1/5 text-lg font-medium text-white-600'>{elem.taskCount.completed}</h5>
                <h5 className='w-1/5 text-lg font-medium text-red-600'>{elem.taskCount.failed}</h5>
              </div>
        })}
        </div>
        
    </div>
  )
}

export default AllTask