import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl p-5">
            <div className='flex justify-between items-center'>
                <h3 className="bg-red-600 text-sm px-3 py-1">High</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className="text-sm  mt-2">
                {data.taskDescription}
            </p>
            <div className="mt-2">
                <button className='w-full bg-green-500 py-1 px-2 text-sm'>Completed</button>
            </div>
         </div>
  )
}

export default CompleteTask